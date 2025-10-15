'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#E8E8E8] py-2 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 space-x-10 sm:space-y-0">
            {/* Address */}
            <div className="flex items-center text-gray-600">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="truncate">YRIGOYEN 2289, CORRIENTES CAPITAL, CP 3400</span>
            </div>
            
            {/* Phone */}
            <div className="flex items-center text-gray-600">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+54 379 4474051</span>
            </div>
            
            {/* Email */}
            <div className="flex items-center text-gray-600">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden sm:inline">CORRIENTESEXPORTA@INVERSIONYCOMERCIO.GOB.AR</span>
              <span className="sm:hidden">CORRIENTESEXPORTA@...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Image
              src="/Asssets/logo2.svg"
              alt="Corrientes Exporta"
              width={200}
              height={200}
            />
            <Image
              src="/Asssets/logo.png"
              alt="Corrientes Exporta"
              width={100}
              height={100}
            />
          </div>

          {/* Center - Navigation Links */}
          <nav className="hidden xl:flex space-x-4 lg:space-x-6 xl:space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap">
              INICIO
            </a>
            <a href="#institucional" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap">
              INSTITUCIONAL
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap">
              SERVICIOS
            </a>
            <a href="#directorio" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap">
              DIRECTORIO
            </a>
            <a href="#videos" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap">
              VIDEOS
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm lg:text-base whitespace-nowrap">
              CONTACTO
            </a>
          </nav>

          {/* Right - Login Button */}
          <div className="hidden sm:block">
            <button className="border-2 border-green-600 text-green-600 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
              INICIAR SESIÓN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                INICIO
              </a>
              <a href="#institucional" className="block px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                INSTITUCIONAL
              </a>
              <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                SERVICIOS
              </a>
              <a href="#directorio" className="block px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                DIRECTORIO DE EXPORTADORES
              </a>
              <a href="#videos" className="block px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                VIDEOS
              </a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-green-600 text-sm">
                CONTACTO
              </a>
              <button className="block w-full text-left px-3 py-2 border-2 border-green-600 text-green-600 rounded-lg mt-4 text-sm">
                INICIAR SESIÓN
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

