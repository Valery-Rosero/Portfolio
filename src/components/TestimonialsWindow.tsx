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
      {/* Título */}
      <h2 className="bg-beige px-4 py-2 md:px-8 md:py-3 rounded-full border-2 border-morado shadow-lg md:shadow-xl text-3xl md:text-4xl lg:text-5xl font-amiri text-morado text-center mb-8 md:mb-10 mx-4 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-60">
        Testimonios
      </h2>

      {/* Ventana con scroll */}
      <div className="bg-beige/80 border-2 border-morado rounded-xl shadow-xl overflow-hidden">
        {/* Barra superior estilo ventana */}
        <div className="bg-morado px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-fondoprincipal rounded-full"></div>
            <div className="w-3 h-3 bg-beige rounded-full"></div>
            <div className="w-3 h-3 bg-lila rounded-full"></div>
          </div>
          <span className="text-beige font-amiri ml-4">Testimonios.valery</span>
        </div>

        {/* Contenido con scroll */}
        <div className="max-h-[500px] overflow-y-auto p-6">
          <ul className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <li 
                key={index}
                className="bg-white/90 border border-morado/30 rounded-lg p-6 hover:shadow-md transition"
              >
                <blockquote className="relative">
                  {/* Icono de comillas */}
                  <span className="absolute -top-4 -left-2 text-4xl text-morado/20">❝</span>
                  
                  <p className="text-lg italic text-morado font-amiri pl-6">
                    {testimonial.quote}
                  </p>
                  
                  {/* Autor */}
                  <footer className="mt-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-morado/10 flex items-center justify-center text-morado font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-amiri font-bold text-morado">{testimonial.author}</p>
                      <p className="text-sm text-morado/80">{testimonial.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>

        {/* Barra inferior */}
        <div className="bg-morado/10 px-4 py-2 text-center text-sm text-morado font-amiri">
          {testimonials.length} testimonios
        </div>
      </div>
    </section>
  );
}