'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de imágenes del slider
  const sliderImages = [
    {
      id: 1,
      src: '/Asssets/slider1.png',
      alt: 'Exportación de productos correntinos',
      title: 'Conectamos Corrientes con el mundo'
    },
    {
      id: 2,
      src: '/Asssets/logo.png', // Placeholder para las otras imágenes
      alt: 'Yerba mate premium',
      title: 'Yerba mate de calidad internacional'
    },
    {
      id: 3,
      src: '/Asssets/logo.png', // Placeholder para las otras imágenes
      alt: 'Cítricos frescos',
      title: 'Cítricos frescos para exportación'
    },
    {
      id: 4,
      src: '/Asssets/logo.png', // Placeholder para las otras imágenes
      alt: 'Arroz orgánico',
      title: 'Arroz orgánico certificado'
    },
    {
      id: 5,
      src: '/Asssets/logo.png', // Placeholder para las otras imágenes
      alt: 'Maderas nobles',
      title: 'Maderas nobles sostenibles'
    }
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section id="inicio" className="pt-32 min-h-screen relative overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Side Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/70 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/70 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/Asssets/logoSlider.svg"
                alt="Corrientes Exporta"
                width={200}
                height={80}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </div>

            {/* Subtitle */}
            <div className="text-lg font-medium text-green-200">
              EXPORTACIÓN DE CALIDAD
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Conectamos{' '}
              <span className="text-green-300">Corrientes</span>{' '}
              con el mundo
            </h1>
            
            {/* Description */}
            <p className="text-xl leading-relaxed opacity-90 max-w-lg">
              Somos especialistas en la exportación de productos locales de Corrientes, 
              conectando la riqueza de nuestra región con mercados internacionales de manera sostenible y eficiente.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                CONOCE MÁS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
        {/* Slide Counter */}
        <div className="text-white text-sm opacity-75 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
          {String(currentSlide + 1).padStart(2, '0')} / {String(sliderImages.length).padStart(2, '0')}
        </div>
        
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}

