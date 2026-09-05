/* ==========================================================================
   ALFINA — Shared interactions: accordions, sticky sidebar, scroll spy
   ========================================================================== */

/* ---- Accordion (About skills, project-detail sub-sections) ---- */
function initAccordions(container = document) {
  const updateAccordionHeight = (row) => {
    const panel = row.querySelector(".accordion-row__panel");
    const panelInner = row.querySelector(".accordion-row__panel-inner");

    if (!panel || !panelInner) return;

    // Recalculate height based on actual content
    if (row.classList.contains("is-open")) {
      panel.style.maxHeight = panelInner.scrollHeight + "px";
    } else {
      panel.style.maxHeight = "0px";
    }
  };

  const rows = Array.from(container.querySelectorAll(".accordion-row"));

  rows.forEach((row) => {
    const head = row.querySelector(".accordion-row__head");
    if (!head || head.dataset.bound) return;

    head.dataset.bound = "true";

    head.addEventListener("click", () => {
      row.classList.toggle("is-open");
      updateAccordionHeight(row);
    });
  });

  // Recalculate accordion heights when images load or content changes
  const resizeObserver = new ResizeObserver(() => {
    rows.forEach((row) => {
      if (row.classList.contains("is-open")) {
        updateAccordionHeight(row);
      }
    });
  });

  rows.forEach((row) => {
    const panelInner = row.querySelector(".accordion-row__panel-inner");
    if (panelInner) {
      resizeObserver.observe(panelInner);
    }
  });

  // Also recalculate on window resize
  window.addEventListener("resize", () => {
    rows.forEach((row) => {
      if (row.classList.contains("is-open")) {
        updateAccordionHeight(row);
      }
    });
  });

  // Wait for images to load, then recalculate
  setTimeout(() => {
    rows.forEach((row) => {
      if (row.classList.contains("is-open")) {
        updateAccordionHeight(row);
      }
    });
  }, 500);
}

/* ---- Sticky sidebar that stops before it reaches the footer ---- */
function initStickySidebarStop(sidebarEl, footerEl, topOffset = 120, gap = 48) {
  if (!sidebarEl || !footerEl) return;
  const parent = sidebarEl.parentElement;

  function update() {
    if (window.innerWidth <= 1024) {
      sidebarEl.style.position = "";
      sidebarEl.style.top = "";
      return;
    }

    const footerRect = footerEl.getBoundingClientRect();
    const sidebarHeight = sidebarEl.offsetHeight;
    const parentTop = parent.getBoundingClientRect().top + window.scrollY;

    const wouldOverlap = footerRect.top < topOffset + sidebarHeight + gap;

    if (wouldOverlap) {
      const footerDocTop = footerRect.top + window.scrollY;
      const desiredTop = footerDocTop - sidebarHeight - gap - parentTop;
      sidebarEl.style.position = "absolute";
      sidebarEl.style.top = `${Math.max(desiredTop, 0)}px`;
    } else {
      sidebarEl.style.position = "sticky";
      sidebarEl.style.top = `${topOffset}px`;
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
  /* Recalculate once images/content finish laying out */
  setTimeout(update, 300);
  setTimeout(update, 1000);
}

/* ---- Scroll-spy: highlight the active sidebar link based on section in view ---- */
function initScrollSpy(sectionSelector, linkSelector) {
  const sections = Array.from(document.querySelectorAll(sectionSelector));
  const links = Array.from(document.querySelectorAll(linkSelector));
  if (!sections.length || !links.length) return;

  const scrollContainer = links[0]?.closest(".page-sidebar__list");
  const shouldScroll =
    scrollContainer &&
    scrollContainer.scrollWidth > scrollContainer.clientWidth;

  const linkFor = (id) =>
    links.find((l) => l.getAttribute("href") === `#${id}`);

  let activeId = null;

  const scrollActiveLinkIntoView = (link) => {
    if (!link || !shouldScroll) return;
    if (link.closest(".page-sidebar__list") === scrollContainer) {
      link.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (!visible.length) return;

      const entry = visible[0];
      const id = entry.target.id;
      if (id === activeId) return;

      activeId = id;
      links.forEach((link) => {
        link.classList.toggle("is-active", link === linkFor(id));
      });
      scrollActiveLinkIntoView(linkFor(id));
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ---- One-shot scroll reveal for static and dynamically rendered content ---- */
function initRevealOnScroll(selector, options = {}) {
  const items = Array.from(document.querySelectorAll(selector));
  if (!items.length) return;

  const distance = options.distance || "20px";
  const duration = options.duration || "400ms";
  const stagger = Math.min(options.stagger || 0, 60);
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  items.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-distance", distance);
    item.style.setProperty("--reveal-duration", duration);
    item.style.setProperty(
      "--reveal-delay",
      reduceMotion ? "0ms" : `${index * stagger}ms`,
    );
    if (
      reduceMotion ||
      item.getBoundingClientRect().top < window.innerHeight * 0.95
    ) {
      item.classList.add("is-visible");
      item.style.setProperty("--reveal-delay", "0ms");
    }
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -5% 0px", threshold: 0 },
  );

  items.forEach((item) => observer.observe(item));
}

/* ---- Image lightbox for detail-section media ---- */
function initImageLightbox() {
  // Create lightbox overlay once if it doesn't exist
  let lightbox = document.getElementById("image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "image-lightbox";
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("aria-hidden", "true");

    lightbox.innerHTML = `
      <div class="image-lightbox__backdrop" data-lightbox-close></div>
      <div class="image-lightbox__container">
        <div class="image-lightbox__toolbar">
          <button
            type="button"
            class="image-lightbox__close"
            aria-label="Close image viewer"
          >
            ×
          </button>
        </div>
        <div class="image-lightbox__media">
          <img
            class="image-lightbox__image"
            src=""
            alt=""
          />
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);
  }

  const backdrop = lightbox.querySelector(".image-lightbox__backdrop");
  const closeButton = lightbox.querySelector(".image-lightbox__close");
  const image = lightbox.querySelector(".image-lightbox__image");

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openLightbox = (src, alt) => {
    image.src = src;
    image.alt = alt || "Image viewer";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  // Handle close button and backdrop clicks
  closeButton.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  // Handle Escape key
  const handleEscape = (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  };

  document.addEventListener("keydown", handleEscape);

  // Handle clicks on all detail-section media images
  const handleImageClick = (event) => {
    if (
      event.target.tagName === "IMG" &&
      event.target.closest(".detail-section__media")
    ) {
      event.preventDefault();
      openLightbox(event.target.src, event.target.alt);
    }
  };

  document.addEventListener("click", handleImageClick);
}
