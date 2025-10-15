'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      id: 1,
      src: '/Asssets/slider1.png', // Imagen de agricultura
      alt: 'Agricultor trabajando en el campo',
      title: 'ARGENTINA EXPORTA',
      subtitle: 'CONOCÉ NUESTROS PROGRAMAS',
      description: 'Impulsa las exportaciones de pymes y emprendedores mediante financiamiento, asesoramiento, simplificación de trámites y conexión con mercados internacionales a través de la plataforma exportargentina, promoviendo la competitividad y diversificación comercial.',
      ctaText: 'CONOCÉ MÁS'
    },
    {
      id: 2,
      src: '/Asssets/slider1.png',
      alt: 'Imagen del slider 2',
      title: 'ARGENTINA EXPORTA',
      subtitle: 'CONOCÉ NUESTROS PROGRAMAS',
      description: 'Impulsa las exportaciones de pymes y emprendedores mediante financiamiento, asesoramiento, simplificación de trámites y conexión con mercados internacionales a través de la plataforma exportargentina, promoviendo la competitividad y diversificación comercial.',
      ctaText: 'CONOCÉ MÁS'
    },
    {
      id: 3,
      src: '/Asssets/slider1.png',
      alt: 'Imagen del slider 3',
      title: 'ARGENTINA EXPORTA',
      subtitle: 'CONOCÉ NUESTROS PROGRAMAS',
      description: 'Impulsa las exportaciones de pymes y emprendedores mediante financiamiento, asesoramiento, simplificación de trámites y conexión con mercados internacionales a través de la plataforma exportargentina, promoviendo la competitividad y diversificación comercial.',
      ctaText: 'CONOCÉ MÁS'
    }
  ];

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentImage = sliderImages[currentSlide];

  // Verificación de seguridad
  if (!currentImage) {
    return null;
  }

  return (
    <section className="relative h-screen overflow-hidden pt-20">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          priority
        />
      </div>

      {/* Green Diagonal Overlay - Left Side */}
      <div className="absolute inset-0 z-10">
        {/* Green diagonal shape */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
            clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)'
          }}
        ></div>
      </div>

      {/* Content - Left Side */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/Asssets/logo - Corrientes Exporta - fondo transparente 2.svg"
                alt="Corrientes Exporta"
                width={300}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Subtitle */}
            <p className="text-white text-sm uppercase tracking-wider mb-6 font-medium">
              {currentImage.subtitle}
            </p>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight uppercase">
              {currentImage.title}
            </h1>

            {/* Description */}
            <p className="text-white text-lg leading-relaxed mb-10 max-w-xl">
              {currentImage.description}
            </p>

            {/* CTA Button */}
            <button 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-gray-100 transition-colors duration-300"
            >
              {currentImage.ctaText}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}