const NAV_LINKS = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About", href: "about.html", key: "about" },
];

const PROJECT_CATEGORY_LINKS = [
  { label: "UI/UX Design", href: "projects.html?cat=uiux" },
  { label: "Data & ML", href: "projects.html?cat=dataml" },
  { label: "Software Development", href: "projects.html?cat=softdev" },
  { label: "Business Analysis", href: "projects.html?cat=business" },
  // { label: "Design", href: "projects.html?cat=design" },
];

function iconChevron() {
  return `<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function iconArrow() {
  return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function renderHeader(activeKey) {
  const el = document.getElementById("site-header");
  if (!el) return;

  el.innerHTML = `
    <div class="container site-header__inner">
      <a href="index.html" class="site-header__logo">
        <img src="images/logo-black.png" alt="Alfina Andriani" />
      </a>

      <nav class="site-header__nav" aria-label="Primary">
        <a href="index.html" class="site-header__link ${activeKey === "home" ? "is-active" : ""}">Home</a>
        <div class="nav-dropdown" id="projects-dropdown">
          <button class="nav-dropdown__trigger site-header__link ${activeKey === "projects" ? "is-active" : ""}" aria-expanded="false">
            Projects ${iconChevron()}
          </button>
          <div class="nav-dropdown__menu" role="menu">
            ${PROJECT_CATEGORY_LINKS.map((l) => `<a class="nav-dropdown__item" href="${l.href}" role="menuitem">${l.label}</a>`).join("")}
          </div>
        </div>
        <a href="about.html" class="site-header__link ${activeKey === "about" ? "is-active" : ""}">About</a>
      </nav>

      <button class="site-header__burger" id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  const mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";
  mobileNav.id = "mobile-nav";
  mobileNav.innerHTML = `
    <ul class="mobile-nav__list">
      <li><a class="mobile-nav__link" href="index.html">Home</a></li>
      <li class="mobile-nav__sub" id="mobile-projects-sub">
        <button class="mobile-nav__link" style="width:100%; display:flex; justify-content:space-between; align-items:center; background:none; border:none; font-family:inherit;" id="mobile-projects-toggle">
          Projects ${iconChevron()}
        </button>
        <ul class="mobile-nav__sublist">
          ${PROJECT_CATEGORY_LINKS.map((l) => `<li><a class="mobile-nav__sublink" href="${l.href}">${l.label}</a></li>`).join("")}
        </ul>
      </li>
      <li><a class="mobile-nav__link" href="about.html">About</a></li>
    </ul>
  `;
  document.body.appendChild(mobileNav);
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  el.innerHTML = `
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <a href="index.html" class="site-footer__logo">
          <img
                src="images/logo-white.png"
                alt="Alfina Logo"
                class="footer-logo"
              />
        </a>
        <div class="site-footer__contact">
          <div class="site-footer__email">
            <a href="mailto:alfinaandr04@gmail.com">
              alfinaandr04@gmail.com
              ${iconArrow()}
            </a>
            <button
              type="button"
              class="email-copy-btn"
              aria-label="Copy email"
              title="Copy email"
              onclick="copyEmail()"
            >
              ${iconCopy()}
            </button>
          </div>
          <p>Sidoarjo, Indonesia</p>
        </div>
      </div>

      <div class="site-footer__col">
        <p class="site-footer__col-title">Project</p>
        <a href="projects.html?cat=uiux">UI/UX Design</a>
        <a href="projects.html?cat=dataml">Data &amp; ML</a>
        <a href="projects.html?cat=softdev">Software Development</a>
        <a href="projects.html?cat=business">Business Analysis</a>
      </div>

      <div class="site-footer__col">
        <p class="site-footer__col-title">About</p>
        <a href="about.html#skills">Skill</a>
        <a href="about.html#experience">Experience</a>
        <a href="about.html#achievement">Achievement</a>
        <a href="about.html#education">Education</a>
        <a href="about.html#certification">Certification</a>
        <a href="about.html#campus-activities">Campus Activities</a>
      </div>

      <div class="site-footer__col">
        <p class="site-footer__col-title">Connect</p>
        <div class="site-footer__social">
          <a href="https://linkedin.com/in/alfinaandriani04" aria-label="LinkedIn" target="_blank" rel="noopener">${iconLinkedIn()}</a>
          <a href="https://instagram.com/alfinaandriani_/" aria-label="Instagram" target="_blank" rel="noopener">${iconInstagram()}</a>
          <a href="https://github.com/alfinaandriani/" aria-label="GitHub" target="_blank" rel="noopener">${iconGithub()}</a>
          <a href="https://behance.net/alfinaandriani04" aria-label="Behance" target="_blank" rel="noopener">${iconBehance()}</a>
        </div>
      </div>
    </div>
    <div class="site-footer__bottom">
      <p>© 2026 Alfina Andriani. All rights reserved.</p>
    </div>
  `;
}

function iconCopy() {
  return `<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="8"
      y="8"
      width="11"
      height="11"
      rx="2"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M16 8V6.5C16 5.67 15.33 5 14.5 5H6.5C5.67 5 5 5.67 5 6.5V14.5C5 15.33 5.67 16 6.5 16H8"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;
}

function iconLinkedIn() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(1.2 0)">
      <path d="M5.04 3.5C5.04 4.88 3.92 6 2.54 6S.04 4.88.04 3.5 1.16 1 2.54 1s2.5 1.12 2.5 2.5ZM.39 8.5h4.3V23H.39V8.5ZM7.2 8.5h4.12v1.98h.06c.57-1.08 1.97-2.22 4.06-2.22 4.34 0 5.14 2.86 5.14 6.58V23h-4.3v-7.23c0-1.73-.03-3.95-2.4-3.95-2.4 0-2.77 1.87-2.77 3.82V23H7.2V8.5Z"/>
    </g>
  </svg>`;
}

function iconInstagram() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="5"
      stroke="currentColor"
      stroke-width="2.4"
    />
    <circle
      cx="12"
      cy="12"
      r="4.1"
      stroke="currentColor"
      stroke-width="2.4"
    />
    <circle
      cx="17.5"
      cy="6.5"
      r="1.25"
      fill="currentColor"
    />
  </svg>`;
}

function iconGithub() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5Z"/>
  </svg>`;
}

function iconBehance() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.75 11.28c.86-.42 1.34-1.15 1.34-2.15 0-1.92-1.42-3.13-3.7-3.13H2v12h6.65c2.6 0 4.15-1.24 4.15-3.45 0-1.62-.75-2.78-2.05-3.27ZM5 8.12h2.85c.78 0 1.24.34 1.24 1.02 0 .67-.46 1.01-1.24 1.01H5V8.12Zm3.05 7.65H5v-3.6h3.05c.9 0 1.42.5 1.42 1.8 0 1.2-.52 1.8-1.42 1.8ZM15.02 7.55h5.2V6h-5.2v1.55ZM17.72 9.15c-2.96 0-4.82 1.9-4.82 4.8 0 2.9 1.88 4.8 4.82 4.8 2.4 0 4.02-1.15 4.6-3.27h-2.6c-.27.78-.9 1.2-1.92 1.2-1.22 0-1.9-.7-1.98-1.95h6.68v-.6c0-3.1-1.77-4.98-4.78-4.98Zm-1.9 3.73c.12-1.1.77-1.73 1.9-1.73 1.08 0 1.7.63 1.83 1.73h-3.73Z"/>
  </svg>`;
}

/* ---- Mobile nav + dropdown behaviour hooks (wired in navigation.js) ---- */
function copyEmail() {
  const email = "alfinaandr04@gmail.com";

  navigator.clipboard
    .writeText(email)
    .then(() => {
      showCopyNotification("Email copied");

      const button = document.querySelector(".email-copy-btn");

      if (button) {
        button.classList.add("copied");

        setTimeout(() => {
          button.classList.remove("copied");
        }, 1500);
      }
    })
    .catch(() => {
      showCopyNotification("Failed to copy email");
    });
}

function showCopyNotification(message) {
  const existing = document.querySelector(".copy-notification");

  if (existing) {
    existing.remove();
  }

  const notification = document.createElement("div");
  notification.className = "copy-notification";

  notification.innerHTML = `
    ${iconCheck()}
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  requestAnimationFrame(() => {
    notification.classList.add("show");
  });

  setTimeout(() => {
    notification.classList.remove("show");

    setTimeout(() => {
      notification.remove();
    }, 250);
  }, 2000);
}

function iconCheck() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 12.5L9.5 17L19 7.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;
}
