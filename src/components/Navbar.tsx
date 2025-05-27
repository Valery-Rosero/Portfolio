'use client';
import React, { useState, useEffect, MouseEvent } from 'react';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
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

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b-2 border-beige/20 shadow-lg transition-colors duration-300 ${
      scrolled ? 'bg-morado/95 backdrop-blur-sm' : 'bg-morado'
    }`}>
      <section className="max-w-7xl mx-auto px-6 py-7 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-3xl font-amiri text-beige relative group"
        >
          <span className="relative z-10 hover:text-beige/90 transition-colors">
            PORTAFOLIO PROFESIONAL
          </span>
          <span className="absolute -bottom-1 left-0 h-1 bg-fondoprincipal w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        </a>

        {/* Menú desktop - usando lista semántica */}
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl text-beige font-amiri relative group block overflow-hidden"
              >
                <span className="inline-block transform hover:-translate-y-1 transition-transform duration-300">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fondoprincipal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Menú móvil */}
        <section className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-beige text-2xl hover:text-fondoprincipal transition-colors"
            aria-label="Menú"
          >
            ☰
          </button>

          {mobileMenuOpen && (
            <ul className="fixed top-[84px] left-0 right-0 bg-morado border-t-2 border-beige/20 shadow-lg">
              <li className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-2xl text-beige font-amiri py-2 hover:text-fondoprincipal transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </li>
            </ul>
          )}
        </section>
      </section>
    </nav>
  );
}