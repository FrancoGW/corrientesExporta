'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de servicios del carrusel
  const services = [
    {
      id: 1,
      title: 'Capacitación',
      description: 'A fin de facilitar el desarrollo exportador de las Pymes correntinas desde Corrientes Exporta se brindan capacitaciones de carácter gratuito en las modalidades virtual (brindadas por la AAICI) y presencial.',
      features: ['CURSOS GENERALES', 'CAPACITACIONES VISUALES', 'TALLERES SECTORIALES'],
      images: ['/Asssets/slider1.png', '/Asssets/descripcion.png']
    },
    {
      id: 2,
      title: 'Asesoramiento',
      description: 'Brindamos asesoramiento integral en comercio exterior para PyMes, facilitando su proceso de internacionalización y acceso a mercados globales con herramientas especializadas.',
      features: ['CONSULTORÍA ESPECIALIZADA', 'ANÁLISIS DE MERCADO', 'ESTRATEGIAS DE EXPORTACIÓN'],
      images: ['/Asssets/card-image-1.png', '/Asssets/card-image-2.png']
    },
    {
      id: 3,
      title: 'Oferta Exportable',
      description: 'Desarrollamos y promocionamos una oferta exportable competitiva que responde a los estándares internacionales, conectando productores correntinos con mercados globales.',
      features: ['PRODUCTOS CERTIFICADOS', 'ESTÁNDARES INTERNACIONALES', 'MERCADOS DIVERSIFICADOS'],
      images: ['/Asssets/card-image-3.png', '/Asssets/slider1.png']
    },
    {
      id: 4,
      title: 'Demanda Internacional',
      description: 'Identificamos y analizamos las demandas internacionales para nuestros productos, facilitando el acceso de empresas correntinas a oportunidades comerciales globales.',
      features: ['ANÁLISIS DE MERCADOS', 'OPORTUNIDADES COMERCIALES', 'INTELIGENCIA DE NEGOCIOS'],
      images: ['/Asssets/descripcion.png', '/Asssets/card-image-1.png']
    },
    {
      id: 5,
      title: 'Promoción Comercial',
      description: 'Desarrollamos actividades de promoción comercial en el exterior, conectando a nuestros productores con compradores internacionales y facilitando el acceso a nuevos mercados.',
      features: ['FERIAS INTERNACIONALES', 'MISIONES COMERCIALES', 'NETWORKING EMPRESARIAL'],
      images: ['/Asssets/card-image-2.png', '/Asssets/card-image-3.png']
    }
  ];

  // Auto-slide cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentSlide];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Asssets/background.png"
          alt="Fondo abstracto"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C4A6E' }}>
            Servicios
          </h2>
          {/* Línea de subrayado con dos colores */}
          <div className="flex">
            <div className="h-1 w-20" style={{ backgroundColor: '#5B8C51' }}></div>
            <div className="h-1 w-32" style={{ backgroundColor: '#8DC63F' }}></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setCurrentSlide(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                index === currentSlide
                  ? 'border bg-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
              style={{
                color: '#8DC63F',
                borderColor: index === currentSlide ? '#8DC63F' : 'transparent'
              }}
            >
              {service.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative">
          <div className="grid md:grid-cols-12 gap-10">
            {/* Left column */}
            <div className="md:col-span-6 lg:col-span-5 space-y-6">
              {/* Icon */}
              <div className="w-10 h-10 text-brand-600">
                <svg 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                  />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 tracking-tight">
                {currentService.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-700 leading-relaxed">
                {currentService.description.split('capacitaciones de carácter gratuito').map((part, index) => 
                  index === 0 ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <span key={index}>
                      <span className="text-brand-600 font-medium hover:underline underline-offset-2">
                        capacitaciones de carácter gratuito
                      </span>
                      {part.split('modalidades virtual').map((subPart, subIndex) => 
                        subIndex === 0 ? (
                          <span key={subIndex}>{subPart}</span>
                        ) : (
                          <span key={subIndex}>
                            <span className="text-brand-600 font-medium hover:underline underline-offset-2">
                              modalidades virtual
                            </span>
                            {subPart.split('y presencial').map((finalPart, finalIndex) => 
                              finalIndex === 0 ? (
                                <span key={finalIndex}>{subPart}</span>
                              ) : (
                                <span key={finalIndex}>
                                  <span className="text-brand-600 font-medium hover:underline underline-offset-2">
                                    y presencial
                                  </span>
                                  {finalPart}
                                </span>
                              )
                            )}
                          </span>
                        )
                      )}
                    </span>
                  )
                )}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-brand-600 font-medium">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right column - Images */}
            <div className="md:col-span-6 lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {currentService.images.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${currentService.title} - Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 pt-6 border-t">
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2"
                aria-label="Servicio anterior"
              >
                Anterior
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2"
                aria-label="Siguiente servicio"
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
