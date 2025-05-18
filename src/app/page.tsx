'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsWindow from '@/components/TestimonialsWindow';
import MemoriesCarousel from '@/components/MemoriesCarousel';
import ContactSection from '@/components/ContactSection';
import { useEffect } from 'react';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); 

    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="min-h-screen bg-fondoprincipal">
      <Navbar />

      <main className="flex flex-col py-20 items-center space-y-12 md:space-y-24 pb-12 md:pb-20">
        {/* Sección Home */}
        <section id="home" className="w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-24 mx-auto fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
            {/* Contenedor de la imagen */}
            <div className="w-full md:w-5/12 lg:w-1/3 relative group flex justify-center">
              <div className="relative aspect-square w-full max-w-[400px] md:max-w-[500px] bg-beige/90 rounded-2xl border-2 border-morado overflow-hidden shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-300">
                <Image
                  src="/images/valery-macbook.jpg"
                  alt="Valery Rosero"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-morado opacity-80"></div>
              </div>
            </div>

            {/* Contenedor del texto */}
            <div className="w-full md:w-7/10 lg:w-2/5 space-y-10 md:space-y-10 slide-up flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative w-full max-w-lg">
                <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-amiri text-morado bg-beige rounded-3xl px-6 py-4 md:px-8 md:py-6 border-2 border-morado shadow-lg transform hover:rotate-1 transition-transform duration-300 mx-auto md:mx-0">
                  ¡Hola, soy Valery Rosero!
                </h1>
                <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-morado rounded-br-3xl opacity-60"></div>
              </div>

              <p className="text-lg text-center md:text-xl lg:text-2xl text-beige font-amiri max-w-lg">
                Ingeniera de Software con pasión por el <span className="font-bold text-morado">diseño limpio</span> y <span className="font-bold text-morado">funcional</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-2 md:mt-10 w-full">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#projects');
                  }}
                  className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3 bg-beige text-morado font-amiri border-2 border-morado rounded-lg hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Mis proyectos
                </button>

                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3 bg-transparent text-beige font-amiri border-2 border-beige rounded-lg hover:bg-beige/10 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Contáctame
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección About */}
        <section id="about" className="w-full max-w-5xl px-6 py fade-in">
          <div className="text-center mb-12">
            <span className="bg-beige px-4 py-2 md:px-8 md:py-3 rounded-full border-2 border-morado shadow-lg md:shadow-xl text-3xl md:text-4xl lg:text-5xl font-amiri text-morado text-center mb-8 md:mb-10 mx-4 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-60">
              Acerca de mí
            </span>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 bg-morado/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition duration-500"></div>
            
            <div className="relative bg-beige/90 backdrop-blur-sm rounded-2xl border-2 border-morado p-10 md:p-14 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-morado/10 transform translate-x-12 -translate-y-12 rotate-45 rounded-lg"></div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-morado font-amiri leading-relaxed text-center mb-8">
                  <span className="text-3xl font-bold">“</span>
                  Transformo <span className="font-bold underline decoration-morado/30">problemas complejos</span> en 
                  <span className="font-bold underline decoration-morado/30"> soluciones elegantes</span>, 
                  ya sea con código, pinceles o palabras.
                  <span className="text-3xl font-bold">”</span>
                </p>

                <div className="flex items-center justify-center my-8">
                  <div className="h-px w-20 bg-morado/30 mx-4"></div>
                  <span className="text-morado font-amiri">Habilidades</span>
                  <div className="h-px w-20 bg-morado/30 mx-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
                  {[
                    {icon: '💻', title: 'Ingeniera de Software'},
                    {icon: '🔍', title: 'Tester QA'},
                    {icon: '🎨', title: 'Maquilladora Profesional'},
                    {icon: '✍️', title: 'Escritora'}
                  ].map((item) => (
                    <div key={item.title} className="bg-white/70 border border-morado/20 rounded-lg p-3 hover:bg-white transition transform hover:-translate-y-1">
                      <span className="text-2xl block mb-2">{item.icon}</span>
                      <span className="font-amiri text-morado">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/80 border border-morado/20 rounded-xl p-6">
                  <h3 className="text-2xl font-amiri text-morado text-center mb-6">
                    Tecnologías que domino
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {[
                      {name: 'Next.js', icon: '⚛️'},
                      {name: 'TypeScript', icon: '📘'},
                      {name: 'Tailwind', icon: '🎨'},
                      {name: 'Python', icon: '🐍'},
                      {name: 'Java', icon: '☕'},
                      {name: 'MySQL', icon: '🗃️'},
                      {name: 'Prisma', icon: '🔮'},
                      {name: 'React', icon: '⚡'},
                      {name: 'Node.js', icon: '🟢'},
                      {name: 'Git', icon: '🔀'}
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center gap-2 p-2 hover:bg-beige/50 rounded transition transform hover:scale-105">
                        <span className="text-xl">{tech.icon}</span>
                        <span className="font-amiri text-morado">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />
        <TestimonialsWindow />
        <MemoriesCarousel />
        <ContactSection />
      </main>
      
      <footer className="w-full bg-lila text-center py-6">
        <p className="text-morado font-amiri">
          © 2025 Valery Rosero   -   Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}