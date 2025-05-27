import React from 'react';

export default function ProjectsWindow() {
  const projects = [
    {
      title: "App Restaurant",
      technologies: ["Python", "React", "Django"],
      description: "Aplicación web con backend para gestión de restaurantes",
      demoLink: "https://lista-asistencia-9dyliv2xg-valery-roseros-projects.vercel.app",
    },
    {
      title: "Tarjeta de Presentación",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      description: "Tarjeta de presentación interactiva con diferentes estilos",
      demoLink: "https://examenfinal-dise-o-git-main-valery-roseros-projects.vercel.app",
    },
    {
      title: "Lista de Asistencia",
      technologies: ["Next.js", "Tailwind CSS"],
      description: "Lista de asistencia para estudiantes con registro y seguimiento",
      demoLink: "https://lista-asistencia-9dyliv2xg-valery-roseros-projects.vercel.app",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-4xl px-6 py-12 mx-auto">
      <header className="text-center mb-12">
        <h2 className="inline-block bg-beige px-6 py-2 rounded-full border-2 border-morado shadow-lg text-3xl font-amiri text-morado">
          Mis Proyectos
        </h2>
      </header>

      <article className="bg-beige/80 border-2 border-morado rounded-xl shadow-2xl overflow-hidden">
        <header className="bg-morado px-4 py-2 flex items-center">
          <span className="flex space-x-2 mr-4">
            <span className="w-3 h-3 bg-fondoprincipal rounded-full"></span>
            <span className="w-3 h-3 bg-beige rounded-full"></span>
            <span className="w-3 h-3 bg-lila rounded-full"></span>
          </span>
          <h3 className="text-beige font-amiri">Proyectos.valery</h3>
        </header>

        <main className="max-h-[500px] overflow-y-auto p-6">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <li 
                key={index}
                className="bg-white/90 border border-morado/30 rounded-lg p-5 hover:shadow-md transition flex flex-col"
              >
                <header className="mb-3">
                  <h3 className="text-xl font-amiri text-morado">
                    {project.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <li 
                        key={i}
                        className="text-xs font-amiri bg-morado/10 text-morado px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </header>

                <p className="text-morado font-amiri mb-4 flex-grow">
                  {project.description}
                </p>

                <footer className="flex justify-between gap-2 mt-auto">
                  <a 
                    href={project.demoLink} 
                    className="text-sm font-amiri text-beige bg-morado rounded px-3 py-1 hover:bg-morado/80 transition flex-1 text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </footer>
              </li>
            ))}
          </ul>
        </main>

        <footer className="bg-lila px-4 py-2 text-center text-sm text-morado font-amiri">
          {projects.length} proyectos mostrados
        </footer>
      </article>
    </section>
  );
}