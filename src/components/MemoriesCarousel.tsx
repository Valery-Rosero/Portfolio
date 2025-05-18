'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MemoriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const memories = [
    {
      id: 1,
      title: "Primer error",
      image: "/images/memory1.jpg",
      story: "Tenía 16 años y me sentía una hacker por lograr mi primer 'Hola Mundo'. Ese mismo día, borré accidentalmente todo el código... y aprendí lo que es un commit. Desde entonces, los errores se volvieron mis mejores maestros."
    },
    {
      id: 2,
      title: "Primer proyecto",
      image: "/images/memory2.jpg",
      story: "Mi primera aplicación fue un sistema de notas que solo yo usaba. Tenía más bugs que funciones, pero fue mi primer amor en el desarrollo."
    },
    {
      id: 3,
      title: "Momento clave",
      image: "/images/memory3.jpg",
      story: "El día que entendí cómo funcionaban los hooks de React. Mi código pasó de ser un espagueti a algo medianamente presentable."
    },
    {
      id: 4,
      title: "Bug épico",
      image: "/images/memory4.jpg",
      story: "Pasé 8 horas buscando un bug que resultó ser un punto y coma faltante. Mi mentor me dijo: 'Bienvenida al 90% del trabajo de un ingeniero'. Ahora guardo ese punto y coma enmarcado en mi escritorio."
    },
    {
      id: 5,
      title: "Primer deploy",
      image: "/images/memory5.jpg",
      story: "Cuando mi primer sitio se desplegó, lo refresqué 50 veces para asegurarme que seguía funcionando. Dormí con el laptop al lado esa noche, por si 'algo pasaba'. Hoy sé que ese miedo nunca desaparece, solo se transforma."
    },
    {
      id: 6,
      title: "El cliente imposible",
      image: "/images/memory6.jpg",
      story: "Un cliente me pidió 'un botón como el de Netflix pero que haga lo de Uber'. Aprendí que traducir requerimientos absurdos es parte de nuestro trabajo... y que a veces un café es la mejor herramienta de desarrollo."
    }
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % memories.length);
      }, 5000);
    }

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearInterval(interval);
    };
  }, [isAutoPlaying, memories.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % memories.length);
  };

  const goToMemory = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section 
      id="memories"
      aria-labelledby="memories-heading"
      className="w-full max-w-6xl px-4 sm:px-6 py-8 md:py-12 mx-auto">
      <div className="text-center mb-12">
            <span className="bg-beige px-4 py-2 md:px-8 md:py-3 rounded-full border-2 border-morado shadow-lg md:shadow-xl text-3xl md:text-4xl lg:text-5xl font-amiri text-morado text-center mb-8 md:mb-10 mx-4 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-60">
                Recuerdos que Moldean
            </span>
            <span className="bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-morado/20 z-0"></span>
        </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          {memories.map((memory, index) => (
            <div 
              key={memory.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={memory.image}
                alt={memory.title}
                fill
                className="object-cover rounded-lg"
                priority={index < 3} 
                sizes={isMobile ? "100vw" : "50vw"}
                quality={isMobile ? 75 : 85}
                unoptimized={process.env.NODE_ENV !== 'production'}
              />
            </div>
          ))}
          
          <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMemory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Ir al recuerdo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-beige/90 border-2 border-morado rounded-xl shadow-lg flex flex-col">
          <div className="p-8 flex-1">
            <h3 className="text-3xl font-amiri text-morado mb-4 underline decoration-morado/30">
              {memories[activeIndex].title}
            </h3>
            <p className="text-lg text-morado font-amiri leading-relaxed">
              {memories[activeIndex].story}
            </p>
          </div>

          <div className="border-t border-morado/20 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-morado hover:text-lila transition"
                  aria-label={isAutoPlaying ? "Pausar" : "Reproducir"}
                >
                  {isAutoPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                <span className="text-morado text-sm md:text-base font-amiri">
                  {activeIndex + 1} / {memories.length}
                </span>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={goToPrev}
                  className="px-4 py-2 bg-lila hover:bg-morado/20 rounded-lg transition flex items-center gap-1 text-morado font-amiri"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Anterior</span>
                </button>
                <button 
                  onClick={goToNext}
                  className="px-4 py-2 bg-morado hover:bg-fondoprincipal text-beige rounded-lg transition flex items-center gap-1 font-amiri"
                >
                  <span>Siguiente</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}