const CATEGORIES = {
  uiux: { label: "UI/UX Design", sidebarLabel: "UI/UX Design" },
  dataml: { label: "Data & ML", sidebarLabel: "Data & ML" },
  softdev: {
    label: "Software Development",
    sidebarLabel: "Software Development",
  },
  business: { label: "Business Analysis", sidebarLabel: "Business Analysis" },
  design: { label: "Design", sidebarLabel: "Design" },
};

const PROJECTS = [
  /* ---------------- UI/UX DESIGN ---------------- */
  {
    id: "uiux-maroku",
    name: "Maroku",
    category: "uiux",
    bg: "#E9F9FF",
    color: "#013A70",
    image: "images/projects/maroku.png",
    tags: [
      "User Research",
      "User Flow",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "System Usability Scale",
      "Design Iteration",
    ],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Timeline", value: "Sep 2025 - Feb 2026" },
      { label: "Tools", value: "Figma, Maze, Draw.io" },
    ],
    detailIntro:
      "Designed a mobile experience for Maroku using a Design Thinking approach, translating user research and usability testing into structured ordering, custom cake, class registration, and store management flows.",
    template: "maroku-uiux",
    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=28-37667&p=f&viewport=45%2C199%2C0.02&t=NYGlPNiwocFBWiMi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A39336&show-proto-sidebar=1&page-id=0%3A1",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            Maroku is a cake shop in Pasuruan offering daily cakes, custom orders, large event orders, and cake decoration classes. The project focused on designing a mobile experience to make ordering and service information more structured for both customers and the store team.
          </p>
          <p>
            Using a Design Thinking approach, I conducted user research, mapped user needs, defined key problems, developed user flows and information architecture, and translated the findings into a high-fidelity prototype. The design was iterated based on usability testing with both customer and store users.
          </p>
        `,
        items: [
          {
            label: "Problem Statement",
            body: `
              <p>
                The existing ordering process relied heavily on WhatsApp and manual record-keeping through Google Keep. This created opportunities for missed information and communication gaps between customers, admins, and the kitchen team.
              </p>
              <p>
                Customers also struggled to check order availability, communicate custom cake requirements clearly, and track the progress of large orders. Meanwhile, the store needed a more structured way to manage order information and monitor its operations.
              </p>
            `,
          },
          {
            label: "Problem Solution",
            body: `
              <p>
                I designed a mobile experience that brings key ordering and service flows into a more structured interface.
              </p>
              <p>
                The solution includes clearer product discovery and availability information, dedicated flows for custom cake and big orders, class registration with schedule and quota information, and order tracking. On the operational side, the design also provides structured flows for managing orders across different store roles.
              </p>
              <p>
                The prototype was evaluated through usability testing and SUS across <strong>two iterations</strong>. SUS scores improved from <strong>80 → 89.5 for customers</strong> and <strong>76.5 → 87 for store users</strong>, indicating improved perceived usability after design iteration.
              </p>
            `,
          },
        ],
      },

      {
        id: "design-thinking",
        label: "Design Thinking",
        kind: "icon-row",
        items: [
          {
            label: "Empathize",
            icon: "empathize",
          },
          {
            label: "Define",
            icon: "define",
          },
          {
            label: "Ideate",
            icon: "ideate",
          },
          {
            label: "Prototype",
            icon: "prototype",
          },
          {
            label: "Test",
            icon: "test",
          },
        ],
      },

      {
        id: "empathize",
        label: "Empathize",
        kind: "desc",
        body: `
          <p>
            The Empathize stage was conducted to gain a deeper understanding of the needs, behaviors, experiences, and challenges faced by MAROKU users firsthand. The process began with interviews with <strong>MAROKU’s owner</strong> and several customer groups, including <strong>daily customers, decoration class participants, and corporate clients</strong>.
          </p>
          <p>
            The interview findings were then mapped using an <strong>Empathy Map</strong> to capture the user experience from different perspectives through the <strong>Says, Thinks, Feels, Does, Pain, and Gain aspects</strong>.
          </p>
          <p>
            This process revealed that each user group has distinct needs. Internally, MAROKU faces challenges in its operational processes and customer communication, while customers need <strong>clearer information, easier communication, and more structured ordering and registration processes</strong>.
          </p>
          <p>
            The Empathy Map helped transform the interview findings into more structured insights, providing a foundation for identifying the key problems to be addressed in the next stage.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: [
            "images/projects/maroku/empathy-map-1.png",
            "images/projects/maroku/empathy-map-2.png",
            "images/projects/maroku/empathy-map-3.png",
            "images/projects/maroku/empathy-map-4.png",
          ],
        },
      },

      {
        id: "define",
        label: "Define",
        kind: "accordion",
        body: `
          <p>
            During the Define stage, the interview findings were analyzed to <strong>identify patterns and the key problems</strong> experienced by both MAROKU and its customers.
          </p>
          <p>
            This process was carried out through an <strong>Affinity Diagram</strong> to group the identified problems by theme, along with <strong>User Personas</strong> to understand the characteristics, needs, and pain points of each user group.
          </p>
          <p>
            The findings from this stage served as the foundation for developing the <strong>problem statement</strong> and determining the focus of the solution in the next stage.
          </p>
        `,
        items: [
          {
            label: "Affinity Diagram",
            body: `
              <p>
                The interview findings were organized using an <strong>Affinity Diagram</strong> to identify patterns of challenges across different user perspectives. Several key areas emerged from this process, including <strong>product information, ordering, availability, custom cakes, communication, order status, decoration classes, and payment</strong>.
              </p>
              <p>
                The mapping revealed that MAROKU’s processes still rely heavily on manual communication and fragmented record-keeping, creating challenges in accessing information, placing orders, and managing day-to-day operations.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 2,
              items: [
                "images/projects/maroku/affinity-diagram-1.png",
                "images/projects/maroku/affinity-diagram-2.png",
                "images/projects/maroku/affinity-diagram-3.png",
                "images/projects/maroku/affinity-diagram-4.png",
                "images/projects/maroku/affinity-diagram-5.png",
                "images/projects/maroku/affinity-diagram-6.png",
                "images/projects/maroku/affinity-diagram-7.png",
                "images/projects/maroku/affinity-diagram-8.png",
              ],
            },
          },
          {
            label: "User Persona",
            body: "User Personas were developed based on the interview findings to represent the characteristics, needs, goals, and pain points of four user groups: <strong>Daily Order Customer, Class Participant, Corporate Customer, and Maroku Team.</strong> These personas served as a reference throughout the design process, ensuring that the solutions remained <strong>user-centered while staying relevant to MAROKU’s business needs</strong>.",
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/maroku/user-persona-1.png",
                "images/projects/maroku/user-persona-2.png",
                "images/projects/maroku/user-persona-3.png",
                "images/projects/maroku/user-persona-4.png",
              ],
            },
          },
        ],
      },

      {
        id: "ideate",
        label: "Ideate",
        kind: "accordion",
        body: "The Ideate stage focused on translating user problems and needs into <strong>structured solution concepts</strong>. This stage involved developing solution ideas, information architecture, user flows, and wireframes as an initial representation of the interface. The entire process was carried out as the foundation for developing a MAROKU application that is <strong>relevant, intuitive, and aligned with users’ needs</strong>.",
        items: [
          {
            label: "Solution Idea",
            body: "Solution Ideas were developed in response to the problems identified in the previous stage. Each problem was translated into a solution that considered <strong>ease of use, clarity of information, and process efficiency</strong> for both customers and the MAROKU team.",
            kind: "table",
            columns: ["Affinity Diagram", "How Might We", "Solution"],
            rows: [
              [
                "Product Catalog & Information",
                "How might we provide a complete, easily accessible, and interactive product catalog so that customers can understand cake choices, prices, and product details without having to repeatedly ask the admin?",
                "Create an interactive e-catalog displaying complete product information such as photos, prices, and cake details, as well as filters based on price and ingredients.",
              ],
              [
                "Ordering & Order Flow",
                "How might we simplify the ordering process so that customers do not need to repeatedly ask for general ordering information, while also reducing the admin's burden of manually recording orders?",
                "Design a structured and informative ordering flow that is automatically recorded.",
              ],
              [
                "Date, Stock & Availability",
                "How might we display product stock availability, date slots, and remaining quotas so that customers can make more certain ordering decisions, while also helping the store manage production and monitor sales more efficiently?",
                "Provide a visual and easy-to-understand display of product availability, date slots, and quotas, making it easier for the store to monitor sales and production.",
              ],
              [
                "Custom Cake & Design",
                "How might we minimize design errors and ensure that custom cake results match customer requests?",
                "Provide a structured custom cake ordering form containing design details, colors, image references, and confirmation before the production process.",
              ],
              [
                "Admin Response & Communication",
                "How might we reduce customers' dependence on admin responses and speed up communication without increasing the store's workload?",
                "Provide customers with self-service access to information regarding the catalog, order status, and schedule, so that interaction with the admin can be minimized.",
              ],
              [
                "Notifications & Order Status",
                "How might we provide transparency regarding order status through a notification system so that customers can monitor order progress without having to manually confirm, while also helping the store receive notifications when product stock is running low?",
                "Design notifications for order status updates, as well as low-stock notifications for the store.",
              ],
              [
                "Cake Decoration Classes",
                "How might we simplify the registration process for cake decoration classes so that it is faster, more transparent, and free from repetitive manual processes?",
                "Provide a class registration feature that clearly displays quota availability, is easily accessible, and supports an efficient registration and payment flow.",
              ],
              [
                "POS, Payment & Integration",
                "How might we integrate the cashier, payment, and delivery systems so that sales records are more organized and less prone to errors?",
                "Provide an easy-to-use cashier interface with a payment flow, allowing the store to record transactions and monitor sales more conveniently.",
              ],
            ],
          },
          {
            label: "Information Architecture",
            body: "The Information Architecture was designed to systematically organize the application’s menu structure and content based on user needs. This structure helps users find the information and features they need <strong>more easily and intuitively</strong>, while also serving as the foundation for defining the MAROKU app’s navigation.",
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/maroku/ia-2.png",
                "images/projects/maroku/ia-3.png",
                "images/projects/maroku/ia-4.png",
                "images/projects/maroku/ia-5.png",
                "images/projects/maroku/ia-1.png",
              ],
            },
          },
          {
            label: "User Flow",
            body: `
              <p>
                The User Flow was designed to map the steps and user interactions required to complete specific goals within the application. The flows were developed based on the needs and usage scenarios of several roles: <strong>customers, admins, owners, and kitchen staff</strong>.
              </p>
              <p>
                The designed flows cover <strong>authentication, product ordering, custom cakes, big orders, class registration, event and order tracking</strong>, as well as internal processes such as <strong>order management, sales reporting, and production status updates</strong>. Mapping these user flows helped ensure that each process had a <strong>clear, structured, and easy-to-follow journey</strong> before being translated into the interface design.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/maroku/user-flow-1.png",
                "images/projects/maroku/user-flow-2.png",
                "images/projects/maroku/user-flow-3.png",
                "images/projects/maroku/user-flow-4.png",
                "images/projects/maroku/user-flow-5.png",
                "images/projects/maroku/user-flow-6.png",
                "images/projects/maroku/user-flow-7.png",
                "images/projects/maroku/user-flow-8.png",
                "images/projects/maroku/user-flow-9.png",
                "images/projects/maroku/user-flow-10.png",
              ],
            },
          },
          {
            label: "Wireframe",
            body: "The Wireframe was created as an initial interface blueprint to define the layout, information hierarchy, and interaction elements before moving into the visual design stage. This process helped ensure that the structure and flow of each page were aligned with user needs before being developed into the final visual design.",
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/maroku/wireframe-1.png"],
            },
          },
        ],
      },

      {
        id: "prototype",
        label: "Prototype",
        kind: "accordion",
        body: "At the Prototype stage, the designs developed in the previous stages were translated into a <strong>more detailed and interactive visual interface</strong>. This stage included the development of a <strong>Design System</strong> to maintain visual consistency, as well as the creation of a <strong>High-Fidelity Prototype</strong> that more realistically represents the application’s interface and interactions. The prototype was then prepared for use in the Usability Testing stage.",
        items: [
          {
            label: "Design System",
            body: "The Design System was developed to maintain visual and interaction consistency throughout the MAROKU application. It includes key components such as <strong>navigation, color, typography, and other UI elements</strong>, while considering the brand identity and readability to ensure a consistent user experience across every screen.",
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/maroku/design-system.png"],
            },
          },
          {
            label: "Hi-Fi Prototype",
            body: "The High-Fidelity Prototype represents the development of the wireframe into a more complete and interactive visual interface. Each screen is enhanced with colors, typography, UI components, and interactions aligned with the Design System. The prototype covers key features such as authentication, catalog ordering, custom cakes, big orders, classes, events, and order tracking, and is designed to closely resemble a real application for use in usability testing.",
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/maroku/hifi.png"],
            },
            cta: "EXPLORE LIVE FIGMA",
            url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=28-37667&p=f&viewport=45%2C199%2C0.02&t=NYGlPNiwocFBWiMi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A39336&show-proto-sidebar=1&page-id=0%3A1",
          },
        ],
      },

      {
        id: "test",
        label: "Test",
        kind: "accordion",
        body: "The High-Fidelity Prototype was evaluated through usability testing using <strong>Maze</strong> and the <strong>System Usability Scale (SUS)</strong>. Testing involved <strong>five customers</strong> and five store users representing the <strong>Admin, Kitchen, Cashier, and Owner</strong> roles. Participants completed task-based scenarios to evaluate task success, completion time, and interaction paths, followed by SUS to measure perceived usability.",
        items: [
          {
            label: "Usability Testing",
            body: "Participants completed <strong>12 customer tasks</strong> and <strong>33 store tasks</strong> covering authentication, ordering, custom cakes, big orders, class booking, catalog management, order processing, cashier transactions, and reporting. Maze recorded task completion time and success status. The first iteration achieved a usability score of <strong>84 for customers</strong> and <strong>92 for store users</strong>.",
          },
          {
            label: "System Usability Scale",
            body: "SUS was used to evaluate the perceived usability of the prototype after task completion. The first iteration achieved an average score of <strong>80 for customers</strong> and <strong>76.5 for store users</strong>, both categorized as <strong>Good</strong> with an <strong>Acceptable</strong> level of acceptance.",
          },
          {
            label: "Iteration 1 Conclusion",
            body: "The first iteration showed good overall usability, but several interaction issues remained. Customers experienced longer completion times when distinguishing between <strong>custom catalog orders</strong> and <strong>custom orders requiring price quotation</strong>. For store users, some participants provided a price before reviewing the customer's design reference. These findings became the basis for refining the prototype in the next iteration.",
          },
        ],
      },

      {
        id: "define-2",
        label: "Define (2)",
        kind: "accordion",
        body: "The second Define stage focused on analyzing findings from the first usability testing and SUS evaluation. Issues were identified by reviewing <strong>Indirect Success</strong> and <strong>Mission Unfinished</strong> scenarios, followed by analysis of heatmaps, misclick patterns, and navigation paths to distinguish actual usability issues from valid alternative interactions.",
        items: [
          {
            label: "Usability Testing",
            body: `
            <p>
              Maze findings were reviewed to identify tasks where users experienced difficulties. On the customer side, <strong>SP01</strong> showed that 4 of 5 participants did not immediately select the registration action, indicating that the login and registration status was not sufficiently clear.
            </p>
            <img src="images/projects/maroku/define-2-sp01.png" alt="SP01 Heatmap">
            <p>
              The most significant issue appeared in <strong>SP04 and SP06</strong>, where users showed confusion between <strong>Custom Catalog</strong> and <strong>Custom Cake</strong>. Heatmaps and interaction paths showed repeated navigation between these features, while SP04 recorded an unusually long completion time of <strong>1,543.75 seconds</strong>.
            </p>
            <img src="images/projects/maroku/define-2-sp04-sp06.png" alt="SP04 and SP06 Heatmap">
            <p>
              On the store side, most tasks were completed successfully. Some Indirect Success results were caused by alternative navigation paths intentionally provided in the prototype, such as shortcuts from the homepage, and were therefore not considered usability issues.
            </p>
            <img src="images/projects/maroku/define-2-st03.png" alt="ST03 Heatmap">
            <p>
              However, <strong>ST03</strong> revealed a significant issue: some users provided a price before reviewing the customer's design reference. The reference was presented only as an underlined text link, making it less visually prominent than other actions and potentially increasing the risk of pricing without considering the requested design.
            </p>
          `,
          },
          {
            label: "System Usability Scale",
            body: `
              <p>
                SUS results from the first iteration were generally categorized as <strong>Good</strong> and <strong>Acceptable</strong>. However, lower scores on specific items indicated areas that could still be improved.
              </p>
              <p>
                For customers, <strong>Q4</strong> indicated a perception that additional assistance might be needed when using the system. This aligned with the Maze findings around the Custom Catalog and Custom Cake flow, suggesting that clearer guidance and information were needed at key decision points.
              </p>
              <p>
                For store users, <strong>Q10</strong> indicated a potential learnability issue. This was consistent with the ST03 finding, where some users did not immediately recognize the need to review the design reference before setting a price.
              </p>
              <p>
                These findings were used to define the key design improvements for the second iteration, focusing on <strong>clearer navigation, stronger visual hierarchy, and better guidance at critical interaction points</strong>.
              </p>
            `,
          },
        ],
      },

      {
        id: "ideate-2",
        label: "Ideate (2)",
        kind: "table",
        body: "After identifying the problems experienced by users during the Define stage, the next step was to develop solutions using the How Might We (HMW) approach. This approach was used to transform identified problems into opportunities for user-centered improvement. Each solution was designed to address the insights obtained from the heatmap analysis and the first round of usability testing.",
        columns: ["Insight", "How Might We", "Solution"],
        rows: [
          [
            "Users are unaware that they are not logged in when trying to access certain features.",
            "How might we make the login status more visible so users immediately understand that they need to sign up or log in first?",
            "Make the Sign Up and Log In buttons more prominent and clearly labeled.",
          ],
          [
            "Users are confused about the difference between Catalog Custom and Free Custom.",
            "How might we clearly differentiate Catalog Custom from Free Custom so users do not choose the wrong ordering flow?",
            "Add a confirmation pop-up when users select Free Custom to ensure they understand that the order requires a custom pricing request. If users need an available product that can be processed on the same day, the system provides an option to redirect them to the catalog page.",
          ],
          [
            "Admins do not review the customer's design reference before determining the price.",
            "How might we ensure that admins review the design reference before determining the price?",
            "Reorganize the flow and visual hierarchy on the Custom Order Management page by placing the customer's design reference at the top.",
          ],
          [
            "The customer-side SUS Q4 score indicates that users still perceive a need for technical assistance when using the system.",
            "How might we make the system easier to learn so users can understand the workflow without feeling that they need technical assistance?",
            "Add an interactive guide tour during first-time use to explain key features such as Catalog Custom and Free Custom, along with contextual tooltips at important decision points to help users understand the differences between the ordering flows.",
          ],
          [
            "The store-side SUS Q10 score indicates that users feel they need to learn the system before they can use it optimally.",
            "How might we improve learnability so users can understand the system immediately without requiring additional learning?",
            "Add a guide tour and improve the visual hierarchy and emphasis of important information so the workflow becomes more intuitive.",
          ],
        ],
      },

      {
        id: "prototype-2",
        label: "Prototype (2)",
        kind: "desc",
        body: `
          <p>
            The second prototype iteration incorporated findings from the usability testing and SUS evaluation. Key improvements focused on <strong>visual clarity, navigation guidance, interaction flow, and learnability</strong>.
          </p>

          <img src="images/projects/maroku/prototype-2-sp01.png" alt="Prototype (2) SP01">
          <p>
            <strong>SP01 - Registration & Login.</strong> The Sign up or Log in buttons were redesigned with a larger size, bolder text, and a white container to improve visibility, contrast, and visual hierarchy on the homepage.
          </p>

          <img src="images/projects/maroku/prototype-2-sp04-sp06.png" alt="Prototype (2) SP04 and SP06">
          <p>
            <strong>SP04 & SP06 - Custom Cake.</strong> A confirmation pop-up was added before entering the custom cake flow to clarify the minimum H-5 ordering requirement and provide the catalog as an alternative for same-day orders.
          </p>

          <img src="images/projects/maroku/prototype-2-st03.png" alt="Prototype (2) ST03">
          <p>
            <strong>ST03 - Custom Order Review.</strong> The order review flow was restructured so users could access complete order details and clearly view and enlarge the customer's design reference before making a pricing decision.
          </p>

          <img src="images/projects/maroku/prototype-2-customer-guide-tour.png" alt="Prototype Guide Tour Customer">
          <p>
            <strong>Customer Guide Tour.</strong> A first-use guide tour was introduced to highlight key features and provide short explanations, supporting users in understanding the application without additional assistance.
          </p>

          <img src="images/projects/maroku/prototype-2-store-guide-tour.png" alt="Prototype Guide Tour Store">
          <p>
            <strong>Store Guide Tour.</strong> A guide tour was also added for store users to introduce key homepage elements and functions, improving initial understanding and learnability.
          </p>
        `,
      },

      {
        id: "test-2",
        label: "Test (2)",
        kind: "accordion",
        body: "The second testing iteration evaluated the refined prototype using the <strong>System Usability Scale (SUS)</strong> and <strong>Questionnaire for User Interaction Satisfaction (QUIS)</strong>. The evaluation focused on measuring usability and user satisfaction after the design improvements from the first iteration.",
        items: [
          {
            label: "System Usability Scale",
            body: `
              <p>
                The refined prototype achieved an average SUS score of <strong>89.5 for customers</strong> and <strong>87 for store users</strong>. Both scores were categorized as <strong>Excellent</strong> with an <strong>Acceptable</strong> level of acceptance and a <strong>Grade A</strong>.
              </p>
              <p>
                Compared to the first iteration, the SUS score increased from <strong>80 to 89.5</strong> for customers and from <strong>76.5 to 87</strong> for store users, indicating improved perceived usability after the design refinements.
              </p>
            `,
          },
          {
            label: "QUIS",
            body: `
              <p>
                QUIS was used to evaluate user satisfaction across five factors: <strong>Screen, Terminology & System Information, Learning, System Capabilities,</strong> and <strong>General Impression</strong>.
              </p>
              <p>
                Customers achieved an overall average score of <strong>8.19/9</strong>, while store users achieved <strong>8.43/9</strong>. Most factors scored above 8, indicating a high level of satisfaction with the refined prototype.
              </p>
              <p>
                The results also showed positive perceptions of the improved button visibility, confirmation pop-ups, and reorganized order-detail flow introduced during the second iteration.
              </p>
            `,
          },
          {
            label: "Iteration 2 Conclusion",
            body: `
              <p>
                The second iteration showed improvements in both <strong>usability</strong> and <strong>user satisfaction</strong>. The refined prototype achieved higher SUS scores for both customer and store users, while QUIS results indicated consistently high satisfaction across the evaluated factors.
              </p>
              <p>
                These results suggest that the design improvements addressed the key usability issues identified in the first iteration and provided a clearer, more efficient, and more comfortable interaction experience.
              </p>
            `,
          },
        ],
      },
    ],
  },

  {
    id: "uiux-warisan-rasa",
    name: "Warisan Rasa",
    category: "uiux",
    bg: "#FBE1E6",
    color: "#8A003B",
    image: "images/projects/warisan-rasa.png",
    tags: [
      "User Research",
      "Problem Analysis",
      "Solution Design",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2024" },
    ],
    detailIntro:
      "Designed a mobile application concept that combines traditional East Java culinary recipes, cultural information, interactive cooking guidance, and supporting features into a more accessible digital experience.",
    template: "uiux-default",
    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=27-25451&p=f&viewport=219%2C60%2C0.09&t=WCtLIqT16kzID2VG-1&scaling=scale-down&content-scaling=fixed&page-id=25%3A3404",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            Warisan Rasa is a mobile application concept focused on introducing and preserving traditional East Java culinary heritage through digital experiences.
          </p>
          
          <p>
            The project was developed to address the difficulty of accessing traditional recipes and the decreasing exposure to local culinary traditions. The application combines recipe information, culinary history, interactive cooking guidance, and supporting features into one platform.
          </p>

          <p>
            The design process followed the <strong>Design Thinking</strong> method, starting from user interviews and empathy mapping, followed by problem definition, solution ideation, prototyping, and usability testing.
          </p>

        `,
        items: [
          {
            label: "Problem Statement",
            body: `
              <p>
                Traditional East Java food contains cultural values, history, and local identity, but information about traditional recipes and their background is not always easily accessible in an engaging format.
              </p>

              <p>
                Users may also experience difficulties when following traditional recipes, finding ingredients, understanding cooking steps, and obtaining direct guidance while cooking. These challenges create an opportunity for a digital platform that provides clearer information and a more interactive cooking experience.
              </p>
            `,
          },
          {
            label: "Problem Solution",
            body: `
              <p>
                Warisan Rasa was designed as a mobile platform that provides accessible traditional East Java recipes together with information about the history and cultural value behind each dish.
              </p>

              <p>
                The proposed experience includes step-by-step cooking guidance, voice-guided cooking, interactive timers, video storytelling, augmented reality experiences, recipe sharing, user ratings, and access to cooking ingredients.
              </p>

              <p>
                The application also introduces e-commerce functionality to help users obtain ingredients needed for traditional recipes.
              </p>
            `,
          },
          {
            label: "Target Users",
            body: `
              <p>
                <strong>1. Culinary Enthusiasts</strong>
              </p>
              <ul>
                <li>Food enthusiasts interested in exploring authentic regional cuisine, particularly from East Java.</li>
                <li>Food bloggers, influencers, and content creators seeking inspiration and references for their culinary content.</li>
              </ul>

              <p>
                <strong>2. Chefs & Culinary Professionals</strong>
              </p>
              <ul>
                <li>Professional chefs looking to expand their knowledge and collection of authentic East Javanese recipes.</li>
                <li>Local culinary enthusiasts who want to document and share their recipes through digital platforms.</li>
              </ul>

              <p>
                <strong>3. Families & Homemakers</strong>
              </p>
              <ul>
                <li>Homemakers looking for variety in their everyday meals through authentic traditional recipes.</li>
                <li>Families interested in preserving and introducing traditional cuisine to the next generation.</li>
              </ul>
            `,
          },
        ],
      },

      {
        id: "design-thinking",
        label: "Design Thinking",
        kind: "icon-row",
        items: [
          {
            label: "Empathize",
            icon: "empathize",
          },
          {
            label: "Define",
            icon: "define",
          },
          {
            label: "Ideate",
            icon: "ideate",
          },
          {
            label: "Prototype",
            icon: "prototype",
          },
          {
            label: "Test",
            icon: "test",
          },
        ],
      },

      {
        id: "empathize",
        label: "Empathize",
        kind: "accordion",
        body: `
          <p>
            The Empathize stage focused on understanding users experiences, needs, expectations, and difficulties when discovering and preparing traditional food.
          </p>

          <p>
            Interviews were conducted with people who have an interest in cooking and culinary activities, including a culinary enthusiast, a professional chef, and a homemaker. The findings were then organized into an <strong>Empathy Map</strong> to identify what users say, think, feel, and do.
          </p>
        `,
        items: [
          {
            label: "User Interview",
            body: `
              <p>
                The interviews explored users' expectations toward a traditional recipe application, their usual cooking habits, difficulties when following recipes, preferred information formats, interaction with chefs, ingredient purchasing behavior, and interest in culinary communities.
              </p>

              <p>
                The questions covered topics such as recipe accessibility, cooking guidance, food history, ingredient availability, interaction with professional cooks, and online purchasing behavior.
              </p>
            `,
          },

          {
            label: "Empathy Map",
            body: `
              <p>
                The interview results were mapped through the <strong>Says, Thinks, Feels, Does, Pain, and Gain</strong> aspects to identify recurring user needs and challenges.
              </p>

              <p>
                The mapping showed that users wanted clearer recipe instructions, trustworthy information, interesting culinary history, direct cooking guidance, easier access to ingredients, and opportunities to interact with other culinary enthusiasts.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/warisan-rasa/empathy-map.png"],
            },
          },
        ],
      },

      {
        id: "define",
        label: "Define",
        kind: "accordion",
        body: `
          <p>
             The Define stage focused on synthesizing the findings from the Empathize stage into clear user needs and problem statements. The insights from user interviews and the Empathy Map were used to identify recurring challenges and translate them into focused <strong>Point of View (POV)</strong> statements.
          </p>
          <p>
            These POV statements were then transformed into <strong>How Might We (HMW)</strong> questions to frame the design opportunities and guide the ideation process toward solutions that address the identified user needs.
          </p>
        `,
        items: [
          {
            label: "User Persona",
            body: `
              <p>
                Three user personas were developed based on the identified target users: a culinary enthusiast, a chef, and a homemaker. These personas represent different motivations, needs, and challenges related to discovering, preparing, and sharing traditional East Javanese cuisine.
              </p>

              <img src="images/projects/warisan-rasa/user-persona-culinary-enthusiasts.png" alt="User Persona: Culinary Enthusiast">
              <p>
                Retno Ayu represents a culinary arts student who enjoys exploring traditional cuisine and cooking at home. Her persona highlights the need for accessible, easy-to-follow recipes, interactive cooking guidance, and convenient access to ingredients, shaping the key features and direction of Warisan Rasa.
              </p>

              <img src="images/projects/warisan-rasa/user-persona-chef.png" alt="User Persona: Chef">
              <p>
                Ratna Juwita represents an experienced chef who wants to share authentic East Javanese recipes and cooking techniques with a wider audience. Her needs highlight the importance of interactive cooking features and digital spaces that enable meaningful knowledge sharing.
              </p>

              <img src="images/projects/warisan-rasa/user-persona-homemakers.png" alt="User Persona: Homemaker">
              <p>
                Sri Wahyuni represents a busy homemaker who wants to prepare healthy and authentic East Javanese meals for her family. Her needs highlight the importance of practical recipes, step-by-step cooking guidance, and convenient access to traditional ingredients.
              </p>
            `,
          },
          {
            label: "Point of View",
            body: `
              <p>
                The Point of View statements translate the research findings into specific user-centered problem statements. Each POV combines the identified user situation, need, and underlying insight to define the problems that the design should address.
              </p>
              <p>
                The five POVs focus on making traditional recipes easier to follow, presenting culinary history in an engaging way, enabling interaction with professional chefs, improving access to traditional cooking ingredients, and supporting community-based knowledge sharing.
              </p>
            `,
            kind: "table",
            columns: ["POV", "Reference", "Point of View (S + Need + Insight)"],
            rows: [
              [
                "POV 1",
                "Reference (s1,s2,t1,f1,f2,d1,d2)",
                "Users need authentic recipes that are easy to follow because they often have difficulty ensuring the authenticity of the recipes and following the steps.",
              ],
              [
                "POV 2",
                "Reference (s3,t2,f3,f4,d3)",
                "Users need interesting and relevant historical information because learning about the history of food increases their appreciation for the food.",
              ],
              [
                "POV 3",
                "Reference (s4,s5,t4,f5,d4,d5)",
                "Users need direct guidance while cooking because they feel more supported when they can interact directly with a chef.",
              ],
              [
                "POV 4",
                "Reference (s6,s7,t5,t6,f6,f7,d5,d6,d7)",
                "Users need easy access to traditional cooking ingredients because they often have difficulty finding these ingredients in local stores.",
              ],
              [
                "POV 5",
                "Reference (s8,t7,f8,d8)",
                "Users need a community platform to share experiences and get cooking tips.",
              ],
            ],
          },
          {
            label: "How Might We",
            body: `
              <p>
                The How Might We questions transform the identified user needs into open-ended design opportunities. Each question is directly connected to a Point of View statement and provides a direction for exploring possible solutions during the Ideate stage.
              </p>

              <p>
                The HMW questions explore opportunities across recipe guidance, culinary history, chef-user interaction, ingredient purchasing, and community participation.
              </p>
            `,
            kind: "table",
            columns: ["HMW", "Reference", "How Might We"],
            rows: [
              [
                "HMW 1",
                "POV 1",
                "How might we create a UX for traditional cooking recipes that is easier for all users to follow?",
              ],
              [
                "HMW 2",
                "POV 2",
                "How might we create an engaging and non-boring UX when presenting information about the history of food?",
              ],
              [
                "HMW 3",
                "POV 3",
                "How might we create an interactive UX between professional chefs and users?",
              ],
              [
                "HMW 4",
                "POV 4",
                "How might we create an easy UX for purchasing traditional cooking ingredients through the app?",
              ],
              [
                "HMW 5",
                "POV 5",
                "How might we create a UX that enables users to make meaningful contributions through a community?",
              ],
            ],
          },
        ],
      },

      {
        id: "ideate",
        label: "Ideate",
        kind: "accordion",
        body: `
          <p>
            The Ideate stage focused on generating potential solutions based on the How Might We questions identified in the Define stage. The proposed ideas were organized according to the user problems they were intended to address.
          </p>

          <p>
            The ideation process resulted in a set of features covering cooking guidance, culinary storytelling, chef-user interaction, ingredient purchasing, and community participation. These ideas were then translated into the application's information architecture, user flows, wireframes, and subsequent prototype.
          </p>
        `,
        items: [
          {
            label: "Solution Brainstorming",
            body: "The solution brainstorming process generated feature ideas that directly responded to the five How Might We questions. Each proposed solution was mapped to its corresponding HMW to maintain a clear connection between the identified user needs and the design direction.",
            kind: "table",
            columns: ["ID", "HMW", "Solution"],
            rows: [
              ["ID 1", "HMW 1", "Step-by-Step Cooking Mode Feature"],
              ["ID 2", "HMW 1", "Voice-Guided Cooking Feature"],
              ["ID 3", "HMW 1", "Interactive Timer Feature"],
              ["ID 4", "HMW 2", "Video Storytelling Feature"],
              ["ID 5", "HMW 2", "Augmented Reality (AR) Experience Feature"],
              ["ID 6", "HMW 3", "Live Cooking Feature"],
              ["ID 7", "HMW 3", "User-Chef Interaction Feature"],
              ["ID 8", "HMW 4", "E-Commerce Feature"],
              ["ID 9", "HMW 5", "Recipe Sharing Platform Feature"],
              ["ID 10", "HMW 5", "User Ratings Feature"],
            ],
          },
          {
            label: "User Scenario",
            body: `
              <p>
                Warisan Rasa is designed to help users discover and explore traditional East Javanese recipes. The primary target users include culinary enthusiasts, chefs, and homemakers looking for inspiration to prepare authentic dishes from East Java. In this scenario, Retno, a culinary arts student, uses Warisan Rasa to explore and learn about traditional East Javanese cuisine.
              </p>
              <p>
                Retno begins by opening the Warisan Rasa application. The Splash Screen appears first, and Retno can swipe the screen to proceed to the Landing Page. From there, users can either create a new account by selecting Sign Up or access an existing account through Sign In.
              </p>
              <p>
                On the Sign In & Sign Up pages, Retno can register or log in using an integrated Google or Facebook account via API. Alternatively, Retno can create an account manually by providing her full name, phone number, email address, and password. After completing the registration process, Retno is redirected to the Sign In page and enters her registered email and password to access the application.
              </p>
              <p>
                On the Home Page, Retno can explore ongoing live cooking demonstrations and watch cooking sessions in real time. The page also features highlights from popular community forums and promotional banners showcasing various recipes. Retno can also access and edit her profile through the profile icon in the top-right corner.
              </p>
              <p>
                On the Recipe Page, Retno can browse and select recipes she is interested in trying. The search and filter functions help her quickly find recipes based on her preferences. After selecting a recipe, Retno can explore detailed information, including the recipe description, food history, required ingredients, and nutritional information. To make the cooking process easier, she can start cooking with three guided features: Step-by-Step Cooking Mode, Voice-Guided Cooking, and Interactive Timer.
              </p>
              <p>
                Through the Scan Page, Retno can scan a traditional dish to discover more information about it. The feature uses Augmented Reality (AR) technology to provide an interactive way of learning about traditional East Javanese cuisine.
              </p>
              <p>
                On the Store Page, Retno can purchase ingredients needed for selected recipes. The ingredients are available in pre-packaged bundles, making it easier and more convenient for her to purchase everything needed to prepare the chosen dish.
              </p>
            `,
          },
          {
            label: "Information Architecture",
            body: `
              <p>
                The Information Architecture organizes the main content and features of Warisan Rasa into a structured navigation system. It defines how users can move between key areas of the application, including recipes, food scanning, the store, community forums, live cooking, and profile-related features.
              </p>

              <p>
                This structure provides a foundation for designing the navigation and user flows before moving into wireframing and high-fidelity prototyping.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/warisan-rasa/information-architecture.png",
              ],
            },
          },
          {
            label: "User Flow",
            body: `
              <p>
                The User Flow maps the steps users take to complete key tasks within Warisan Rasa. The flows cover authentication, searching and viewing recipes, scanning traditional food, purchasing ingredients, participating in the forum, and joining live cooking sessions.
              </p>

              <p>
                These flows were created to clarify the sequence of interactions and ensure that each core task has a defined path from the user's starting point to the intended outcome.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/warisan-rasa/user-flow-authentication.png",
                "images/projects/warisan-rasa/user-flow-search-and-view-recipes.png",
                "images/projects/warisan-rasa/user-flow-food-scan.png",
                "images/projects/warisan-rasa/user-flow-e-commerce.png",
                "images/projects/warisan-rasa/user-flow-forum.png",
                "images/projects/warisan-rasa/user-flow-live-cooking.png",
              ],
            },
          },
          {
            label: "Wireframe",
            body: `
              <p>
                The wireframing stage focused on translating the information architecture and user flows into a structured layout for the Warisan Rasa application. The wireframes were created to define the placement of content, navigation, and key interactions before developing the high-fidelity interface.
              </p>

              <p>
                The wireframes cover the main user experiences, including recipe exploration, e-commerce, forum and live cooking, food scanning, and home and profile navigation.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/warisan-rasa/wireframe-resep.png",
                "images/projects/warisan-rasa/wireframe-ecommerce.png",
                "images/projects/warisan-rasa/wireframe-forumlive.png",
                "images/projects/warisan-rasa/wireframe-scan.png",
                "images/projects/warisan-rasa/wireframe-homeprofile.png",
              ],
            },
          },
        ],
      },

      {
        id: "prototype",
        label: "Prototype",
        kind: "accordion",
        body: `
          <p>
            The Prototype stage translated the defined information architecture, user flows, and wireframes into a visual mobile application interface. The design process focused on establishing a consistent visual direction and developing high-fidelity screens for the main Warisan Rasa features.
          </p>

          <p>
            The prototype covers key experiences including recipe discovery and cooking guidance, ingredient purchasing, forum and live cooking interactions, food scanning, and home and profile navigation.
          </p>
        `,
        items: [
          {
            label: "Style Guide",
            body: "The Style Guide defines the visual direction used throughout the Warisan Rasa interface. It provides a consistent reference for the visual elements of the application and helps maintain consistency across the designed screens and user flows.",
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/warisan-rasa/style-guide.png"],
            },
          },
          {
            label: "Mockup",
            body: `
              <p>
                The high-fidelity mockups visualize the proposed Warisan Rasa experience across its main features. The screens represent the final visual direction for recipe exploration, e-commerce, forum and live cooking, food scanning, and home and profile experiences.
              </p>

              <p>
                The interactive prototype connects these screens into a clickable experience that demonstrates the intended navigation and interactions throughout the application.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/warisan-rasa/mockup-resep.png",
                "images/projects/warisan-rasa/mockup-ecommerce.png",
                "images/projects/warisan-rasa/mockup-forumlive.png",
                "images/projects/warisan-rasa/mockup-scan.png",
                "images/projects/warisan-rasa/mockup-homeprofile.png",
              ],
            },
            cta: "EXPLORE LIVE FIGMA",
            url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=27-25451&p=f&viewport=219%2C60%2C0.09&t=WCtLIqT16kzID2VG-1&scaling=scale-down&content-scaling=fixed&page-id=25%3A3404",
          },
        ],
      },

      {
        id: "testing",
        label: "Testing",
        kind: "desc",
        body: `
          <p>
            The Warisan Rasa prototype was evaluated through usability testing with <strong>9 participants</strong> using Maze. Testing covered three core tasks: <strong>Recipe & Food Information</strong>, <strong>E-Commerce & Food Scanning</strong>, and <strong>Live Cooking & Forum Sharing</strong>. The evaluation measured <strong>success rate, time on task, error rate, and user satisfaction</strong> to assess how effectively users could complete key interactions and navigate the application.
          </p>

          <p>
            The results showed generally positive usability, with direct success rates of <strong>88.9%</strong>, <strong>66.7%</strong>, and <strong>77.8%</strong> across the three tasks. User satisfaction was also positive, with most participants rating the tasks <strong>4-5 out of 5</strong>. The findings indicated that the core experience was understandable and usable, while some interactions, particularly those with higher error rates, still required refinement to make navigation and task completion more intuitive.
          </p>

          <p>
            <strong>Testing outcome:</strong>
          </p>

          <ul>
            <li><strong>9 participants</strong></li>
            <li><strong>3 usability tasks</strong></li>
            <li><strong>Success Rate:</strong> 88.9% | 66.7% | 77.8%</li>
            <li><strong>Error Rate:</strong> 23% | 45.9% | 61.7%</li>
            <li><strong>User Satisfaction:</strong> generally positive, with ratings concentrated at 4-5/5</li>
            <li><strong>Tool:</strong> Maze</li>
          </ul>
        `,
      },
    ],
  },

  {
    id: "uiux-sipilu",
    name: "SIPILU",
    category: "uiux",
    bg: "#FBE1E6",
    color: "#771011",
    image: "images/projects/sipilu.png",
    tags: [
      "Design Thinking",
      "Point of View",
      "HMW",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro:
      "Designed a mobile e-voting application concept that aims to make the election process more efficient, secure, and accessible by providing digital voter authentication, candidate information, online voting, and real-time vote result features.",
    template: "uiux-default",
    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=27-2171&p=f&viewport=45%2C100%2C0.04&t=JdUcng3jiccJjJ8K-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A2171&page-id=25%3A3405",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            SIPILU is a mobile application concept designed to support the election process through an e-voting experience. The project focuses on making the voting process more efficient in terms of time, providing information about elections and candidates, and incorporating authentication and security steps into the voting experience.
          </p>

          <p>
            The application was designed in response to challenges identified in conventional election processes, including long queues, limited access to candidate information, concerns about vote security, and difficulties in carrying out the voting process efficiently.
          </p>

          <p>
            The design process followed the <strong>Design Thinking</strong> method, consisting of Empathize, Define, Ideate, Prototype, and Test. User research was conducted through interviews with three people representing teenagers, adults, and older adults, followed by the development of an Empathy Map, Point of View, How Might We, Brainwriting, flowchart, wireframes, prototype, and usability testing.
          </p>
        `,

        items: [
          {
            label: "Problem Statement",
            body: `
              <p>
                The conventional election process can involve long queues and requires voters to spend time at polling locations. In addition, voters may have difficulty obtaining information about candidates and may have concerns about the security and validity of their votes.
              </p>

              <p>
                These challenges create an opportunity for a digital voting experience that provides easier access to election information, supports a more efficient voting process, and includes authentication and confirmation steps to help users feel more secure when casting their votes.
              </p>
            `,
          },

          {
            label: "Problem Solution",
            body: `
              <p>
                SIPILU was designed as a mobile e-voting application that combines election information and the voting process within one digital experience.
              </p>

              <p>
                The proposed experience includes voter authentication through KTP scanning and a photo with the KTP, security code creation, election and candidate information, online voting, vote confirmation, and temporary or final vote results.
              </p>

              <p>
                By bringing these functions together in a mobile application, SIPILU aims to support a voting process that is more efficient in time, easier to understand, and supported by authentication and confirmation steps.
              </p>
            `,
          },

          {
            label: "Target Users",
            body: `
              <p>
                <strong>1. Teenagers</strong>
              </p>
              <ul>
                <li>Users who want easier access to information about elections and candidates.</li>
                <li>Users who want to participate in elections and exercise their voting rights.</li>
              </ul>

              <p>
                <strong>2. Adults</strong>
              </p>
              <ul>
                <li>Users who want a more time-efficient election process.</li>
                <li>Users who need accessible information about the election and candidates before voting.</li>
              </ul>

              <p>
                <strong>3. Older Adults</strong>
              </p>
              <ul>
                <li>Users who can benefit from accessible election information and news.</li>
                <li>Users who value a voting process with clear security and authentication steps.</li>
              </ul>
            `,
          },
        ],
      },

      {
        id: "design-thinking",
        label: "Design Thinking",
        kind: "icon-row",
        items: [
          {
            label: "Empathize",
            icon: "empathize",
          },
          {
            label: "Define",
            icon: "define",
          },
          {
            label: "Ideate",
            icon: "ideate",
          },
          {
            label: "Prototype",
            icon: "prototype",
          },
          {
            label: "Test",
            icon: "test",
          },
        ],
      },

      {
        id: "empathize",
        label: "Empathize",
        kind: "accordion",
        body: `
          <p>
            The Empathize stage focused on identifying users' problems and needs throughout the election process. Interviews were conducted with three members of the public who had experience participating in elections, representing a teenager, an adult, and an older adult.
          </p>

          <p>
            The interview findings were then organized into an <strong>Empathy Map</strong> to understand what users say, think, feel, and do in relation to the election process.
          </p>
        `,

        items: [
          {
            label: "User Interview",
            body: `
              <p>
                Interviews were conducted with three users representing different age groups: <strong>Shofie</strong> as a teenager, <strong>Deni Cahyadi</strong> as an adult, and <strong>Kahar</strong> as an older adult.
              </p>

              <p>
                The interviews explored users' experiences and concerns during elections, including how they obtain information about candidates, concerns about election security, understanding of election procedures, available time for voting, and confidence in their candidate selection.
              </p>
            `,
          },

          {
            label: "Empathy Map",
            body: `
              <p>
                The interview results were mapped through the <strong>Say, Think, Feel, and Do</strong> aspects to identify recurring user concerns and behaviors during the election process.
              </p>

              <p>
                The findings highlighted several concerns, including difficulty obtaining candidate information, uncertainty about candidate eligibility, questions about election security and information accuracy, concerns about voting procedures and waiting time, and uncertainty about whether the chosen candidate was the right choice.
              </p>

              <p>
                These findings became the foundation for identifying the users' pain points and desired outcomes in the Define stage.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/sipilu/empathy-map.png"],
            },
          },
        ],
      },

      {
        id: "define",
        label: "Define",
        kind: "accordion",
        body: `
          <p>
            The Define stage focused on analyzing the insights gathered during the Empathize stage and transforming them into clear user-centered problem statements. The findings from the Empathy Map were used to identify the main needs and concerns that should be addressed through the SIPILU design.
          </p>

          <p>
            The identified needs were formulated into <strong>Point of View (POV)</strong> statements and then translated into <strong>How Might We (HMW)</strong> questions to establish clear directions for the ideation process.
          </p>
        `,

        items: [
          {
            label: "User Persona",
            body: `
              <p>
                Three user personas were developed to represent the main target users of SIPILU: teenagers, adults, and older adults. The personas help represent different user perspectives and provide a reference for designing an election experience that addresses their information, efficiency, and security needs.
              </p>

              <img src="images/projects/sipilu/user-persona-remaja.png" alt="User Persona: Teenager">
              <p>
                The teenager persona represents a young voter who needs easier access to information about elections and candidates before making a voting decision.
              </p>

              <img src="images/projects/sipilu/user-persona-orang-dewasa.png" alt="User Persona: Adult">
              <p>
                The adult persona represents a user who wants to participate in elections while minimizing the time required to complete the voting process.
              </p>

              <img src="images/projects/sipilu/user-persona-orang-tua.png" alt="User Persona: Older Adult">
              <p>
                The older adult persona represents a voter who benefits from accessible election information and a voting experience with clear security and authentication steps.
              </p>
            `,
          },

          {
            label: "Point of View",
            body: `
              <p>
                The Point of View statements summarize the main user needs identified from the Empathy Map. Each POV connects the observed user situation with a specific need and insight to define the design problems that SIPILU should address.
              </p>

              <p>
                The identified POVs focus on access to election and candidate information, voting security, reducing waiting time, and enabling voters to cast their votes in a comfortable and orderly process.
              </p>
            `,
            kind: "table",
            columns: ["POV", "Reference", "Point of View (S + Need + Insight)"],
            rows: [
              [
                "POV 1",
                "s1, t1, t2, t4, f1, f4, d1, d2",
                "Society needs a way to obtain information about elections or candidates to feel more confident in their choices.",
              ],
              [
                "POV 2",
                "s2, s3, s4, f2, f3, d1",
                "Society needs a secure system so that their selected vote can be clearly counted.",
              ],
              [
                "POV 3",
                "s4, t3, f3, d1",
                "Society needs an efficient procedure in terms of time so they do not have to queue for too long during the election.",
              ],
              [
                "POV 4",
                "s2, t2, f2, f3, d1",
                "Society needs to be able to cast their vote without disruption during the election so they can feel comfortable and secure.",
              ],
            ],
          },

          {
            label: "How Might We",
            body: `
              <p>
                The How Might We questions transform the identified user needs into design opportunities. Each HMW is connected to a specific Point of View and provides a direction for generating potential solutions during the Ideate stage.
              </p>

              <p>
                The questions focus on improving access to election information, creating a sense of security during voting, reducing the time required for voting, and making the voting process more efficient.
              </p>
            `,
            kind: "table",
            columns: ["HMW", "Reference", "How Might We"],
            rows: [
              [
                "HMW 1",
                "POV 1",
                "How might we create a UX that makes it easier for society to obtain information about elections?",
              ],
              [
                "HMW 2",
                "POV 2",
                "How might we create a UX that makes society feel secure about their votes during the election?",
              ],
              [
                "HMW 3",
                "POV 3",
                "How might we create a UX that saves society's time when participating in the election?",
              ],
              [
                "HMW 4",
                "POV 3",
                "How might we create a UX that makes the system more efficient and makes the voting process easier for society?",
              ],
            ],
          },
        ],
      },

      {
        id: "ideate",
        label: "Ideate",
        kind: "accordion",
        body: `
          <p>
            The Ideate stage focused on generating possible solutions based on the How Might We questions identified in the Define stage. The project used a <strong>brainwriting</strong> process to collect and organize ideas related to the identified user needs.
          </p>

          <p>
            The generated ideas covered election information, candidate information, voting security, online voting, and access to vote results. These ideas were then used as a foundation for developing the application's structure and prototype.
          </p>
        `,

        items: [
          {
            label: "Solution Brainstorming",
            body: `
              <p>
                The brainwriting process generated feature ideas that directly addressed the How Might We questions. The ideas were mapped to their corresponding HMW references to maintain a clear connection between the identified problems and the proposed solutions.
              </p>
            `,
            kind: "table",
            columns: ["ID", "Reference", "Proposed Solution"],
            rows: [
              ["ID 1", "HMW 1", "Election Article Feature"],
              ["ID 2", "HMW 1", "Candidate Biography Feature"],
              ["ID 3", "HMW 1", "Candidate Pair Platform / Ideas Feature"],
              ["ID 4", "HMW 1", "Real-Time Vote Result Feature"],
              ["ID 5", "HMW 1", "Profile Feature"],
              ["ID 6", "HMW 2", "KTP Scan Authentication Feature"],
              ["ID 7", "HMW 2", "Voting Security Code Verification Feature"],
              ["ID 8", "HMW 2", "Vote Selection Confirmation Feature"],
              ["ID 9", "HMW 3", "Online Voting / E-Voting Feature"],
            ],
          },

          {
            label: "User Scenario",
            body: `
              <p>
                SIPILU is designed to help the public participate in elections through a more efficient and structured digital voting experience. In this scenario, Deni, a busy young professional, wants to participate in the election and exercise his voting rights.
              </p>

              <p>
                Deni starts by opening the SIPILU application and proceeding from the Splash Screen to the Authentication page. He scans his KTP and takes a photo with his KTP, then checks the displayed personal information. After confirming the data, he creates and confirms a security code before entering the Home page.
              </p>

              <p>
                On the Home page, Deni can read election and political articles to gain more information about the election process and candidates. He can also access an election campaign banner that directs him to the voting experience.
              </p>

              <p>
                In the Voting section, Deni selects the election level that is currently available, such as President & Vice President, Governor, Provincial DPRD, or City DPRD. He then selects a candidate pair and reviews information such as their biography and ideas before making his choice.
              </p>

              <p>
                After deciding on his choice, Deni enters the security code created during authentication. A confirmation page then displays his selected candidate so he can verify the choice before confirming the vote.
              </p>

              <p>
                After confirming the vote, Deni receives a successful voting notification and can access the vote results. During the election period, he can view temporary results, while final results can be viewed after the voting period has ended.
              </p>

              <p>
                Through the Profile page, Deni can view his personal information based on the KTP data entered during authentication. The profile data cannot be edited because it is intended to remain consistent with the user's KTP information.
              </p>
            `,
          },

          {
            label: "Information Architecture",
            body: `
              <p>
                The application's information architecture organizes the main SIPILU features into a clear navigation structure. The primary areas include the Home page for election-related articles and banners, the e-Voting section for selecting candidates, the Results section for viewing vote results, and the Profile section for accessing user information.
              </p>

              <p>
                This structure provides the foundation for connecting the main application features and defining how users navigate through the voting experience.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/sipilu/information-architecture.png"],
            },
          },

          {
            label: "User Flow",
            body: `
              <p>
                The application flow describes the sequence of interactions from authentication through voting and accessing election results. The process begins with the Splash Screen and authentication, followed by access to the Home page and the main functions available through the bottom tab bar.
              </p>

              <p>
                The main navigation consists of four areas: <strong>Home</strong>, <strong>e-Voting</strong>, <strong>Results</strong>, and <strong>Profile</strong>. The e-Voting flow includes selecting the election level, selecting a candidate pair, reviewing candidate information, entering the security code, confirming the selection, and accessing the vote result.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/sipilu/user-flow.png"],
            },
          },

          {
            label: "Wireframe",
            body: `
              <p>
                The wireframing stage translated the planned application structure and user flows into an initial visual framework. The wireframes were used to represent the structure, layout, navigation, and placement of the main features before developing the final interface.
              </p>

              <p>
                The wireframes cover the main application experience, including authentication, Home, articles, e-Voting, candidate information, vote confirmation, results, and Profile.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/sipilu/wireframe.png"],
            },
          },
        ],
      },

      {
        id: "prototype",
        label: "Prototype",
        kind: "accordion",
        body: `
          <p>
            The Prototype stage translated the solutions identified during Ideate into a high-fidelity mobile application interface. The design was developed using a defined visual guideline and focused on representing the main SIPILU features and voting flow.
          </p>

          <p>
            The prototype covers the application's authentication process, Home page, election articles, candidate selection and information, security verification, vote confirmation, voting results, and Profile.
          </p>
        `,

        items: [
          {
            label: "Style Guide",
            body: `
              <p>
                The SIPILU Style Guide establishes the visual foundation for the application's interface. The design uses a gradient combination of <strong>maroon (#771011)</strong> and <strong>red (#D84339)</strong>, with <strong>cream (#E8DCCC)</strong> as a supporting color.
              </p>

              <p>
                The color selection uses red and maroon to reflect an Indonesian national identity, while cream provides visual balance. The interface uses <strong>Montserrat</strong> as its main typeface to create a modern and less rigid visual character. The prototype canvas size is <strong>430 × 932 pixels</strong>.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/sipilu/style-guide.png"],
            },
          },

          {
            label: "Mockup",
            body: `
              <p>
                The high-fidelity mockups visualize the proposed SIPILU experience across its main features. The screens represent the complete voting journey, from the initial authentication process to accessing election information, selecting candidates, confirming a vote, and viewing voting results.
              </p>

              <p>
                The main screens include the Splash Screen, Authentication, Home, Articles, Candidate Selection, Candidate Information, Security Code, Vote Confirmation, Successful Voting Notification, Vote Results, and Profile.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/sipilu/mockup-splash.png",
                "images/projects/sipilu/mockup-authentication.png",
                "images/projects/sipilu/mockup-home.png",
                "images/projects/sipilu/mockup-article.png",
                "images/projects/sipilu/mockup-voting.png",
                "images/projects/sipilu/mockup-candidate.png",
                "images/projects/sipilu/mockup-security-code.png",
                "images/projects/sipilu/mockup-confirmation.png",
                "images/projects/sipilu/mockup-success.png",
                "images/projects/sipilu/mockup-results.png",
                "images/projects/sipilu/mockup-profile.png",
              ],
            },
            cta: "EXPLORE LIVE FIGMA",
            url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=27-2171&p=f&viewport=45%2C100%2C0.04&t=JdUcng3jiccJjJ8K-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A2171&page-id=25%3A3405",
          },
        ],
      },

      {
        id: "testing",
        label: "Testing",
        kind: "desc",
        body: `
          <p>
            The SIPILU prototype was evaluated through <strong>usability testing</strong> with <strong>6 users</strong>. Testing focused on four core tasks representing the main functions of the application: <strong>Authentication and Profile</strong>, <strong>Articles</strong>, <strong>Voting</strong>, and <strong>Voting Results</strong>.
          </p>

          <p>
            The evaluation used several usability parameters, including <strong>success rate, time required to complete tasks, error rate, and user satisfaction</strong>. Maze was used to measure success rate, task duration, and error rate, while user satisfaction was measured using an Opinion Scale from 1–10.
          </p>

          <p>
            The results showed that the tasks could generally be understood and completed by the participants. The testing also identified areas that could be improved, particularly the flow and interface of tasks with higher missclick occurrences and longer completion times.
          </p>

          <p>
            <strong>Testing outcome:</strong>
          </p>

          <ul>
            <li><strong>6 participants</strong></li>
            <li><strong>4 usability tasks</strong></li>
            <li><strong>Success Rate:</strong> Task 1: 83.3% direct success | Task 2: 100% | Task 3: 33.3% | Task 4: 83.3%</li>
            <li><strong>Task Duration:</strong> varied across users and tasks</li>
            <li><strong>Error Rate:</strong> measured through missclicks recorded in Maze</li>
            <li><strong>User Satisfaction:</strong> generally positive based on the 1–10 Opinion Scale</li>
            <li><strong>Tool:</strong> Maze</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: "uiux-becare",
    name: "BeCare",
    category: "uiux",
    bg: "#DDEFFC",
    color: "#1F5AF1",
    image: "images/projects/becare.png",
    tags: [
      "Design Thinking",
      "UX Research",
      "Information Architecture",
      "Prototyping",
      "Usability Testing",
    ],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2024" },
    ],

    detailIntro:
      "A mobile health-tracking application concept that integrates wearable data, AI-powered health analysis, personalized recommendations, and smart notifications into a single experience.",

    template: "uiux-default",

    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=27-32236&p=f&viewport=171%2C45%2C0.04&t=j2g0EoHAQYkDxFow-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A32183&page-id=25%3A3407",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            BeCare is a mobile health-tracking application concept designed to integrate health data from wearable devices and other sources into a single platform. The concept uses AI to analyze health data and provide personalized recommendations for diet, physical activity, and other health-related actions.
          </p>

          <p>
            The project was designed to address the complexity and fragmentation of health data generated by wearable devices. BeCare aims to make this information easier to understand and translate it into actionable insights that users can apply in their daily routines.
          </p>

          <p>
            The UI/UX design process follows the <strong>Design Thinking</strong> methodology, consisting of Empathize, Define, Ideate, Prototype, and Testing. The process includes user interviews, empathy mapping, Point of View and How Might We formulation, brainwriting, information architecture, wireframing, high-fidelity prototyping, and usability testing.
          </p>
        `,

        items: [
          {
            label: "Problem Statement",
            body: `
              <p>
                Wearable devices can generate a large amount of health data in real time, but users may feel overwhelmed by the volume and complexity of the information. Data from different devices can also be fragmented, making it difficult for users to understand their overall health condition and determine appropriate actions.
              </p>

              <p>
                This creates a need for a health application that can organize wearable data into a more understandable experience and provide relevant information, recommendations, and reminders based on the user's health data.
              </p>
            `,
          },

          {
            label: "Problem Solution",
            body: `
              <p>
                BeCare proposes a single health-tracking platform that integrates data from wearable devices and other sources, then presents the information through simplified health analysis and actionable insights.
              </p>

              <p>
                The proposed application includes health data analysis, health statistics, nutrition scanning, personalized food and exercise recommendations, smart reminders and notifications, health goals tracking, and profile management.
              </p>

              <p>
                The concept also proposes AI-based analysis to support personalized recommendations and health insights based on the data collected from connected wearable devices.
              </p>
            `,
          },

          {
            label: "Target Users",
            body: `
              <p>
                BeCare is designed for users who regularly use wearable devices to monitor their physical activity and health, as well as users who are health-aware and seek more understandable health analysis and personalized recommendations.
              </p>

              <p>
                The proposal identifies two main user segments:
              </p>

              <ul>
                <li>
                  <strong>Wearable Device Users</strong> — users who regularly monitor physical activity and health through wearable devices and seek personalized diet and exercise recommendations.
                </li>
                <li>
                  <strong>Health-Aware Users</strong> — users who monitor health conditions such as diabetes or high blood pressure and need deeper analysis and recommendations for health management.
                </li>
              </ul>
            `,
          },
        ],
      },

      {
        id: "design-thinking",
        label: "Design Thinking",
        kind: "icon-row",
        items: [
          {
            label: "Empathize",
            icon: "empathize",
          },
          {
            label: "Define",
            icon: "define",
          },
          {
            label: "Ideate",
            icon: "ideate",
          },
          {
            label: "Prototype",
            icon: "prototype",
          },
          {
            label: "Test",
            icon: "test",
          },
        ],
      },

      {
        id: "empathize",
        label: "Empathize",
        kind: "accordion",
        body: `
          <p>
            The Empathize stage focused on identifying user problems and needs through user research and interviews. The research targeted people who have experience using wearable devices and are aware of their health.
          </p>

          <p>
            Interviews were conducted with two users: <strong>Lukman</strong>, a wearable device user, and <strong>Fakhri</strong>, a sports enthusiast. The interview questions explored how users monitor their health, track food intake and physical activity, what could make health monitoring easier, how a health application could support their goals, and what they expect from the application experience.
          </p>
        `,

        items: [
          {
            label: "User Interview",
            body: `
              <p>
                Two users were interviewed to understand their experiences and expectations when using wearable devices and health-tracking applications.
              </p>

              <p>
                The interview focused on health monitoring habits, food and physical activity tracking, desired improvements to health monitoring, expectations from health applications, and how technology could better support users in achieving their health goals.
              </p>
            `,
          },

          {
            label: "Empathy Map",
            body: `
              <p>
                The interview findings were organized into an <strong>Empathy Map</strong> covering what users say, think, feel, and do. The map was used to identify user needs and recurring concerns related to health monitoring through wearable devices.
              </p>

              <p>
                The findings show that users want to maintain their health consistently, question whether their health data is reliable, need clearer guidance for food and exercise, and want deeper analysis rather than simply seeing raw data.
              </p>

              <p>
                The research also identified that users regularly use wearable devices to track physical activity, heart rate, and sleep quality, while looking for applications that can integrate wearable data for more comprehensive analysis.
              </p>
            `,
          },
        ],
      },

      {
        id: "define",
        label: "Define",
        kind: "accordion",
        body: `
          <p>
            The Define stage focused on analyzing the insights gathered during the Empathize stage and translating them into clear user-centered problem statements. The findings from the Empathy Map were evaluated to identify the main needs that should be addressed through the BeCare design.
          </p>

          <p>
            These needs were formulated into <strong>Point of View (POV)</strong> statements and then transformed into <strong>How Might We (HMW)</strong> questions to establish design opportunities for the Ideate stage.
          </p>
        `,

        items: [
          {
            label: "Point of View",
            body: `
              <p>
                The Point of View statements summarize the main problems and needs identified from the user research. They focus on simplifying wearable data, integrating health data from different sources, providing personalized recommendations, supporting consistent health routines, and turning collected data into understandable insights.
              </p>
            `,
            kind: "table",
            columns: ["POV", "Reference", "Point of View"],
            rows: [
              [
                "POV 1",
                "s1, t1, f1, d1",
                "Users need an application that simplifies wearable data and provides practical recommendations so they do not feel overwhelmed by complex data.",
              ],
              [
                "POV 2",
                "s2, t2, d2, d3",
                "Users need an application that integrates data from wearable devices and provides easy-to-understand analysis so they are not confused by fragmented data.",
              ],
              [
                "POV 3",
                "s3, t3, f2, f3",
                "Users need an application that provides personalized diet and exercise recommendations based on wearable data to support their overall health.",
              ],
              [
                "POV 4",
                "s1, f1, d1",
                "Users need an application that provides easy-to-apply health notifications and recommendations to help maintain consistent health routines.",
              ],
              [
                "POV 5",
                "s4, t4",
                "Users need an application that not only collects data but also provides clear insights so wearable data can be interpreted and applied appropriately.",
              ],
            ],
          },

          {
            label: "How Might We",
            body: `
              <p>
                The How Might We questions transform the identified user needs into open-ended design opportunities. Each HMW is directly connected to a Point of View and provides a direction for generating possible solutions.
              </p>
            `,
            kind: "table",
            columns: ["HMW", "Reference", "How Might We"],
            rows: [
              [
                "HMW 1",
                "POV 1",
                "How might we create a UX that simplifies complex health data so it can be easily understood and applied by users?",
              ],
              [
                "HMW 2",
                "POV 2",
                "How might we create a UX that integrates wearable device data into one application with clear and easy-to-understand analysis?",
              ],
              [
                "HMW 3",
                "POV 3",
                "How might we create a UX that provides personalized and relevant diet and exercise recommendations based on users' health data?",
              ],
              [
                "HMW 4",
                "POV 4",
                "How might we create a UX that helps busy users maintain consistent health routines with recommendations and notifications suited to their daily routines?",
              ],
              [
                "HMW 5",
                "POV 5",
                "How might we create a UX that helps users better understand their health data?",
              ],
            ],
          },
        ],
      },

      {
        id: "ideate",
        label: "Ideate",
        kind: "accordion",
        body: `
          <p>
            The Ideate stage focused on transitioning from the defined problems toward potential solutions. A <strong>Brainwriting</strong> process was used to generate feature ideas based on the How Might We questions identified in the Define stage.
          </p>

          <p>
            The resulting ideas were mapped to their corresponding HMW questions to maintain a connection between the identified user problems and the proposed features.
          </p>
        `,

        items: [
          {
            label: "Solution Brainstorming",
            body: `
              <p>
                The Brainwriting process generated several feature ideas addressing the identified user needs. Each idea was connected to a corresponding How Might We question.
              </p>
            `,
            kind: "table",
            columns: ["ID", "Reference", "Proposed Solution"],
            rows: [
              ["ID 1", "HMW 1", "Simplified Data Visualization"],
              ["ID 2", "HMW 2", "Data Sync Otomatis Multi-Platform"],
              ["ID 3", "HMW 3", "Personalized Nutrition and Workout Plan"],
              ["ID 4", "HMW 4", "Smart Reminders and Notifications"],
              ["ID 5", "HMW 4", "Health Goals Tracker"],
              ["ID 6", "HMW 5", "Nutrition Scanning"],
              ["ID 7", "HMW 5", "Personalized Health Insights"],
            ],
          },

          {
            label: "User Scenario",
            body: `
              <p>
                The proposed BeCare experience begins when a user opens the application and is presented with a Splash Screen before being directed to Login. Existing users can log in, while new users can register for an account.
              </p>

              <p>
                After login or registration, users enter their personal health information and synchronize their wearable device with the application. Once personalization and synchronization are completed, users are directed to the Homepage as the main navigation center.
              </p>

              <p>
                From the Homepage, users can view an overview of their health data and access more detailed health analysis. The analysis can include information such as platelets, glucose, sodium, cholesterol, steps, and other laboratory analysis results.
              </p>

              <p>
                Users can also access Health Statistics to view information such as water consumption and steps, including the option to add a water-consumption schedule.
              </p>

              <p>
                Through the Nutrition Scanning feature, users can analyze the composition of food they want to consume. Based on the collected health data, users can also access personalized Food Recommendations and Physical Exercise Recommendations.
              </p>

              <p>
                The Profile section allows users to update personal information, personalize their data, connect additional wearable devices, and log out of the application.
              </p>
            `,
          },

          {
            label: "Navigation",
            body: `
              <p>
                The navigation structure is designed to provide access to the main BeCare functions through a clear mobile interface. The main experience includes the Homepage, Health Analysis, Health Statistics, Nutrition Scanning, Recommendation, and Profile.
              </p>

              <p>
                The Homepage provides a simplified health data overview and access to more detailed analysis. Health Statistics presents information such as water consumption and steps. Nutrition Scanning supports food composition analysis, while Recommendation provides personalized food and physical exercise recommendations based on wearable data.
              </p>

              <p>
                The Profile section provides access to personal information, health-data personalization, additional wearable-device connections, and logout.
              </p>
            `,
          },

          {
            label: "Information Architecture",
            body: `
              <p>
                The Information Architecture organizes the BeCare application into a structured sitemap. The structure is used to arrange groups of information and features so that the interface can be designed around a clear navigation hierarchy.
              </p>

              <p>
                The architecture connects the main areas of BeCare, including health overview and analysis, health statistics, nutrition scanning, personalized recommendations, and profile management.
              </p>
            `,
          },

          {
            label: "User Flow",
            body: `
              <p>
                The user flow describes the sequence of interactions within the proposed BeCare application, starting from authentication and continuing through personalization, wearable synchronization, health monitoring, analysis, recommendations, and profile management.
              </p>

              <p>
                The flow begins with Splash Screen, followed by Login or Registration. After authentication, users complete personalization and synchronize their wearable device before reaching the Homepage. From there, users can access the application's main health-related features and return to Profile when managing their account and connected devices.
              </p>
            `,
          },

          {
            label: "Wireframe",
            body: `
              <p>
                The wireframing stage translated the planned application structure and user flow into an initial interface framework. The wireframes establish the layout and structure of the BeCare interface before the high-fidelity design stage.
              </p>

              <p>
                The wireframing work forms part of the transition from the proposed information architecture and navigation structure toward the final visual interface.
              </p>
            `,
          },
        ],
      },

      {
        id: "prototype",
        label: "Prototype",
        kind: "accordion",
        body: `
          <p>
            The Prototype stage translated the solutions generated during the Ideate stage into a visual interface. The proposal describes the creation of a design guideline before developing the interface and then building a high-fidelity prototype using Figma.
          </p>

          <p>
            The prototype represents the proposed BeCare experience for health tracking, analysis, recommendations, and related application functions.
          </p>
        `,

        items: [
          {
            label: "Design System",
            body: `
              <p>
                The BeCare interface was designed using a visual guideline created before the interface design process. The primary branding color is <strong>blue (#4894FF)</strong>, selected to represent calmness, trust, and professionalism.
              </p>

              <p>
                The typography uses <strong>Pretendard</strong>, a modern sans-serif typeface chosen to support readability, simplicity, and functionality within the application interface.
              </p>

              <p>
                The design guideline was intended to maintain visual consistency and support clear presentation of information throughout the interface.
              </p>
            `,
          },

          {
            label: "High Fidelity",
            body: `
              <p>
                The high-fidelity prototype was developed using <strong>Figma</strong> to visualize the proposed BeCare interface and interactions. The prototype represents the application's main health-tracking experience, including health data analysis, statistics, nutrition scanning, personalized recommendations, and profile management.
              </p>
            `,
          },
        ],
      },

      {
        id: "testing",
        label: "Testing",
        kind: "desc",
        body: `
          <p>
            The Testing stage was conducted to collect user feedback on the final design produced during the Prototype stage. The usability evaluation involved <strong>6 users</strong> and focused on three tasks based on the main BeCare features: <strong>Registration</strong>, <strong>Health Analysis</strong>, and <strong>Personalized Recommendations</strong>.
          </p>

          <p>
            The evaluation measured four usability parameters: <strong>Success Rate</strong>, <strong>The Time a Task Requires</strong>, <strong>Error Rate</strong>, and <strong>User's Subjective Satisfaction</strong>. Maze was used to measure success rate, task completion time, and error rate, while user satisfaction was measured using an Opinion Scale from 1–5.
          </p>

          <p>
            The success-rate results showed <strong>100% direct success</strong> for all three tasks, with no indirect success or participants giving up. The reported task completion durations varied between users and tasks, with overall recorded durations ranging from approximately <strong>7 to 64 seconds</strong>.
          </p>

          <p>
            For error rate, the recorded missclick rates were <strong>18% for Task 1</strong>, <strong>37.5% for Task 2</strong>, and <strong>20% for Task 3</strong>. Task 2 had the highest missclick rate and was identified as an area for further interface evaluation.
          </p>

          <p>
            User satisfaction was measured using the 1–5 Opinion Scale, with the reported responses indicating that users were generally satisfied with the features evaluated.
          </p>

          <p>
            <strong>Testing outcome:</strong>
          </p>

          <ul>
            <li><strong>6 participants</strong></li>
            <li><strong>3 usability tasks</strong></li>
            <li><strong>Success Rate:</strong> 100% direct success across all three tasks</li>
            <li><strong>Error Rate:</strong> 18% / 37.5% / 20% missclick rate for Tasks 1–3</li>
            <li><strong>User Satisfaction:</strong> measured using a 1–5 Opinion Scale</li>
            <li><strong>Tool:</strong> Maze</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: "uiux-teras-rayu",
    name: "Teras Rayu",
    category: "uiux",
    bg: "#FBF6D8",
    color: "#7C3B07",
    image: "images/projects/teras-rayu.png",
    tags: ["UI/UX Design", "Mobile App", "E-Commerce", "Prototyping"],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2024" },
    ],
    detailIntro:
      "A mobile e-commerce application concept for Teras Rayu, designed to provide pastry and bakery ordering alongside workshop reservations through an intuitive digital experience.",
    template: "uiux-default",
    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---Portfolio?node-id=28-97333&p=f&viewport=-24%2C158%2C0.09&t=m1HEIipEzbtQPBgM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A97328&page-id=27%3A26640",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            Teras Rayu is a mobile e-commerce application concept for pastry and bakery products, including gluten-free options, with an additional workshop reservation experience.
          </p>

          <p>
            The project was designed to provide users with an easier way to explore products, select food based on their preferences, place orders, and reserve workshops through a single application.
          </p>

          <p>
            The proposal was developed for the <strong>UI/UX Design Competition Dies Natalis Fasilkom UPN "Veteran" Jawa Timur 2024</strong> by Tim Galaksi.
          </p>
        `,

        items: [
          {
            label: "Background",
            body: `
              <p>
                The design of Teras Rayu was motivated by the growth of the food and beverage industry and increasing interest in healthier food products, including gluten-free products. The proposal positions Teras Rayu as an e-commerce platform for pastry and bakery products that can also provide access to creative workshops.
              </p>

              <p>
                The application is intended to help extend the reach of Teras Rayu's products while providing users with an intuitive shopping experience and access to workshop activities.
              </p>
            `,
          },

          {
            label: "Goals & Benefits",
            body: `
              <p>
                The proposal identifies several objectives for the Teras Rayu application:
              </p>

              <ul>
                <li>Utilize the growing market potential and demand for healthy and gluten-free food products.</li>
                <li>Reach consumers with specific dietary needs and an interest in health.</li>
                <li>Provide a variety of high-quality pastry and other products, including healthy and gluten-free options.</li>
                <li>Increase cafe engagement through baking, pastry, and other creative workshops.</li>
                <li>Build a brand associated with high-quality gluten-free pastry and bakery products.</li>
              </ul>
            `,
          },

          {
            label: "Target Users",
            body: `
              <p>
                The proposal identifies three main target user groups:
              </p>

              <ul>
                <li>
                  <strong>Young Generation</strong> — users who are accustomed to technology and prioritize easy access and an intuitive user experience. Interactive features and social media integration are considered suitable for this group.
                </li>
                <li>
                  <strong>Active and Creative Communities</strong> — individuals interested in creative activities such as cooking and baking who can use the workshop reservation feature to learn and explore new recipes.
                </li>
                <li>
                  <strong>Healthy Lifestyle Enthusiasts</strong> — users who care about health and prefer healthy, high-quality food products. The application provides food options with nutritional information.
                </li>
              </ul>
            `,
          },

          {
            label: "Application Limitations",
            body: `
              <p>
                The proposal also identifies several limitations of the Teras Rayu application:
              </p>

              <ul>
                <li>Product variants may be limited, meaning users may not find every pastry or bakery product they want.</li>
                <li>Workshop participation may be limited by physical venue capacity or instructor availability.</li>
                <li>Application performance depends on the user's device hardware and internet connectivity.</li>
              </ul>
            `,
          },
        ],
      },

      {
        id: "design-thinking",
        label: "Design Thinking",
        kind: "icon-row",
        items: [
          {
            label: "Empathize",
            icon: "empathize",
          },
          {
            label: "Define",
            icon: "define",
          },
          {
            label: "Ideate",
            icon: "ideate",
          },
          {
            label: "Prototype",
            icon: "prototype",
          },
          {
            label: "Test",
            icon: "test",
          },
        ],
      },

      {
        id: "empathize",
        label: "Empathize",
        kind: "accordion",
        body: `
          <p>
            The Empathize stage focused on understanding the needs and experiences of users who are interested in pastry, bakery products, and workshop activities.
          </p>

          <p>
            The proposal used interviews with <strong>two participants</strong> who had an interest in pastry and bakery and workshop activities. The interview results were then mapped into an <strong>Empathy Map</strong> to identify user needs, thoughts, feelings, and behaviors.
          </p>
        `,

        items: [
          {
            label: "Empathy Map",
            body: `
              <p>
                The Empathy Map summarizes the experiences and needs identified from the interviews. Users expressed interest in finding pastry and bakery products with unique variations, wanted an easy ordering process, and showed a preference for gluten-free products.
              </p>

              <p>
                Users also considered product quality and price before purchasing, looked for recommendations or online reviews, and wanted clear information about workshops, including schedules, prices, and materials.
              </p>

              <p>
                Frustration could occur when application navigation or payment processes were difficult, while unclear workshop information could create confusion during the reservation process.
              </p>
            `,
          },
        ],
      },

      {
        id: "define",
        label: "Define",
        kind: "accordion",
        body: `
          <p>
            The Define stage analyzed the insights gathered during Empathize to formulate the main user-centered problems that should be addressed in the Teras Rayu application.
          </p>

          <p>
            The interview findings and Empathy Map were translated into <strong>Point of View (POV)</strong> statements and <strong>How Might We (HMW)</strong> questions, which became the basis for generating solution ideas in the Ideate stage.
          </p>
        `,

        items: [
          {
            label: "Point of View",
            body: `
              <p>
                Four Point of View statements were formulated based on the identified user needs:
              </p>
            `,
            kind: "table",
            columns: ["POV", "Reference", "Point of View"],
            rows: [
              [
                "POV 1",
                "s1, t1, f1, d1",
                "Users want to find cakes that suit their tastes and preferences because they feel happy when they find the right cake and consider quality and price before purchasing.",
              ],
              [
                "POV 2",
                "s2, t2, f2, d3",
                "Users need an application that is easy to navigate and simplifies the payment process because they feel frustrated when experiencing difficulties with application navigation or payment.",
              ],
              [
                "POV 3",
                "s3, t3, f3, d3",
                "Users need recommendations or reviews about particular cake shops because they feel happy when they receive a pleasant culinary experience that matches their expectations.",
              ],
              [
                "POV 4",
                "s4, t4, f4, d4",
                "Users need clear information about attractive workshops because they feel confused when workshop information or the reservation process is unclear.",
              ],
            ],
          },

          {
            label: "How Might We",
            body: `
              <p>
                The POV statements were transformed into four How Might We questions to define opportunities for improving the user experience.
              </p>
            `,
            kind: "table",
            columns: ["HMW", "Reference", "How Might We"],
            rows: [
              [
                "HMW 1",
                "POV 1",
                "How might we help customers find cakes that match their tastes and preferences, so they can explore unique cake variations with suitable quality and price?",
              ],
              [
                "HMW 2",
                "POV 2",
                "How might we create an easier and more intuitive user experience in an e-commerce application, so users do not feel frustrated when navigating and making payments?",
              ],
              [
                "HMW 3",
                "POV 3",
                "How might we provide relevant recommendations and reviews about particular cake shops, so consumers can enjoy a pleasant culinary experience that matches their expectations?",
              ],
              [
                "HMW 4",
                "POV 4",
                "How might we provide clear and attractive information about workshops, so users can easily understand the reservation process and workshop details?",
              ],
            ],
          },
        ],
      },

      {
        id: "ideate",
        label: "Ideate",
        kind: "accordion",
        body: `
          <p>
            The Ideate stage focused on transitioning from the defined problems toward potential solutions. The proposal used a <strong>Brainwriting</strong> process in which feature ideas were generated and mapped to the corresponding HMW questions.
          </p>

          <p>
            The proposed ideas focused on improving product discovery, navigation, checkout, workshop reservation, order history, reviews, and access to food and workshop information.
          </p>
        `,

        items: [
          {
            label: "Solution Brainstorming",
            body: `
              <p>
                The Brainwriting results produced feature ideas connected to the four HMW questions:
              </p>
            `,
            kind: "table",
            columns: ["ID", "Reference", "Proposed Solution"],
            rows: [
              ["ID 1", "HMW 1", "Filter and Search Detail"],
              ["ID 2", "HMW 2", "Simple Navigation"],
              ["ID 3", "HMW 2", "Fast Checkout Process"],
              ["ID 4", "HMW 2", "Easy Reservation"],
              ["ID 5", "HMW 3", "Order History"],
              ["ID 6", "HMW 3", "Review and Rating"],
              ["ID 7", "HMW 4", "Food and Nutrition Details"],
              ["ID 8", "HMW 4", "Workshop Details"],
              ["ID 9", "HMW 4", "Workshop Schedule"],
            ],
          },

          {
            label: "User Scenario",
            body: `
              <p>
                The proposed scenario follows <strong>Irina Darva</strong>, a culinary student who wants to explore quality pastry and bakery products and participate in creative workshops.
              </p>

              <p>
                Darva opens the Teras Rayu application and sees the Splash Screen, followed by the Onboarding Screen. She can read the information or skip it before being directed to the Login page.
              </p>

              <p>
                If she does not have an account, Darva can register manually using her full name, phone number, email, and password. The application also provides login options using Google or Facebook. After registration, she returns to the Login page and enters her registered credentials.
              </p>

              <p>
                On the Home page, Darva can explore Teras Rayu's menu and filter products by categories such as cake, food, or drink. The page also contains promotional banners and a bottom navigation bar with Home, Workshop, Orders, and Profile.
              </p>

              <p>
                Darva then explores the Workshop section, selects a workshop, reviews its details, and proceeds to payment. After the payment is successful, she receives a payment-success notification.
              </p>

              <p>
                Darva then returns to the Home page and selects the Order menu to purchase pastry and bakery products. She explores the menu details, adds items to the cart, and proceeds to payment. After successful payment, she receives another payment-success notification.
              </p>

              <p>
                Finally, Darva opens the Profile section to check her personal information, manage saved addresses, view available vouchers, change her password if needed, and view her order history.
              </p>
            `,
          },

          {
            label: "Flowchart",
            body: `
              <p>
                The flowchart represents the overall interaction flow of the Teras Rayu application, connecting the main user journeys from entering the application through product ordering, workshop reservation, order management, and profile access.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/teras-rayu/flowchart.png"],
            },
          },
        ],
      },

      {
        id: "prototype",
        label: "Prototype",
        kind: "accordion",
        body: `
          <p>
            The Prototype stage translated the solution ideas from the Ideate stage into interface designs. The proposal describes an initial <strong>low-fidelity wireframe</strong> followed by the development of the interface and high-fidelity prototype.
          </p>
        `,

        items: [
          {
            label: "Design System",
            body: `
              <p>
                Before designing the interface, a design guideline was created to support a consistent visual direction. The main branding colors are <strong>yellow (#FFB900)</strong> and <strong>brown (#491D00)</strong>.
              </p>

              <p>
                Yellow is described in the proposal as representing cheerfulness, energy, and optimism, while brown provides a natural and solid impression. The typography uses <strong>TT Commons</strong>, a modern sans-serif typeface intended to support readability, simplicity, and functionality.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/teras-rayu/design-system.png"],
            },
          },

          {
            label: "Information Architecture",
            body: `
              <p>
                The Information Architecture organizes the application's information structure to support the interface design process. The proposal represents the architecture in the form of a <strong>sitemap</strong>.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: [
                "images/projects/teras-rayu/information-architecture.png",
              ],
            },
          },

          {
            label: "Wireframe",
            body: `
              <p>
                Before creating the high-fidelity prototype, the prototyping process began with a <strong>low-fidelity wireframe</strong>. The wireframe establishes the initial structure and layout of the application's screens before the final interface design.
              </p>
            `,
            media: {
              layout: "grid",
              columns: 1,
              items: ["images/projects/teras-rayu/wireframe.png"],
            },
          },

          {
            label: "Feature Design",
            body: `
              <p>
                The proposal documents the design of the main Teras Rayu application features, covering the initial application experience, authentication, product ordering, workshop reservation, order management, and profile.
              </p>
            `,
            items: [
              {
                label: "Splash Screen",
                body: `
                  <p>
                    The Splash Screen is the first screen displayed when the application is opened. It contains the Teras Rayu logo and short messages about the application and its benefits before directing users to the Login or Register page.
                  </p>
                `,
              },
              {
                label: "Login & Register",
                body: `
                  <p>
                    Users can log in using their existing account or use Google and Facebook login options. New users can register by providing their name, email, and password before being directed to the Home page.
                  </p>
                `,
              },
              {
                label: "Home",
                body: `
                  <p>
                    The Home page provides access to the application's main features through the bottom navigation bar. Users can browse product cards based on categories, open product details, customize an order by selecting product size and adding notes, view notifications, and access the shopping cart.
                  </p>
                `,
              },
              {
                label: "Workshop",
                body: `
                  <p>
                    The Workshop feature presents available workshops and provides search and filtering options based on user interests. Users can save workshops, open workshop cards to view detailed information, continue to payment for registration, and access an e-Ticket after successful payment.
                  </p>
                `,
              },
              {
                label: "Orders",
                body: `
                  <p>
                    The Orders feature allows users to view order history and ongoing food orders or workshop reservations. Users can track food-order status and estimated completion time, view workshop schedules and details, repeat previous food orders or workshop registrations, and provide ratings or feedback through order history.
                  </p>
                `,
              },
              {
                label: "Profile",
                body: `
                  <p>
                    The Profile page contains user information such as profile photo and name. Users can update their profile information, add and save delivery addresses, and view available vouchers.
                  </p>
                `,
              },
            ],
          },
        ],
      },

      {
        id: "testing",
        label: "Testing",
        kind: "desc",
        body: `
          <p>
            The Test stage was conducted to collect user feedback on the final design produced during the Prototype stage. The proposal describes usability testing using <strong>Maze</strong> and evaluates the application through several usability parameters.
          </p>

          <p>
            The testing involved <strong>7 users</strong> and three tasks based on the main Teras Rayu features: <strong>Splash Screen & Login</strong>, <strong>Food Ordering</strong>, and <strong>Workshop Reservation</strong>.
          </p>

          <p>
            The evaluation covered <strong>Success Rate</strong>, <strong>The Time a Task Requires</strong>, <strong>Error Rate</strong>, and <strong>User's Subjective Satisfaction</strong>. Success rate, task completion time, and error rate were measured using Maze, while subjective satisfaction was measured using an Opinion Scale from 1–5.
          </p>

          <p>
            The Success Rate results were <strong>100% direct success for Task 1</strong>, <strong>42.9% direct success and 57.1% indirect success for Task 2</strong>, and <strong>100% direct success for Task 3</strong>. The proposal also records a <strong>0% give-up rate</strong> for Tasks 1 and 2 and <strong>11% for Task 3</strong>.
          </p>

          <p>
            The reported average overall usability score was <strong>82%</strong>. The proposal describes this result as indicating a medium or fairly good level of usability, while noting that there is still room for improvement.
          </p>

          <p>
            The Error Rate results recorded missclick rates of <strong>2.3% for Task 1</strong>, <strong>41.5% for Task 2</strong>, and <strong>22.2% for Task 3</strong>. The proposal identifies Task 2 and Task 3 as areas requiring improvement because of their relatively higher error rates.
          </p>

          <p>
            For subjective satisfaction, the Opinion Scale results were generally positive, with scores ranging from <strong>4 to 5</strong>. The proposal states that most users considered the tasks easy or very easy to complete.
          </p>

          <p>
            <strong>Testing outcome:</strong>
          </p>

          <ul>
            <li><strong>7 participants</strong></li>
            <li><strong>3 usability tasks</strong></li>
            <li><strong>Success Rate:</strong> 100% / 42.9% / 100% direct success for Tasks 1–3</li>
            <li><strong>Indirect Success:</strong> 0% / 57.1% / 0% for Tasks 1–3</li>
            <li><strong>Error Rate:</strong> 2.3% / 41.5% / 22.2% missclick rate for Tasks 1–3</li>
            <li><strong>Overall Usability Score:</strong> 82%</li>
            <li><strong>User Satisfaction:</strong> Opinion Scale, 1–5</li>
            <li><strong>Tool:</strong> Maze</li>
          </ul>
        `,
      },

      {
        id: "technology",
        label: "Technology",
        kind: "desc",
        body: `
          <p>
            The proposal describes several technologies intended for the Teras Rayu application:
          </p>

          <ul>
            <li><strong>Flutter & Dart</strong> — for developing the responsive mobile interface across Android and iOS.</li>
            <li><strong>Node.js</strong> — for the backend server.</li>
            <li><strong>Firebase</strong> — for authentication, data storage, push notifications, real-time database management, and analytics.</li>
            <li><strong>Google Cloud Platform</strong> — for application hosting and infrastructure.</li>
            <li><strong>Payment Gateway API</strong> — such as Midtrans or Doku for payment transactions.</li>
            <li><strong>RESTful API</strong> — for communication between the frontend and backend.</li>
            <li><strong>OAuth2</strong> — for social login authentication through Google and Facebook.</li>
          </ul>
        `,
      },

      {
        id: "conclusion",
        label: "Conclusion",
        kind: "desc",
        body: `
          <p>
            Teras Rayu is proposed as a digital platform that combines access to pastry and bakery products, including gluten-free options, with workshop reservations. The concept aims to provide a more convenient and informative shopping experience while giving users an opportunity to participate in baking, pastry, and other creative activities.
          </p>

          <p>
            The proposal concludes that the application can combine digital shopping convenience with workshop experiences to support users interested in quality food products, healthy eating, and creative activities.
          </p>
        `,
      },
    ],
  },
  {
    id: "uiux-nutrikids",
    name: "NutriKids",
    category: "uiux",
    bg: "#FBE1E6",
    color: "#FF6F61",
    image: "images/projects/nutrikids.png",
    tags: ["User Scenario", "Flowchart", "Wireframing", "Prototyping"],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2023" },
    ],

    detailIntro:
      "A mobile application concept designed to help parents and caregivers access child nutrition information, healthy meal recommendations, and child growth tracking in one place.",

    template: "uiux-default",

    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=28-88141&p=f&viewport=45%2C212%2C0.08&t=6Sg3ankilFQfwHpg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A87645&page-id=25%3A3406",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            NutriKids is a mobile application concept designed to support parents and caregivers in understanding children's nutrition and monitoring their growth and development.
          </p>

          <p>
            The application provides access to nutritional information, healthy food recommendations, recipes, growth tracking, notifications, online consultation with nutrition experts, and account management.
          </p>

          <p>
            The project was developed as a UI/UX design proposal for the <strong>UI/UX Design Competition Dies Natalis 2023</strong> and focuses on creating an accessible and interactive mobile experience for child nutrition and health information.
          </p>
        `,

        items: [
          {
            label: "Problem Background",
            body: `
              <p>
                Child malnutrition is associated with both undernutrition and overnutrition. The proposal identifies lack of understanding about proper nutrition and healthy eating as one of the factors that can contribute to malnutrition among children.
              </p>

              <p>
                Parents and caregivers may also face difficulties in providing nutritious food that suits children's needs, preparing balanced meals, and understanding the nutritional requirements of children at different stages of development.
              </p>

              <p>
                NutriKids was proposed to provide nutritional information, healthy and affordable menu recommendations, recipes, and child growth tracking to support parents and caregivers in making better-informed decisions about children's nutrition.
              </p>
            `,
          },

          {
            label: "Goals",
            body: `
              <p>
                The proposal identifies several goals for NutriKids:
              </p>

              <ul>
                <li>Increase parents' awareness of the importance of proper nutrition for children.</li>
                <li>Provide varied, healthy, and affordable meal recommendations.</li>
                <li>Help parents monitor and track children's growth and development regularly.</li>
                <li>Provide easy and fast access to educational articles about child nutrition.</li>
              </ul>
            `,
          },

          {
            label: "Target Users",
            body: `
              <p>
                The primary target users are <strong>parents and caregivers of children</strong> who want to monitor their children's growth and provide appropriate nutrition.
              </p>

              <p>
                The proposal also identifies children under adult supervision, nutritionists, doctors and healthcare workers, educators and teachers, government and health organizations, and the general public as potential users or stakeholders of the application.
              </p>
            `,
          },
        ],
      },

      {
        id: "design-direction",
        label: "Design Direction",
        kind: "desc",
        body: `
          <p>
            Before designing the interface, a design guideline was established to define the visual direction of NutriKids. The interface uses a pastel color palette consisting of a gradient of <strong>pastel red (#FF6F61)</strong> and <strong>pastel yellow (#FFC373)</strong>, supported by <strong>pastel green (#88C048)</strong>.
          </p>

          <p>
            The color choices were intended to represent health and a child-friendly visual identity. The application uses <strong>Poppins</strong> as its typeface, with a canvas size of <strong>430 × 932 pixels</strong>.
          </p>
        `,
      },

      {
        id: "user-scenario",
        label: "User Scenario",
        kind: "desc",
        body: `
          <p>
            The usage scenario follows <strong>Nikita</strong>, a mother with a son named <strong>Ethan</strong>, who is 1 year and 2 months old. Nikita wants to ensure that Ethan receives healthy and nutritious food while monitoring his growth.
          </p>

          <p>
            Nikita starts by opening NutriKids and going through the Splash Screen before reaching the Login or Register page. After logging in, she accesses the Growth feature and enters Ethan's growth data for screening.
          </p>

          <p>
            After viewing the screening result, Nikita decides to consult a nutritionist. She opens the Consultation feature, selects a nutritionist, and schedules a consultation based on the available date and time.
          </p>

          <p>
            Following the consultation, Nikita returns to the Home page and selects a suitable recipe. The recipe page provides the ingredients, step-by-step preparation instructions, and nutritional information.
          </p>

          <p>
            After several days, Nikita updates Ethan's latest height and weight data through the Profile section. She can then view the growth graph showing the child's height and weight over time before exiting the application.
          </p>
        `,
      },

      {
        id: "flowchart",
        label: "Flowchart",
        kind: "desc",
        body: `
          <p>
            The flowchart visualizes the proposed usage flow of NutriKids, starting from the Splash Screen and continuing through authentication, the Home page, growth tracking, consultation, recipes, profile management, and the application exit flow.
          </p>

          <p>
            The flow provides an overview of how users move between the main features and supports the planning of the application's interface and navigation.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: ["images/projects/nutrikids/flowchart.png"],
        },
      },

      {
        id: "prototype",
        label: "Prototype",
        kind: "accordion",
        body: `
          <p>
            The prototype translates the proposed NutriKids features into a mobile application interface. The design covers the main user journey from entering the application to accessing nutrition information, recipes, growth tracking, consultation, and profile management.
          </p>
        `,

        items: [
          {
            label: "Splash Screen",
            body: `
              <p>
                The Splash Screen is the first screen shown when users open NutriKids. It contains the NutriKids logo along with short messages describing the application and its benefits before directing users to the Login or Register page.
              </p>
            `,
          },

          {
            label: "Login & Registration",
            body: `
              <p>
                Users with an existing account can log in using their email address or phone number and password. New users can register by entering their name, phone number, email address, and password before continuing to the Home page.
              </p>
            `,
          },

          {
            label: "Home",
            body: `
              <p>
                After logging in or registering, users are directed to the Home page. The page contains healthy food recipes for children, nutritional and child-health articles, and a search feature to help users find relevant content.
              </p>
            `,
          },

          {
            label: "Recipes",
            body: `
              <p>
                The Recipe page presents available nutritious food recipes for children. Each recipe includes nutritional information, a list of ingredients, and clear step-by-step preparation instructions. The recipes provide options for different meals, from breakfast to dinner.
              </p>
            `,
          },

          {
            label: "Growth Tracking",
            body: `
              <p>
                The Growth feature allows parents or caregivers to monitor a child's physical growth based on previously entered height and weight data. The interface presents growth information through an interactive graph and compares the child's growth with general growth standards.
              </p>

              <p>
                The proposal also describes notifications for significant changes in the child's growth that may require further attention.
              </p>
            `,
          },

          {
            label: "Consultation",
            body: `
              <p>
                The Consultation feature allows parents or caregivers to consult with nutritionists online regarding children's nutritional needs. Users can select a nutritionist, choose an available schedule, and book a consultation session.
              </p>
            `,
          },

          {
            label: "Profile",
            body: `
              <p>
                The Profile page provides access to user profile management, child data management, and notification settings. Users can update their profile information and manage their child's data according to their needs.
              </p>
            `,
          },
        ],
      },

      {
        id: "design-system",
        label: "Design Guideline",
        kind: "desc",
        body: `
          <p>
            The NutriKids design guideline establishes the visual foundation used for the interface design. The primary visual direction combines a pastel red-to-yellow gradient with pastel green as a supporting color.
          </p>

          <p>
            The typography uses <strong>Poppins</strong>, selected to provide a modern and less rigid visual character. The design was created using a <strong>430 × 932 pixel</strong> canvas.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: ["images/projects/nutrikids/design-guideline.png"],
        },
      },

      {
        id: "mockup",
        label: "Mockup",
        kind: "desc",
        body: `
          <p>
            The high-fidelity interface presents the proposed NutriKids experience across its main features. The screens cover the initial Splash Screen, Login and Registration, Home, Recipes, Growth Tracking, Consultation, and Profile.
          </p>

          <p>
            The interface is designed to make nutritional information, healthy food recommendations, child growth data, and related functions accessible within a mobile application experience.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: [
            "images/projects/nutrikids/mockup-splash.png",
            "images/projects/nutrikids/mockup-login-register.png",
            "images/projects/nutrikids/mockup-home.png",
            "images/projects/nutrikids/mockup-recipe.png",
            "images/projects/nutrikids/mockup-growth.png",
            "images/projects/nutrikids/mockup-consultation.png",
            "images/projects/nutrikids/mockup-profile.png",
          ],
        },
        cta: "EXPLORE LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=28-88141&p=f&viewport=45%2C212%2C0.08&t=6Sg3ankilFQfwHpg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A87645&page-id=25%3A3406",
      },
    ],
  },

  {
    id: "uiux-exbook",
    name: "ExBook",
    category: "uiux",
    bg: "#FBF6D8",
    color: "#7c410b",
    image: "images/projects/exbook.png",
    tags: [
      "User Interface Design",
      "Mobile App",
      "E-Commerce",
      "Figma",
      "Wireframing",
      "Prototyping",
    ],
    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2024" },
    ],

    detailIntro:
      "A mobile e-commerce application concept designed to facilitate online buying and selling of used books, with features for book discovery, wishlist management, and purchasing.",

    template: "uiux-default",

    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---Portfolio?node-id=30-99664&p=f&t=vU4GsTRf2opGDs5N-1&scaling=scale-down&content-scaling=fixed&page-id=25%3A3409&starting-point-node-id=30%3A99617",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            ExBook is a mobile e-commerce application concept for buying and selling used books online. The application is designed to make used books more accessible while helping users find books through a search feature.
          </p>

          <p>
            The project covers the design of the application's user interface, followed by implementation of the interface in Flutter as part of the mobile application project.
          </p>
        `,
      },

      {
        id: "objective",
        label: "Objective",
        kind: "accordion",
        body: `
          <p>
            The main objective of ExBook is to provide a platform that makes buying and selling used books online easier.
          </p>
        `,
        items: [
          {
            label: "Key Objectives",
            body: `
              <ul>
                <li>Provide an accessible and easy-to-use platform for buying and selling used books.</li>
                <li>Help users obtain books at more affordable prices compared with new books.</li>
                <li>Provide a search feature to help users find the books they are looking for.</li>
              </ul>
            `,
          },
        ],
      },

      {
        id: "design",
        label: "UI Design",
        kind: "accordion",
        body: `
          <p>
            The UI design process included identifying user needs and the main application features, followed by creating the ExBook interface mockup using Figma.
          </p>

          <p>
            The designed interface covers the main flow of the application from authentication and book discovery to book details, wishlist, checkout, and order history.
          </p>
        `,
        items: [
          {
            label: "Main Interface",
            body: `
              <p>
                The main interface includes the Home, Orders, Wishlist, and Profile sections. Users can browse available books, search for specific books, save books to their wishlist, open book details, and proceed to purchase.
              </p>
            `,
          },
          {
            label: "Book Detail",
            body: `
              <p>
                The book detail interface presents the book image, title, author, page count, publication date, book condition, category, description, price, and a purchase action.
              </p>
            `,
          },
          {
            label: "Checkout",
            body: `
              <p>
                The checkout interface presents shipping information, the selected book, and payment details including product subtotal, shipping subtotal, and total payment.
              </p>
            `,
          },
          {
            label: "Orders & Wishlist",
            body: `
              <p>
                The interface also includes a Wishlist section for saved books and an Orders section for active and completed orders.
              </p>
            `,
          },
        ],
      },

      {
        id: "flow",
        label: "User Flow",
        kind: "desc",
        body: `
          <p>
            The application flow starts with Login or Signup. After authentication, users can access the Home page to browse and search for books, add books to their wishlist, view book details, and proceed to checkout. Users can also access their profile, order details, and order history.
          </p>
        `,
      },

      {
        id: "mockup",
        label: "Mockup",
        kind: "desc",
        body: `
          <p>
            The high-level interface design was created as a mockup in Figma and covers the main screens required for the ExBook application flow, including authentication, book discovery, wishlist, book details, checkout, orders, and profile.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: ["images/projects/exbook/mockup.png"],
        },
        cta: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---UIX-Design?node-id=27-32236&p=f&viewport=171%2C45%2C0.04&t=j2g0EoHAQYkDxFow-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A32183&page-id=25%3A3407",
      },
    ],
  },

  {
    id: "uiux-qbit",
    name: "QBit",
    category: "uiux",
    bg: "#F1F1F1",
    color: "#57865E",
    image: "images/projects/qbit.png",

    tags: [
      "User Interface Design",
      "Mobile App",
      "Figma",
      "High-Fidelity Prototype",
      "User Flow",
    ],

    meta: [
      { label: "Type", value: "Mobile App" },
      { label: "Role", value: "UI/UX Designer" },
      { label: "Year", value: "2022" },
    ],

    detailIntro:
      "A mobile application concept for supporting small-scale urban farming through consultation, land design, seed marketplace, and plant monitoring features.",

    template: "uiux-default",

    links: [
      {
        type: "figma",
        label: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---Portfolio?node-id=29-98817&p=f&t=mmCPXUOpSIawJUMu-1&scaling=scale-down&content-scaling=fixed&page-id=25%3A3408&starting-point-node-id=29%3A98817",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            QBit is a mobile application concept developed to support small-scale urban farming. The application combines several services, including consultation, land design, a seed marketplace, and plant monitoring.
          </p>

          <p>
            The project includes the design of a high-fidelity mobile application interface to visualize the proposed concept and its main features.
          </p>
        `,
      },

      {
        id: "problem",
        label: "Problem & Objective",
        kind: "accordion",
        body: `
          <p>
            The project addresses challenges faced by people interested in small-scale plant cultivation, particularly the selection of suitable seeds and planting media based on local conditions, as well as the utilization of limited space for cultivation.
          </p>
        `,
        items: [
          {
            label: "Problem",
            body: `
              <ul>
                <li>Plant cultivation needs to consider differences in climate and regional conditions.</li>
                <li>Small-scale cultivation can be limited by the availability of suitable land.</li>
                <li>Users may need guidance in selecting seeds and planting media suitable for their area.</li>
                <li>Limited land requires appropriate layout and design to maximize its use.</li>
              </ul>
            `,
          },
          {
            label: "Objective",
            body: `
              <p>
                The proposed application aims to help people in East Java who want to start small-scale cultivation by supporting seed and planting-media selection according to regional conditions, as well as land layout and design.
              </p>
            `,
          },
        ],
      },

      {
        id: "features",
        label: "Application Features",
        kind: "table",
        columns: ["Feature", "Purpose"],
        rows: [
          [
            "Consultation",
            "Support users in obtaining guidance related to plant cultivation and suitable seeds.",
          ],
          [
            "Land Design",
            "Help users plan the layout and design of limited cultivation areas.",
          ],
          [
            "Seed Marketplace",
            "Provide a marketplace for purchasing plant seeds and related cultivation products.",
          ],
          [
            "Plant Monitoring",
            "Support users in monitoring and caring for cultivated plants.",
          ],
        ],
      },

      {
        id: "design",
        label: "Interface Design",
        kind: "desc",
        body: `
          <p>
            The interface was designed as a high-fidelity mobile prototype in Figma. The design represents the proposed QBit application and its main service areas, including authentication, the home dashboard, consultation, marketplace, land design, and plant monitoring.
          </p>
        `,
      },

      {
        id: "mockup",
        label: "Mockup",
        kind: "desc",
        body: `
          <p>
            The project produced a two-dimensional application design mockup to visualize the proposed QBit interface and features.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: ["images/projects/qbit/mockup.png"],
        },
        cta: "OPEN LIVE FIGMA",
        url: "https://www.figma.com/proto/2ThtB0tCKq45JyojoLDktH/ALFINA-ANDRIANI---Portfolio?node-id=29-98817&p=f&t=mmCPXUOpSIawJUMu-1&scaling=scale-down&content-scaling=fixed&page-id=25%3A3408&starting-point-node-id=29%3A98817",
      },
    ],
  },

  /* ---------------- DATA & ML ---------------- */
  {
    id: "dataml-skego",
    name: "SKEGO",
    category: "dataml",
    bg: "#FBEEDD",
    color: "#b75106",
    image: "images/projects/skego.png",
    tags: [
      "Machine Learning",
      "TensorFlow",
      "Keras",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Development",
      "Model Tuning",
    ],
    listImage: "images/projects/skego.png",
    meta: [
      { label: "Role", value: "Machine Learning Engineer" },
      { label: "Timeline", value: "Nov 2024 - Dec 2024" },
      { label: "Tools", value: "Python, TensorFlow, Keras" },
    ],
    detailIntro:
      "Built a machine learning model using an Artificial Neural Network to predict task priorities, integrated into an Android mobile application to support more effective task management.",
    template: "dataml-default",
    github: true,
    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/Capstone-Project-SKEGO-App/SkegoApp",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            SKEGO is a mobile task management app that helps university students decide what to work on first. Instead of manually sorting a growing pile of assignments, organizational duties, and extracurricular commitments, SKEGO uses a machine learning model to automatically rank tasks by priority and recommend a schedule — reducing the daily "what should I do first?" decision fatigue that many students face.
          </p>
          <p>
            The project was built by a 7-person cross-functional team covering Machine Learning, Cloud Computing, and Mobile Development, and reached 100% completion of its planned scope, including a working Android app, a deployed prediction API, and cloud infrastructure on Google Cloud Platform.
          </p>
        `,
      },
      {
        id: "problem",
        label: "Problem",
        kind: "desc",
        body: `
          <p>
            Many students juggle coursework, committee work, and extracurricular activities at the same time, which makes it hard to judge which task deserves attention first. This leads to procrastination, missed deadlines, and added stress — issues that existing tools like Google Calendar or TickTick address with scheduling and sync, but not with actual task prioritization.
          </p>
        `,
      },
      {
        id: "ml-workflow",
        label: "Machine Learning Workflow",
        kind: "desc",
        body: `
          <p>
            As part of the ML team, my work covered the full pipeline behind SKEGO's core feature - AI-based task prioritization:
          </p>
          <ul>
            <li><strong>Data collection:</strong> Since no suitable open dataset existed for this use case, the team designed and ran a Google Forms survey to self-collect task data (task name, deadline, difficulty, estimated duration, category, and priority rating) directly from students, ensuring the data reflected real study/task patterns rather than a generic dataset.</li>
            <li><strong>Data cleaning & feature engineering:</strong> Cleaned raw survey responses, standardized column formats, converted timestamps and deadlines into usable numeric features, engineered features such as <code>days_until_deadline</code>, <code>hour_of_day</code>, and <code>day_of_week</code>, and normalized inputs with MinMaxScaler.</li>
            <li><strong>Model development:</strong> Built an artificial neural network in Keras to predict a task's priority score from features like deadline proximity, difficulty level, and duration.</li>
            <li><strong>Hyperparameter tuning:</strong> Used KerasTuner (RandomSearch, 20 trials) to tune the network's neuron counts, dropout rates, and learning rate for better generalization.</li>
            <li><strong>Deployment:</strong> Packaged the trained model as a REST API using Flask, deployed on Google Cloud Run, so the mobile app could request real-time priority predictions.</li>
          </ul>
        `,
      },
      {
        id: "tech-stack",
        label: "Approach & Tech Stack",
        kind: "table",
        columns: ["Area", "Tools/Techniques"],
        rows: [
          ["Language", "Python"],
          ["Modeling", "TensorFlow / Keras (Artificial Neural Network)"],
          ["Hyperparameter tuning", "KerasTuner (RandomSearch)"],
          ["Data handling", "Pandas, scikit-learn (MinMaxScaler)"],
          ["Data source", "Self-collected via Google Forms survey"],
          ["Serving", "Flask REST API"],
          ["Infrastructure", "Google Cloud Run"],
          ["Testing", "	Postman (API endpoint testing)"],
        ],
      },
      {
        id: "results",
        label: "Results",
        kind: "desc",
        body: `
          <p>
            Based on the final reported evaluation:
          </p>
          <ul>
            <li><strong>Test loss:</strong> 0.0714</li>
            <li><strong>Mean Absolute Error (MAE):</strong> 0.2206</li>
          </ul>
          <p>
            These metrics indicate the model's priority-score predictions stayed reasonably close to the target values on held-out data, supporting its use for ranking tasks in the app. As with any small, self-collected survey dataset, results are specific to the data gathered for this project and would benefit from a larger, more diverse dataset in a production setting.
          </p>
        `,
      },
      {
        id: "outcome",
        label: "Outcome",
        kind: "desc",
        body: `
          <p>
            The model was successfully integrated end-to-end: task data flows from the Android app → Cloud Computing API → ML prediction service → back to the app, which then displays students' tasks sorted by predicted priority. The full system — Android app (with APK), backend API, and ML model — was deployed and demoed as a complete working product.
          </p>
        `,
      },
      {
        id: "app-demo",
        label: "App Demo",
        kind: "video",
        video: "videos/skego-demo.mp4",
      },
    ],
  },
  {
    id: "dataml-dwo",
    name: "Data Warehouse & OLAP",
    category: "dataml",
    bg: "#EFEFEF",
    color: "#372AAC",
    image: "images/projects/adventure-work.png",
    tags: [
      "Data Warehouse",
      "Pentaho Data Integration",
      "Mondrian OLAP",
      "ETL",
      "Dashboard",
      "Business Intelligence",
    ],
    meta: [
      { label: "Role", value: "Data Warehouse & BI Developer" },
      { label: "Timeline", value: "Nov 2025 - Dec 2025" },
      { label: "Tools", value: "Pentaho, Mondrian, Next.js, Tailwind CSS" },
    ],
    detailIntro:
      "Built an end-to-end data warehouse and interactive OLAP dashboard using fact constellation modeling, ETL, and multidimensional analysis to support sales and purchasing insights from AdventureWorks database.",
    template: "dataml-default",
    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani/DashboardWHAdventure",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "accordion",
        body: `
          <p>
            AdventureWorks is a <strong>sample database</strong> developed by Microsoft that simulates the business activities of a fictional manufacturing company, Adventure Works Cycles, which specializes in the production and sale of bicycles and related components. The database contains data covering customers, sales, production, inventory, and human resources, making it a valuable dataset for practicing SQL queries, data analysis, and BI dashboard development.
          </p>
          <p>
            This project focuses on two key business processes: <strong>Sales and Purchasing</strong>. Both processes incorporate dimensions such as time, products, customers/suppliers, and performance metrics such as transaction volume and total value. These processes are modeled using a Data Warehouse and Online Analytical Processing (OLAP) approach.
          </p>
          <p>
            Based on these two business processes, the project defines <strong>24 analytical questions</strong> that can be answered using <code>fact_sales</code> and <strong>25 analytical questions</strong> using <code>fact_purchasing</code>. The analysis covers various aspects of business performance, including product performance, customer behavior, employee performance, supplier performance, and procurement quality.
          </p>
        `,
        items: [
          {
            label: "Example Questions - Sales",
            body: `
              <p>
                4 / 24
              </p>
              <ul>
                <li>What is the company’s total revenue across the entire period?</li>
                <li>Which product contributes the most to total revenue?</li>
                <li>Do discounts actually increase total revenue?</li>
                <li>Which employee generates the highest sales contribution?</li>
              </ul>
            `,
          },
          {
            label: "Example Questions - Purchasing",
            body: `
              <p>
                4 / 25
              </p>
              <ul>
                <li>What is the company’s total purchase value across the entire period?</li>
                <li>Which supplier has the highest total purchase value?</li>
                <li>Which product has the highest number of rejected items?</li>
                <li>Does the rejection rate have a significant impact on total purchasing costs?</li>
              </ul>
            `,
          },
        ],
      },
      {
        id: "workflow",
        label: "Workflow",
        kind: "desc",
        body: `
          <p>
            A structured methodology from operational schema analysis to a ready-to-use dashboard.
          </p>

          <div class="data-pipeline">
            <div class="data-pipeline__item">
              <span class="data-pipeline__number">01</span>
              <span class="data-pipeline__title">OLTP Analysis</span>
              <span class="data-pipeline__label">Understanding the AdventureWorks structure, transaction & master tables, and determining the grain of the fact tables.
              </span>
            </div>

            <span class="data-pipeline__arrow">→</span>

            <div class="data-pipeline__item">
              <span class="data-pipeline__number">02</span>
              <span class="data-pipeline__title">Fact Constellation Schema</span>
              <span class="data-pipeline__label">Designing multiple fact tables that share the same dimension tables.</span>
            </div>

            <span class="data-pipeline__arrow">→</span>

            <div class="data-pipeline__item">
              <span class="data-pipeline__number">03</span>
              <span class="data-pipeline__title">DW Design</span>
              <span class="data-pipeline__label">Defining attributes, primary/foreign keys, and relationships between facts & dimensions.</span>
            </div>

            <span class="data-pipeline__arrow">→</span>

            <div class="data-pipeline__item">
              <span class="data-pipeline__number">04</span>
              <span class="data-pipeline__title">ETL</span>
              <span class="data-pipeline__label">Extract – Transform – Load using Pentaho Data Integration.</span>
            </div>

            <span class="data-pipeline__arrow">→</span>

            <div class="data-pipeline__item">
              <span class="data-pipeline__number">05</span>
              <span class="data-pipeline__title">OLAP</span>
              <span class="data-pipeline__label">Building a multidimensional cube with Mondrian for slice, dice, drill-down & roll-up analysis.</span>
            </div>

            <span class="data-pipeline__arrow">→</span>

            <div class="data-pipeline__item">
              <span class="data-pipeline__number">06</span>
              <span class="data-pipeline__title">Dashboard Implementation</span>
              <span class="data-pipeline__label">Presenting the analysis results through an interactive dashboard built with Next.js.</span>
            </div>
          </div>
        `,
      },
      {
        id: "schema",
        label: "Model Schema",
        kind: "desc",
        body: `
          <p>
            The <strong>fact constellation schema</strong> consists of two fact tables: <code>fact_sales</code> and <code>fact_purchasing</code>. This design allows for efficient analysis of both sales and purchasing processes, enabling users to answer complex business questions across multiple dimensions.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: ["images/projects/dwo/schema.png"],
        },
      },
      {
        id: "etl",
        label: "ETL Process",
        kind: "desc",
        body: `
          <div class="data-pipeline">
            <div class="data-pipeline__item">
              <span class="data-pipeline__number" style="font-size: 30px; margin-bottom: 5px; font-weight: 700; opacity: 0.7;">E</span>
              <span class="data-pipeline__title">Extract</span>
              <span class="data-pipeline__label">Extracting data from the AdventureWorks OLTP system, including the <code>sales_customer</code>, <code>person_person</code>, <code>humanresources_employee</code>, <code>production_product</code>, <code>production_productsubcategory</code>, <code>production_productcategory</code>, and <code>purchasing_vendor</code> tables.
              </span>
            </div>

            <span class="data-pipeline__arrow">→</span>
            
            <div class="data-pipeline__item">
              <span class="data-pipeline__number" style="font-size: 30px; margin-bottom: 5px; font-weight: 700; opacity: 0.7;">T</span>
              <span class="data-pipeline__title">Transform</span>
              <span class="data-pipeline__label">Cleaningand transforming the data through deduplication, handling missing values, date format conversion into time hierarchies, ID lookups for the new dimensions, and recalculating numerical attributes such as <code>LineTotal</code>.
              </span>
            </div>

            <span class="data-pipeline__arrow">→</span>

            <div class="data-pipeline__item">
              <span class="data-pipeline__number" style="font-size: 30px; margin-bottom: 5px; font-weight: 700; opacity: 0.7;">L</span>
              <span class="data-pipeline__title">Load</span>
              <span class="data-pipeline__label">Loading the dimension tables first to ensure that the fact tables have valid references, followed by loading transaction records into <code>fact_sales</code> and <code>fact_purchasing</code> while maintaining referential integrity.</span>
            </div>
          </div>
          <p>
            <code>dim_date</code> built separately using a MySQL stored procedure that generates all dates within the range April 16, 2011 to September 22, 2014, while simultaneously calculating attributes such as year, month, quarter, month name, day name, and weekend indicator.
          </p>
        `,
      },
      {
        id: "olap",
        label: "OLAP",
        kind: "desc",
        body: `
          <p>
            Built an OLAP Cube using Mondrian to transform relational data into a multidimensional analytical structure. The implementation defines relationships between fact and dimension tables through an XML-based schema, enabling data exploration across different business perspectives.
          </p>
          <p>
            Developed a Sales Cube connecting the <code>fact_sales</code> table with Customer, Time, and Product dimensions. The cube supports analysis of transaction volume and total sales value across time periods, product categories, and individual customers, providing a structured view of sales performance.
          </p>
          <img src="images/projects/dwo/sales-cube.png" alt="Sales Cube">
          <p>
            Implemented a Purchasing Cube using the <code>fact_purchasing</code> table with Time, Product, and Supplier dimensions. Hierarchies such as Year → Month and Category → Subcategory → Product enable drill-down analysis of purchasing activity. The cube also includes measures for transaction volume and total purchase value, supporting comparisons across products, periods, and suppliers.
          </p>
          <img src="images/projects/dwo/purchasing-cube.png" alt="Purchasing Cube">
        `,
      },
      {
        id: "dashboard",
        label: "Dashboard",
        kind: "desc",
        body: `
          <p>
            Developed an interactive dashboard using Next.js and Tailwind CSS, connected directly to a Mondrian OLAP Cube. The dashboard uses MDX queries to retrieve aggregated sales and purchasing data across dimensions such as time, products, vendors, and categories, presenting the results through clear and interactive visualizations.
          </p>
        `,
        cta: "View GitHub Repository",
        url: "https://github.com/alfinaandriani/DashboardWHAdventure",
        media: {
          layout: "grid",
          columns: 1,
          items: [
            "images/projects/dwo/dashboard-1.png",
            "images/projects/dwo/dashboard-2.png",
            "images/projects/dwo/dashboard-3.png",
            "images/projects/dwo/dashboard-4.png",
          ],
        },
      },
    ],
  },
  {
    id: "dataml-sentimen-bibit",
    name: "Bibit Sentiment Analysis",
    category: "dataml",
    bg: "#E4F8EE",
    color: "#1AA96E",
    image: "images/projects/sentimen-bibit.png",
    tags: ["Sentiment Analysis", "Streamlit Dashboard", "Customer Insights"],
    listImage: "images/projects/sentimen-bibit.png",
    meta: [
      { label: "Role", value: "Data Analyst" },
      { label: "Timeline", value: "May 2025 - Jun 2025" },
      { label: "Tools", value: "Python, Streamlit" },
    ],
    detailIntro:
      "Analyzed Bibit user reviews using sentiment analysis to identify customer feedback patterns, visualize sentiment distribution, and uncover key business insights.",
    template: "dataml-default",
    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani/Dashboard-Analisis-Sentimen-Bibit",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            This project analyzes user reviews of the Bibit investment application to understand overall customer sentiment and identify patterns in their feedback. The analysis results are then visualized to highlight sentiment distribution and frequently occurring words across positive, neutral, and negative reviews. These findings provide a foundation for identifying customer concerns and exploring opportunities for further business analysis.
          </p>
        `,
      },
      {
        id: "data-preparation",
        label: "Data Preparation",
        kind: "desc",
        body: `
          <p>
            The dataset consists of user reviews containing written feedback and rating scores. The reviews were prepared for analysis by cleaning the text, removing irrelevant words, filtering short terms, and applying Indonesian stemming. Additional domain-specific stopwords were also removed to reduce commonly occurring terms that provided limited analytical value.
          </p>
          <p>
            The rating scores were then grouped into three sentiment categories: negative for ratings 1-2, neutral for rating 3, and positive for ratings 4-5. This categorization was used as the basis for the sentiment classification process.
          </p>
        `,
      },
      {
        id: "sentiment-modeling",
        label: "Sentiment Modeling",
        kind: "desc",
        body: `
          <p>
            The cleaned review text was transformed into numerical representations to enable machine learning-based classification. The model was trained to identify whether a review belonged to the negative, neutral, or positive sentiment category.
          </p>
          <p>
            Random oversampling was applied to address differences in the number of samples across sentiment classes. The resulting model was evaluated using cross-validation, accuracy, precision, recall, F1-score, and a confusion matrix to examine its classification performance.
          </p>
        `,
      },
      {
        id: "results",
        label: "Results",
        kind: "desc",
        body: `
          <p>
            The analysis produced sentiment classifications for the collected reviews and several visualizations to examine the resulting patterns. Sentiment distributions were compared with the categories derived from user ratings, while word clouds were used to highlight frequently occurring terms within each sentiment group.
          </p>
          <p>
            The confusion matrix provides a more detailed view of how reviews were classified across the three sentiment categories, including cases where the model predicted a different category from the assigned label.
          </p>
        `,
      },
      {
        id: "business-insights",
        label: "Business Insights",
        kind: "desc",
        body: `
          <p>
            The sentiment analysis provides a structured view of customer feedback that can be used to identify recurring concerns and positive experiences. Negative feedback can be examined to uncover potential customer pain points, while positive feedback can indicate aspects of the application that users value.
          </p>
          <p>
            These findings can support further CRM-oriented analysis by connecting recurring customer feedback with potential areas for service improvement, product enhancement, and customer experience initiatives.
          </p>
        `,
      },
    ],
  },
  {
    id: "dataml-bike-sharing",
    name: "Bike Sharing",
    category: "dataml",
    bg: "#EFEFEF",
    color: "#2D2D2D",
    image: "images/projects/bike-sharing.png",
    tags: ["Data Cleaning", "Exploratory Data Analysis", "Streamlit Dashboard"],
    listImage: "images/projects/bike-sharing.png",
    meta: [
      { label: "Role", value: "Data Analyst" },
      { label: "Year", value: "2024" },
    ],
    detailIntro:
      "Analyzed bike sharing usage patterns and developed a Streamlit dashboard to visualize the insights.",
    template: "dataml-default",
    // links: [
    //   {
    //     type: "github",
    //     label: "GITHUB",
    //     url: "https://github.com/alfinaandriani",
    //   },
    // ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            Bike Sharing Data Analysis Dashboard is a data analysis project focused on translating bike-sharing data into insights that can support business and operational understanding. By analyzing usage patterns across factors such as holidays, weather conditions, temperature, and seasonal trends, the project explored how external variables may influence customer demand and service usage. Using Python for data cleaning, exploratory analysis, and visualization, the project transformed raw data into a more structured view of user behavior and usage trends. The results were presented through an interactive dashboard to make the findings easier to interpret and more useful for evaluation and data-informed decision-making.
          </p>
        `,
      },
    ],
  },

  /* ---------------- SOFTWARE DEVELOPMENT ---------------- */
  {
    id: "softdev-maroku",
    name: "Maroku",
    category: "softdev",
    bg: "#DDEFFC",
    color: "#013A70",
    image: "images/projects/maroku.png",
    tags: ["React Native", "Mobile Development", "UI Implementation"],
    meta: [
      { label: "Framework", value: "React Native" },
      { label: "Role", value: "Front End Dev" },
      { label: "Year", value: "2026" },
    ],
    detailIntro:
      "A partial front-end implementation of the Maroku mobile application, translating the finalized UI/UX design into React Native for selected customer-facing screens.",
    template: "softdev-default",
    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani/Maroku_app",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            This project implements selected parts of the Maroku mobile application based on the final UI/UX prototype. The implementation was carried out using React Native as part of the <strong>Generate Design</strong> stage.
          </p>

          <p>
            The implementation focuses on translating the finalized interface into a runnable mobile application for the customer-side catalog ordering flow.
          </p>
        `,
      },

      {
        id: "implementation-scope",
        label: "Implementation Scope",
        kind: "accordion",
        body: `
          <p>
            The React Native implementation covers six main customer-facing pages documented in the project report.
          </p>
        `,
        items: [
          {
            label: "Customer Home",
            body: `
              <p>
                The Customer Home page serves as the main entry point for the customer-side application interface.
              </p>
            `,
          },
          {
            label: "Catalog",
            body: `
              <p>
                The Catalog page displays the available cake products and represents the product browsing stage of the catalog ordering flow.
              </p>
            `,
          },
          {
            label: "Product Detail",
            body: `
              <p>
                The Product Detail page allows customers to view information about a selected catalog product before continuing with the order.
              </p>
            `,
          },
          {
            label: "Order Confirmation",
            body: `
              <p>
                The Order Confirmation page represents the confirmation stage before the customer proceeds to payment.
              </p>
            `,
          },
          {
            label: "Payment",
            body: `
              <p>
                The Payment page represents the payment stage of the catalog ordering flow.
              </p>
            `,
          },
          {
            label: "Order Detail",
            body: `
              <p>
                The Order Detail page provides information about the customer's order after the purchasing process.
              </p>
            `,
          },
        ],
      },

      {
        id: "technology",
        label: "Technology",
        kind: "table",
        columns: ["Technology", "Usage"],
        rows: [
          [
            "React Native",
            "Used to implement selected parts of the Maroku interface into the front end.",
          ],
        ],
      },

      {
        id: "user-flow",
        label: "Implemented Flow",
        kind: "desc",
        body: `
          <p>
            The implemented screens represent the catalog purchasing flow from browsing products to completing the transaction and viewing the order information.
          </p>

          <p>
            The flow covers <strong>Customer Home → Catalog → Product Detail → Order Confirmation → Payment → Order Detail</strong>.
          </p>
        `,
      },

      {
        id: "generate-design",
        label: "Generate Design",
        kind: "desc",
        body: `
          <p>
            The Generate Design stage translated selected parts of the finalized UI/UX design into a front-end implementation using React Native.
          </p>

          <p>
            The implementation was focused on realizing the designed customer-side catalog ordering flow through the six documented screens.
          </p>
        `,
      },

      {
        id: "screens",
        label: "Implemented Screens",
        kind: "desc",
        body: `
          <p>
            The implemented interface consists of six main customer-side screens documented in the report: Customer Home, Catalog, Product Detail, Order Confirmation, Payment, and Order Detail.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 3,
          items: [
            "images/projects/maroku/home.png",
            "images/projects/maroku/catalog.png",
            "images/projects/maroku/product-detail.png",
            "images/projects/maroku/order-confirmation.png",
            "images/projects/maroku/payment.png",
            "images/projects/maroku/order-detail.png",
          ],
        },
      },
    ],
  },
  {
    id: "softdev-exbook",
    name: "ExBook",
    category: "softdev",
    bg: "#FBF6D8",
    color: "#7c410b",
    image: "images/projects/exbook.png",
    listImage: "images/projects/exbook.png",

    tags: [
      "Flutter",
      "Dart",
      "Provider",
      "API Integration",
      "Mobile Development",
    ],

    meta: [
      { label: "Framework", value: "Flutter" },
      { label: "Role", value: "Front End Dev" },
      { label: "Year", value: "2024" },
    ],

    detailIntro:
      "Implemented the ExBook mobile interface using Flutter and Dart, with Provider for state management and API integration for retrieving book data.",

    template: "exbook-softdev",
    mobile: "Mobile",

    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/DevitaFahliza/Exbook",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            ExBook is a mobile application for buying and selling used books online. The frontend was developed using Flutter and Dart, with the interface based on the application's UI design.
          </p>

          <p>
            The implementation connects the Flutter application with an API for retrieving book data and uses Provider for state management.
          </p>
        `,
      },

      {
        id: "technology",
        label: "Technology",
        kind: "accordion",
        body: `
          <p>
            The frontend implementation uses the following technologies and tools documented in the project report:
          </p>
        `,
        items: [
          {
            label: "Flutter & Dart",
            body: `
              <p>
                Flutter was used to develop the mobile user interface, with Dart as the programming language.
              </p>
            `,
          },
          {
            label: "Provider",
            body: `
              <p>
                Provider was used for state management in the Flutter application. The implementation includes state management for wishlist data and updates the related widgets when wishlist data changes.
              </p>
            `,
          },
          {
            label: "API Integration",
            body: `
              <p>
                The application retrieves book data through an API. The Home and Search Results screens use asynchronous data retrieval and display loading and error states while processing the API response.
              </p>
            `,
          },
        ],
      },

      {
        id: "implementation",
        label: "Frontend Implementation",
        kind: "accordion",
        body: `
          <p>
            The frontend implementation translates the ExBook interface into functional Flutter screens and connects the relevant screens through the application's user flow.
          </p>
        `,
        items: [
          {
            label: "Authentication",
            body: `
              <p>
                The application includes Splash Screen, Login Screen, and Sign Up Screen. The Splash Screen appears when the application starts and then moves to the Login screen. Login validates the entered email and password, while Sign Up allows users to create an account.
              </p>
            `,
          },

          {
            label: "Home & Search",
            body: `
              <p>
                The Home screen provides bottom navigation for Home, Pesanan, Wishlist, and Profil. It displays available books in a grid and provides a text input for searching books.
              </p>

              <p>
                Book data on the Home screen is retrieved from the API using FutureBuilder, with loading and error states handled during the request.
              </p>

              <p>
                The Search Results screen updates the displayed book list based on the entered search query and provides navigation to the book detail screen when a book is selected.
              </p>
            `,
          },

          {
            label: "Wishlist",
            body: `
              <p>
                The wishlist functionality is managed using Provider. Users can add and remove books from the wishlist and check whether a book is already saved.
              </p>

              <p>
                The Wishlist screen displays saved books in a two-column grid and provides visual indication of a book's wishlist status.
              </p>
            `,
          },

          {
            label: "Book Details",
            body: `
              <p>
                The Book Detail screen displays the book image, title, author, page count, publication date, condition, category, description, and price. A "Beli Sekarang" button directs the user to checkout.
              </p>
            `,
          },

          {
            label: "Checkout",
            body: `
              <p>
                The Checkout screen displays shipping information, the selected book, and payment details consisting of product subtotal, shipping subtotal, and total payment.
              </p>

              <p>
                After the user selects the purchase action, the order data is stored locally using SharedPreferences and a confirmation dialog is displayed before navigating to the Orders screen.
              </p>
            `,
          },

          {
            label: "Orders",
            body: `
              <p>
                The Orders screen displays two tabs: "Pesanan" for active or unfinished orders and "Riwayat" for completed orders. Users can also open the order detail screen to view shipping information, ordered products, and payment details.
              </p>
            `,
          },
        ],
      },

      {
        id: "data-flow",
        label: "Data & State Flow",
        kind: "desc",
        body: `
          <p>
            Book data is retrieved from the backend API and converted from JSON responses into Book objects for use within the Flutter application.
          </p>

          <p>
            Provider manages application state for wishlist data. Changes to the wishlist trigger widget updates through ChangeNotifier and notifyListeners().
          </p>

          <p>
            Order data is stored locally using SharedPreferences, allowing the Orders screen to load previously stored order information.
          </p>
        `,
      },

      {
        id: "implementation-summary",
        label: "Implementation Summary",
        kind: "table",
        columns: ["Area", "Implementation"],
        rows: [
          ["UI", "Flutter widgets implementing the ExBook mobile interface"],
          ["Language", "Dart"],
          ["State Management", "Provider / ChangeNotifier"],
          ["Book Data", "API integration with asynchronous data retrieval"],
          ["Local Order Storage", "SharedPreferences"],
          ["Navigation", "Flutter Navigator between application screens"],
        ],
      },
    ],
  },
  {
    id: "softdev-siteknik",
    name: "Siteknik",
    category: "softdev",
    bg: "#DDEFFC",
    color: "#4DAAF5",
    image: "images/projects/siteknik.png",

    tags: [
      "Flutter",
      "Dart",
      "Mobile Development",
      "UI Implementation",
      "Navigation",
      "Local Data Modeling",
    ],

    meta: [
      { label: "Framework", value: "Flutter" },
      { label: "Role", value: "Mobile Developer" },
      { label: "Year", value: "2024" },
    ],

    detailIntro:
      "A Flutter-based mobile application developed as an information platform for the Faculty of Engineering at UPN Veteran Jawa Timur.",

    template: "softdev-default",

    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani/UTS_SITEKNIK",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            Siteknik is a mobile application developed as an information platform for the Faculty of Engineering at UPN Veteran Jawa Timur. The application presents structured information about the faculty, its study programs, and developer profiles.
          </p>

          <p>
            The project was developed using Flutter and focuses on implementing the application's interface, navigation, and structured data to make faculty information accessible through a mobile application.
          </p>
        `,
      },

      {
        id: "purpose",
        label: "Project Purpose",
        kind: "desc",
        body: `
          <p>
            The project aims to provide an attractive and informative platform that allows users to easily access information about the Faculty of Engineering, including its history, vision and mission, and available study programs.
          </p>

          <p>
            The application also provides detailed information for each study program, including its description, accreditation, vision and mission, teaching staff, and student achievements.
          </p>
        `,
      },

      {
        id: "technology",
        label: "Technology",
        kind: "table",
        columns: ["Technology", "Usage"],
        rows: [
          [
            "Flutter",
            "Used as the main framework for developing the mobile application and building its user interface.",
          ],
          [
            "Dart",
            "Used as the programming language for implementing the application.",
          ],
          ["Visual Studio Code", "Used as the development environment."],
          [
            "Chrome",
            "Used as part of the development and testing environment.",
          ],
        ],
      },

      {
        id: "implementation",
        label: "Implementation",
        kind: "accordion",
        body: `
          <p>
            The application was structured into several pages and data classes to organize the faculty information and its presentation in the mobile interface.
          </p>
        `,
        items: [
          {
            label: "Main Page",
            body: `
              <p>
                The main page presents general information about the Faculty of Engineering, including its history, vision, mission, study programs, and developer profiles.
              </p>
            `,
          },
          {
            label: "Study Program",
            body: `
              <p>
                The <strong>Prodi</strong> class defines the data structure for study programs, including the program name, logo, description, vision and mission, accreditation, head of study program, lecturers, website, and student achievements.
              </p>
            `,
          },
          {
            label: "Study Program Detail",
            body: `
              <p>
                The <strong>DetailProdi</strong> page displays detailed information for a selected study program. Users can also access the official study program website through the provided button.
              </p>
            `,
          },
          {
            label: "Developer Profile",
            body: `
              <p>
                The <strong>Profile</strong> class stores developer profile information, including name, photo, NPM, place and date of birth, address, phone number, email, GitHub account, education history, awards, and award photos.
              </p>
            `,
          },
          {
            label: "Developer Profile Detail",
            body: `
              <p>
                The <strong>DetailProfile</strong> page presents detailed developer information and provides interactions for opening GitHub and sending an email.
              </p>
            `,
          },
        ],
      },

      {
        id: "navigation",
        label: "Navigation & Interaction",
        kind: "desc",
        body: `
          <p>
            Navigation was implemented to allow users to access additional information about each study program and return to the main page. The study program detail page also provides access to the official study program website.
          </p>

          <p>
            The developer profile detail page includes actions for opening a GitHub profile and sending an email.
          </p>
        `,
      },

      {
        id: "data-structure",
        label: "Data Structure",
        kind: "desc",
        body: `
          <p>
            The application uses structured classes to organize the information displayed in the interface. The <strong>Prodi</strong> class manages study program data, while the <strong>Profile</strong> class manages developer profile data. Both classes contain sample data initialized through their respective constructors.
          </p>
        `,
      },

      {
        id: "flutter-concepts",
        label: "Flutter Implementation",
        kind: "table",
        columns: ["Concept", "Implementation"],
        rows: [
          [
            "Widget",
            "Used as the fundamental building blocks of the application's user interface.",
          ],
          [
            "Widget Tree",
            "Used to structure the hierarchy and relationships between UI components.",
          ],
          [
            "State",
            "Flutter state concepts were applied through stateless and stateful widgets.",
          ],
          [
            "Layout",
            "Widgets such as Column, Row, ListView, ListTile, and Card were used to organize interface content.",
          ],
        ],
      },

      {
        id: "screens",
        label: "Application Screens",
        kind: "desc",
        body: `
          <p>
            The implemented application includes a main faculty information page, study program listing and detail pages, and developer profile listing and detail pages.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: [
            "images/projects/siteknik/main.png",
            "images/projects/siteknik/prodi.png",
            "images/projects/siteknik/detail-prodi.png",
            "images/projects/siteknik/profile.png",
            "images/projects/siteknik/detail-profile.png",
          ],
        },
      },
    ],
  },
  {
    id: "softdev-sis",
    name: "Stunting Information System",
    category: "softdev",
    bg: "#DDEFFC",
    color: "#458EFA",
    image: "images/projects/sis.png",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Web Development",
      "Frontend Development",
      "Database Integration",
    ],

    meta: [
      { label: "Role", value: "Front End Dev" },
      { label: "Year", value: "2024" },
    ],

    detailIntro:
      "A web-based information system designed to support stunting-related data management and information access through an integrated web interface.",

    template: "softdev-default",

    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani/SIS-WEB",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            Stunting Information System (SIS) is a web-based information system developed to manage and present information related to stunting. The project combines a web interface with database functionality to support structured management of system data.
          </p>

          <p>
            The application was developed using HTML, CSS, JavaScript, PHP, and MySQL, with the interface serving as the primary layer for user interaction and information presentation.
          </p>
        `,
      },

      {
        id: "technology",
        label: "Technology",
        kind: "table",
        columns: ["Technology", "Usage"],
        rows: [
          ["HTML", "Used to structure the web pages and application content."],
          [
            "CSS",
            "Used to style and organize the visual presentation of the interface.",
          ],
          [
            "JavaScript",
            "Used to provide client-side interaction and dynamic behavior.",
          ],
          [
            "PHP",
            "Used for server-side web application logic and communication with the database.",
          ],
          ["MySQL", "Used to store and manage application data."],
        ],
      },

      {
        id: "development",
        label: "Web Development",
        kind: "accordion",
        body: `
          <p>
            The project combines frontend technologies with PHP and MySQL to create a web-based information system. The frontend layer handles the structure, styling, and user interaction, while PHP is used to process application requests and connect the system with stored data.
          </p>
        `,
        items: [
          {
            label: "Interface",
            body: `
              <p>
                HTML and CSS were used to build and style the web interface, while JavaScript was used to support interactive elements within the application.
              </p>
            `,
          },
          {
            label: "Application Logic",
            body: `
              <p>
                PHP was used as the server-side programming language to process application functionality and handle communication between the web application and the database.
              </p>
            `,
          },
          {
            label: "Database",
            body: `
              <p>
                MySQL was used as the database for storing and managing information required by the system.
              </p>
            `,
          },
        ],
      },

      {
        id: "implementation",
        label: "Implementation",
        kind: "desc",
        body: `
          <p>
            The implementation connects the web interface with server-side processing and database storage, allowing information to be managed through the system rather than being presented only as static web content.
          </p>
        `,
      },

      {
        id: "interface",
        label: "Interface",
        kind: "desc",
        body: `
          <p>
            The project includes web interface screens for presenting and interacting with the information managed by the Stunting Information System.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: [
            "images/projects/sis/home.png",
            "images/projects/sis/dashboard.png",
            "images/projects/sis/data.png",
          ],
        },
      },
    ],
  },

  // {
  //   id: "softdev-space-adventure",
  //   name: "Space Adventure",
  //   category: "softdev",
  //   bg: "#DDEFFC",
  //   color: "#2D2D2D",
  //   image: "images/projects/spad.png",
  //   tags: ["HTML", "CSS", "JavaScript", "Web Game Development"],
  //   meta: [
  //     { label: "Role", value: "Game Developer" },
  //     { label: "Year", value: "2024" },
  //   ],
  //   detailIntro: "",
  //   template: "softdev-default",
  //   links: [
  //     {
  //       type: "github",
  //       label: "GITHUB",
  //       url: "https://github.com/alfinaandriani",
  //     },
  //   ],
  // },

  {
    id: "softdev-siko",
    name: "SIKO",
    category: "softdev",
    bg: "#FBF6D8",
    color: "#8B4717",
    image: "images/projects/siko.png",

    tags: [
      "Visual Basic .NET",
      "MySQL",
      "Waterfall",
      "Desktop Application",
      "Database Integration",
      "Role-Based Access",
    ],

    meta: [
      { label: "Role", value: "Desktop Developer" },
      { label: "Year", value: "2023" },
    ],

    detailIntro:
      "A desktop-based organizational financial information system developed with Visual Basic .NET and MySQL to support cash payment, fund proposals, financial records, and reporting.",

    template: "softdev-default",

    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            SIKO (Sistem Informasi Keuangan Organisasi) is a desktop-based financial information system developed to support financial management within student organizations.
          </p>

          <p>
            The system was developed using Visual Studio 2019 with Visual Basic .NET and MySQL as the database for storing and managing financial data.
          </p>
        `,
      },

      {
        id: "problem",
        label: "Problem",
        kind: "desc",
        body: `
          <p>
            SIKO was developed in response to financial recording problems experienced by student organizations. The system was intended to address the limitations of previously manual financial management by providing a structured application for recording cash payments, fund proposals, and financial reports.
          </p>
        `,
      },

      {
        id: "development-method",
        label: "Development Method",
        kind: "accordion",
        body: `
          <p>
            The system was developed using the <strong>Waterfall</strong> development method. The development process follows sequential stages from requirements analysis through system operation and maintenance.
          </p>
        `,
        items: [
          {
            label: "Requirements Analysis",
            body: `
              <p>
                The requirements analysis stage identifies the needs of the organizational financial management system.
              </p>
            `,
          },
          {
            label: "System & Software Design",
            body: `
              <p>
                The system and software design stage defines the structure and design required before implementation.
              </p>
            `,
          },
          {
            label: "Implementation & Unit Testing",
            body: `
              <p>
                The system was implemented using Visual Basic .NET with MySQL as the database.
              </p>
            `,
          },
          {
            label: "Integration & System Testing",
            body: `
              <p>
                The completed components were integrated and tested to evaluate whether the application met the designed requirements.
              </p>
            `,
          },
          {
            label: "Operation & Maintenance",
            body: `
              <p>
                The final Waterfall stage covers system operation and maintenance.
              </p>
            `,
          },
        ],
      },

      {
        id: "technology",
        label: "Technology",
        kind: "table",
        columns: ["Technology", "Usage"],
        rows: [
          [
            "Visual Basic .NET",
            "Used as the programming language for developing the desktop application.",
          ],
          [
            "Visual Studio 2019",
            "Used as the development environment for the SIKO application.",
          ],
          [
            "MySQL",
            "Used to store and manage the financial data required by the application.",
          ],
        ],
      },

      {
        id: "user-roles",
        label: "User Roles",
        kind: "table",
        columns: ["Role", "Access & Function"],
        rows: [
          [
            "Anggota",
            "Input cash payments and submit agenda fund proposals.",
          ],
          [
            "Bendahara",
            "Access cash master data, agenda fund proposal master data, cash reports, and agenda fund proposal reports.",
          ],
          [
            "Ketua",
            "Access overall cash reports and agenda fund proposal reports.",
          ],
        ],
      },

      {
        id: "features",
        label: "Core Features",
        kind: "table",
        columns: ["Feature", "Description"],
        rows: [
          [
            "Authentication",
            "Provides login access for different user roles.",
          ],
          [
            "Cash Payment",
            "Allows members to input their organizational cash payments.",
          ],
          [
            "Fund Proposal",
            "Allows members to submit agenda fund proposals to the treasurer.",
          ],
          [
            "Cash Management",
            "Allows the treasurer to access and manage cash-related master data.",
          ],
          [
            "Fund Proposal Management",
            "Allows the treasurer to access and manage agenda fund proposal data.",
          ],
          [
            "Cash Report",
            "Provides financial reporting for organizational cash.",
          ],
          [
            "Fund Proposal Report",
            "Provides reporting for submitted agenda fund proposals.",
          ],
        ],
      },

      {
        id: "member",
        label: "Member Workflow",
        kind: "desc",
        body: `
          <p>
            After logging in, members access a dashboard containing the available actions. Members can input cash payments by providing their name, department, and payment month. They can also submit agenda fund proposals by entering the activity name, department, requested amount, and agenda implementation information.
          </p>
        `,
      },

      {
        id: "treasurer",
        label: "Treasurer Workflow",
        kind: "desc",
        body: `
          <p>
            The treasurer logs into the system and can access the Cash Master, Agenda Fund Proposal Master, Cash Report, and Agenda Fund Proposal Report.
          </p>
        `,
      },

      {
        id: "database",
        label: "Database",
        kind: "desc",
        body: `
          <p>
            MySQL is used as the database for storing and processing the information required by SIKO. The database includes tables for organizational departments, cash payments, payment details, and agenda fund proposals.
          </p>
        `,
      },

      {
        id: "implementation",
        label: "Implementation",
        kind: "accordion",
        body: `
          <p>
            The implementation connects the desktop interface with MySQL to support data input, display, and management within the SIKO application.
          </p>
        `,
        items: [
          {
            label: "Cash Input",
            body: `
              <p>
                The cash input form includes a total field, payment number generation, department selection from database data, input handling, and DataGridView-based data display.
              </p>
            `,
          },
          {
            label: "Cash Master",
            body: `
              <p>
                The Cash Master form displays payment data from the <strong>tbl_pembayaran</strong> table and provides access to payment details.
              </p>
            `,
          },
          {
            label: "Login",
            body: `
              <p>
                Login functionality was implemented for the application's user roles, including a password input handler that displays password characters as asterisks.
              </p>
            `,
          },
        ],
      },

      {
        id: "testing",
        label: "Testing",
        kind: "desc",
        body: `
          <p>
            Testing was conducted to evaluate whether the implemented application achieved the previously designed requirements. The report describes testing across the application's user roles and functions.
          </p>
        `,
      },

      {
        id: "result",
        label: "Result",
        kind: "desc",
        body: `
          <p>
            The completed SIKO application supports member cash payment input and agenda fund proposals, provides the treasurer with access to financial master data and reports, and provides the organization leader with access to overall cash and fund proposal reports.
          </p>

          <p>
            According to the report, the system provides a positive impact on the efficiency and accuracy of financial management compared with the previously manual process.
          </p>
        `,
      },

      {
        id: "screens",
        label: "Application Screens",
        kind: "desc",
        body: `
          <p>
            The implemented application includes login, member dashboard, cash payment, fund proposal, treasurer dashboard, master data, and financial reporting interfaces.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: [
            "images/projects/siko/login.png",
            "images/projects/siko/dashboard.png",
            "images/projects/siko/kasinput.png",
            "images/projects/siko/pengajuan-dana.png",
            "images/projects/siko/master-kas.png",
            "images/projects/siko/laporan.png",
          ],
        },
      },
    ],
  },

  {
    id: "softdev-cashier",
    name: "Cashier",
    category: "softdev",
    bg: "#EDEEFF",
    color: "#9696FF",
    image: "images/projects/cashier.png",

    tags: [
      "Java",
      "Java Swing",
      "OOP",
      "System Architecture",
      "Desktop Application",
    ],

    meta: [
      { label: "Role", value: "Java Desktop Developer" },
      { label: "Year", value: "2023" },
    ],

    detailIntro:
      "A Java-based desktop cashier application developed with Object-Oriented Programming principles to support product management, sales transactions, and receipt printing.",

    template: "softdev-default",

    links: [
      {
        type: "github",
        label: "GITHUB",
        url: "https://github.com/alfinaandriani",
      },
    ],

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            Cashier is a desktop application developed as a final project for the Programming Languages course. The application was built using Java with an object-oriented approach and provides core functionality for cashier operations.
          </p>

          <p>
            The system includes product management, sales transaction processing, and receipt printing through a graphical user interface built with Java Swing.
          </p>
        `,
      },

      {
        id: "technology",
        label: "Technology",
        kind: "table",
        columns: ["Technology", "Usage"],
        rows: [
          [
            "Java",
            "Used as the main programming language for developing the cashier application.",
          ],
          [
            "Java Swing",
            "Used to build the graphical user interface of the desktop application.",
          ],
          [
            "Object-Oriented Programming",
            "Used as the programming approach for designing the system architecture.",
          ],
        ],
      },

      {
        id: "system-design",
        label: "System Design",
        kind: "desc",
        body: `
          <p>
            The application architecture was designed using Object-Oriented Programming (OOP) principles. This approach was used to structure the application's components and support the implementation of its cashier-related functionality.
          </p>
        `,
      },

      {
        id: "features",
        label: "Core Features",
        kind: "table",
        columns: ["Feature", "Description"],
        rows: [
          [
            "Product Management",
            "Manage product information used within the cashier application.",
          ],
          [
            "Sales Transactions",
            "Process sales transactions through the cashier interface.",
          ],
          [
            "Receipt Printing",
            "Generate and print receipts after sales transactions.",
          ],
        ],
      },

      {
        id: "interface",
        label: "Desktop Interface",
        kind: "desc",
        body: `
          <p>
            The application uses Java Swing to provide a graphical interface for accessing the product management, sales transaction, and receipt-related functionality.
          </p>
        `,
        media: {
          layout: "grid",
          columns: 1,
          items: ["images/projects/cashier/cashier.png"],
        },
      },
    ],
  },

  /* ---------------- BUSINESS ANALYSIS ---------------- */
  {
    id: "business-maroku",
    name: "Maroku",
    category: "business",
    bg: "#DDEFFC",
    color: "#013A70",
    image: "images/projects/maroku.png",

    tags: [
      "Business Analysis",
      "Requirements Analysis",
      "Stakeholder Analysis",
      "Process Analysis",
      "Problem Analysis",
      "Solution Analysis",
    ],

    meta: [
      { label: "Role", value: "Business Analyst" },
      { label: "Year", value: "2026" },
    ],

    detailIntro:
      "Business analysis of Maroku's existing ordering and operational processes, identifying stakeholder needs, process gaps, and opportunities for a more structured digital ordering system.",

    template: "business-maroku",

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            This project analyzes the existing business processes at Maroku, a cake business operating with several types of orders and customer interactions. The analysis covers customer ordering, custom cake requests, big orders, cake decoration classes, stock management, payments, and internal order coordination.
          </p>

          <p>
            The analysis was conducted as part of the Maroku UI/UX design project, with a focus on translating business and stakeholder problems into structured requirements and solution opportunities for a mobile application.
          </p>
        `,
      },

      {
        id: "business-context",
        label: "Business Context",
        kind: "accordion",
        body: `
          <p>
            Maroku operates several business processes, including same-day orders, H- orders, custom cakes, big orders, cake decoration classes, monthly bazaars, and collaborations with cafes or other UMKM businesses.
          </p>

          <p>
            For large orders, Maroku serves needs such as weddings, birthday parties, and corporate events. Corporate orders can include dessert corners and cake requirements for office events.
          </p>

          <p>
            The business currently uses WhatsApp for customer communication and Google Keep for recording orders so that the kitchen and admin teams can stay synchronized.
          </p>
        `,
        items: [
          {
            label: "Same-Day Order",
            body: `
              <p>
                Customers may contact Maroku through WhatsApp to check product availability before visiting the store, or they may come directly to the store and select available products. If the desired cake is unavailable, the store may offer an option to wait for production or have the product delivered.
              </p>
            `,
          },

          {
            label: "H- Order",
            body: `
              <p>
                H- orders involve customers discussing availability, date, price, and pickup time with the admin before submitting an order and making a down payment.
              </p>
            `,
          },

          {
            label: "Custom Cake",
            body: `
              <p>
                Custom cake orders require customers to communicate their design requirements. The current process can involve communication through WhatsApp, creating a risk of differences between the requested design and the final result.
              </p>
            `,
          },

          {
            label: "Big Order",
            body: `
              <p>
                Large orders for events require discussion of order requirements, followed by agreement and transaction processing. Corporate customers may begin the process through WhatsApp and continue discussions or dealing directly with the store.
              </p>
            `,
          },

          {
            label: "Cake Decoration Class",
            body: `
              <p>
                Class registration is currently handled manually through WhatsApp, including payment confirmation. Participants do not have direct visibility of remaining class capacity and must wait for confirmation from the admin.
              </p>
            `,
          },
        ],
      },

      {
        id: "stakeholders",
        label: "Stakeholder Analysis",
        kind: "table",
        columns: ["Stakeholder", "Role / Context", "Key Needs"],
        rows: [
          [
            "Store Team",
            "Manages orders, stock, payments, and customer communication.",
            "Integrated order management, monitoring of orders, payments, stock, and sales.",
          ],
          [
            "Daily Customers",
            "Individual customers ordering cakes for personal needs.",
            "Fast and clear access to product, price, stock, date availability, and ordering information.",
          ],
          [
            "Class Participants",
            "Customers participating in Maroku's cake decoration classes.",
            "Clear class information, available quota, registration, payment, and registration status.",
          ],
          [
            "Corporate Customers",
            "Customers ordering cakes in larger quantities for events.",
            "Accessible catalog information and transparent order progress.",
          ],
          [
            "Kitchen",
            "Processes customer orders based on information provided by the team.",
            "Accurate and centralized order information to reduce communication errors.",
          ],
          [
            "Cashier",
            "Handles sales transactions at the store.",
            "Better recording and monitoring of products sold and payment integration.",
          ],
          [
            "Owner",
            "Oversees business operations and sales performance.",
            "Centralized information and visibility into sales and business activity.",
          ],
        ],
      },

      {
        id: "current-process",
        label: "Current Process Analysis",
        kind: "accordion",
        body: `
          <p>
            The current-state analysis shows that several business activities depend on manual communication and recording. Customer orders are communicated through WhatsApp and subsequently copied by the admin into Google Keep.
          </p>

          <p>
            This creates dependency on manual input and can result in missing information, unclear order details, and communication gaps between the admin and kitchen team.
          </p>
        `,
        items: [
          {
            label: "Order Recording",
            body: `
              <p>
                Customers submit order information through WhatsApp, after which the admin manually transfers the information into Google Keep. Important information such as dates, designs, and changes to order details may not always be communicated clearly.
              </p>
            `,
          },

          {
            label: "Customer Communication",
            body: `
              <p>
                Customers depend on the admin to obtain information about product availability, prices, available dates, order progress, and other ordering details. The use of WhatsApp as the primary communication channel creates dependency on admin responses.
              </p>
            `,
          },

          {
            label: "Stock & Sales Monitoring",
            body: `
              <p>
                Stock between the kitchen and store can be monitored directly because they are located in the same place. However, when many custom orders are being processed, kitchen capacity can affect the speed at which store stock is replenished.
              </p>

              <p>
                The existing cashier system is not connected to product-sales monitoring, making daily sales recording and reporting less centralized.
              </p>
            `,
          },

          {
            label: "Class Registration",
            body: `
              <p>
                Class information is distributed through social media or WhatsApp. Participants register through a form provided by the admin, make payment, and confirm payment through WhatsApp. The remaining class quota is not directly visible to participants.
              </p>
            `,
          },

          {
            label: "Corporate Orders",
            body: `
              <p>
                Corporate customers generally begin by consulting through WhatsApp and may visit the store to finalize the order. The process creates dependency on the admin for catalog information and order progress.
              </p>
            `,
          },
        ],
      },

      {
        id: "problem-analysis",
        label: "Problem Analysis",
        kind: "table",
        columns: ["Business Area", "Current Problem", "Business Impact"],
        rows: [
          [
            "Product Catalog",
            "No centralized and easily accessible digital catalog.",
            "Customers depend on admin responses for basic product and price information.",
          ],
          [
            "Order Process",
            "Ordering is not centralized and relies on manual WhatsApp communication.",
            "Process becomes slower and more dependent on admin involvement.",
          ],
          [
            "Order Recording",
            "Admin manually copies order information into Google Keep.",
            "Creates potential for recording errors and communication gaps.",
          ],
          [
            "Stock & Availability",
            "Customers cannot directly see stock, available dates, or remaining class quota.",
            "Customers have less certainty when deciding when and what to order.",
          ],
          [
            "Custom Cake",
            "Design requirements are communicated without a dedicated structured interface.",
            "Creates potential mismatch between requested design and final result.",
          ],
          [
            "Order Progress",
            "Customers do not have a dedicated interface for monitoring order status.",
            "Customers need to contact the admin for progress information.",
          ],
          [
            "Class Registration",
            "Registration and payment confirmation are handled manually through WhatsApp.",
            "Participants must wait for admin confirmation and cannot directly monitor remaining quota.",
          ],
          [
            "Sales Monitoring",
            "Cashier information is not connected to monitoring of products sold in-store.",
            "Sales recording and reporting are less centralized.",
          ],
          [
            "Payment",
            "Digital payment such as QRIS is not integrated with the existing cashier process.",
            "The purchasing and payment process is less integrated.",
          ],
        ],
      },

      {
        id: "requirements",
        label: "Business Requirements",
        kind: "accordion",
        body: `
          <p>
            The identified business requirements were derived from the problems found through stakeholder interviews and the subsequent affinity analysis.
          </p>
        `,
        items: [
          {
            label: "Centralized Product Information",
            body: `
              <p>
                Provide a structured digital catalog containing product photos, prices, and cake details, with filtering based on price and ingredients.
              </p>
            `,
          },

          {
            label: "Structured Order Management",
            body: `
              <p>
                Provide a structured ordering flow so that customer order information can be recorded more systematically and reduce repetitive inquiries and manual recording by admins.
              </p>
            `,
          },

          {
            label: "Availability Management",
            body: `
              <p>
                Provide clear information about product availability, order dates, and remaining class capacity to support customer decision-making and help the store manage production and sales.
              </p>
            `,
          },

          {
            label: "Custom Order Management",
            body: `
              <p>
                Provide a structured custom cake order form containing design details, colors, reference images, and confirmation before production.
              </p>
            `,
          },

          {
            label: "Order Status Visibility",
            body: `
              <p>
                Provide customers with access to order status and progress information so they do not need to repeatedly contact the admin.
              </p>
            `,
          },

          {
            label: "Class Registration",
            body: `
              <p>
                Provide an integrated class registration process with class information, available quota, and digital payment support.
              </p>
            `,
          },

          {
            label: "Sales & Operational Monitoring",
            body: `
              <p>
                Support the store in monitoring orders, stock, payments, and sales through a more integrated system.
              </p>
            `,
          },
        ],
      },

      {
        id: "solution-analysis",
        label: "Solution Analysis",
        kind: "table",
        columns: ["Problem Area", "Proposed Solution"],
        rows: [
          [
            "Catalog & Product Information",
            "Interactive e-catalog with product photos, prices, cake details, and filters based on price and ingredients.",
          ],
          [
            "Ordering & Order Flow",
            "Structured and informative ordering flow with automatic order recording.",
          ],
          [
            "Date Slots, Stock & Availability",
            "Visual availability information for products, order dates, and remaining class quota.",
          ],
          [
            "Custom Cake & Design",
            "Structured custom cake form containing design details, colors, reference images, and confirmation.",
          ],
          [
            "Admin Response & Communication",
            "Self-service access to catalog, order status, and schedule information to reduce unnecessary dependency on admin responses.",
          ],
          [
            "Notifications & Order Status",
            "Clear order-status information and notifications to support customer monitoring.",
          ],
          [
            "Cake Decoration Class",
            "Integrated class registration with schedule and quota information and digital payment support.",
          ],
          [
            "Cashier, Payment & Integration",
            "Integration of cashier, payment, and operational information to support more centralized business data.",
          ],
        ],
      },

      {
        id: "business-flow",
        label: "Business Process Mapping",
        kind: "accordion",
        body: `
          <p>
            The business analysis identified several customer and internal operational flows that need to be represented in the proposed application.
          </p>
        `,
        items: [
          {
            label: "Customer Ordering",
            body: `
              <p>
                The proposed customer ordering process covers product selection, product details, cart review, pickup or delivery selection, payment, and order confirmation.
              </p>
            `,
          },

          {
            label: "Custom Cake",
            body: `
              <p>
                The custom cake process begins with selecting the custom cake service, specifying the required date, completing the custom order details, submitting the request, and waiting for admin price determination before proceeding to payment.
              </p>
            `,
          },

          {
            label: "Big Order",
            body: `
              <p>
                The big order process supports two service options: Big Order Delivery and Big Order Serve on Site. Customers discuss their requirements with the admin, review the resulting invoice, and proceed to payment after reaching an agreement.
              </p>
            `,
          },

          {
            label: "Class Registration",
            body: `
              <p>
                Customers can select an available class, review class details, choose the ticket quantity, select a payment method, and complete the transaction before accessing the e-ticket.
              </p>
            `,
          },

          {
            label: "Internal Operations",
            body: `
              <p>
                The proposed information architecture separates operational needs across several roles, including Admin, Kitchen, Cashier, and Owner. These roles are associated with order management, order processing, cashier activities, and reporting.
              </p>
            `,
          },
        ],
      },

      {
        id: "business-value",
        label: "Business Value",
        kind: "desc",
        body: `
          <p>
            From a business-analysis perspective, the proposed application addresses the main operational gaps by centralizing product and order information, reducing reliance on manual communication, improving visibility of order status and availability, and supporting more structured coordination between customers and the Maroku team.
          </p>

          <p>
            The proposal also identifies the potential for an e-catalog, cashier integration, digital payment such as QRIS, and centralized order tracking to support Maroku's future business operations.
          </p>
        `,
      },
    ],
  },
  {
    id: "business-sumul",
    name: "Supply Chain Process Analysis",
    category: "business",
    bg: "#F9F4ED",
    color: "#8B6243",
    image: "images/projects/sumul.png",

    tags: [
      "Business Process Analysis",
      "Supply Chain",
      "Process Mapping",
      "Problem Analysis",
      "Solution Analysis",
      "System Design",
    ],

    meta: [
      { label: "Role", value: "Business Analyst" },
      { label: "Year", value: "2025" },
    ],

    detailIntro:
      "An analysis of Tempe Cak Mul's supply chain processes, identifying operational gaps and translating them into structured process improvements and a proposed integrated system.",

    template: "business-default",

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            This project analyzes the supply chain process of Tempe Cak Mul, a food production business in Sidoarjo, East Java. The analysis covers the flow of raw materials, production, distribution, and sales, with the objective of identifying key process challenges and opportunities for improvement.
          </p>

          <p>
            The analysis was then translated into the proposed <strong>SUMUL (Supply Chain Tempe Cak Mul)</strong> system, which is designed to manage and monitor the supply chain from raw material procurement through finished-product distribution.
          </p>
        `,
      },

      {
        id: "business-context",
        label: "Business Context",
        kind: "accordion",
        body: `
          <p>
            Tempe Cak Mul is a micro-scale food business established in 2001 and managed independently by the owner and family members. The business produces fresh tempe for traditional markets and also supplies local shops and resellers.
          </p>

          <p>
            Its supply chain involves raw material procurement, production, distribution to direct customers and resellers, and sales monitoring.
          </p>
        `,
        items: [
          {
            label: "Raw Material",
            body: `
              <p>
                Soybeans are the main raw material, with supply obtained through local suppliers. The report identifies soybean procurement as an important part of maintaining production continuity.
              </p>
            `,
          },
          {
            label: "Production",
            body: `
              <p>
                Tempe is produced daily and then distributed to traditional markets, shops, and local resellers.
              </p>
            `,
          },
          {
            label: "Distribution",
            body: `
              <p>
                Distribution is carried out at a medium scale, with resellers purchasing tempe for resale or further processing. Distribution records can therefore provide information about sales and the development of the business's reseller network.
              </p>
            `,
          },
        ],
      },

      {
        id: "supply-chain",
        label: "Supply Chain Mapping",
        kind: "table",
        columns: ["Stage", "Current Process", "Key Issue"],
        rows: [
          [
            "Supplier Management",
            "The relationship with soybean suppliers is managed informally.",
            "No written cooperation agreement and limited transaction transparency.",
          ],
          [
            "Raw Material Ordering",
            "Raw materials are ordered manually, such as through telephone communication.",
            "No structured order history or recorded material requirements.",
          ],
          [
            "Raw Material Delivery",
            "Delivery depends on supplier arrival without a regular schedule.",
            "Delivery uncertainty can affect production continuity.",
          ],
          [
            "Verification & Receiving",
            "Received materials are not supported by a formal quality-checking procedure.",
            "Quality and quantity verification are not systematically documented.",
          ],
          [
            "Production",
            "Production activities are carried out and recorded as part of the business process.",
            "Production and material usage need structured documentation.",
          ],
          [
            "Distribution",
            "Tempe is distributed to markets, shops, and resellers.",
            "Distribution is not sufficiently measured, creating potential waste and uncertainty.",
          ],
          [
            "Sales Reporting",
            "Sales information needs to be monitored to understand business performance.",
            "Historical sales data needs to be organized for analysis and planning.",
          ],
        ],
      },

      {
        id: "process-problems",
        label: "Process Problem Analysis",
        kind: "accordion",
        body: `
          <p>
            The process analysis identified several issues across supplier management, procurement, delivery, receiving, inventory, distribution, and sales monitoring.
          </p>
        `,
        items: [
          {
            label: "Supplier Relationship",
            body: `
              <p>
                Supplier relationships are informal and do not have written cooperation agreements. This can create uncertainty in raw material supply and limited transparency in transactions.
              </p>
            `,
          },
          {
            label: "Manual Procurement",
            body: `
              <p>
                Raw material ordering is performed manually without a structured history of orders or material requirements, making future material planning more difficult.
              </p>
            `,
          },
          {
            label: "Delivery Uncertainty",
            body: `
              <p>
                Raw material deliveries are not recorded systematically and depend on supplier arrival. The lack of a regular delivery schedule can create delays that affect production.
              </p>
            `,
          },
          {
            label: "Receiving Verification",
            body: `
              <p>
                There is no formal procedure for checking the quality and quantity of incoming raw materials. The business relies on trust in suppliers, creating a risk if received materials do not meet expected standards.
              </p>
            `,
          },
          {
            label: "Manual Stock Management",
            body: `
              <p>
                Manual stock management can lead to recording errors and create risks of overstock or stock shortages. For perishable products such as tempe, excess stock can also result in waste.
              </p>
            `,
          },
          {
            label: "Unmeasured Distribution",
            body: `
              <p>
                Distribution that is not measured adequately can result in unsold tempe being given away or discarded, leading to lost revenue and uncertainty in inventory and cash-flow management.
              </p>
            `,
          },
          {
            label: "Soybean Price Fluctuation",
            body: `
              <p>
                Soybean prices can fluctuate due to external factors, particularly dependence on imported soybeans. Price increases can affect selling prices, consumer purchasing power, and producer profit margins.
              </p>
            `,
          },
        ],
      },

      {
        id: "improvement-opportunities",
        label: "Improvement Opportunities",
        kind: "table",
        columns: ["Process Area", "Proposed Improvement"],
        rows: [
          [
            "Supplier Management",
            "Record supplier information and manage ordering, payment, and order confirmation more systematically.",
          ],
          [
            "Raw Material Ordering",
            "Create structured records of raw material orders and requirements to support planning and maintain stock availability.",
          ],
          [
            "Raw Material Delivery",
            "Establish regular delivery schedules and record incoming raw material deliveries.",
          ],
          [
            "Receiving",
            "Use a verification checklist covering the quality and quantity of incoming raw materials.",
          ],
          [
            "Stock Management",
            "Use technology-based stock recording with notifications when inventory decreases and requires replenishment.",
          ],
          [
            "Distribution",
            "Analyze historical sales data to support more efficient daily distribution and reduce unsold products.",
          ],
          [
            "Soybean Procurement",
            "Consider long-term price agreements and alternative soybean suppliers to reduce the impact of price fluctuations.",
          ],
        ],
      },

      {
        id: "system-analysis",
        label: "Business-to-System Translation",
        kind: "desc",
        body: `
          <p>
            The identified business processes and improvement opportunities were translated into the proposed SUMUL system. The system is intended to manage, monitor, and improve the efficiency of Tempe Cak Mul's supply chain.
          </p>

          <p>
            The proposed system covers six main areas: <strong>Dashboard, Stok Bahan, Produksi, Distribusi, Laporan, and Pengaturan</strong>.
          </p>
        `,
      },

      {
        id: "system-modules",
        label: "System Modules",
        kind: "table",
        columns: ["Module", "Business Purpose"],
        rows: [
          [
            "Dashboard",
            "Monitor total sales, raw material stock, and finished-product stock.",
          ],
          [
            "Stok Bahan",
            "Manage raw material requirements and procurement records.",
          ],
          ["Produksi", "Record production quantities and raw material usage."],
          ["Distribusi", "Record product sales and reseller transactions."],
          ["Laporan", "Monitor and analyze sales performance by period."],
          ["Pengaturan", "Manage user profile and account security."],
        ],
      },

      {
        id: "procurement-flow",
        label: "Procurement & Payment Flow",
        kind: "accordion",
        body: `
          <p>
            The proposed procurement process structures the relationship between raw material ordering and supplier payment.
          </p>
        `,
        items: [
          {
            label: "Raw Material Ordering",
            body: `
              <p>
                The owner can input the required quantity of raw materials directly into the system. The order is then automatically sent to the supplier's email.
              </p>
            `,
          },
          {
            label: "Payment",
            body: `
              <p>
                A new raw material order cannot be submitted before the previous raw material payment has been completed. Supplier account information and previous order history are stored in the system to support this process.
              </p>
            `,
          },
          {
            label: "Tracking",
            body: `
              <p>
                After an order is submitted, the supplier receives an email containing the material request and an external link connected to SUMUL. The supplier confirms material availability and expected delivery, and the response becomes the basis for recording the transaction status.
              </p>
            `,
          },
        ],
      },

      {
        id: "production-distribution",
        label: "Production & Distribution Flow",
        kind: "accordion",
        body: `
          <p>
            SUMUL also structures production and distribution records so the business can maintain a clearer view of product movement.
          </p>
        `,
        items: [
          {
            label: "Production",
            body: `
              <p>
                Production records allow the factory to track the quantity of tempe produced in each production cycle and the amount of raw material used.
              </p>
            `,
          },
          {
            label: "Distribution",
            body: `
              <p>
                Distribution records include the buyer name, quantity of tempe sold, and total sales value. The information is stored as transaction history and can be used to observe sales development and identify key customers.
              </p>
            `,
          },
          {
            label: "Sales Reporting",
            body: `
              <p>
                The reporting module provides structured sales information by period, including transaction dates, quantity sold, and daily revenue. Historical sales data can support identification of sales patterns and business planning.
              </p>
            `,
          },
        ],
      },

      {
        id: "business-impact",
        label: "Business Impact",
        kind: "desc",
        body: `
          <p>
            From a business-analysis perspective, SUMUL addresses process gaps by replacing fragmented manual records with structured information across procurement, payment, delivery tracking, production, distribution, and sales reporting.
          </p>

          <p>
            The proposed process structure is intended to improve visibility of supply chain activities and provide organized data that can support operational monitoring and business decision-making.
          </p>
        `,
      },
    ],
  },
  {
    id: "business-qbit",
    name: "QBit",
    category: "business",
    bg: "#F1F1F1",
    color: "#57865E",
    image: "images/projects/qbit.png",

    tags: [
      "Business Analysis",
      "Business Model Canvas",
      "Market Analysis",
      "Business Concept",
      "Marketing Strategy",
      "Business Feasibility",
    ],

    meta: [
      { label: "Role", value: "Business Analyst" },
      { label: "Year", value: "2022" },
    ],

    detailIntro:
      "A business concept analysis for QBit, a proposed mobile solution supporting small-scale urban farming through consultation, land design, a seed marketplace, and plant monitoring.",

    template: "business-default",

    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: `
          <p>
            QBit is a proposed digital business concept developed to support small-scale urban farming. The concept combines consultation services, land design, a seed marketplace, and plant monitoring within a mobile application.
          </p>

          <p>
            The business analysis covers the opportunity behind the concept, the problems it aims to address, its business model, marketing strategy, operational planning, and financial feasibility assumptions.
          </p>
        `,
      },

      {
        id: "business-opportunity",
        label: "Business Opportunity",
        kind: "accordion",
        body: `
          <p>
            The proposal identifies an opportunity based on the interest of Indonesian communities in small-scale cultivation, including the use of unused areas around homes for planting.
          </p>

          <p>
            The concept responds to differences in regional climate and conditions by proposing support for seed selection, planting media, plant care, and land layout for small cultivation areas.
          </p>
        `,
        items: [
          {
            label: "Target Problem",
            body: `
              <ul>
                <li>Choosing plants and cultivation materials should consider local climate and regional conditions.</li>
                <li>Small-scale growers may have limited cultivation space.</li>
                <li>Users need support in selecting suitable seeds and planting media.</li>
                <li>Limited space requires appropriate land layout and design.</li>
              </ul>
            `,
          },
          {
            label: "Proposed Value",
            body: `
              <p>
                QBit is proposed to help users select suitable seeds and planting media, obtain cultivation consultation, and plan the layout of limited cultivation areas.
              </p>
            `,
          },
        ],
      },

      {
        id: "business-model",
        label: "Business Model",
        kind: "accordion",
        body: `
          <p>
            The proposal includes a Business Model Canvas (BMC) as part of the foundation for the QBit business model. The BMC covers key business components such as customer segments, value propositions, channels, key activities, and revenue streams.
          </p>
        `,
        items: [
          {
            label: "Business Model Canvas",
            body: `
              <p>
                The BMC was developed to define the core elements of the proposed QBit business model and connect the application concept with its intended market and revenue model.
              </p>
            `,
          },
        ],
      },

      {
        id: "business-offering",
        label: "Business Offering",
        kind: "table",
        columns: ["Offering", "Business Function"],
        rows: [
          [
            "Consultation",
            "Provides access to consultation related to plant cultivation.",
          ],
          [
            "Land Design",
            "Provides land layout and design support for small cultivation areas.",
          ],
          [
            "Seed Marketplace",
            "Supports the sale of plant seeds and cultivation-related products.",
          ],
          [
            "Plant Monitoring",
            "Supports users in monitoring and caring for cultivated plants.",
          ],
        ],
      },

      {
        id: "operations",
        label: "Operational Analysis",
        kind: "accordion",
        body: `
          <p>
            The proposed business operation requires coordination with external parties to support the application and product ecosystem.
          </p>
        `,
        items: [
          {
            label: "Suppliers",
            body: `
              <p>
                The proposal plans to identify suppliers of seeds, fertilizers, and planting media that meet the required standards.
              </p>
            `,
          },
          {
            label: "Professional Partners",
            body: `
              <p>
                The proposal includes cooperation with professionals who understand soil and regional planting conditions, as well as land designers who can help maximize the use of small cultivation spaces.
              </p>
            `,
          },
          {
            label: "Application Development",
            body: `
              <p>
                The proposal planned to work with an application development service to build the application based on the prepared design and feature requirements.
              </p>
            `,
          },
        ],
      },

      {
        id: "marketing",
        label: "Marketing Strategy",
        kind: "accordion",
        body: `
          <p>
            The proposed marketing strategy combines online and offline promotion.
          </p>
        `,
        items: [
          {
            label: "Online Marketing",
            body: `
              <p>
                Online promotion was planned through social media platforms including Facebook, Instagram, TikTok, and Twitter, using application-related promotional content and offers.
              </p>
            `,
          },
          {
            label: "Offline Marketing",
            body: `
              <p>
                Offline promotion was planned through participation in expos or exhibitions to introduce the business concept and attract potential customers.
              </p>
            `,
          },
        ],
      },

      {
        id: "financial-feasibility",
        label: "Financial Feasibility",
        kind: "table",
        columns: ["Metric", "Proposal Result"],
        rows: [
          ["B/C Ratio", "1.21"],
          ["ROI", "20%"],
          ["Payback Period", "Approximately 12 months and 4 days"],
        ],
      },

      {
        id: "financial-assumptions",
        label: "Financial Assumptions",
        kind: "desc",
        body: `
          <p>
            The proposal's feasibility analysis uses financial and time assumptions to evaluate whether the business could be continued. The proposal assumes 500 users in the first month with an application handling fee of Rp5,000.
          </p>

          <p>
            The proposed product pricing includes seeds at Rp5,000 per 20g, fertilizer at Rp8,000 per 500g, and planting media at Rp12,000 per piece.
          </p>

          <p>
            Based on the proposal's calculations, the resulting B/C Ratio is 1.21, ROI is 20%, and the estimated payback period is approximately 12 months and 4 days.
          </p>
        `,
      },

      {
        id: "execution-plan",
        label: "Execution Plan",
        kind: "accordion",
        body: `
          <p>
            The proposal divides the implementation into initial, core, and final stages.
          </p>
        `,
        items: [
          {
            label: "Initial Stage",
            body: `
              <p>
                The initial stage includes identifying suppliers, establishing cooperation with plant consultants and land designers, preparing the application logo and interface, planning application features, and planning the target marketing approach.
              </p>
            `,
          },
          {
            label: "Core Stage",
            body: `
              <p>
                The core stage focuses on application development and testing. The prepared logo, initial interface, and features are handed over to the application development service, followed by application development and testing.
              </p>
            `,
          },
          {
            label: "Final Stage",
            body: `
              <p>
                The final stage includes revisions and improvements based on testing findings, followed by promotional activities to introduce the application to the public.
              </p>
            `,
          },
        ],
      },

      {
        id: "contribution",
        label: "Contribution",
        kind: "desc",
        body: `
          <p>
            According to the project team's task allocation, my contribution focused on preparing the proposal and report, marketing the application, maximizing promotional media, conducting a survey of application development services, designing the application and its features, developing the application, testing the application, and creating digital marketing materials.
          </p>
        `,
      },
    ],
  },

  /* ---------------- DESIGN ---------------- */
  {
    id: "design-sijie",
    name: "Sijie",
    category: "design",
    bg: "#FBE1E6",
    color: "#F03167",
    image: "images/projects/sijie.png",
    tags: ["Social Media Design", "Instagram", "Facebook Ads"],
    meta: [
      { label: "Role", value: "Creative Marketing" },
      { label: "Year", value: "2024" },
    ],
    detailIntro:
      "Designed visual assets for Instagram and Facebook Ads to support Sijie Beauty's digital marketing strategy. Instagram content was created to build brand awareness, educate consumers about product benefits, and increase interest in the products. Meanwhile, Facebook Ads materials were developed to attract potential distributors by highlighting business opportunities, key benefits, and a compelling call to join as an official partner. All designs were produced in accordance with the brand's visual identity and refined through a collaborative review and revision process with the client.",
    sections: [
      {
        id: "overview",
        label: "Overview",
        kind: "desc",
        body: "Designed visual assets for Instagram and Facebook Ads to support Sijie Beauty's digital marketing strategy. Instagram content was created to build brand awareness, educate consumers about product benefits, and increase interest in the products. Meanwhile, Facebook Ads materials were developed to attract potential distributors by highlighting business opportunities, key benefits, and a compelling call to join as an official partner. All designs were produced in accordance with the brand's visual identity and refined through a collaborative review and revision process with the client.",
        media: {
          layout: "grid",
          columns: 3,
          style: "gallery",
          items: [
            "images/sijie/gallery-1.png",
            "images/sijie/gallery-2.png",
            "images/sijie/gallery-3.png",
            "images/sijie/gallery-4.png",
            "images/sijie/gallery-5.png",
            "images/sijie/gallery-6.png",
            "images/sijie/gallery-7.png",
            "images/sijie/gallery-8.png",
            "images/sijie/gallery-9.png",
          ],
        },
      },
    ],
  },
  {
    id: "design-layanobat",
    name: "LayanObat",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Graphic Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
  {
    id: "design-radja-brewer",
    name: "Radja Brewer",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Graphic Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
  {
    id: "design-star-liquid",
    name: "Star Liquid",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Graphic Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
  {
    id: "design-skill-up",
    name: "Skill Up",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Creative Graphic Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
  {
    id: "design-sigma-x-pro",
    name: "Sigma X Pro",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Graphic Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
  {
    id: "design-tbi",
    name: "TBI",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Graphic Designer" },
      { label: "Year", value: "2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
  {
    id: "design-pdd",
    name: "Event Branding & Visual Design",
    category: "design",
    bg: "#FEEFF3",
    color: "#F03167",
    image: null,
    desc: LOREM,
    meta: [
      { label: "Role", value: "Publication & Documentation" },
      { label: "Year", value: "2022-2023" },
    ],
    detailIntro: "",
    template: "design-default",
  },
];

/* ---- Section definitions per project ---- */

function getSections(project) {
  return project.sections || [];
}

function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id) || null;
}

function getProjectsByCategory(cat) {
  return PROJECTS.filter((p) => p.category === cat);
}

/* Related projects for "Curious to see more?" — same category, excluding current */
function getRelatedProjects(project, count = 2) {
  const sameCat = PROJECTS.filter(
    (p) => p.category === project.category && p.id !== project.id,
  );
  return sameCat.slice(0, count);
}

function projectHref(project) {
  if (project.href) return project.href;
  return `project.html?id=${encodeURIComponent(project.id)}`;
}
