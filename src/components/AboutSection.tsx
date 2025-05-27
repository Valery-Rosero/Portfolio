export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-5xl px-6 py-12 fade-in">
      <header className="text-center mb-12">
        <h2 className="inline-block bg-beige px-6 py-2 rounded-full border-2 border-morado shadow-lg text-3xl font-amiri text-morado">
          Acerca de mí
        </h2>
      </header>

      <article className="relative group">
        <span className="absolute -inset-3 bg-morado/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition duration-500" aria-hidden="true"></span>
        
        <div className="relative bg-beige/90 backdrop-blur-sm rounded-2xl border-2 border-morado p-8 md:p-12 shadow-xl">
          <span className="absolute top-0 right-0 w-20 h-20 bg-morado/10 transform translate-x-10 -translate-y-10 rotate-45 rounded-lg" aria-hidden="true"></span>
          
          <blockquote className="relative z-10 text-center mb-8">
            <p className="text-xl md:text-2xl text-morado font-amiri leading-relaxed">
              <span className="text-3xl font-bold absolute -left-2 -top-2 text-morado/20">"</span>
              Transformo <span className="font-bold underline decoration-morado/30">problemas complejos</span> en 
              <span className="font-bold underline decoration-morado/30"> soluciones elegantes</span>, 
              ya sea con código, pinceles o palabras.
              <span className="text-3xl font-bold absolute -right-2 -bottom-2 text-morado/20">"</span>
            </p>
          </blockquote>

          <div className="flex items-center justify-center my-8">
            <span className="h-px w-20 bg-morado/30 mx-4" aria-hidden="true"></span>
            <h3 className="text-morado font-amiri">Habilidades</h3>
            <span className="h-px w-20 bg-morado/30 mx-4" aria-hidden="true"></span>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
            {[
              {icon: '💻', title: 'Ingeniera de Software'},
              {icon: '🔍', title: 'Tester QA'},
              {icon: '🎨', title: 'Maquilladora Profesional'},
              {icon: '✍️', title: 'Escritora'}
            ].map((item) => (
              <li key={item.title} className="bg-white/70 border border-morado/20 rounded-lg p-3 hover:bg-white transition transform hover:-translate-y-1">
                <span className="text-2xl block mb-2" aria-hidden="true">{item.icon}</span>
                <span className="font-amiri text-morado">{item.title}</span>
              </li>
            ))}
          </ul>

          <section className="bg-white/80 border border-morado/20 rounded-xl p-6">
            <h3 className="text-2xl font-amiri text-morado text-center mb-6">
              Tecnologías que domino
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
                <li key={tech.name} className="flex items-center gap-2 p-2 hover:bg-beige/50 rounded transition transform hover:scale-105">
                  <span className="text-xl" aria-hidden="true">{tech.icon}</span>
                  <span className="font-amiri text-morado">{tech.name}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
}