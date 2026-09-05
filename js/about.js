const SKILLS = [
  {
    title: "UI/UX Design",
    open: true,
    groups: [
      [
        "Design Thinking",
        "User Research",
        "User Interviews",
        "Empathy Mapping",
        "Affinity Diagramming",
        "User Personas",
      ],
      [
        "How Might We (HMW)",
        "Point of View (POV)",
        "Information Architecture",
        "User Flow",
        "Wireframing",
        "Prototyping",
      ],
      [
        "High-Fidelity UI Design",
        "Design Systems",
        "Task Scenario Development",
        "Usability Testing",
        "System Usability Scale (SUS)",
        "Design Iteration",
      ],
    ],
  },

  {
    title: "Business Analysis",
    groups: [
      [
        "Requirements Gathering",
        "Stakeholder Interviews",
        "Workflow Analysis",
        "Business Process Analysis",
        "Problem Analysis",
        "Solution Requirements Definition",
      ],
      [
        "SDLC",
        "User Acceptance Testing (UAT)",
        "Test Scenario Preparation",
        "Process Improvement",
        "Documentation",
        "Solution Validation",
      ],
    ],
  },

  {
    title: "Data & Machine Learning",
    groups: [
      [
        "Python",
        "Data Cleaning",
        "Data Wrangling",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization",
        "Statistics",
      ],
      [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Streamlit",
        "Dashboard Development",
      ],
      ["KPI Reporting", "Business Insight Reporting", "ETL", "Mondrian OLAP"],
    ],
  },

  {
    title: "Software Development",
    groups: [
      ["HTML", "CSS", "JavaScript", "PHP", "Java", "Python"],
      ["Dart", "Visual Basic .NET", "React Native", "MySQL", "Git", "XAMPP"],
    ],
  },

  // {
  //   title: "Design",
  //   groups: [
  //     [
  //       "Figma",
  //       "FigJam",
  //       "Adobe Illustrator",
  //       "Adobe Photoshop",
  //       "Adobe Premiere Pro",
  //       "Adobe After Effects",
  //     ],
  //     [
  //       "Canva",
  //       "CapCut",
  //       "Social Media Content Design",
  //       "Brand Visual Identity",
  //       "Marketing Collateral",
  //       "Creative Direction",
  //     ],
  //   ],
  // },
];

const EXPERIENCE = [
  {
    date: "Aug 2023 — Apr 2024",
    title: "Creative Marketing",
    role: "Fazt Creative (now Bloomative)",
    desc: "Managed digital marketing and social media activities for four clients, covering content planning, visual design, organic content strategy, Meta Ads, and campaign performance reporting.",
  },
  {
    date: "Mar 2023 — Sep 2023",
    title: "Creative Graphic Designer",
    role: "Skill Up Foundation (now Satu Edu Foundation)",
    desc: "Created visual assets and branding materials using Figma while collaborating with the team on concept development, design refinement, and maintaining brand consistency.",
  },
  {
    date: "Jul 2023 — Nov 2023",
    title: "Freelance Graphic Designer",
    role: "Sigma X Pro",
    desc: "Developed content plans, visual concepts, and Instagram content aligned with brand identity, while supporting social media copywriting and Reels content planning.",
  },
  {
    date: "May 2023 — Sep 2023",
    title: "Brand Creative Designer",
    role: "Teman Bercerita Indonesia",
    desc: "Designed graphic materials and illustrations based on project briefs while collaborating on concept development, revisions, and visual identity consistency.",
  },
];

const ACHIEVEMENTS = [
  {
    date: "2024",
    title: "2nd Place National UI/UX Design Competition FKBMIK",
    org: "UPN \u201cVeteran\u201d Jakarta",
    desc: "Awarded 2nd Place in the National UI/UX Design Competition FKBMIK 2024 for designing Warisan Rasa, a mobile app that preserves and promotes East Java's traditional culinary heritage.",
    actions: [
      {
        label: "View Certificate",
        file: "aboutfiles/fkbmik-certificate.pdf",
      },
      // {
      //   label: "View Documentation",
      //   file: "images/projects/warisan-rasa.png",
      // },
    ],
  },
  {
    date: "2023",
    title: "2nd Place National UI/UX Design Competition Create in V3.0",
    org: "Universitas Ahmad Dahlan",
    desc: "Awarded 2nd Place in the National UI/UX Design Competition Create in V3.0 2023 for designing SIPILU, an e-voting application that improves the accessibility, efficiency, and security of Indonesia's election process.",
    actions: [
      {
        label: "View Certificate",
        file: "aboutfiles/createin-certificate.pdf",
      },
      // {
      //   label: "View Documentation",
      //   file: "images/projects/sipilu.png",
      // },
    ],
  },
  {
    date: "2023",
    title: "3rd Place UI/UX Design Competition Dies Natalis",
    org: "UPN \u201cVeteran\u201d Jawa Timur",
    desc: "Awarded 3rd Place in the UI/UX Design Competition Dies Natalis 2023 for designing NutriKids, a mobile app that supports child growth monitoring and stunting prevention.",
    actions: [
      {
        label: "View Certificate",
        file: "aboutfiles/diesnat-certificate.pdf",
      },
      // {
      //   label: "View Documentation",
      //   file: "images/projects/nutrikids.png",
      // },
    ],
  },
  {
    date: "2025",
    title: "Awardee of Sidoarjo Academic Scholarship",
    org: "Kabupaten Sidoarjo",
    desc: "Selected as a recipient of the Sidoarjo Government Scholarship, a merit-based educational support program recognizing academic performance and student achievement.",
    actions: [],
  },
  {
    date: "2023",
    title: "P2MW 2023 Funding Recipient",
    org: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi",
    desc: "Successfully secured funding through the national Student Entrepreneur Development Program (P2MW) after passing administrative, business proposal, and budget justification evaluations. Selected as one of 1,871 funded student business teams nationwide and among only 12 funded teams from UPN Veteran Jawa Timur.",
    actions: [
      {
        label: "View Certificate",
        file: "aboutfiles/kmi-certificate.pdf",
      },
    ],
  },
  {
    date: "2023",
    title: "KMI Expo XIV 2023 Participant",
    org: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi",
    desc: "Selected to participate in KMI Expo XIV 2023 through a national selection process based on business performance and the business implementation report during the P2MW 2023 program. Became one of only 2 teams from UPN Veteran East Java that qualified for KMI Expo, representing the university alongside approximately 493 of the best student business teams from across Indonesia.",
    actions: [
      {
        label: "View Certificate",
        file: "aboutfiles/kmi-certificate.pdf",
      },
      // {
      //   label: "View Documentation",
      //   file: "images/projects/exbook.png",
      // },
    ],
  },
];

const EDUCATION = [
  {
    date: "2022 - 2026",
    title: "UPN \u201cVeteran\u201d Jawa Timur",
    role: "Bachelor of Computer Science in Information Systems",
    sub: "GPA: 3.85 / 4.00",
    desc: "During my undergraduate studies in Information Systems, I focused on business requirements analysis, information systems design, UI/UX design, and digital product design. I actively participated in academic projects, national UI/UX competitions, entrepreneurship programs, and student organizations where I led a team, managed promotional and visual materials, and collaborated across committees.",
  },
  {
    date: "2024",
    title: "Bangkit Academy 2024 Batch 2",
    role: "Machine Learning Path \u2014 Led by Google, Tokopedia, Gojek & Traveloka",
    sub: "Score: 90.30 / 100",
    desc: "As a Machine Learning Cohort, I gained extensive knowledge in machine learning through self-paced courses on Dicoding and Coursera, and Instructor-Led Training (ILT) sessions focusing on both technical and soft skills. I contributed to a team project responsible for gathering and preprocessing datasets, and building and training machine learning models.",
  },
  {
    date: "2019 - 2022",
    title: "SMK Negeri 3 Surabaya",
    role: "Multimedia",
    sub: "",
    desc: "",
  },
];

const CERTIFICATIONS = [
  {
    date: "2025",
    title: "Junior Web Programmer",
    org: "Badan Nasional Sertifikasi Profesi",
    file: "aboutfiles/jwp-certificate.pdf",
  },
  {
    date: "2024",
    title: "Data Analysis with Python",
    org: "Dicoding Indonesia",
    file: "aboutfiles/adp-certificate.pdf",
  },
  {
    date: "2024",
    title: "Crash Course on Python",
    org: "Google",
    file: "aboutfiles/ccp-certificate.pdf",
  },
  {
    date: "2022",
    title: "KKNI Level II Multimedia",
    org: "Badan Nasional Sertifikasi Profesi",
    file: "aboutfiles/mm-certificate.pdf",
  },
];

const CAMPUSACTIVITIES = [
  {
    date: "Jan 2023 - Feb 2023",
    title: "HIMASIFO UPN \u201cVeteran\u201d Jawa Timur",
    org: "Head of Publication, Decoration, and Documentation Division at PEMIRA 2023",
    file: "aboutfiles/pemira-certificate.pdf",
  },
  {
    date: "Oct 2022 - Nov 2022",
    title: "HIMASIFO UPN \u201cVeteran\u201d Jawa Timur",
    org: "Head of Publication, Decoration, and Documentation Division at FANTASTIS 2022",
    file: "aboutfiles/fantastis-certificate.pdf",
  },
  {
    date: "Jun 2023 - Aug 2023",
    title: "BEM Fasilkom UPN \u201cVeteran\u201d Jawa Timur",
    org: "Staff of Publication, Decoration, and Documentation Division at MOSAIK 2023",
    file: "aboutfiles/mosaik-certificate.pdf",
  },
  {
    date: "Aug 2023 - Sep 2023",
    title: "HIMASIFO UPN \u201cVeteran\u201d Jawa Timur",
    org: "Staff of Publication, Decoration, and Documentation Division at EDISI 2023",
    file: "aboutfiles/edisI-certificate.pdf",
  },
  {
    date: "Jun 2023 - Jul 2023",
    title: "HIMASIFO UPN \u201cVeteran\u201d Jawa Timur",
    org: "Staff of Publication, Decoration, and Documentation Division at Dies Natalis 2023",
    file: "aboutfiles/dnsifo-certificate.pdf",
  },
];

function iconMail() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M4 7L12 13L20 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;
}

function actionButtons(actions) {
  if (!actions?.length) return "";
  return `
    <div class="timeline-item__actions">
      ${actions
        .map(
          (action) =>
            `<button type="button" class="btn btn--small viewer-trigger" style="text-transform: uppercase;" data-viewer-src="${action.file}" data-viewer-label="${action.label}">${action.label}</button>`,
        )
        .join("")}
    </div>
  `;
}

function initViewerOverlay() {
  const viewer = document.createElement("div");

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
          <p>Select a document to preview.</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(viewer);

  const content = viewer.querySelector(".viewer-overlay__content");
  const closeButton = viewer.querySelector(".viewer-overlay__close");

  const closeViewer = () => {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    content.innerHTML = `
      <div class="viewer-overlay__placeholder">
        <p>Select a document to preview.</p>
      </div>
    `;
  };

  const openViewer = (file, label) => {
    const extension = file.split(".").pop().toLowerCase();

    const isImage = ["png", "jpg", "jpeg", "gif"].includes(extension);
    const isPdf = extension === "pdf";

    if (isPdf) {
      content.innerHTML = `
        <iframe
          class="viewer-overlay__frame"
          src="${file}"
          title="${label}"
        ></iframe>
      `;
    } else if (isImage) {
      content.innerHTML = `
        <img
          class="viewer-overlay__image"
          src="${file}"
          alt="${label}"
        />
      `;
    } else {
      content.innerHTML = `
        <div class="viewer-overlay__placeholder">
          <p>Preview not available for this file type.</p>
        </div>
      `;
    }

    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  viewer.addEventListener("click", (event) => {
    if (
      event.target.closest("[data-viewer-close]") ||
      event.target === viewer
    ) {
      closeViewer();
    }
  });

  closeButton.addEventListener("click", closeViewer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && viewer.classList.contains("is-open")) {
      closeViewer();
    }
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".viewer-trigger");

    if (!trigger) return;

    event.preventDefault();

    const file = trigger.dataset.viewerSrc;
    const label = trigger.dataset.viewerLabel || trigger.textContent.trim();

    if (file) {
      openViewer(file, label);
    }
  });
}

function renderAboutPage() {
  const social = document.querySelector(".about-social");
  if (social) {
    social.innerHTML = `
      <a href="mailto:alfinaandr04@gmail.com" aria-label="Email">${iconMail()}</a>
      <a href="https://linkedin.com/in/alfinaandriani04" aria-label="LinkedIn" target="_blank" rel="noopener">${iconLinkedIn()}</a>
      <a href="https://instagram.com/alfinaandriani_/" aria-label="Instagram" target="_blank" rel="noopener">${iconInstagram()}</a>
      <a href="https://github.com/alfinaandriani/" aria-label="GitHub" target="_blank" rel="noopener">${iconGithub()}</a>
      <a href="https://behance.net/alfinaandriani04" aria-label="Behance" target="_blank" rel="noopener">${iconBehance()}</a>
    `;
  }

  document.getElementById("skills-accordion").innerHTML = SKILLS.map(
    (skill, i) => `
    <div class="accordion-row ${skill.open ? "is-open" : ""}">
      <button class="accordion-row__head">
        <span class="accordion-row__num">${String(i + 1).padStart(2, "0")}</span>
        <span class="accordion-row__title">${skill.title}</span>
        <span class="accordion-row__icon"></span>
      </button>
      <div class="accordion-row__panel">
        <div class="accordion-row__panel-inner">
          ${skill.groups.map((group) => `<ul>${group.map((item) => `<li>${item}</li>`).join("")}</ul>`).join("")}
        </div>
      </div>
    </div>
  `,
  ).join("");

  document.getElementById("achievement-list").innerHTML = ACHIEVEMENTS.map(
    (a) => `
    <div class="timeline-item">
      <p class="timeline-item__date">${a.date}</p>
      <div class="timeline-item__detail">
        <p class="timeline-item__title">${a.title}</p>
        <p class="timeline-item__org">${a.org}</p>
        <p class="timeline-item__desc" style="margin-bottom: 16px;">${a.desc}</p>
        ${actionButtons(a.actions)}
      </div>
    </div>
  `,
  ).join("");

  document.getElementById("education-list").innerHTML = EDUCATION.map(
    (e) => `
    <div class="timeline-item">
      <p class="timeline-item__date">${e.date}</p>
      <div class="timeline-item__detail">
        <p class="timeline-item__title">${e.title}</p>
        <p class="timeline-item__org">${e.role}</p>
        ${e.sub ? `<p class="timeline-item__sub">${e.sub}</p>` : ""}
        ${e.desc ? `<p class="timeline-item__desc">${e.desc}</p>` : ""}
      </div>
    </div>
  `,
  ).join("");

  document.getElementById("experience-list").innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="timeline-item">
      <p class="timeline-item__date">${e.date}</p>
      <div class="timeline-item__detail">
        <p class="timeline-item__title">${e.title}</p>
        <p class="timeline-item__org">${e.role}</p>
        <p class="timeline-item__desc">${e.desc}</p>
      </div>
    </div>
  `,
  ).join("");

  document.getElementById("certification-list").innerHTML = CERTIFICATIONS.map(
    (c) => `
    <div class="timeline-item">
      <p class="timeline-item__date">${c.date}</p>
      <div class="timeline-item__detail">
        <p class="timeline-item__title">${c.title}</p>
        <p class="timeline-item__org">${c.org}</p>
        ${actionButtons([{ label: "View Certificate", file: c.file }])}
      </div>
    </div>
  `,
  ).join("");

  document.getElementById("campus-activities-list").innerHTML =
    CAMPUSACTIVITIES.map(
      (k) => `
    <div class="timeline-item">
      <p class="timeline-item__date">${k.date}</p>
      <div class="timeline-item__detail">
        <p class="timeline-item__title">${k.title}</p>
        <p class="timeline-item__org">${k.org}</p>
        ${actionButtons([{ label: "View Certificate", file: k.file }])}
      </div>
    </div>
  `,
    ).join("");

  initAccordions();
  initScrollSpy("main section[id]", ".page-sidebar__link");
  initStickySidebarStop(
    document.getElementById("about-sidebar"),
    document.getElementById("site-footer"),
  );
  initRevealOnScroll(".about-hero, .section--tight", {
    distance: "20px",
    duration: "400ms",
  });
  initRevealOnScroll(".timeline-item", {
    distance: "16px",
    duration: "400ms",
    stagger: 40,
  });
  initViewerOverlay();
}
