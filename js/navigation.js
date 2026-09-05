/* ==========================================================================
   ALFINA — Navigation behaviour: header scroll state, dropdown, mobile menu
   ========================================================================== */

(function () {
  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initDropdown() {
    const dropdown = document.getElementById("projects-dropdown");
    if (!dropdown) return;
    const trigger = dropdown.querySelector(".nav-dropdown__trigger");

    const close = () => {
      dropdown.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };
    const open = () => {
      dropdown.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };
    const toggle = (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    };

    trigger.addEventListener("click", toggle);
    dropdown.addEventListener("mouseenter", open);
    dropdown.addEventListener("mouseleave", close);
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    if (!toggleBtn || !mobileNav) return;

    const projSub = document.getElementById("mobile-projects-sub");
    const projToggle = document.getElementById("mobile-projects-toggle");

    toggleBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      toggleBtn.classList.toggle("is-open", isOpen);
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";

      if (isOpen && projSub) {
        projSub.classList.add("is-open");
      }
    });

    if (projSub && projToggle) {
      projToggle.addEventListener("click", () => {
        const isOpen = projSub.classList.toggle("is-open");
        projToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    mobileNav
      .querySelectorAll(".mobile-nav__sublink, .mobile-nav__link")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          if (link.tagName === "A") {
            mobileNav.classList.remove("is-open");
            toggleBtn.classList.remove("is-open");
            document.body.style.overflow = "";
          }
        });
      });
  }

  function init() {
    initHeaderScroll();
    initDropdown();
    initMobileMenu();
  }

  /* Called explicitly by each page after renderHeader()/renderFooter()
     have injected the shared markup into the DOM. */
  window.initNav = init;
})();
