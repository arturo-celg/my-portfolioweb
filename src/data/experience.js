export const experienceData = {
  work: [
    {
      title: {
        es: "Analista de Seguridad e Implementación de Aplicativos Cloud",
        en: "Security and Cloud Applications Implementation Analyst"
      },
      company: {
        es: "Radiomóvil Dipsa S.A. de C.V. (TELCEL)",
        en: "Radiomóvil Dipsa S.A. de C.V. (TELCEL)"
      },
      period: {
        es: "Noviembre 2024 - Actual",
        en: "November 2024 - Present"
      },
      description: {
        es: [
          "Liderando actualmente la iniciativa departamental de modernización del ciclo de vida de desarrollo (SDLC), guiando la transición de equipos de metodologías tradicionales hacia marcos Ágiles/Scrum y estandarizando el control de versiones y pipelines CI/CD con Git y Azure DevOps.",
          "Desarrollo y modernización de aplicaciones web empresariales en C# y .NET (.NET 8, Web Forms, Web API) para automatizar flujos internos y mejorar la confiabilidad operativa.",
          "Diseño e implementación de procesos ETL y tableros en SQL Server Reporting Services (SSRS) para integrar flujos de datos y apoyar la toma de decisiones operativas.",
          "Administración y monitoreo de más de 95 servidores Windows y Linux, aplicando controles de acceso, permisos de usuarios (RBAC) y políticas de seguridad corporativas en servidores y bases de datos."
        ],
        en: [
          "Currently leading the departmental initiative to modernize the software development lifecycle (SDLC), guiding teams from traditional methodologies toward Agile/Scrum frameworks and standardizing version control and CI/CD pipelines with Git and Azure DevOps.",
          "Develop and modernize enterprise web applications using C# and .NET (.NET 8, Web Forms, Web API) to automate internal workflows and improve operational reliability.",
          "Design and implement ETL processes and SQL Server Reporting Services (SSRS) dashboards to integrate data flows and support operational decision-making.",
          "Administer and monitor more than 95 Windows and Linux servers, applying access controls, role-based access control (RBAC), and corporate security policies across servers and databases."
        ],
      },
      technologies: [
        "C#", ".NET", "SQL Server", "SSIS", "SSRS",
        "JavaScript", "Bootstrap",
        "Windows Server", "Linux", "LDAP", "Git", "Azure DevOps"
      ]
    }
  ],
  education: [
    {
      degree: { es: "Ingeniería en Sistemas Computacionales", en: "Computer Systems Engineering" },
      institution: { es: "Escuela Superior de Cómputo, Instituto Politécnico Nacional", en: "Escuela Superior de Cómputo, Instituto Politécnico Nacional" },
      period: { es: "2019 - 2024", en: "2019 - 2024" },
    },
    {
      degree: { es: "Técnico Profesional en Sistemas Digitales", en: "Professional Technician in Digital Systems" },
      institution: { es: "CECYT No. 1 \"Gonzalo Vázquez Vela\", Instituto Politécnico Nacional", en: "CECYT No. 1 \"Gonzalo Vázquez Vela\", Instituto Politécnico Nacional" },
      period: { es: "2016 - 2019", en: "2016 - 2019" },
    }
  ]
};

export function getExperience(lang = "es") {
  const pick = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.es ?? obj.en : obj);
  return {
    work: experienceData.work.map((w) => ({
      title: pick(w.title),
      company: pick(w.company),
      period: pick(w.period),
      description: pick(w.description),
      technologies: w.technologies,
    })),
    education: experienceData.education.map((e) => ({
      degree: pick(e.degree),
      institution: pick(e.institution),
      period: pick(e.period),
    })),
  };
}