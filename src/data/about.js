import personalPhoto from '../assets/personalPhoto.jpg';
const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const aboutInfo = {
  name: "Arturo Cortés Lugo",
  description: {
    es: "Ingeniero de Software con experiencia en el desarrollo de aplicaciones empresariales utilizando C#, .NET y SQL Server, enfocado en automatización de procesos y sistemas de monitoreo. Me interesa continuar desarrollando soluciones eficientes mientras sigo explorando tecnologías como desarrollo web moderno, cloud computing, IoT y ciberseguridad.",
    en: "Software Engineer with experience developing enterprise applications using C#, .NET and SQL Server, focused on process automation and monitoring systems. I am interested in building efficient solutions while continuing to explore modern web development, cloud computing, IoT and cybersecurity.",
  },
  image: personalPhoto,
};

export function getAboutInfo(lang = 'es') {
  return {
    ...aboutInfo,
    description: pick(aboutInfo.description, lang),
  };
}
