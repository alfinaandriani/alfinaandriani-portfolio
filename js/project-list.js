function renderProjectList() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat") || "uiux";
  const category = CATEGORIES[cat] || CATEGORIES.uiux;
  const projects = getProjectsByCategory(cat);

  document.title = `${category.label} — Alfina Andriani`;

  const layout = document.getElementById("project-list-layout");
  layout.innerHTML = `
    <aside class="page-sidebar" id="list-sidebar">
      <p class="page-sidebar__title">${category.sidebarLabel}</p>
      <nav class="page-sidebar__list">
        ${projects.map((p) => `<a class="page-sidebar__link" href="#${p.id}">${p.name.toUpperCase()}</a>`).join("")}
      </nav>
      <div class="page-sidebar--contact">
        <a href="mailto:alfinaandr04@gmail.com">alfinaandr04@gmail.com ${iconArrow()}</a>
        <p>Sidoarjo, Indonesia</p>
      </div>
    </aside>
    <div class="page-content">
      ${projects.map((p) => renderProjectCard(p)).join("")}
    </div>
  `;

  const footer = document.getElementById("site-footer");
  const sidebar = document.getElementById("list-sidebar");
  initStickySidebarStop(sidebar, footer);
  initScrollSpy(".project-card", ".page-sidebar__link");
  initRevealOnScroll(".project-card", {
    distance: "20px",
    duration: "420ms",
    stagger: 60,
  });
}

function renderProjectCard(project) {
  const imageBlock = project.image
    ? `<img src="${project.image}" alt="${project.name}" loading="lazy">`
    : "";

  const tags = project.tags
    ? `<div class="project-card__tags">${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>`
    : "";

  return `
    <article class="project-card" id="${project.id}">
      <div class="project-card__info">
        <h2 class="project-card__title">${project.name}</h2>
        <p class="project-card__desc">${project.detailIntro}</p>
        ${tags}
        <a href="${projectHref(project)}" class="btn">OPEN PROJECT →</a>
      </div>
      <div class="project-card__visual" style="background:${project.bg}">
        ${imageBlock}
      </div>
    </article>
  `;
}
