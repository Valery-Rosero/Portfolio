import React from 'react';
import { EnvelopeIcon, ClockIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <span className="inline-block bg-beige px-8 py-3 rounded-full border-2 border-morado shadow-xl text-4xl md:text-5xl font-amiri text-morado z-10">
                Contáctame
            </span>
            <span className="bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-morado/20 z-0"></span>
        </div>

      <div className="bg-beige/80 border-2 border-morado rounded-xl p-8 shadow-lg">
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition">
            <div className="p-3 bg-morado/10 rounded-full">
              <EnvelopeIcon className="h-6 w-6 text-morado" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Correo</h3>
              <a 
                href="mailto:vale.roserom23@gmail.com" 
                className="text-morado hover:underline text-lg"
              >
                vale.roserom23@gmail.com
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition">
            <div className="p-3 bg-morado/10 rounded-full">
              <ClockIcon className="h-6 w-6 text-morado" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Horario</h3>
              <p className="text-morado text-lg">08:00 - 19:00</p>
              <p className="text-morado/80">Lunes a Viernes</p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition">
            <div className="p-3 bg-morado/10 rounded-full">
              <PhoneIcon className="h-6 w-6 text-morado" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Teléfono</h3>
              <p className="text-morado text-lg">+57 315 592 4590</p>
            </div>
          </div>

          {/* Ubicación (opcional) */}
          <div className="flex items-center gap-4 p-4 hover:bg-white/50 rounded-lg transition">
            <div className="p-3 bg-morado/10 rounded-full">
              <MapPinIcon className="h-6 w-6 text-morado" />
            </div>
            <div>
              <h3 className="font-amiri text-lg text-morado font-bold">Ubicación</h3>
              <p className="text-morado text-lg">Pasto, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}