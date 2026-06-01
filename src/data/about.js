import personalPhoto from '../assets/personalPhoto.jpg';
const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const aboutInfo = {
  name: "Arturo Cortés Lugo",
  description: {
    es: "Profesionista con experiencia en aplicaciones empresariales, automatización de procesos y administración de infraestructura. Apasionado por desarrollar soluciones eficientes mientras continúo ampliando mis conocimientos en desarrollo web, computación en la nube, IoT y ciberseguridad.",
    en: "Professional with experience in enterprise applications, process automation and infrastructure administration. Passionate about developing efficient solutions while continuing to expand my knowledge in web development, cloud computing, IoT and cybersecurity.",
  },
  image: personalPhoto,
};

export function getAboutInfo(lang = 'es') {
  return {
    ...aboutInfo,
    description: pick(aboutInfo.description, lang),
  };
}
