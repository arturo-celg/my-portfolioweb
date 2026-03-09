export const experienceData = {
  work: [
    {
      title: { es: "Analista de Seguridad e Implementación Aplicativos Cloud", en: "Security Analyst and Cloud Application Implementation" },
      company: { es: "Radiomóvil Dipsa S.A. de C.V.", en: "Radiomóvil Dipsa S.A. de C.V." },
      period: { es: "2024 - Presente", en: "2024 - Present" },
      description: {
        es: [
          "Desarrollo de aplicaciones web con C# y .Net para la gestión de servicios internos.",
          "Desarrollo de ETLs para la automatización de procesos administrativos y operativos.",
          "Desarrollo de reportes mediante SQL Server Reporting Services (SSRS).",
          "Gestión de servidores Linux y Windows, asegurando su correcto funcionamiento y seguridad.",
          "Administración de accesos en bases de datos y servidores.",
          "Colaboración en proyectos de migración de portales web y servicios internos."
        ],
        en: [
          "Develop web applications with C# and .NET for internal service management.",
          "Build ETLs to automate administrative and operational processes.",
          "Develop reports using SQL Server Reporting Services (SSRS).",
          "Manage Linux and Windows servers, ensuring proper operation and security.",
          "Administer database and server access.",
          "Collaborate on migration projects for web portals and internal services."
        ],
      },
      technologies: ["C#", "SQL", "Windows Server", "Linux", "ETL", "SSRS"]
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