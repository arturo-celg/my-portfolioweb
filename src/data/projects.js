// work projects
import monitorImg1 from "../assets/projects/work/TELCEL/monitorAPP1.png";
import monitorImg2 from "../assets/projects/work/TELCEL/monitorAPP2.png";
import vozImg1 from "../assets/projects/work/TELCEL/vozAPP1.png";
import vozImg2 from "../assets/projects/work/TELCEL/vozAPP2.png";
import deliveriesImg1 from "../assets/projects/work/TELCEL/deliveryAPP1.png";
import deliveriesImg2 from "../assets/projects/work/TELCEL/deliveryAPP2.png";
import simImg from "../assets/projects/work/TELCEL/simAPP.png";
import tratoImg1 from "../assets/projects/work/TELCEL/tratoAPP1.png";
import tratoImg2 from "../assets/projects/work/TELCEL/tratoAPP2.png";
import centralImg1 from "../assets/projects/work/TELCEL/centralAPP.png";

// school projects
import TTImg1 from "../assets/projects/school/TT/TT1.jpg";
import TTImg2 from "../assets/projects/school/TT/TT2.jpg";
import TTImg3 from "../assets/projects/school/TT/TT3.jpg";
import TTImg4 from "../assets/projects/school/TT/TT4.jpg";
import TTImg5 from "../assets/projects/school/TT/TT5.jpg";
import TTImg6 from "../assets/projects/school/TT/TT6.jpg";
import TTImg7 from "../assets/projects/school/TT/TT7.jpg";
import TTImg8 from "../assets/projects/school/TT/TT8.jpg";
import TTImg9 from "../assets/projects/school/TT/TT9.jpg";
import hospitalImg1 from "../assets/projects/school/hospital/hospital1.png";
import hospitalImg2 from "../assets/projects/school/hospital/hospital2.png";
import hospitalImg3 from "../assets/projects/school/hospital/hospital3.png";
import hospitalImg4 from "../assets/projects/school/hospital/hospital4.png";
import hospitalImg5 from "../assets/projects/school/hospital/hospital5.png";
import hospitalImg6 from "../assets/projects/school/hospital/hospital6.png";
import electronicImg from "../assets/projects/school/youtube/electronic.png";


// personal projects
import portfolioImg1 from "../assets/projects/personal/portfolioWeb/portfolioAPP1.png";
import portfolioImg2 from "../assets/projects/personal/portfolioWeb/portfolioAPP2.png";
import portfolioImg3 from "../assets/projects/personal/portfolioWeb/portfolioAPP3.png";
import portfolioImg4 from "../assets/projects/personal/portfolioWeb/portfolioAPP4.png";
import portfolioImg5 from "../assets/projects/personal/portfolioWeb/portfolioAPP5.png";
import pokeImg1 from "../assets/projects/personal/pokeAPI/pokeAPP1.png";
import pokeImg2 from "../assets/projects/personal/pokeAPI/pokeAPP2.png";
import pythonImg1 from "../assets/projects/personal/python/pythonCourse1.png";
import pythonImg2 from "../assets/projects/personal/python/pythonCourse2.png";
import pythonImg3 from "../assets/projects/personal/python/pythonCourse3.png";


const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const projects = [
  {
    id: 1,
    title: { es: "Monitor de Procesos de Infraestructura", en: "Infrastructure Process Monitor" },
    description: {
      es: "Aplicación web para monitorear servicios, sitios IIS, bases de datos y procesos automatizados dentro de la infraestructura corporativa. Incluye autenticación LDAP, control de accesos por roles y recolección de métricas mediante Windows Services.",
      en: "Web application designed to monitor services, IIS sites, databases and automated processes across enterprise infrastructure. Includes LDAP authentication, role-based access control and metrics collection through Windows Services."
    },
    images: [monitorImg1, monitorImg2],
    technologies: ["C#", ".NET Web Forms", "SQL Server", "JavaScript", "Bootstrap", "Windows Services", "LDAP"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 2,
    title: { es: "Sistema de Bitácora de Fallas Operativas", en: "Operational Incidents Logging System" },
    description: {
      es: "Sistema para registro, análisis y seguimiento de incidencias operativas en sistemas comerciales. Implementa reglas de negocio para cálculo de impacto y generación de reportes analíticos mediante SSRS.",
      en: "System for logging, analyzing and tracking operational incidents in commercial systems. Implements business rules to calculate impact and provides analytical reports using SSRS."
    },
    images: [vozImg1, vozImg2],
    technologies: ["C#", ".NET Web Forms", "SQL Server", "SSRS", "JavaScript", "Bootstrap", "LDAP"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 3,
    title: { es: "Portal de Seguimiento de Deliveries", en: "Deliveries Tracking Portal" },
    description: {
      es: "Portal interno para gestión de oportunidades de licenciamiento y seguimiento de entregables con proveedores. Incluye control de accesos con LDAP para usuarios internos y cuentas genéricas para call center, además de reportes operativos con SSRS.",
      en: "Internal portal to manage licensing opportunities and track deliverables with vendors. Features LDAP authentication for internal users and generic accounts for call center teams, along with operational reports using SSRS."
    },
    images: [deliveriesImg1, deliveriesImg2],
    technologies: ["C#", ".NET Web Forms", "SQL Server", "JavaScript", "Bootstrap", "LDAP", "SSRS"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 4,
    title: { es: "Sistema de Registro de Incidentes para Activación de SIMs", en: "SIM Activation Incident Reporting System" },
    description: {
      es: "Formulario web expuesto a internet para reporte de incidencias por distribuidores. Incluye validaciones backend contra inyección de código, técnica honeypot para mitigación de bots y control de acceso mediante validación de IP.",
      en: "Public web form used by distributors to report SIM activation incidents. Includes backend validation against code injection, honeypot technique to mitigate bots and IP-based access validation."
    },
    images: [simImg],
    technologies: ["C#", ".NET Web Forms", "SQL Server", "JavaScript"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 5,
    title: { es: "Sistema de Productividad – Trato Compartido", en: "Shared Channel Productivity System" },
    description: {
      es: "Sistema web interno para el registro y medición de la productividad de asesores en los diferentes trámites gestionados por el área de Trato Compartido. Incluye autenticación mediante LDAP, registro de operaciones, generación de métricas de desempeño y reportes para análisis operativo.",
      en: "Internal web system used to register and measure advisor productivity across different processes handled by the Shared Channel department. Includes LDAP authentication, operational tracking, performance metrics and reporting for operational analysis."
    },
    images: [tratoImg1, tratoImg2],
    technologies: ["C#", ".NET Web Forms", "SQL Server", "JavaScript", "Bootstrap", "LDAP", "SSRS"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 6,
    title: { es: "Portal Central de Aplicaciones del Departamento", en: "Department Applications Portal" },
    description: {
      es: "Portal centralizado para acceso y administración de aplicaciones internas del área. Implementado con React y Material UI en el frontend y .NET Web API en el backend, integrando recursos y documentación del área.",
      en: "Centralized portal for accessing and managing internal department applications. Built with React and Material UI on the frontend and .NET Web API on the backend."
    },
    images: [centralImg1],
    technologies: ["React", "Material UI", "C#", ".NET Web API", "SQL Server"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 7,
    title: { es: "Portafolio Web Personal", en: "Personal Web Portfolio" },
    description: {
      es: "Portafolio web personal desarrollado con React y Material UI para presentar proyectos, experiencia profesional y habilidades técnicas. Incluye diseño responsivo, animaciones e integración con GitHub Pages.",
      en: "Personal portfolio website built with React and Material UI to showcase projects, professional experience and technical skills. Includes responsive design, animations and deployment on GitHub Pages."
    },
    images: [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5],
    technologies: ["React", "Material UI", "Framer Motion"],
    link: "https://github.com/arturo-celg",
    demo: "https://arturo-celg.github.io/my-portfolioweb/",
    showLink: true,
  },
  {
    id: 8,
    title: { es: "Aplicación Pokédex con API", en: "Pokédex API Application" },
    description: {
      es: "Aplicación web desarrollada con React y TypeScript que consume la PokéAPI para visualizar información dinámica de Pokémon. Incluye búsqueda, renderizado dinámico de datos y manejo de estados.",
      en: "Web application built with React and TypeScript that consumes the PokéAPI to display Pokémon information dynamically. Includes search functionality, dynamic rendering and state management."
    },
    images: [pokeImg1, pokeImg2],
    technologies: ["React", "TypeScript", "REST API", "JavaScript"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 9,
    title: { es: "Aplicaciones de Visualización de Datos en Python", en: "Data Visualization Applications in Python" },
    description: {
      es: "Desarrollo de aplicaciones en Python utilizando Matplotlib y Tkinter para visualización de datos y construcción de interfaces gráficas. Los proyectos incluyen análisis exploratorio y generación de gráficos.",
      en: "Development of Python applications using Matplotlib and Tkinter for data visualization and graphical interfaces. Projects include exploratory analysis and chart generation."
    },
    images: [pythonImg1, pythonImg2, pythonImg3],
    technologies: ["Python", "Matplotlib", "Tkinter", "Google Colab"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 10,
    title: { es: "Simulación Algorítmica de Procesos de Filtración", en: "Algorithmic Simulation of Filtration Processes" },
    description: {
      es: "Proyecto de titulación enfocado en la simulación de técnicas de filtración granular rápida y degradación bacteriana mediante algoritmos implementados en JavaScript. La aplicación web fue estructurada utilizando Vue.js para organizar y visualizar de forma interactiva los resultados de las simulaciones, complementado con análisis estadístico basado en escala Likert para evaluar el nivel de conciencia ambiental.",
      en: "Thesis project focused on simulating rapid granular filtration and bacterial degradation techniques through algorithms implemented in JavaScript. The web application was structured using Vue.js to organize and interactively visualize simulation results, complemented by statistical analysis based on the Likert scale to evaluate environmental awareness."
    },
    images: [TTImg1, TTImg2, TTImg3, TTImg4, TTImg5, TTImg6, TTImg7, TTImg8, TTImg9],
    technologies: ["JavaScript", "HTML", "CSS", "Vue.js"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 11,
    title: { es: "Sistema Web para Gestión de Clínica Médica", en: "Medical Clinic Management System" },
    description: {
      es: "Aplicación web full stack desarrollada para la gestión de una clínica médica. El frontend fue construido con React y Material UI para crear interfaces consistentes y responsivas. El backend fue implementado con Express.js y Sequelize para mapear la base de datos relacional en SQL Server y exponer los servicios necesarios para la gestión de pacientes, consultas y registros médicos.",
      en: "Full-stack web application developed for managing a medical clinic. The frontend was built using React and Material UI to create consistent and responsive interfaces. The backend was implemented with Express.js and Sequelize to map the relational database in SQL Server and expose services for managing patients, appointments and medical records."
    },
    images: [hospitalImg1, hospitalImg2, hospitalImg3, hospitalImg4, hospitalImg5, hospitalImg6],
    technologies: ["React", "Material UI", "Node.js", "Express", "Sequelize", "SQL Server"],
    link: "",
    demo: "",
    showLink: false,
  },
  {
    id: 12,
    title: { es: "Instrumentación y Adquisición de Señales", en: "Instrumentation and Signal Acquisition" },
    description: {
      es: "Proyectos académicos de instrumentación electrónica utilizando Arduino y LabVIEW para adquisición, procesamiento y visualización de señales provenientes de sensores.",
      en: "Academic instrumentation projects using Arduino and LabVIEW for signal acquisition, processing and visualization from sensors."
    },
    images: [electronicImg],
    technologies: ["Arduino", "LabVIEW", "Electronics"],
    link: "",
    demo: "https://youtube.com/@arturocl2653?si=Pau7VTlVBEnl6Cd8",
    showLink: true,
  }
];

export function getProjects(lang = 'es') {
  return projects.map(p => ({
    ...p,
    title: pick(p.title, lang),
    description: pick(p.description, lang),
  }));
}