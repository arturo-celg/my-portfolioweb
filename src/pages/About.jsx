import AboutCard from "../components/AboutCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-16"
    >
      <AboutCard
        image="https://source.unsplash.com/600x600/?developer,tech"
        title="Sobre mí"
        description="Soy un desarrollador web apasionado por la tecnología, con experiencia en React, DevOps y soluciones en la nube."
        extra="Me encanta construir interfaces modernas, optimizadas y fáciles de usar. Siempre busco aprender nuevas tecnologías y compartir conocimiento con otros."
      />
    </section>
  );
}

export default About;
