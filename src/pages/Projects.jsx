import ProjectCard from "../components/ProjectCard";

function Projects() {
  // Datos de ejemplo (después los cambias con tus proyectos reales)
  const projects = [
    {
      title: "Portafolio Web",
      description: "Sitio personal creado con React, Vite, Tailwind y Material UI.",
      image: "https://source.unsplash.com/400x200/?website",
    },
    {
      title: "App de Tareas",
      description: "Aplicación de gestión de tareas con autenticación y base de datos.",
      image: "https://source.unsplash.com/400x200/?code",
    },
    {
      title: "Proyecto DevOps",
      description: "Automatización de despliegues en la nube con CI/CD.",
      image: "https://source.unsplash.com/400x200/?cloud",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Mis Proyectos
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
