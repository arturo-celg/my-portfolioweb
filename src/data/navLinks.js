const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const navLinks = [
  { id: 1, label: { es: "Inicio", en: "Home" }, href: "#home" },
  { id: 2, label: { es: "Sobre mí", en: "About" }, href: "#about" },
  { id: 3, label: { es: "Certificaciones", en: "Certifications" }, href: "#certifications" },
  { id: 4, label: { es: "Habilidades", en: "Skills" }, href: "#skills" },
  { id: 5, label: { es: "Proyectos", en: "Projects" }, href: "#projects" },
  //{ id: 6, label: { es: "Contacto", en: "Contact" }, href: "#contact" },
];

export function getNavLinks(lang = 'es') {
  return navLinks.map(l => ({ ...l, label: pick(l.label, lang) }));
}
