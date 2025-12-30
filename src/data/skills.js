const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const skills = {
  technical: [
    {
      category: { es: "Backend y Bases de Datos", en: "Backend & Databases" },
      items: [
        { name: "csharp", displayName: { es: "C#", en: "C#" }, icon8Name: "c-sharp-logo" },
        { name: "dotnet", displayName: { es: ".NET", en: ".NET" }, icon8Name: "net-framework" },
        { name: "sql", displayName: { es: "SQL Server", en: "SQL Server" }, icon8Name: "microsoft-sql-server" },
        { name: "python", displayName: { es: "Python", en: "Python" }, icon8Name: "python" },
        { name: "php", displayName: { es: "PHP", en: "PHP" }, icon8Name: "php" },
        { name: "java", displayName: { es: "Java", en: "Java" }, icon8Name: "java-coffee-cup-logo--v1" }
      ]
    },
    {
      category: { es: "Frontend y Frameworks", en: "Frontend & Frameworks" },
      items: [
        { name: "javascript", displayName: { es: "JavaScript", en: "JavaScript" }, icon8Name: "javascript" },
        { name: "react", displayName: { es: "React.js", en: "React.js" }, icon8Name: "react-native" },
        { name: "vue", displayName: { es: "Vue.js", en: "Vue.js" }, icon8Name: "vue-js" },
        { name: "bootstrap", displayName: { es: "Bootstrap", en: "Bootstrap" }, icon8Name: "bootstrap" },
        { name: "html", displayName: { es: "HTML5", en: "HTML5" }, icon8Name: "html-5" },
        { name: "css", displayName: { es: "CSS3", en: "CSS3" }, icon8Name: "css3" }
      ]
    },
    {
      category: { es: "DevOps y Herramientas", en: "DevOps & Tools" },
      items: [
        { name: "git", displayName: { es: "Git", en: "Git" }, icon8Name: "git" },
        { name: "github", displayName: { es: "GitHub", en: "GitHub" }, icon8Name: "github" },
        { name: "devops", displayName: { es: "Azure DevOps", en: "Azure DevOps" }, icon8Name: "azure-devops", iconUrl: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-development-experience-through-the-native-integrations-of-azure-with-visual-studio-logo-color-tal-revivo.png" },
        { name: "visualstudio", displayName: { es: "Visual Studio", en: "Visual Studio" }, icon8Name: "visual-studio" },
        { name: "linux", displayName: { es: "Linux", en: "Linux" }, icon8Name: "linux" },
        { name: "windows", displayName: { es: "Windows Server", en: "Windows Server" }, icon8Name: "windows-10" }
      ]
    },
    {
      category: { es: "Datos y Analítica", en: "Data & Analytics" },
      items: [
        { name: "etl", displayName: { es: "Desarrollo ETL", en: "ETL Development" }, icon8Name: "data-configuration" },
        { name: "reporting", displayName: { es: "Reporting Services", en: "Reporting Services" }, icon8Name: "combo-chart" },
        { name: "excel", displayName: { es: "Excel", en: "Excel" }, icon8Name: "microsoft-excel-2019" },
        { name: "powerpoint", displayName: { es: "PowerPoint", en: "PowerPoint" }, icon8Name: "microsoft-powerpoint-2019" }
      ]
    },
    {
      category: { es: "Seguridad y Administración", en: "Security & Administration" },
      items: [
        { name: "database-admin", displayName: { es: "Administración de BD", en: "Database Administration" }, icon8Name: "data-configuration" },
        { name: "security", displayName: { es: "Control de Accesos y Seguridad", en: "Access Control & Security" }, icon8Name: "security-checked" },
        { name: "server-admin", displayName: { es: "Administración de Servidores", en: "Server Administration" }, icon8Name: "server" },
        { name: "windows-services", displayName: { es: "Servicios de Windows", en: "Windows Services" }, icon8Name: "services--v1" }
      ]
    },
    {
      category: { es: "Idiomas", en: "Languages" },
      items: [
        { name: "spanish", displayName: { es: "Español (Nativo)", en: "Spanish (Native)" }, icon8Name: "spain" },
        { name: "english", displayName: { es: "Inglés (C2 - Avanzado)", en: "English (C2 - Proficient)" }, icon8Name: "great-britain" }
      ]
    }
  ],

  certifications: [
    { name: { es: "Developer Certification - HCCDA - Tech Essentials", en: "Developer Certification - HCCDA - Tech Essentials" }, issuer: "Huawei Cloud", date: "2024" },
    { name: { es: "Identity & Access Management (IAM) Bootcamp", en: "Identity & Access Management (IAM) Bootcamp" }, issuer: "Cybolt Academy", date: "2024" },
    { name: { es: "Google Cloud Computing Foundations Academy", en: "Google Cloud Computing Foundations Academy" }, issuer: "Google Cloud", date: "2024" },
    { name: { es: "Diplomado en Ciencia de Datos", en: "Diploma in Data Science" }, issuer: "Tecnológico Nacional de México", date: "2024" },
    { name: { es: "First Certificate in English (FCE) - Nivel B1", en: "First Certificate in English (FCE) - Level B1" }, issuer: "Cambridge", date: "2023" },
    { name: { es: "Certificado de Inglés - Nivel B2", en: "English Certificate - Level B2" }, issuer: "CELEX (IPN) & SEP", date: "2024" },
    { name: { es: "EF SET English Certificate - Nivel C2", en: "EF SET English Certificate - Level C2" }, issuer: "EF Education First", date: "2024" }
  ],

  courses: [
    { name: { es: "Python", en: "Python" }, provider: "Udemy", date: "2024" },
    { name: { es: "¿Qué es Ciencia de Datos?, IBM", en: "What is Data Science?, IBM" }, provider: "Coursera", date: "2023" },
    { name: { es: "Introducción a Java, UNAM", en: "Introduction to Java, UNAM" }, provider: "Coursera", date: "2023" },
    { name: { es: "Programación Estadística con R, UNAM", en: "Statistical Programming with R, UNAM" }, provider: "Coursera", date: "2023" },
    { name: { es: "Cómo presentar mi proyecto de negocio", en: "How to present my business project" }, provider: "Nacional Financiera S.N.C., I.B.D.", date: "2023" },
    { name: { es: "Planeación estratégica", en: "Strategic planning" }, provider: "Nacional Financiera S.N.C., I.B.D.", date: "2023" },
    { name: { es: "Curso de JavaScript Moderno", en: "Modern JavaScript Course" }, provider: "CDW ESCOM IPN", date: "2022" },
    { name: { es: "Curso de Git y GitHub", en: "Git and GitHub Course" }, provider: "CDW ESCOM IPN", date: "2022" },
    { name: { es: "Curso de React", en: "React Course" }, provider: "CDW ESCOM IPN", date: "2022" },
    { name: { es: "Desarrollo en PHP y bases de datos", en: "PHP and Databases Development" }, provider: "CDW ESCOM IPN", date: "2021" },
    { name: { es: "Introducción a JavaScript", en: "Introduction to JavaScript" }, provider: "CDW ESCOM IPN", date: "2021" }
  ],

  softSkills: [
    { name: { es: "Trabajo en equipo", en: "Teamwork" }, icon: "people-group" },
    { name: { es: "Comunicación efectiva", en: "Effective communication" }, icon: "comments" },
    { name: { es: "Resolución de problemas", en: "Problem solving" }, icon: "lightbulb" },
    { name: { es: "Gestión del tiempo", en: "Time management" }, icon: "clock" },
    { name: { es: "Adaptabilidad", en: "Adaptability" }, icon: "arrows-rotate" },
    { name: { es: "Pensamiento analítico", en: "Analytical thinking" }, icon: "brain" }
  ]
};

export function getSkills(lang = 'es') {
  return {
    technical: skills.technical.map(cat => ({
      category: pick(cat.category, lang),
      items: cat.items.map(it => ({
        ...it,
        displayName: pick(it.displayName, lang),
      }))
    })),
    certifications: skills.certifications.map(c => ({ ...c, name: pick(c.name, lang) })),
    courses: skills.courses.map(c => ({ ...c, name: pick(c.name, lang) })),
    softSkills: skills.softSkills.map(s => ({ ...s, name: pick(s.name, lang) })),
  };
}
