'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Todas las secciones de tu portafolio
  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Acerca de mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Recuerdos", href: "#memories" },
    { name: "Contacto", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`bg-morado border-b-2 border-beige/20 sticky top-0 z-50 shadow-lg transition-colors duration-300 ${
      scrolled ? 'bg-morado/95 backdrop-blur-sm' : 'bg-morado'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-7 flex justify-between items-center">
        {/* Logo - Diseño original */}
        <Link href="#home" className="text-3xl font-amiri text-beige relative group">
          <span className="relative z-10 hover:text-beige/90 transition-colors">
            PORTAFOLIO PROFESIONAL
          </span>
          <span className="absolute -bottom-1 left-0 h-1 bg-fondoprincipal w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        </Link>

        {/* Menú desktop - Diseño original */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-2xl text-beige font-amiri relative group transition-all"
              scroll={false}
            >
              <div className="overflow-hidden">
                <div className="transform hover:-translate-y-1 transition-transform duration-300">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fondoprincipal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Menú móvil - Diseño original */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-beige text-2xl hover:text-fondoprincipal transition-colors"
            aria-label="Menú"
          >
            ☰
          </button>

          {/* Menú desplegable móvil */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-morado border-t-2 border-beige/20 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-2xl text-beige font-amiri py-2 hover:text-fondoprincipal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    scroll={false}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}