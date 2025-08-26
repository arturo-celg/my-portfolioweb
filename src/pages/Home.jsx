import Button from "@mui/material/Button";

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold">
        ¡Hola, soy <span className="text-yellow-300">Arturo</span> 👋
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Desarrollador Web con experiencia en React, DevOps y soluciones en la nube.
      </p>
      <div className="mt-6">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#projects"
          className="rounded-full shadow-lg"
        >
          Ver mis proyectos
        </Button>
      </div>
    </section>
  );
}

export default Home;
