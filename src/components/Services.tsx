'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      title: 'Capacitación',
      description: 'A fin de facilitar el desarrollo exportador de las Pymes correntinas desde Corrientes Exporta se brindan capacitaciones de carácter gratuito en las modalidades virtual (brindadas por la AAICI) y presencial.',
      features: ['CURSOS GENERALES', 'CAPACITACIONES VISUALES', 'TALLERES SECTORIALES'],
      images: ['/Asssets/slider1.png', '/Asssets/logo.png'] // Placeholder images
    },
    {
      title: 'Asesoramiento',
      description: 'Brindamos asesoramiento integral en comercio exterior para PyMes, facilitando su proceso de internacionalización y acceso a mercados globales.',
      features: ['CONSULTORÍA ESPECIALIZADA', 'ANÁLISIS DE MERCADO', 'ESTRATEGIAS DE EXPORTACIÓN'],
      images: ['/Asssets/logo.png', '/Asssets/slider1.png']
    },
    {
      title: 'Promoción Comercial',
      description: 'Desarrollamos actividades de promoción comercial en el exterior, conectando a nuestros productores con compradores internacionales.',
      features: ['FERIAS INTERNACIONALES', 'MISIONES COMERCIALES', 'NETWORKING'],
      images: ['/Asssets/slider1.png', '/Asssets/logo.png']
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const current = services[currentService];

  return (
    <section id="servicios" className="py-20" style={{background: 'linear-gradient(135deg, #5CB930, #54BD95)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl lg:text-5xl font-bold" style={{color: '#1A486A'}}>
                  {current.title}
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {current.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {current.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-green-600 font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="relative bg-gray-50 p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* First Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={current.images[0]}
                    alt={`${current.title} - Imagen 1`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Second Image */}
                <div className="relative rounded-2xl overflow-hidden mt-8">
                  <Image
                    src={current.images[1]}
                    alt={`${current.title} - Imagen 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center py-6 border-t bg-gray-50">
            <div className="flex space-x-4">
              <button
                onClick={prevService}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300"
              >
                Anterior
              </button>
              <button
                onClick={nextService}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

