import Image from 'next/image';

export default function HomeSection({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
  return (
    <section id="home" className="w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-24 mx-auto fade-in">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
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
            <a
              href="/cv.pdf"
              download="CV-Valery-Rosero.pdf"
              className="text-base md:text-lg px-6 py-3 md:px-8 md:py-3 bg-morado text-beige font-amiri border-2 border-beige rounded-lg hover:bg-morado/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}