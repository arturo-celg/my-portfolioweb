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
      es: "Octubre 2024 - Actual", 
      en: "October 2024 - Present" 
    },
    description: {
      es: [
        "Desarrollo de aplicaciones web empresariales utilizando C# y .NET para la gestión de servicios internos.",
        "Automatización de procesos administrativos y operativos mediante ETLs.",
        "Desarrollo de reportes analíticos utilizando SQL Server Reporting Services (SSRS).",
        "Administración y monitoreo de servidores Linux y Windows.",
        "Apoyo en la instalación, configuración e implementación de aplicativos internos.",
        "Gestión de accesos y permisos en bases de datos y servidores.",
        "Colaboración en proyectos de migración y modernización de portales web e infraestructura asociada."
      ],
      en: [
        "Develop enterprise web applications using C# and .NET for internal service management.",
        "Automate administrative and operational processes through ETLs.",
        "Develop analytical reports using SQL Server Reporting Services (SSRS).",
        "Administer and monitor Linux and Windows servers.",
        "Assist in the installation, configuration and deployment of internal applications.",
        "Manage access permissions across databases, servers and corporate systems.",
        "Collaborate in migration and modernization projects for internal web portals and infrastructure."
      ],
    },
    technologies: [
      "C#", ".NET", "SQL Server", "SSIS", "SSRS",
      "JavaScript", "Bootstrap",
      "Windows Server", "Linux", "LDAP"
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