import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsWindow from '@/components/TestimonialsWindow';
import MemoriesCarousel from '@/components/MemoriesCarousel';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-fondoprincipal">
      <Navbar />

      <main className="flex flex-col items-center space-y-16 md:space-y-24 pb-12 md:pb-20">
        {/* Sección Hero - Correcciones importantes */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contenedor de imagen */}
            <div className="w-full md:w-5/12 lg:w-1/3 relative group">
              <div className="relative aspect-square w-full h-auto max-h-[400px] md:max-h-[500px] bg-beige/90 rounded-2xl border-2 border-morado overflow-hidden shadow-2xl transform group-hover:-translate-y-1 transition-transform duration-300">
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

            {/* Contenido de texto */}
            <div className="w-full md:w-7/12 lg:w-2/5 space-y-6 md:space-y-8">
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-amiri text-morado text-center bg-beige rounded-3xl px-6 py-4 md:px-8 md:py-6 border-2 border-morado shadow-lg transform hover:rotate-1 transition-transform duration-300">
                  ¡Hola, soy Valery Rosero!
                </h1>
                <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-morado rounded-br-3xl opacity-60"></div>
              </div>

              <p className="text-lg md:text-xl lg:text-2xl text-beige font-amiri text-center">
                Ingeniera de Software con pasión por el <span className="font-bold text-morado">diseño limpio</span> y <span className="font-bold text-morado">funcional</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-10">
                <button className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3 bg-beige text-morado font-amiri border-2 border-morado rounded-lg hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Mis proyectos
                </button>
                <button className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3 bg-transparent text-beige font-amiri border-2 border-beige rounded-lg hover:bg-beige/10 transition-all duration-300 shadow-md hover:shadow-lg">
                  Contáctame
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Acerca de mí */}
        <section className="w-full max-w-5xl px-6 py-16">
          {/* Encabezado con decoración (se mantiene igual) */}
          <div className="text-center mb-12">
            <span className="bg-beige px-4 py-2 md:px-8 md:py-3 rounded-full border-2 border-morado shadow-lg md:shadow-xl text-3xl md:text-4xl lg:text-5xl font-amiri text-morado text-center mb-8 md:mb-10 mx-4 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-60">
              Acerca de mí
            </span>
          </div>

          {/* Tarjeta mejorada */}
          <div className="relative group">
            {/* Efecto de fondo decorativo */}
            <div className="absolute -inset-3 bg-morado/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition duration-500"></div>
            
            {/* Contenido principal */}
            <div className="relative bg-beige/90 backdrop-blur-sm rounded-2xl border-2 border-morado p-10 md:p-14 shadow-xl overflow-hidden">
              {/* Decoración de esquina */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-morado/10 transform translate-x-12 -translate-y-12 rotate-45 rounded-lg"></div>
              
              <div className="relative z-10">
                {/* Texto (se mantiene igual) */}
                <p className="text-xl md:text-2xl text-morado font-amiri leading-relaxed text-center mb-8">
                  <span className="text-3xl font-bold">“</span>
                  Transformo <span className="font-bold underline decoration-morado/30">problemas complejos</span> en 
                  <span className="font-bold underline decoration-morado/30"> soluciones elegantes</span>, 
                  ya sea con código, pinceles o palabras.
                  <span className="text-3xl font-bold">”</span>
                </p>

                {/* Divider decorativo */}
                <div className="flex items-center justify-center my-8">
                  <div className="h-px w-20 bg-morado/30 mx-4"></div>
                  <span className="text-morado font-amiri">Habilidades</span>
                  <div className="h-px w-20 bg-morado/30 mx-4"></div>
                </div>

                {/* Habilidades multidisciplinarias */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
                  {[
                    {icon: '💻', title: 'Ingeniera de Software'},
                    {icon: '🔍', title: 'Tester QA'},
                    {icon: '🎨', title: 'Maquilladora Profesional'},
                    {icon: '✍️', title: 'Escritora'}
                  ].map((item) => (
                    <div key={item.title} className="bg-white/70 border border-morado/20 rounded-lg p-3 hover:bg-white transition">
                      <span className="text-2xl block mb-2">{item.icon}</span>
                      <span className="font-amiri text-morado">{item.title}</span>
                    </div>
                  ))}
                </div>

                {/* Nuevo: Lenguajes y herramientas */}
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
                      <div key={tech.name} className="flex items-center gap-2 p-2 hover:bg-beige/50 rounded transition">
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

        {/* Secciones adicionales */}
        <ProjectsSection />
        <TestimonialsWindow />
        <MemoriesCarousel />
        <ContactSection />
      </main>
    </div>
  );
}