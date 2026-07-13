// filter tabs
      const pills = document.querySelectorAll(".filter-pill");
      const cards = document.querySelectorAll(".project-card");
      pills.forEach((pill) => {
        pill.addEventListener("click", () => {
          pills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          const f = pill.dataset.filter;
          cards.forEach((card) => {
            const show = f === "all" || card.dataset.cat === f;
            card.classList.toggle("hidden", !show);
          });
        });
      });

      const projectCards = Array.from(
        document.querySelectorAll(".project-card"),
      );
      document.querySelectorAll(".project-card .pc-body").forEach((body) => {
        const actionLinks = Array.from(
          body.querySelectorAll(":scope > .see-more"),
        );
        if (!actionLinks.length) return;

        const actions = document.createElement("div");
        actions.className = "project-actions";
        actionLinks.forEach((link) => actions.appendChild(link));
        body.appendChild(actions);
      });
      const hiddenCards = projectCards.slice(3);
      const projectsToggle = document.querySelector(".projects-toggle");
      const projectsSection = document.getElementById("projects");

      projectCards
        .slice(0, 3)
        .forEach((card) => card.classList.remove("hidden"));
      hiddenCards.forEach((card) => card.classList.add("hidden"));

      if (projectsToggle) {
        projectsToggle.addEventListener("click", () => {
          const expanded = projectsToggle.dataset.expanded === "true";

          if (!expanded) {
            hiddenCards.forEach((card, index) => {
              card.classList.remove("hidden");
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  card.classList.add("project-card--reveal");
                });
              });
              card.style.setProperty("animation-delay", `${index * 40}ms`);
            });
            projectsToggle.dataset.expanded = "true";
            projectsToggle.textContent = "View Less";
          } else {
            hiddenCards.forEach((card) => {
              card.classList.remove("project-card--reveal");
              card.classList.add("hidden");
              card.style.removeProperty("animation-delay");
            });
            projectsToggle.dataset.expanded = "false";
            projectsToggle.textContent = "View More";
            projectsSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      }

      const mobileNav = document.querySelector(".mobile-nav");
      const navToggle = document.querySelector(".nav-toggle");
      const navToggleIcon = document.querySelector(".nav-toggle__icon");
      const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

      function closeMobileNav() {
        if (!mobileNav || !navToggle) return;
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        if (navToggleIcon) {
          navToggleIcon.textContent = "☰";
        }
        document.body.style.overflow = "";
      }

      function openMobileNav() {
        if (!mobileNav || !navToggle) return;
        mobileNav.classList.add("is-open");
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.setAttribute("aria-label", "Close navigation");
        if (navToggleIcon) {
          navToggleIcon.textContent = "✕";
        }
        document.body.style.overflow = "hidden";
      }

      if (mobileNav && navToggle) {
        navToggle.addEventListener("click", () => {
          const isOpen = mobileNav.classList.contains("is-open");
          if (isOpen) {
            closeMobileNav();
          } else {
            openMobileNav();
          }
        });

        mobileNavLinks.forEach((link) => {
          link.addEventListener("click", closeMobileNav);
        });

        window.addEventListener("resize", () => {
          if (window.innerWidth > 767) {
            closeMobileNav();
          }
        });

        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            closeMobileNav();
          }
        });
      }

      // scroll reveal
      const revealEls = document.querySelectorAll(".reveal");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealEls.forEach((el) => io.observe(el));