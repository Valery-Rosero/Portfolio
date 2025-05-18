'use client';
import React from 'react';
import { EnvelopeIcon, ClockIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-2xl mx-auto px-6 py-10">
      {/* Elemento decorativo morado */}
      <div className="absolute -top-10 left-0 w-full h-20 bg-morado/10 -z-10 rounded-full blur-xl"></div>
      
      {/* Título con efecto especial */}
      <div className="text-center mb-12">
        <span className="inline-block bg-beige px-8 py-3 rounded-full border-2 border-morado shadow-xl text-4xl md:text-5xl font-amiri text-morado z-10 relative overflow-hidden group">
          <span className="relative z-10">Contáctame</span>
          <span className="absolute inset-0 bg-morado/10 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        </span>
        <span className="bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-morado/20 z-0 rounded-full"></span>
      </div>

      {/* Tarjeta de contacto con efectos hover mejorados */}
      <div className="bg-beige/80 border-2 border-morado rounded-xl p-8 shadow-lg backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
        <div className="space-y-6">
          {/* Elemento de correo */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
            <div className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition">
              <EnvelopeIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Correo</h3>
              <a 
                href="mailto:vale.roserom23@gmail.com" 
                className="text-morado hover:underline text-lg hover:text-morado/80 transition-colors"
              >
                vale.roserom23@gmail.com
              </a>
            </div>
          </div>

          {/* Elemento de horario */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
            <div className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition">
              <ClockIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Horario</h3>
              <p className="text-morado text-lg group-hover:text-morado/80 transition-colors">08:00 - 19:00</p>
              <p className="text-morado/80 group-hover:text-morado/60 transition-colors">Lunes a Viernes</p>
            </div>
          </div>

          {/* Elemento de teléfono */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
            <div className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition">
              <PhoneIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Teléfono</h3>
              <a 
                href="tel:+573155924590" 
                className="text-morado text-lg hover:underline hover:text-morado/80 transition-colors block"
              >
                +57 315 592 4590
              </a>
            </div>
          </div>

          {/* Elemento de ubicación */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition-all duration-200 group">
            <div className="p-3 bg-morado/10 rounded-full group-hover:bg-morado/20 transition">
              <MapPinIcon className="h-6 w-6 text-morado group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Ubicación</h3>
              <p className="text-morado text-lg group-hover:text-morado/80 transition-colors">Pasto, Colombia</p>
              <p className="text-morado/80 group-hover:text-morado/60 transition-colors">Nariño</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo al final */}
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-morado/10 rounded-full blur-md"></div>
    </section>
  );
}