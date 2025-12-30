const pick = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? obj.en : obj);

export const projects = [
  {
    id: 1,
    title: { es: "Portfolio Web", en: "Web Portfolio" },
    description: { es: ".", en: "." },
    images: ["/projects/portfolio-1.png", "/projects/portfolio-2.png", "/projects/portfolio-3.png"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "personal",
    link: "https://github.com/tuusuario/portfolio",
    demo: "https://tu-portfolio.com",
  },
  {
    id: 2,
    title: { es: "App de Tareas", en: "Tasks App" },
    description: { es: "Aplicación CRUD para gestionar tareas.", en: "CRUD app to manage tasks." },
    images: ["/projects/todo.png"],
    technologies: ["React", "Node.js", "MongoDB"],
    category: "academico",
    link: "https://github.com/tuusuario/todo-app",
    demo: "https://todo-app-demo.com",
  },
  {
    id: 3,
    title: { es: "Chat en Tiempo Real", en: "Real-time Chat" },
    description: { es: "Aplicación de chat con características en tiempo real.", en: "Chat app with real-time features." },
    images: ["/projects/chat.png"],
    technologies: ["Socket.io", "Express", "React"],
    category: "personal",
    link: "https://github.com/tuusuario/chat-app",
    demo: "https://chat-app-demo.com",
  },
  {
    id: 4,
    title: { es: "E-commerce", en: "E-commerce" },
    description: { es: "Tienda en línea con carrito de compras y pasarela de pago.", en: "Online store with cart and payment gateway." },
    images: ["/projects/ecommerce.png"],
    technologies: ["Next.js", "Stripe", "MongoDB"],
    category: "laboral",
    link: "https://github.com/tuusuario/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
];

export function getProjects(lang = 'es') {
  return projects.map(p => ({
    ...p,
    title: pick(p.title, lang),
    description: pick(p.description, lang),
  }));
}
