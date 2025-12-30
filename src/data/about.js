const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const aboutInfo = {
  name: "Arturo CL",
  description: {
    es: "Desarrollador de Software con experiencia profesional en el desarrollo de soluciones empresariales. Mi enfoque está en crear soluciones eficientes y escalables, mientras continúo explorando tecnologías emergentes como IoT, desarrollo móvil, cloud computing y ciberseguridad.",
    en: "Software Developer with professional experience building enterprise solutions. Focused on efficient, scalable systems while exploring IoT, mobile development, cloud computing, and cybersecurity.",
  },
  image: "/profile.jpg",
};

export function getAboutInfo(lang = 'es') {
  return {
    ...aboutInfo,
    description: pick(aboutInfo.description, lang),
  };
}
