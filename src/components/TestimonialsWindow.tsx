import React from 'react';

export default function TestimonialsWindow() {
  const testimonials = [
    {
      quote: "Valery es una ingeniera brillante, siempre enfocada en los detalles",
      author: "Juan Pérez",
      role: "UX Designer"
    },
    {
      quote: "Excelente colaboración en nuestro proyecto de asistencia con Next.js",
      author: "Samuel Ibarra",
      role: "Ing. Software"
    },
    {
      quote: "Su enfoque en diseño limpio y funcional elevó nuestro producto",
      author: "María González",
      role: "Product Manager"
    }
  ];

  return (
    <section id="testimonials" className="w-full max-w-4xl px-6 py-12 mx-auto">
      {/* Encabezado */}
      <header className="text-center mb-12">
        <h2 className="inline-block bg-beige px-6 py-2 rounded-full border-2 border-morado shadow-lg text-3xl font-amiri text-morado">
          Testimonios
        </h2>
      </header>

      {/* Ventana de testimonios */}
      <article className="bg-beige/80 border-2 border-morado rounded-xl shadow-xl overflow-hidden">
        {/* Barra de título */}
        <header className="bg-morado px-4 py-2 flex items-center">
          <span className="flex space-x-2 mr-4">
            <span className="w-3 h-3 bg-fondoprincipal rounded-full"></span>
            <span className="w-3 h-3 bg-beige rounded-full"></span>
            <span className="w-3 h-3 bg-lila rounded-full"></span>
          </span>
          <h3 className="text-beige font-amiri">Testimonios.valery</h3>
        </header>

        {/* Contenido principal */}
        <main className="max-h-[500px] overflow-y-auto p-6">
          <ul className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <li 
                key={index}
                className="bg-white/90 border border-morado/30 rounded-lg p-6 hover:shadow-md transition"
              >
                <blockquote className="relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-morado/20" aria-hidden="true">❝</span>
                  
                  <p className="text-lg italic text-morado font-amiri pl-6">
                    {testimonial.quote}
                  </p>
                  
                  <footer className="mt-4 flex items-center">
                    <figure className="w-10 h-10 rounded-full bg-morado/10 flex items-center justify-center text-morado font-bold">
                      {testimonial.author.charAt(0)}
                    </figure>
                    <figcaption className="ml-3">
                      <p className="font-amiri font-bold text-morado">{testimonial.author}</p>
                      <p className="text-sm text-morado/80">{testimonial.role}</p>
                    </figcaption>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </main>

        {/* Pie de ventana */}
        <footer className="bg-morado/10 px-4 py-2 text-center text-sm text-morado font-amiri">
          {testimonials.length} testimonios
        </footer>
      </article>
    </section>
  );
}