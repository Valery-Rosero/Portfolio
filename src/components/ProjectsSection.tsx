import React from 'react';

export default function ProjectsWindow() {
  const projects = [
    {
      title: "App Restaurant",
      technologies: ["Python", "React", "Django"],
      description: "Aplicación web con backend para gestión de restaurantes"
    },
    {
      title: "E-commerce",
      technologies: ["JavaScript", "Node.js", "MongoDB"],
      description: "Plataforma de ventas online con carrito de compras"
    },
    {
      title: "Blog Personal",
      technologies: ["Next.js", "Tailwind CSS"],
      description: "Blog con sistema de comentarios y autenticación"
    },
    // Agrega más proyectos según necesites
  ];


  return (
    <section className="w-full max-w-4xl px-6 py mx-auto">
      {/* Título */}
      <h2 className="bg-beige px-4 py-2 md:px-8 md:py-3 rounded-full border-2 border-morado shadow-lg md:shadow-xl text-3xl md:text-4xl lg:text-5xl font-amiri text-morado text-center mb-8 md:mb-10 mx-4 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-60">
        Mis Proyectos
      </h2>

      {/* Ventana con scroll */}
      <div className="bg-beige/80 border-2 border-morado rounded-xl shadow-2xl overflow-hidden">
        {/* Barra superior estilo ventana */}
        <div className="bg-morado px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-fondoprincipal rounded-full"></div>
            <div className="w-3 h-3 bg-beige rounded-full"></div>
            <div className="w-3 h-3 bg-lila rounded-full"></div>
          </div>
          <span className="text-beige font-amiri ml-4">Proyectos.valery</span>
        </div>

        {/* Contenido con scroll */}
        <div className="max-h-[500px] overflow-y-auto p-6">
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <li 
                key={index}
                className="bg-white/90 border border-morado/30 rounded-lg p-5 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-amiri text-morado">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs font-amiri bg-morado/10 text-morado px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-morado font-amiri">
                  {project.description}
                </p>
                <button className="mt-3 text-sm font-amiri text-morado border border-morado rounded px-3 py-1 bg-lila hover:bg-morado/10 transition">
                  Ver detalles →
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Barra inferior */}
        <div className="bg-lila px-4 py-2 text-center text-sm text-morado font-amiri">
          {projects.length} proyectos mostrados
        </div>
      </div>
    </section>
  );
}