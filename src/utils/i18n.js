import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    common: {
      loading: "Cargando...",
      role: "Desarrollador de Software",
      education: "Educación",
      workExperience: "Experiencia Laboral",
      technicalSkills: "Habilidades Técnicas",
      certifications: "Certificaciones",
      courses: "Cursos",
      softSkills: "Soft Skills",
      home: {
        greeting: "¡Hola, soy",
        name: "Arturo",
        phrases: [
          "Ingeniero de Software",
          "Desarrollador C# y .NET",
          "Aplicaciones Empresariales e Infraestructura",
          "Automatización y Plataformas de Datos",
        ],
        buttonProjects: "Ver mis proyectos",
      },
      projects: {
        title: "Proyectos",
        categories: { all: "Todos", personal: "Personal", academico: "Académico", laboral: "Laboral" },
        showDescription: "Ver descripción",    
        hideDescription: "Ocultar descripción",  
      },
      contact: {
        title: "Contáctame",
        subtitle: "Si tienes alguna propuesta, proyecto o solo quieres saludar, llena el formulario 👇",
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        submit: "Enviar",
      },
      footer: { rights: "© 2026 Arturo CL. Todos los derechos reservados." },
    },
  },
  en: {
    common: {
      loading: "Loading...",
      role: "Software Developer",
      education: "Education",
      workExperience: "Work Experience",
      technicalSkills: "Technical Skills",
      certifications: "Certifications",
      courses: "Courses",
      softSkills: "Soft Skills",
      home: {
        greeting: "¡Hi, I'm",
        name: "Arthur",
        phrases: [
          "Software Engineer",
          "C# and .NET Developer",
          "Enterprise Applications and Infrastructure",
          "Automation and Data Platforms",
        ],
        buttonProjects: "See my projects",
      },
      projects: {
        title: "Projects",
        categories: { all: "All", personal: "Personal", academico: "Academic", laboral: "Work" },
        showDescription: "Show description",     
        hideDescription: "Hide description",
      },
      contact: {
        title: "Contact me",
        subtitle: "If you have a proposal, project or just want to say hi, fill the form 👇",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
      },
      footer: { rights: "© 2026 Arturo CL. All rights reserved." },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "querystring", "cookie"],
      caches: ["localStorage"],
    },
  });

export default i18n;