/**
 * ============================================================
 *   YOUR CV DATA — edit only this file to update the website
 * ============================================================
 *
 *  HOW TO EDIT:
 *   - Text goes between the quote marks  "like this"
 *   - Numbers go without quotes          like this: 90
 *   - true / false has no quotes         like this: true
 *   - To add more items to a list, copy  one block and paste it
 *   - To remove an item, delete its block (the part inside { } )
 *   - Save the file, then refresh your browser — done!
 *
 *  PHOTO:  put a file called  photo.jpg  in this folder
 *  CV PDF: put a file called  cv.pdf     in this folder
 * ============================================================
 */

const CV = {
  /* ──────────────────────────────────────────
     BASIC INFO
  ────────────────────────────────────────── */
  name: "Vane Milevski", // shown in hero, footer, nav logo
  initials: "VM", // 2-3 letters shown in the top-left nav logo
  location: "Wittenberge, Germany",
  email: "vanemilevski@hotmail.com",
  phone: "+49 152 57410477",
  languages_info: "English, German, Macedonian", // languages line in the About info box
  available: true, // true = shows green "Available for hire" badge

  // Short line shown under your name in the hero (appears in the browser tab too)
  heroDescription: "",

  // These titles cycle with a typing animation in the hero section
  typingTitles: [
    "Production Manager",
    "Design Engineer",
    "Full-Stack Developer",
  ],

  /* ──────────────────────────────────────────
     SOCIAL MEDIA LINKS
     Leave a field empty ""  to hide that button
  ────────────────────────────────────────── */
  social: {
    linkedin: "https://www.linkedin.com/in/vane-milevski-28351a154/",
    github:   "https://github.com/VaneMilevski",
    xing:     "https://www.xing.com/profile/Vane_Milevski",
    twitter:  "",
  },

  /* ──────────────────────────────────────────
     ABOUT ME
  ────────────────────────────────────────── */

  // Write 2 paragraphs about yourself. Each paragraph is a separate string.
  bio: [
    "I'm a Production Manager and Engineer with a Bachelor of Science in Production Informatics from Ss. Cyril and Methodius University in Skopje. Currently leading the Low-Voltage and Metal Construction production at Transformare GmbH in Wittenberge, Germany, where I oversee a team of approximately 30 employees and drive digitalization initiatives across the production floor.",
    "Having joined Transformare GmbH in 2022 as a Design Engineer, I quickly built a reputation for precision and innovation, developing product libraries, building thermal simulation models and delivering engineering solutions that met both technical and commercial requirements. This strong performance led to my promotion to Production Manager in February 2025, where I now oversee the day-to-day operations of the production department, managing teams, workflows and output directly on the production floor.",
  ],

  // Numbers shown under your bio — change to your real stats
  stats: [
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Team Members Led" },
    { number: "3+", label: "Projects Completed" },
  ],

  // Footer tagline
  footerTagline:
    "Production Engineer & Full-Stack Developer — currently employed, but always open to interesting conversations.",

  /* ──────────────────────────────────────────
     WORK EXPERIENCE
     Most recent job first (top of the page)
  ────────────────────────────────────────── */
  experience: [
    {
      role: "Production Manager - Low Voltage & Metal Construction",
      company: "Transformare GmbH",
      period: "Feb 2025 — Present",
      location: "Wittenberge, Germany",
      current: true,
      bullets: [
        "Promoted to lead and manage a multidisciplinary team of approximately 30 employees in the production of low-voltage switchgear systems and metal construction components",
        "Responsible for production planning, delivery status coordination and material availability management using SAP and Microsoft Excel",
        "Drive company-wide digitalization by designing data preparation and visualization scripts for internal reporting and production control",
        "Oversee the personnel and technological development of the production department",
      ],
      tags: [
        "Production Management",
        "Team Leadership",
        "Production Planning",
        "SAP",
        "Microsoft Office",
        "Data Visualization",
      ],
    },
    {
      role: "Design Engineer",
      company: "Transformare GmbH",
      period: "Aug 2022 — Feb 2025",
      location: "Wittenberge, Germany",
      current: false,
      bullets: [
        "Built the Construction department's comprehensive product library using Autodesk Inventor, incorporating customer, internal and production-specific requirements",
        "Developed software-based thermal simulation models using COMSOL to optimise heat distribution across product lines",
        "Produced technical engineering drawings, documentation and reports using Microsoft Office and Excel",
        "Collaborated closely with production and management teams to align design solutions with manufacturing capabilities",
      ],
      tags: [
        "Autodesk Inventor",
        "COMSOL",
        "CAD Engineering",
        "SAP",
        "Microsoft Office",
        "Technical Documentation",
      ],
    },
    // ── To add a previous job, copy the block above and paste it here ──
  ],

  /* ──────────────────────────────────────────
     SKILLS
  ────────────────────────────────────────── */

  // Progress bars (0–100)
  technicalSkills: [
    { name: "Autodesk Inventor (CAD)", level: 90 },
    { name: "COMSOL (Simulation)", level: 82 },
    { name: "SAP", level: 78 },
    { name: "Microsoft Office", level: 92 },
    { name: "HTML / CSS / SCSS", level: 88 },
    { name: "JavaScript", level: 78 },
    { name: "PHP / Laravel", level: 74 },
    { name: "Databases (SQL)", level: 80 },
  ],

  softSkills: [
    { name: "Team Leadership",    level: 92 },
    { name: "Production Planning",level: 90 },
    { name: "Problem Solving",    level: 88 },
    { name: "Communication",      level: 85 },
    { name: "Decision Making",    level: 87 },
    { name: "Time Management",    level: 89 },
    { name: "Adaptability",       level: 86 },
    { name: "Attention to Detail",level: 91 },
  ],

  // Tag cloud — add or remove items freely
  tools: [
    "Autodesk Inventor",
    "COMSOL",
    "SAP",
    "Microsoft Office",
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "PHP",
    "Laravel",
    "Git",
    "Bootstrap",
    "MySQL",
    "VS Code",
  ],

  // Spoken languages (dots 1–5: 5 = native, 4 = advanced, 3 = intermediate, 2 = basic)
  spokenLanguages: [
    { name: "Macedonian", dots: 5, level: "Native" },
    { name: "German", dots: 4, level: "Advanced" },
    { name: "English", dots: 4, level: "Fluent" },
  ],

  /* ──────────────────────────────────────────
     EDUCATION & CERTIFICATIONS
  ────────────────────────────────────────── */
  education: [
    {
      type: "Bachelor's Degree (BSc)",
      title: "Production Informatics",
      institution:
        "Ss. Cyril and Methodius University - Faculty of Mechanical Engineering, Skopje",
      period: "Oct 2014 - Jul 2019",
      description:
        "Graduated with 180 ECTS points and an average grade of 7.18/10. Studies covered production automation, engineering design (2D/3D CAD), databases, programming, electrical engineering and technical mechanics. Degree officially recognised by ENIC-NARIC as equivalent to a German Bachelor's degree.",
      iconClass: "",
    },
    {
      type: "Certification",
      title: "Full-Stack Academy",
      institution: "Brainster Next College (Accredited Higher Education)",
      period: "Issued: 22 January 2025",
      description:
        "Accredited certification from Brainster Next College, an accredited higher education institution in North Macedonia. Validates full-stack web development competencies at a recognised academic standard.",
      iconClass: "cert2",
    },
  ],

  /* ──────────────────────────────────────────
     PROJECTS
     Remove this whole section or leave it empty []
     if you don't want to show projects
  ────────────────────────────────────────── */
  projects: [
    {
      title: "CyberWare Global Defense",
      description:
        "Final capstone project of the Brainster Full-Stack Academy. A full-stack web application built with Laravel, JavaScript and MySQL, demonstrating end-to-end development skills from database design to front-end interface.",
      icon: "shield-alt",
      demo: "",
      code: "",
      tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap"],
    },
    {
      title: "BrainsterLabs",
      description:
        "Academy project simulating a real-world platform built with modern web technologies. Focused on clean architecture, responsive design and database-driven content management.",
      icon: "flask",
      demo: "",
      code: "",
      tags: ["PHP", "JavaScript", "CSS", "MySQL"],
    },
    {
      title: "Brainster Library",
      description:
        "A full-stack library management web application developed during the Brainster academy programme. Features user authentication, book cataloguing and dynamic content rendering.",
      icon: "book",
      demo: "",
      code: "",
      tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    },
  ],
}; // <-- do not delete this closing line

/* ============================================================
   PLACEHOLDER — CV_DE (not active)
   Edit only the text values below to update the German site.
============================================================ */
const CV_DE = {
  name:           "Vane Milevski",
  initials:       "VM",
  location:       "Wittenberge, Deutschland",
  email:          "vanemilevski@hotmail.com",
  phone:          "+49 152 57410477",
  languages_info: "Englisch, Deutsch, Mazedonisch",
  available:      false,

  heroDescription: "",

  typingTitles: [
    "Produktionsleiter",
    "Konstruktionsingenieur",
    "Full-Stack-Entwickler",
  ],

  social: CV.social,

  aboutSubtitle: "Ein engagierter Fachmann, der großartige Dinge aufbaut",
  contactIntro:  "Ich bin derzeit beschäftigt und suche nicht aktiv nach einer neuen Stelle. Wenn Sie jedoch ein interessantes Projekt haben oder einfach in Kontakt treten möchten, freue ich mich über Ihre Nachricht.",

  bio: [
    "Ich bin Produktionsleiter und Ingenieur mit einem Bachelor of Science in Produktionsinformatik der Universität Ss. Kyrill und Method in Skopje. Derzeit leite ich die Produktion im Bereich Niederspannung und Metallbau bei der Transformare GmbH in Wittenberge, wo ich ein Team von ca. 30 Mitarbeitern führe und Digitalisierungsinitiativen in der Produktion vorantreibe.",
    "Nachdem ich 2022 als Konstruktionsingenieur bei der Transformare GmbH begonnen hatte, baute ich schnell einen guten Ruf für Präzision und Innovation auf – durch die Entwicklung von Produktbibliotheken, thermischen Simulationsmodellen und technischen Lösungen. Diese Leistung führte zu meiner Beförderung zum Produktionsleiter im Februar 2025, wo ich nun den täglichen Betrieb der Produktionsabteilung verantworte und Teams, Abläufe und Output direkt in der Produktion steuere.",
  ],

  stats: [
    { number: "5+",  label: "Jahre Erfahrung"    },
    { number: "30+", label: "Teammitglieder"      },
    { number: "3+",  label: "Projekte abgeschlossen" },
  ],

  footerTagline: "Produktionsingenieur & Full-Stack-Entwickler — derzeit beschäftigt, aber offen für interessante Gespräche.",

  experience: [
    {
      role:     "Produktionsleiter — Niederspannung & Metallbau",
      company:  "Transformare GmbH",
      period:   "Feb 2025 — Heute",
      location: "Wittenberge, Deutschland",
      current:  true,
      bullets: [
        "Beförderung zur Leitung eines multidisziplinären Teams von ca. 30 Mitarbeitern in der Produktion von Niederspannungsschaltanlagen und Metallbaukonstruktionen",
        "Verantwortlich für Produktionsplanung, Lieferstatus-Koordination und Materialverfügbarkeit mit SAP und Microsoft Excel",
        "Vorantreiben der unternehmensweiten Digitalisierung durch Entwicklung von Datenaufbereitungs- und Visualisierungsskripten für interne Berichterstattung und Produktionskontrolle",
        "Überwachung der personellen und technologischen Weiterentwicklung der Produktionsabteilung",
      ],
      tags: ["Produktionsmanagement", "Teamführung", "Produktionsplanung", "SAP", "Microsoft Office", "Datenvisualisierung"],
    },
    {
      role:     "Konstruktionsingenieur",
      company:  "Transformare GmbH",
      period:   "Aug 2022 — Feb 2025",
      location: "Wittenberge, Deutschland",
      current:  false,
      bullets: [
        "Aufbau einer umfassenden Produktbibliothek der Konstruktionsabteilung mit Autodesk Inventor unter Berücksichtigung von Kunden-, internen und produktionsspezifischen Anforderungen",
        "Entwicklung softwarebasierter thermischer Simulationsmodelle mit COMSOL zur Optimierung der Wärmeverteilung in Produktlinien",
        "Erstellung technischer Konstruktionszeichnungen, Dokumentationen und Berichte mit Microsoft Office und Excel",
        "Enge Zusammenarbeit mit Produktions- und Managementteams zur Abstimmung von Designlösungen mit den Fertigungsmöglichkeiten",
      ],
      tags: ["Autodesk Inventor", "COMSOL", "CAD-Konstruktion", "SAP", "Microsoft Office", "Technische Dokumentation"],
    },
  ],

  technicalSkills: CV.technicalSkills,
  softSkills: [
    { name: "Teamführung",          level: 92 },
    { name: "Produktionsplanung",   level: 90 },
    { name: "Problemlösung",        level: 88 },
    { name: "Kommunikation",        level: 85 },
    { name: "Entscheidungsfindung", level: 87 },
    { name: "Zeitmanagement",       level: 89 },
    { name: "Anpassungsfähigkeit",  level: 86 },
    { name: "Detailgenauigkeit",    level: 91 },
  ],
  tools: CV.tools,

  spokenLanguages: [
    { name: "Mazedonisch", dots: 5, level: "Muttersprache" },
    { name: "Deutsch",     dots: 4, level: "Fortgeschritten" },
    { name: "Englisch",    dots: 4, level: "Fließend" },
  ],

  education: [
    {
      type:        "Bachelorabschluss (BSc)",
      title:       "Produktionsinformatik",
      institution: "Universität Ss. Kyrill und Method — Fakultät für Maschinenbau, Skopje",
      period:      "Okt 2014 — Jul 2019",
      description: "Abgeschlossen mit 180 ECTS-Punkten und einem Notendurchschnitt von 7,18/10. Das Studium umfasste Produktionsautomatisierung, Konstruktionstechnik (2D/3D-CAD), Datenbanken, Programmierung, Elektrotechnik und technische Mechanik. Der Abschluss wurde von ENIC-NARIC offiziell als gleichwertig mit einem deutschen Bachelorabschluss anerkannt.",
      iconClass:   "",
    },
    {
      type:        "Zertifikat",
      title:       "Full-Stack Academy",
      institution: "Brainster Next College (Akkreditierte Hochschule)",
      period:      "Ausgestellt: 22. Januar 2025",
      description: "Anerkanntes Zertifikat vom Brainster Next College, einer akkreditierten Hochschule in Nordmazedonien. Bestätigt Kompetenzen in der Full-Stack-Webentwicklung auf akademischem Niveau.",
      iconClass:   "cert2",
    },
  ],

  projects: [
    {
      title:       "CyberWare Global Defense",
      description: "Abschlussprojekt der Brainster Full-Stack-Akademie. Eine Full-Stack-Webanwendung entwickelt mit Laravel, JavaScript und MySQL, die End-to-End-Entwicklungsfähigkeiten vom Datenbankdesign bis zur Frontend-Oberfläche demonstriert.",
      icon:        "shield-alt",
      demo:        "",
      code:        "",
      tags:        ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap"],
    },
    {
      title:       "BrainsterLabs",
      description: "Akademieprojekt, das eine reale Plattform mit modernen Webtechnologien simuliert. Schwerpunkt auf sauberer Architektur, responsivem Design und datenbankgesteuertem Content-Management.",
      icon:        "flask",
      demo:        "",
      code:        "",
      tags:        ["PHP", "JavaScript", "CSS", "MySQL"],
    },
    {
      title:       "Brainster Library",
      description: "Eine Full-Stack-Bibliotheksverwaltungsanwendung, entwickelt während des Brainster-Akademieprogramms. Funktionen: Benutzerauthentifizierung, Buchkatalogisierung und dynamisches Content-Rendering.",
      icon:        "book",
      demo:        "",
      code:        "",
      tags:        ["Laravel", "PHP", "Bootstrap", "MySQL"],
    },
  ],
};
