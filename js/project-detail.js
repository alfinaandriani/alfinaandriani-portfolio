/* ==========================================================================
   ALFINA — Project detail page renderer (reusable template; every project
   supplies its own sidebar sections & content via data.js)
   ========================================================================== */

function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = getProjectById(id) || PROJECTS[0];
  const sections = getSections(project);
  const category = CATEGORIES[project.category];

  document.title = `${project.name} — Alfina Andriani`;

  const layout = document.getElementById("detail-layout");
  layout.style.setProperty(
    "--project-color",
    project.color || "var(--color-dark)",
  );
  layout.innerHTML = `
    <aside class="page-sidebar" id="detail-sidebar">
      <a href="projects.html?cat=${project.category}" class="page-sidebar__back">
        ← Back
      </a>
      <nav class="page-sidebar__list">
        ${sections.map((s) => `<a class="page-sidebar__link" href="#${s.id}">${s.label.toUpperCase()}</a>`).join("")}
      </nav>
      <div class="page-sidebar--contact">
        <a href="mailto:alfinaandr04@gmail.com">alfinaandr04@gmail.com ${iconArrow()}</a>
        <p>Sidoarjo, Indonesia</p>
      </div>
    </aside>
    <div class="page-content">
      <p class="eyebrow detail-hero__eyebrow">${category.label}</p>
      <h1 class="hero-title detail-hero__title">${project.name}</h1>
      <p class="detail-hero__desc">${project.detailIntro}</p>

      <div class="meta-table" style="grid-template-columns: repeat(${project.meta ? project.meta.length : 0}, 1fr);">
        ${(project.meta || [])
          .map(
            (item) => `
          <div class="meta-table__cell">
            <p class="meta-table__label">${item.label}</p>
            <p class="meta-table__value">${item.value}</p>
          </div>
        `,
          )
          .join("")}
      </div>

      <div class="detail-hero__visual" style="background:${project.bg}">
        ${project.image ? `<img src="${project.image}" alt="${project.name}">` : ""}
      </div>

      ${renderLinkButton(project)}

      ${sections.map(renderSection).join("")}
    </div>
  `;

  renderCurious(project);

  const footer = document.getElementById("site-footer");
  const sidebar = document.getElementById("detail-sidebar");
  initStickySidebarStop(
    sidebar,
    document.getElementById("curious-section") || footer,
  );
  initScrollSpy(".detail-section", ".page-sidebar__link");
  initAccordions();
  initRevealOnScroll(
    ".detail-hero__eyebrow, .detail-hero__title, .detail-hero__desc, .meta-table, .detail-hero__visual, .detail-link-btn",
    { distance: "16px", duration: "400ms", stagger: 40 },
  );
  initRevealOnScroll(".detail-section", {
    distance: "20px",
    duration: "420ms",
  });
  initRevealOnScroll(
    ".detail-section__media, .detail-video, .mini-table-wrapper, .process-row__item",
    {
      distance: "16px",
      duration: "400ms",
      stagger: 40,
    },
  );
  initRevealOnScroll(".curious__card", {
    distance: "20px",
    duration: "420ms",
    stagger: 60,
  });
  initDocumentViewer(project);
  initImageLightbox();
}

function renderLinkButton(project) {
  let html = "";

  // Render document button first if it exists
  if (project.document && project.document.type === "pdf") {
    const docLabel = project.document.label || "VIEW DOCUMENT";
    html += `<button type="button" class="btn detail-link-btn" data-open-document="${project.document.src}" aria-label="${docLabel}">${iconDocument()} ${docLabel} ${iconArrow()}</button>`;
  }

  // Then render links (Figma, GitHub, etc.)
  if (project.links && project.links.length > 0) {
    html += project.links
      .map((link) => {
        let icon, label;
        if (link.type === "figma") {
          icon = iconFigma();
          label = link.label || "OPEN LIVE FIGMA";
        } else if (link.type === "github") {
          icon = iconGithub();
          label = link.label || "GITHUB";
        } else {
          return "";
        }
        return `<a href="${link.url}" class="btn detail-link-btn" target="_blank" rel="noopener noreferrer">${icon} ${label} ${iconArrow()}</a>`;
      })
      .join("");
  }

  return html;
}

function initDocumentViewer(project) {
  // Create document viewer if it doesn't exist
  let viewer = document.getElementById("detail-document-viewer");
  if (!viewer) {
    viewer = document.createElement("div");
    viewer.id = "detail-document-viewer";
    viewer.className = "viewer-overlay";
    viewer.setAttribute("aria-hidden", "true");

    viewer.innerHTML = `
      <div class="viewer-overlay__backdrop" data-viewer-close></div>

      <div
        class="viewer-overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Document viewer"
      >
        <button
          type="button"
          class="viewer-overlay__close"
          aria-label="Close document viewer"
        >
          ×
        </button>

        <div class="viewer-overlay__content">
          <div class="viewer-overlay__placeholder">
            <p>Loading document...</p>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(viewer);
  }

  const content = viewer.querySelector(".viewer-overlay__content");
  const closeButton = viewer.querySelector(".viewer-overlay__close");

  const closeViewer = () => {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const openViewer = (docSrc) => {
    content.innerHTML = `
      <iframe
        class="viewer-overlay__frame"
        src="${docSrc}"
        title="Document viewer"
      ></iframe>
    `;

    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  // Close on backdrop click and close button
  viewer.removeEventListener("click", null);
  viewer.addEventListener("click", (event) => {
    if (
      event.target.closest("[data-viewer-close]") ||
      event.target === viewer
    ) {
      closeViewer();
    }
  });

  closeButton.removeEventListener("click", null);
  closeButton.addEventListener("click", closeViewer);

  // Close on Escape key
  const handleEscape = (event) => {
    if (event.key === "Escape" && viewer.classList.contains("is-open")) {
      closeViewer();
    }
  };

  document.removeEventListener("keydown", handleEscape);
  document.addEventListener("keydown", handleEscape);

  // Handle document button click
  const docButtons = document.querySelectorAll("[data-open-document]");
  docButtons.forEach((btn) => {
    btn.removeEventListener("click", null);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const docSrc = btn.getAttribute("data-open-document");
      if (docSrc) {
        openViewer(docSrc);
      }
    });
  });
}

function renderTable(data) {
  if (!data || !data.columns || !data.rows) return "";

  const columnCount = data.columns.length;
  const columnMinWidth = 240;
  const gap = 16;
  const tableMinWidth = columnCount * columnMinWidth + (columnCount - 1) * gap;

  const tableMarkup = `
    <div class="mini-table-wrapper">
      <div
        class="mini-table"
        style="--mini-table-columns: ${columnCount}; --mini-table-column-min: ${columnMinWidth}px; --mini-table-gap: ${gap}px; --mini-table-min-width: ${tableMinWidth}px;"
      >
        <div class="mini-table__row mini-table__row--head" style="grid-template-columns: repeat(${columnCount}, minmax(${columnMinWidth}px, 1fr));">
          ${data.columns.map((col) => `<span>${col}</span>`).join("")}
        </div>
        ${data.rows
          .map(
            (row) => `
          <div class="mini-table__row" style="grid-template-columns: repeat(${columnCount}, minmax(${columnMinWidth}px, 1fr));">
            ${row.map((cell) => `<span>${cell}</span>`).join("")}
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
  return tableMarkup;
}

function renderCTA(item) {
  if (!item || !item.cta || !item.url) return "";

  return `
    <a
      href="${item.url}"
      class="btn btn--small detail-cta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${item.cta}"
    >
      ${item.cta} ${iconArrow()}
    </a>
  `;
}

function renderInlineImages(body) {
  return body.replace(
    /<img\b[^>]*>/gi,
    (image) => `<div class="detail-section__media media-grid-1">${image}</div>`,
  );
}

function renderTextBody(body) {
  if (!body) return "";

  const trimmed = body.trim();
  if (!trimmed) return "";

  if (/<p\s*\b/i.test(trimmed)) {
    return `<div class="detail-section__body">${renderInlineImages(trimmed)}</div>`;
  }

  const paragraphs = trimmed
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  return `<div class="detail-section__body">${paragraphs}</div>`;
}

const designThinkingIcons = {
  empathize: `
    <svg viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" d="M117.357 63.345C117.357 83.8149 128.222 100 128.222 100H81.2065C83.5919 90.5482 84.8702 81.7265 72.4568 81.8796C72.7899 81.6005 73.0869 81.3125 73.357 80.9974C74.5092 79.6381 74.9953 77.9908 74.7432 76.2445L74.7342 76.1635L74.7162 76.0915C74.1041 73.454 73.9871 70.4384 74.4732 69.7633C75.7604 67.9809 75.6614 66.4686 75.3464 65.5235C75.0853 64.7223 74.5992 64.0832 74.0501 63.5791C76.1115 61.5087 76.4356 58.7992 75.9945 56.6388C78.3709 55.3425 82.0706 52.822 81.7556 49.7615C81.5575 47.7721 79.1631 44.4594 75.5264 39.6525C74.8423 38.7344 74.2031 37.8972 73.717 37.2221C73.402 36.781 73.357 36.1689 73.6 35.6018C74.7432 32.9373 75.9585 27.0591 71.3316 17.6884C69.9273 14.8258 68.082 12.1973 65.8586 9.85687L65.8315 9.82987C72.1057 3.95175 81.4855 0 93.9439 0C117.78 0 127.088 14.1057 128.925 29.0665C130.761 44.0184 117.357 57.674 117.357 63.345Z" fill="black"/>
        <path opacity="0.8" d="M63.2748 9.82987L63.2478 9.85687C61.0244 12.1883 59.17 14.8258 57.7658 17.6884C53.1389 27.0771 54.3631 32.9373 55.5063 35.6108C55.7494 36.1689 55.7044 36.781 55.3893 37.2221C54.9122 37.8882 54.2911 38.6984 53.616 39.5985C49.9523 44.4324 47.5398 47.7631 47.3418 49.7615C47.0357 52.822 50.7264 55.3425 53.1119 56.6388C52.6618 58.7992 52.9859 61.5087 55.0472 63.5791C54.4981 64.0832 54.0121 64.7223 53.751 65.5235C53.4359 66.4686 53.3369 67.9809 54.6242 69.7633C55.1103 70.4384 54.9932 73.454 54.3811 76.0915L54.3631 76.1725L54.3541 76.2535C54.2911 76.6766 54.2821 77.1087 54.3001 77.5497L54.3091 77.6398C54.3361 77.8648 54.3631 78.0898 54.4081 78.2969C54.5522 78.972 54.8042 79.6111 55.1643 80.1962C55.2273 80.2953 55.3083 80.4123 55.4163 80.5743C55.7674 81.0514 56.1725 81.4835 56.6405 81.8796C44.2272 81.7265 45.5054 90.5482 47.8909 100H0.874954C0.874954 100 11.74 83.8149 11.74 63.345C11.74 57.674 -1.66353 44.0184 0.17282 29.0665C2.00917 14.1057 11.3169 0 35.1625 0C47.6208 0 57.0096 3.95175 63.2748 9.82987Z" fill="black"/>
        <path d="M73.816 55.7201C73.816 55.7201 76.2735 61.0851 70.7554 63.6956C70.7554 63.6956 75.5353 65.2169 73.0149 68.7096C71.6106 70.663 72.9609 76.4961 72.9609 76.4961C73.456 79.9707 69.8463 82.4102 64.7243 82.5182H64.3822C63.9861 82.5092 63.5901 82.4822 63.212 82.4462C63.077 82.4372 62.951 82.4192 62.8159 82.4012C62.7619 82.4012 62.6989 82.3922 62.6449 82.3832C62.4199 82.3562 62.2038 82.3202 61.9878 82.2842C61.7987 82.2482 61.6187 82.2031 61.4387 82.1671C61.2136 82.1131 60.9976 82.0591 60.7905 81.9961C60.6645 81.9601 60.5385 81.9241 60.4215 81.8791C60.0344 81.7531 59.6653 81.609 59.3233 81.447C59.0262 81.303 58.7472 81.1499 58.4861 80.9879C58.3961 80.9339 58.2971 80.8709 58.2071 80.8079C57.667 80.4298 57.2169 79.9887 56.8658 79.5116C56.8118 79.4306 56.7578 79.3496 56.7128 79.2686C56.4517 78.8545 56.2717 78.4044 56.1727 77.9273C56.1367 77.7653 56.1187 77.6033 56.1007 77.4412C56.0826 77.1352 56.0917 76.8201 56.1367 76.4961C56.1367 76.4961 57.4959 70.663 56.0826 68.7096C53.5622 65.2169 58.3511 63.6956 58.3511 63.6956C52.824 61.0851 55.2905 55.7201 55.2905 55.7201C55.2905 55.7201 48.8543 52.7586 49.1333 49.941C49.3404 47.8346 54.5974 41.3894 56.8478 38.2748C57.5499 37.2846 57.6399 36.0064 57.1539 34.8902C55.9476 32.0726 55.3175 26.7256 59.3773 18.48C60.6735 15.8515 62.3928 13.3581 64.5533 11.0986C66.7047 13.3581 68.424 15.8515 69.7202 18.48C73.789 26.7256 73.1499 32.0726 71.9437 34.8902C71.4666 36.0064 71.5476 37.2846 72.2587 38.2748C74.5001 41.3894 79.7572 47.8346 79.9642 49.941C80.2522 52.7586 73.816 55.7201 73.816 55.7201Z" fill="black"/>
      </svg>
    </svg>
  `,

  define: `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96.9927 42.5579C96.0827 37.4158 94.3664 32.4946 91.8833 27.9083L90.7148 29.0768C89.7579 30.0342 88.4842 30.5619 87.1285 30.5619C86.8405 30.5619 86.5549 30.5377 86.2728 30.4893C85.9912 30.4413 85.7131 30.3687 85.4414 30.2729L79.7697 28.2734C84.1642 34.1986 86.7669 41.2714 87.2249 48.7419C87.2728 49.5309 87.298 50.3342 87.298 51.1291C87.298 51.9241 87.2733 52.7274 87.2249 53.5164C86.6261 63.2719 82.3713 72.3505 75.2427 79.079C68.0844 85.8361 58.7182 89.5573 48.8699 89.5573C43.6833 89.5573 38.65 88.541 33.9115 86.5362C29.3357 84.601 25.2262 81.8299 21.6977 78.3019C18.1687 74.7729 15.3985 70.6634 13.4633 66.0875C11.4585 61.3491 10.4422 56.3157 10.4422 51.1291C10.4422 45.9421 11.4585 40.9092 13.4633 36.1708C15.3985 31.5949 18.1692 27.4854 21.6977 23.9569C25.2262 20.4279 29.3357 17.6578 33.9115 15.7221C38.65 13.7178 43.6833 12.7015 48.8699 12.7015C57.1595 12.7015 65.1078 15.3382 71.6851 20.2031L69.6772 14.5102C69.0325 12.6778 69.5028 10.6082 70.8753 9.23674L72.0299 8.08215C70.0804 7.0313 68.0582 6.11385 65.9719 5.33425C60.5092 3.29333 54.7555 2.25879 48.8694 2.25879C42.2708 2.25879 35.8714 3.55073 29.8475 6.09854C24.0281 8.55989 18.8015 12.0835 14.3126 16.5724C9.82367 21.0613 6.30012 26.2879 3.83876 32.1073C1.29194 38.1312 0 44.5311 0 51.1291C0 57.7272 1.29194 64.1276 3.83975 70.151C6.3011 75.9704 9.82466 81.197 14.3136 85.6859C18.8025 90.1748 24.0291 93.6989 29.8485 96.1598C35.8719 98.7076 42.2723 99.9995 48.8704 99.9995C54.7881 99.9995 60.5704 98.9536 66.0583 96.8919C71.36 94.8999 76.2432 92.0172 80.573 88.3231C84.8732 84.6543 88.4768 80.3141 91.2845 75.424C94.1549 70.4242 96.0965 65.0109 97.056 59.3343C97.3899 57.3571 97.6039 55.337 97.6928 53.3301C97.7254 52.6138 97.7412 51.8737 97.7412 51.1291C97.7412 50.3841 97.7249 49.6445 97.6928 48.9296C97.5984 46.7924 97.3628 44.6492 96.9927 42.5579Z" fill="black"/>
        <path d="M69.7402 23.1781C63.7395 18.6867 56.4636 16.25 48.8711 16.25C44.1613 16.25 39.5938 17.1719 35.2946 18.99C31.1411 20.7468 27.4111 23.262 24.2077 26.4659C21.0037 29.6699 18.488 33.4004 16.7317 37.5534C14.9131 41.8521 13.9912 46.4201 13.9912 51.1299C13.9912 55.8391 14.9131 60.4071 16.7317 64.7063C18.488 68.8598 21.0037 72.5899 24.2077 75.7938C27.4111 78.9977 31.1416 81.5134 35.2946 83.2697C39.5938 85.0883 44.1613 86.0102 48.8711 86.0102C57.8099 86.0102 66.311 82.6324 72.8083 76.4993C79.2788 70.3919 83.1413 62.1526 83.6847 53.2997C83.7287 52.5824 83.751 51.8527 83.751 51.1299C83.751 50.4071 83.7287 49.6774 83.6847 48.96C83.2638 42.1051 80.8538 35.6187 76.7839 30.2049L69.3168 37.672C71.4773 40.9475 72.8285 44.7127 73.2233 48.6749C73.3043 49.4798 73.3453 50.3063 73.3453 51.1299C73.3453 51.953 73.3043 52.779 73.2233 53.5863C72.6245 59.5924 69.8262 65.1495 65.3437 69.2313C60.83 73.3403 54.9805 75.6041 48.8716 75.6041C45.5684 75.6041 42.363 74.9564 39.3443 73.6803C36.4299 72.4476 33.813 70.6833 31.5655 68.4359C29.3186 66.189 27.5543 63.572 26.3217 60.6576C25.0451 57.6395 24.3979 54.4341 24.3979 51.1304C24.3979 47.8267 25.0451 44.6223 26.3217 41.6041C27.5543 38.6892 29.3186 36.0722 31.5655 33.8253C33.813 31.5779 36.4299 29.8136 39.3443 28.581C42.3625 27.3044 45.5679 26.6571 48.8716 26.6571C53.6727 26.6571 58.3129 28.0553 62.2712 30.6486L69.7402 23.1781Z" fill="black"/>
        <path d="M48.8708 40.6266C49.9014 40.6266 50.9048 40.7777 51.8573 41.0603L59.6979 33.2198C56.4559 31.2569 52.7239 30.2041 48.8708 30.2041C46.0448 30.2041 43.3048 30.7569 40.7259 31.8478C38.2344 32.9016 35.9963 34.4109 34.074 36.3333C32.1521 38.2556 30.6423 40.4942 29.5885 42.9852C28.4977 45.5641 27.9448 48.3041 27.9448 51.1301C27.9448 53.956 28.4977 56.696 29.5885 59.2749C30.6423 61.7669 32.1512 64.0045 34.074 65.9268C35.9963 67.8487 38.2344 69.3585 40.7259 70.4123C43.3048 71.5027 46.0448 72.056 48.8708 72.056C54.0939 72.056 59.0951 70.1208 62.9541 66.6076C66.7875 63.1172 69.1806 58.3674 69.6925 53.2332C69.7621 52.5425 69.7967 51.8351 69.7967 51.1301C69.7967 50.4245 69.7616 49.7176 69.6925 49.0284C69.3797 45.8887 68.364 42.8938 66.746 40.2422L58.9212 48.0669C58.9533 48.1732 58.984 48.2809 59.0131 48.3886C59.2527 49.2769 59.3743 50.1993 59.3743 51.1291C59.3743 52.0594 59.2527 52.9813 59.0121 53.87C57.7805 58.44 53.6102 61.6321 48.8708 61.6321C46.0651 61.6321 43.4273 60.5397 41.4437 58.5561C39.4596 56.572 38.3678 53.9348 38.3678 51.1291C38.3673 45.3383 43.079 40.6266 48.8708 40.6266Z" fill="black"/>
        <path d="M99.3575 13.2621L94.3913 8.29546L95.6225 7.06429C95.9995 6.68683 96.1887 6.1913 96.1887 5.69725C96.1887 5.20221 95.9995 4.70668 95.6225 4.32972C94.8671 3.57432 93.6428 3.57432 92.8879 4.32972L91.6568 5.56089L86.6906 0.594712C85.8976 -0.198237 84.6121 -0.198237 83.8192 0.594712L73.0262 11.3882C72.4733 11.9406 72.2871 12.7617 72.5464 13.4988L75.4589 21.7588L47.428 49.7897C46.6731 50.5451 46.6731 51.7688 47.428 52.5237C48.1834 53.2796 49.4077 53.2796 50.1626 52.5237L78.1934 24.4934L86.4534 27.4053C87.1906 27.6652 88.0117 27.4794 88.564 26.9261L99.3575 16.1331C100.15 15.3401 100.15 14.0546 99.3575 13.2621Z" fill="black"/>
      </svg>
    </svg>
  `,

  ideate: `
    <svg viewBox="0 0 84 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="84" height="100" viewBox="0 0 84 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.7572 85.0856H28.6326C27.4535 85.0856 26.4966 84.1286 26.4966 82.9495C26.4966 81.7704 27.4535 80.8135 28.6326 80.8135H54.7572C55.9363 80.8135 56.8932 81.7704 56.8932 82.9495C56.8932 84.1286 55.9363 85.0856 54.7572 85.0856Z" fill="black"/>
        <path d="M52.5547 90.3034H30.8333C29.6542 90.3034 28.6973 89.3464 28.6973 88.1673C28.6973 86.9882 29.6542 86.0312 30.8333 86.0312H52.5547C53.7338 86.0312 54.6908 86.9882 54.6908 88.1673C54.6908 89.3464 53.7357 90.3034 52.5547 90.3034Z" fill="black"/>
        <path d="M50.3484 95.5211H33.0396C31.8605 95.5211 30.9036 94.5642 30.9036 93.3851C30.9036 92.206 31.8605 91.249 33.0396 91.249H50.3484C51.5275 91.249 52.4844 92.206 52.4844 93.3851C52.4863 94.5642 51.5294 95.5211 50.3484 95.5211Z" fill="black"/>
        <path d="M45.051 100H38.3391C37.3593 100 36.4271 99.5845 35.772 98.8573L33.6169 96.4668H49.777L47.6219 98.8573C46.9631 99.5845 46.0289 100 45.051 100Z" fill="black"/>
        <path d="M41.694 10.9575C41.3067 10.9575 40.9934 10.6442 40.9934 10.2569V0.700629C40.9934 0.313289 41.3067 0 41.694 0C42.0814 0 42.3947 0.313289 42.3947 0.700629V10.2588C42.3947 10.6442 42.0814 10.9575 41.694 10.9575Z" fill="black"/>
        <path d="M25.9764 15.1709C25.7334 15.1709 25.4998 15.0456 25.3688 14.8215L20.5897 6.545C20.3961 6.21082 20.5119 5.78171 20.8461 5.58804C21.1803 5.39437 21.6094 5.51019 21.803 5.84437L26.5821 14.119C26.7758 14.4532 26.66 14.8823 26.3258 15.076C26.2157 15.1405 26.096 15.1709 25.9764 15.1709Z" fill="black"/>
        <path d="M14.4683 26.6774C14.3487 26.6774 14.2291 26.647 14.1189 26.5843L5.84241 21.8052C5.50824 21.6116 5.39242 21.1843 5.58609 20.8483C5.77976 20.5141 6.20697 20.3983 6.54304 20.5919L14.8196 25.371C15.1537 25.5647 15.2696 25.9919 15.0759 26.328C14.9468 26.552 14.7113 26.6774 14.4683 26.6774Z" fill="black"/>
        <path d="M10.2588 42.3944H0.700629C0.313289 42.3944 0 42.0811 0 41.6938C0 41.3065 0.313289 40.9932 0.700629 40.9932H10.2588C10.6461 40.9932 10.9594 41.3065 10.9594 41.6938C10.9575 42.0811 10.6442 42.3944 10.2588 42.3944Z" fill="black"/>
        <path d="M6.19368 62.8932C5.95064 62.8932 5.7171 62.7679 5.58609 62.5438C5.39242 62.2096 5.50824 61.7805 5.84241 61.5868L14.1189 56.8078C14.4531 56.6141 14.8822 56.7299 15.0759 57.0641C15.2696 57.3983 15.1537 57.8274 14.8196 58.021L6.54304 62.8001C6.43292 62.8628 6.3114 62.8932 6.19368 62.8932Z" fill="black"/>
        <path d="M77.1963 62.8932C77.0767 62.8932 76.9571 62.8628 76.847 62.8001L68.5704 58.021C68.2363 57.8274 68.1204 57.4002 68.3141 57.0641C68.5078 56.7299 68.935 56.6141 69.2711 56.8078L77.5476 61.5868C77.8818 61.7805 77.9976 62.2077 77.8039 62.5438C77.6748 62.766 77.4394 62.8932 77.1963 62.8932Z" fill="black"/>
        <path d="M82.6895 42.3944H73.1313C72.744 42.3944 72.4307 42.0811 72.4307 41.6938C72.4307 41.3065 72.744 40.9932 73.1313 40.9932H82.6895C83.0768 40.9932 83.3901 41.3065 83.3901 41.6938C83.3901 42.0811 83.0768 42.3944 82.6895 42.3944Z" fill="black"/>
        <path d="M68.9198 26.6774C68.6767 26.6774 68.4432 26.552 68.3122 26.328C68.1185 25.9938 68.2343 25.5647 68.5685 25.371L76.845 20.5919C77.1792 20.3983 77.6083 20.5141 77.802 20.8483C77.9956 21.1824 77.8798 21.6116 77.5456 21.8052L69.271 26.5824C69.159 26.647 69.0394 26.6774 68.9198 26.6774Z" fill="black"/>
        <path d="M57.4135 15.1709C57.2938 15.1709 57.1742 15.1405 57.0641 15.0779C56.7299 14.8842 56.6141 14.457 56.8078 14.1209L61.5868 5.84437C61.7805 5.51019 62.2077 5.39437 62.5438 5.58804C62.878 5.78171 62.9938 6.20892 62.8001 6.545L58.021 14.8215C57.89 15.0456 57.6546 15.1709 57.4135 15.1709Z" fill="black"/>
        <path d="M69.3243 42.0033C69.2446 49.2242 66.3965 55.7786 61.7902 60.6583C57.9984 64.6741 55.9307 70.0171 55.9307 75.5424V75.6886C55.9307 78.0164 54.0434 79.9037 51.7156 79.9037H31.6727C29.3448 79.9037 27.4575 78.0164 27.4575 75.6886V75.5329C27.4575 69.9601 25.2987 64.6228 21.4955 60.552C16.8854 55.6153 14.062 48.9849 14.062 41.6976C14.062 26.4205 26.4607 14.039 41.7435 14.0674C56.994 14.0921 69.4914 26.7566 69.3243 42.0033Z" fill="black"/>
        <path d="M33.7442 21.5452C30.3132 23.406 27.4556 26.4705 25.7601 29.949C25.0272 31.4433 24.5012 33.0344 24.186 34.6654C23.774 36.7464 23.7038 38.8825 23.8784 40.9957C23.9867 42.2717 23.0392 43.3938 21.7633 43.5021C20.3487 43.635 19.1259 42.4084 19.257 40.9957C19.5076 37.6863 20.2899 34.3806 21.7804 31.4053C23.6905 27.5129 26.8253 24.249 30.5885 22.1604C31.2816 21.775 31.9917 21.4294 32.7265 21.1351C32.9733 21.0364 33.2145 20.9471 33.4822 20.8598C33.6759 20.7971 33.8828 20.9035 33.9455 21.0952C34.0024 21.2775 33.9113 21.4693 33.7442 21.5452Z" fill="black"/>
      </svg>
    </svg>
  `,

  prototype: `
    <svg viewBox="0 0 107 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="107" height="100" viewBox="0 0 107 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0C2.23858 0 0 2.23858 0 5V95C0 97.7614 2.23858 100 5 100H41C43.7614 100 46 97.7614 46 95V5C46 2.23858 43.7614 0 41 0H5ZM26.2797 5.1608C26.2797 5.74413 25.808 6.21714 25.2263 6.21714H16.9427C16.361 6.21714 15.8893 5.74413 15.8893 5.1608V4.92958C15.8893 4.34624 16.361 3.87324 16.9427 3.87324H25.2263C25.808 3.87324 26.2797 4.34624 26.2797 4.92958V5.1608ZM30.1107 5.1608C30.1107 5.74413 29.639 6.21714 29.0573 6.21714H28.8267C28.2449 6.21714 27.7732 5.74413 27.7732 5.1608V4.92958C27.7732 4.34624 28.2449 3.87324 28.8267 3.87324H29.0573C29.639 3.87324 30.1107 4.34624 30.1107 4.92958V5.1608Z" fill="black"/>
        <path d="M66 0C63.2386 0 61 2.23858 61 5V95C61 97.7614 63.2386 100 66 100H102C104.761 100 107 97.7614 107 95V5C107 2.23858 104.761 0 102 0H66ZM87.2797 5.1608C87.2797 5.74413 86.808 6.21714 86.2263 6.21714H77.9427C77.361 6.21714 76.8893 5.74413 76.8893 5.1608V4.92958C76.8893 4.34624 77.361 3.87324 77.9427 3.87324H86.2263C86.808 3.87324 87.2797 4.34624 87.2797 4.92958V5.1608ZM91.1107 5.1608C91.1107 5.74413 90.639 6.21714 90.0573 6.21714H89.8267C89.2449 6.21714 88.7732 5.74413 88.7732 5.1608V4.92958C88.7732 4.34624 89.2449 3.87324 89.8267 3.87324H90.0573C90.639 3.87324 91.1107 4.34624 91.1107 4.92958V5.1608Z" fill="black"/>
        <path d="M15 50C15 54.4183 18.5817 58 23 58C27.4183 58 31 54.4183 31 50C31 45.5817 27.4183 42 23 42C18.5817 42 15 45.5817 15 50ZM85.5607 51.0607C86.1464 50.4749 86.1464 49.5251 85.5607 48.9393L76.0147 39.3934C75.4289 38.8076 74.4792 38.8076 73.8934 39.3934C73.3076 39.9792 73.3076 40.9289 73.8934 41.5147L82.3787 50L73.8934 58.4853C73.3076 59.0711 73.3076 60.0208 73.8934 60.6066C74.4792 61.1924 75.4289 61.1924 76.0147 60.6066L85.5607 51.0607ZM23 50V51.5H84.5V50V48.5H23V50Z" fill="#DDDDDD"/>
      </svg>
    </svg>
  `,

  test: `
    <svg viewBox="0 0 70 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="70" height="102" viewBox="0 0 70 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="14" width="70" height="88" rx="10" fill="black"/>
        <path d="M35.5 1C40.0228 1 43.7217 4.52488 43.999 8.97656C44.3315 9.01798 44.7714 9.04745 45.2695 9.05371H48.5195C50.4367 9.05372 52 10.6157 52 12.5332V21.5205C52 23.4388 50.4329 25 48.5195 25H22.4805C20.5633 25 19 23.438 19 21.5205V12.5361C19 10.6186 20.5633 9.05665 22.4805 9.05664H25.5293C26.1104 9.05664 26.624 9.02331 27 8.97656C27.2773 4.52485 30.9772 1 35.5 1ZM35.5029 8.57812C34.3013 8.57819 33.3262 9.5534 33.3262 10.7529C33.3262 11.9525 34.3013 12.9277 35.5029 12.9277C36.7046 12.9277 37.6797 11.9525 37.6797 10.7529C37.6797 9.55336 36.7046 8.57812 35.5029 8.57812Z" fill="black" stroke="black" stroke-width="2"/>
        <path d="M14 43L17.2929 46.2929C17.6834 46.6834 18.3166 46.6834 18.7071 46.2929L27 38" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round"/>
        <path d="M37 42.5H57" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round"/>
        <path d="M14 62L17.2929 65.2929C17.6834 65.6834 18.3166 65.6834 18.7071 65.2929L27 57" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round"/>
        <path d="M37 61.5H57" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round"/>
        <path d="M14 81L17.2929 84.2929C17.6834 84.6834 18.3166 84.6834 18.7071 84.2929L27 76" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round"/>
        <path d="M37 80.5H57" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round"/>
      </svg>
    </svg>
  `,
};

function renderSectionMedia(media) {
  if (!media) return "";

  // New flexible structure: { layout: "grid", items: [...], columns: 1|2|3 }
  if (media.layout && media.items && Array.isArray(media.items)) {
    if (media.items.length === 0) return "";

    // Determine column count (default to 1)
    const columns = media.columns || 1;
    const columnClass = `media-grid-${columns}`;

    // Render images based on provided items array
    // Layout is determined by CSS grid with column-specific classes
    return `
      <div class="detail-section__media ${columnClass}" data-layout="${media.layout}" data-columns="${columns}"${media.style ? ` data-style="${media.style}"` : ""}>
        ${media.items
          .map(
            (imgPath) => `
          <img src="${imgPath}" alt="Project media" />
        `,
          )
          .join("")}
      </div>
    `;
  }

  // Legacy support: array of objects with src/alt
  if (Array.isArray(media)) {
    if (media.length === 0) return "";
    return `
      <div class="detail-section__media media-grid-1">
        ${media
          .map(
            (item) => `
          <img src="${item.src}" alt="${item.alt}" />
        `,
          )
          .join("")}
      </div>
    `;
  }

  // Legacy support: single image object
  if (media.type === "image") {
    return `
      <div class="detail-section__media">
        <img src="${media.src}" alt="${media.alt}" />
      </div>
    `;
  }

  return "";
}

function renderSection(section) {
  switch (section.kind) {
    case "desc":
      return `
        <section class="detail-section" id="${section.id}">
          <h2 class="detail-section__title">${section.label.toUpperCase()}</h2>
          ${renderTextBody(section.body)}
          ${renderSectionMedia(section.media)}
        </section>`;

    case "placeholder":
      return `
        <section class="detail-section" id="${section.id}">
          <h2 class="detail-section__title">${section.label.toUpperCase()}</h2>
        </section>`;

    case "icon-row":
      return `
        <section class="detail-section" id="${section.id}">
          <h2 class="detail-section__title" style="margin-bottom:32px;">
            ${section.label.toUpperCase()}
          </h2>

          <div class="process-row">
            ${section.items
              .map(
                (item) => `
                  <div class="process-row__item">
                    <div class="process-row__icon">
                      ${designThinkingIcons[item.icon]}
                    </div>

                    <span class="process-row__label">
                      ${item.label}
                    </span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>`;

    case "video":
      return `
        <section class="detail-section" id="${section.id}">
          <h2 class="detail-section__title">
            ${section.label.toUpperCase()}
          </h2>

          <div class="detail-video">
            <video
              class="detail-video__player"
              controls
              playsinline
              preload="metadata"
            >
              <source src="${section.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </section>`;

    case "accordion":
      return `
        <section class="detail-section" id="${section.id}">
          <h2 class="detail-section__title" style="margin-bottom:8px;">${section.label.toUpperCase()}</h2>
          ${renderTextBody(section.body)}
          <div class="accordion-list">
            ${section.items
              .map(
                (item, i) => `
              <div class="accordion-row">
                <button class="accordion-row__head">
                  <span class="accordion-row__num">${String(i + 1).padStart(2, "0")}</span>  
                  <span class="accordion-row__title">${item.label}</span>
                  <span class="accordion-row__icon"></span>
                </button>
                <div class="accordion-row__panel">
                  <div class="accordion-row__panel-inner" style="display:block;">
                    ${
                      item.kind === "table"
                        ? `
                        ${item.body ? renderTextBody(item.body) : ""}
                        ${renderTable(item)}
                      `
                        : `
                        ${renderTextBody(item.body)}
                        ${renderSectionMedia(item.media)}
                        ${renderCTA(item)}
                      `
                    }
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </section>`;

    case "table":
      return `
        <section class="detail-section" id="${section.id}">
          <h2 class="detail-section__title" style="margin-bottom:24px;">
            ${section.label.toUpperCase()}
          </h2>
          ${
            section.body
              ? `
            <p class="detail-section__body" style="margin-bottom:24px;">
              ${section.body}
            </p>
          `
              : ""
          }
          ${renderTable(section)}
        </section>`;

    default:
      return "";
  }
}

function renderCurious(project) {
  const el = document.getElementById("curious-section");
  if (!el) return;
  const related = getRelatedProjects(project);
  if (!related.length) {
    el.remove();
    return;
  }

  el.innerHTML = `
    <div class="container">
      <h2 class="curious__title">Curious to see more?</h2>
      <div class="curious__grid">
        ${related
          .map(
            (p) => `
          <a class="curious__card" href="${projectHref(p)}">
            <div class="curious__card-visual" style="background:${p.bg}">
              ${p.image ? `<img src="${p.image}" alt="${p.name}">` : ""}
            </div>
            <p class="curious__card-name">${p.name}</p>
          </a>
        `,
          )
          .join("")}
      </div>
      <hr class="curious__divider">
    </div>
  `;
}

function iconArrowLeft() {
  return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 11H10M3 11V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="rotate(180 7 7)"/></svg>`;
}
function iconFigma() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Top: Red -->
    <path
      d="M4 3.5C4 1.567 5.567 0 7.5 0H12V8H7.5C5.567 8 4 6.433 4 4.5V3.5Z"
      fill="currentColor"
    />

    <!-- Top: Orange -->
    <path
      d="M12 0H16.5C18.433 0 20 1.567 20 3.5V4.5C20 6.433 18.433 8 16.5 8H12V0Z"
      fill="currentColor"
    />

    <!-- Middle: Purple -->
    <path
      d="M4 11.5C4 9.567 5.567 8 7.5 8H12V16H7.5C5.567 16 4 14.433 4 12.5V11.5Z"
      fill="currentColor"
    />

    <!-- Middle: Blue -->
    <path
      d="M12 12C12 9.791 13.791 8 16 8C18.209 8 20 9.791 20 12C20 14.209 18.209 16 16 16C13.791 16 12 14.209 12 12Z"
      fill="currentColor"
    />

    <!-- Bottom: Green -->
    <path
      d="M4 19.5C4 17.567 5.567 16 7.5 16H12V20.5C12 22.433 10.433 24 8.5 24H7.5C5.567 24 4 22.433 4 20.5V19.5Z"
      fill="currentColor"
    />
  </svg>`;
}
function iconDocument() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v15H6V2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
}
