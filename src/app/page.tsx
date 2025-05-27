'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsWindow from '@/components/TestimonialsWindow';
import MemoriesCarousel from '@/components/MemoriesCarousel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  // Función para scroll suave con tipo explícito
  const scrollToSection = (sectionId: string): void => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Efecto para animaciones
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
      <Navbar/>
      <main className="flex flex-col py-20 items-center space-y-12 md:space-y-24 pb-12 md:pb-20">
        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsWindow />
        <MemoriesCarousel />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}