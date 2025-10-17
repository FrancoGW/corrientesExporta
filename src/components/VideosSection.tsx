'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideosSection() {
  const [activeTab, setActiveTab] = useState('sectores');

  const tabs = [
    { id: 'sectores', label: 'SECTORES PRODUCTIVOS', active: activeTab === 'sectores' },
    { id: 'empresas', label: 'EMPRESAS QUE CONFIARON EN NOSOTROS', active: activeTab === 'empresas' }
  ];

  const videos = [
    {
      id: 1,
      title: 'CORRIENTES EXPORTA - GANADO',
      sector: 'Sector Ganadero',
      thumbnail: '/Asssets/slider1.png', // Usando imagen disponible
      isMain: true
    },
    {
      id: 2,
      title: 'Nombre Video - AGRO',
      sector: 'Sector Agro',
      thumbnail: '/Asssets/card-image-1.png',
      isMain: false
    },
    {
      id: 3,
      title: 'Nombre Video - LOREM',
      sector: 'Sector Lorem',
      thumbnail: '/Asssets/card-image-2.png',
      isMain: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C4A6E' }}>
            Videos Institucionales
          </h2>
          {/* Línea de subrayado con dos colores */}
          <div className="flex">
            <div className="h-1 w-20" style={{ backgroundColor: '#5B8C51' }}></div>
            <div className="h-1 w-32" style={{ backgroundColor: '#8DC63F' }}></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                tab.active
                  ? 'border bg-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
              style={{
                color: tab.active ? '#8DC63F' : '#666666',
                borderColor: tab.active ? '#8DC63F' : 'transparent',
                backgroundColor: tab.active ? '#F0F8E8' : '#FFFFFF'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section - Main Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
              {/* Video Background */}
              <Image
                src={videos[0].thumbnail}
                alt={videos[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              
              {/* Bottom Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Sector Badge */}
                <div className="inline-block bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {videos[0].sector}
                </div>
                
                {/* Video Title */}
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase">
                  {videos[0].title}
                </h3>
              </div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                <div className="h-full w-1/4 bg-white"></div>
              </div>
              
              {/* Play Control */}
              <div className="absolute bottom-1 left-2">
                <button className="text-white text-xs">
                  ▶️
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Sidebar Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Explorar...
              </h3>
              
              {/* Video Cards */}
              <div className="space-y-4">
                {videos.slice(1).map((video) => (
                  <div key={video.id} className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    {/* Card Background Pattern */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-green-200 via-yellow-200 to-orange-200">
                      {/* Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="text-center">
                            <div className="text-xs font-bold text-gray-700">GOBIERNO</div>
                            <div className="text-xs font-bold text-gray-700">PROVINCIAL</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Video Thumbnail Overlay */}
                      <div className="absolute inset-0 bg-black/20"></div>
                      
                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <svg className="w-4 h-4 text-gray-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800 mb-1">
                        CORRIENTES
                      </div>
                      <div className="text-sm text-gray-600">
                        {video.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
