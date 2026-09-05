/* ==========================================================================
   ALFINA — Home featured-project carousel
   Native infinite carousel with cloned slides, one-direction animation,
   desktop 3 cards and mobile 1 card, autoplay and manual controls.
   ========================================================================== */

function initCarousel(rootId, items, options = {}) {
  const root = document.getElementById(rootId);
  if (!root || !items?.length) return;

  const interval = options.interval || 3000;
  const duration = options.duration || 800;
  const easing = options.easing || "cubic-bezier(0.22, 1, 0.36, 1)";
  const cloneCount = 3;
  const itemCount = items.length;
  let activeIndex = 0;
  let positionIndex = cloneCount;
  let timer = null;
  let isAnimating = false;
  let step = 0;

  root.innerHTML = `
    <div class="carousel__track" id="${rootId}-track">
      ${items.slice(-cloneCount).map(slideMarkup).join("")}
      ${items.map(slideMarkup).join("")}
      ${items.slice(0, cloneCount).map(slideMarkup).join("")}
    </div>
    <div class="carousel__controls">
      <button class="carousel__btn" id="${rootId}-prev" aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="carousel__btn" id="${rootId}-next" aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  `;

  const track = document.getElementById(`${rootId}-track`);
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById(`${rootId}-next`);
  const prevBtn = document.getElementById(`${rootId}-prev`);

  function slideMarkup(item) {
    return `
      <div class="carousel__slide">
        <a class="carousel__item" href="${item.href}" style="background:${item.bg}">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </a>
      </div>
    `;
  }

  function getVisibleCount() {
    if (window.matchMedia("(max-width: 480px)").matches) return 1;
    if (window.matchMedia("(max-width: 1024px)").matches) return 2;
    return 3;
  }

  function updateLayout() {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const slideRect = slides[0].getBoundingClientRect();
    step = slideRect.width + gap;
    track.style.transition = "none";
    track.style.transform = `translateX(-${positionIndex * step}px)`;
  }

  function setPosition(index, animated = true) {
    if (animated) {
      track.style.transition = `transform ${duration}ms ${easing}`;
    } else {
      track.style.transition = "none";
    }
    track.style.transform = `translateX(-${index * step}px)`;
  }

  function handleTransitionEnd() {
    isAnimating = false;

    if (positionIndex >= cloneCount + itemCount) {
      positionIndex -= itemCount;
      setPosition(positionIndex, false);
    } else if (positionIndex < cloneCount) {
      positionIndex += itemCount;
      setPosition(positionIndex, false);
    }
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;
    activeIndex = (activeIndex + 1) % itemCount;
    positionIndex += 1;
    setPosition(positionIndex, true);
  }

  function goPrev() {
    if (isAnimating) return;
    isAnimating = true;
    activeIndex = (activeIndex - 1 + itemCount) % itemCount;
    positionIndex += itemCount - 1;
    setPosition(positionIndex, true);
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(goNext, interval);
  }

  function debounce(fn, delay) {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fn, delay);
    };
  }

  nextBtn.addEventListener("click", () => {
    goNext();
    resetTimer();
  });

  prevBtn.addEventListener("click", () => {
    goPrev();
    resetTimer();
  });

  track.addEventListener("transitionend", handleTransitionEnd);
  window.addEventListener("resize", debounce(updateLayout, 100));
  root.addEventListener("mouseenter", () => timer && clearInterval(timer));
  root.addEventListener("mouseleave", resetTimer);

  updateLayout();
  resetTimer();
}
