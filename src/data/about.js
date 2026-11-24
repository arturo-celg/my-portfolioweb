import personalPhoto from '../assets/personalPhoto2.jpeg';
const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const aboutInfo = {
  name: "Arturo Cortés Lugo",
  role: {
    es: "Ingeniero en Sistemas Computacionales",
    en: "Computer Systems Engineer",
  },
  description: {
    es: "Profesionista con experiencia en desarrollo de aplicaciones empresariales (.NET, SQL Server), automatización de procesos y liderazgo en modernización Ágil/DevOps. Enfocado en construir soluciones escalables mientras sigo ampliando mi experiencia en desarrollo web, nube y ciberseguridad.",
    en: "Professional with experience in enterprise application development (.NET, SQL Server), process automation, and Agile/DevOps modernization leadership. Focused on building scalable solutions while continuing to expand my expertise in web development, cloud computing, and cybersecurity.",
  },
  image: personalPhoto,
};

export function getAboutInfo(lang = 'es') {
  return {
    name: aboutInfo.name,
    image: aboutInfo.image,
    role: pick(aboutInfo.role, lang),
    description: pick(aboutInfo.description, lang),
  };
}
