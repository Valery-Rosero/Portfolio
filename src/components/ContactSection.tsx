'use client';
import React from 'react';
import { EnvelopeIcon, ClockIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
      <section id="contact" className="w-full max-w-2xl mx-auto px-6 py-10 relative">
        <span className="absolute -top-10 left-0 w-full h-20 bg-morado/10 -z-10 rounded-full blur-xl" aria-hidden="true"></span>
        
        <header className="text-center mb-12">
          <h2 className="inline-block bg-beige px-8 py-3 rounded-full border-2 border-morado shadow-xl text-4xl md:text-5xl font-amiri text-morado overflow-hidden group">
            <span className="relative z-10">Contáctame</span>
            <span className="absolute inset-0 bg-morado/10 w-0 group-hover:w-full transition-all duration-500 ease-out" aria-hidden="true"></span>
          </h2>
          <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-morado/20 z-0 rounded-full" aria-hidden="true"></span>
        </header>

        <article className="bg-beige/80 border-2 border-morado rounded-xl p-8 shadow-lg backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
          <ul className="space-y-6">
            <li className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
              <span className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition-transform mt-1">
                <EnvelopeIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
              </span>
              <address>
                <h3 className="font-amiri text-lg text-morado font-bold">Correo</h3>
                <a 
                  href="mailto:vale.roserom23@gmail.com" 
                  className="text-morado hover:underline text-lg hover:text-morado/80 transition-colors not-italic"
                >
                  vale.roserom23@gmail.com
                </a>
              </address>
            </li>

            <li className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
              <span className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition-transform mt-1">
                <ClockIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
              </span>
              <div>
                <h3 className="font-amiri text-lg text-morado font-bold">Horario</h3>
                <time className="text-morado text-lg group-hover:text-morado/80 transition-colors">08:00 - 19:00</time>
                <p className="text-morado/80 group-hover:text-morado/60 transition-colors">Lunes a Viernes</p>
              </div>
            </li>

            <li className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
              <span className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition-transform mt-1">
                <PhoneIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
              </span>
              <address>
                <h3 className="font-amiri text-lg text-morado font-bold">Teléfono</h3>
                <a 
                  href="tel:+573155924590" 
                  className="text-morado text-lg hover:underline hover:text-morado/80 transition-colors block not-italic"
                >
                  +57 315 592 4590
                </a>
              </address>
            </li>


            <li className="flex items-start gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
              <span className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition-transform mt-1">
                <MapPinIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
              </span>
              <address>
                <h3 className="font-amiri text-lg text-morado font-bold">Ubicación</h3>
                <p className="text-morado text-lg group-hover:text-morado/80 transition-colors">Pasto, Colombia</p>
                <p className="text-morado/80 group-hover:text-morado/60 transition-colors">Nariño</p>
              </address>
            </li>
          </ul>
        </article>
        <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-morado/10 rounded-full blur-md" aria-hidden="true"></span>
      </section>
  );
}