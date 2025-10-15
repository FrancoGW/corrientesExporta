import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Asssets/background.png"
          alt="Fondo abstracto"
          fill
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          priority
        />
      </div>

      {/* Nuestro Objetivo Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-left mb-12">
          <p className="text-green-400 text-sm uppercase tracking-wide mb-2">MISIÓN</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{color: '#1A486A'}}>
            Nuestro Objetivo
          </h2>
        </div>
      </div>

      {/* Objective Cards Container - Full Width */}
      <div className="relative z-10 w-full rounded-none md:rounded-3xl p-8 mb-16" style={{backgroundColor: '#DAEDD4'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Asesoramiento Integral */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ASESORAMIENTO INTEGRAL
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Brindar asesoría integral en la operatoria de comercio exterior y las PyMex.
              </p>
            </div>

            {/* Internacionalización de PYMEX */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                INTERNALIZACIÓN DE PYMEX
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Actuar de agente facilitador de la internalización de las PyMex.
              </p>
            </div>

            {/* Crecimiento Exportador */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                CRECIMIENTO EXPORTADOR
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fomentar el incremento y la diversificación de las exportaciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Service Cards Grid - 2 arriba, 3 abajo */}
        <div className="mb-16">
          {/* Fila superior - 2 cards al 50% */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Oferta Competitiva */}
            <div className="bg-orange-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                OFERTA COMPETITIVA
              </h3>
              <p className="text-sm leading-relaxed">
                Conformar una oferta exportable provincial competitiva que responda a los estándares exigidos internacionalmente, compatible con la realidad productiva de la provincia.
              </p>
            </div>

            {/* Posicionamiento Global */}
            <div className="bg-green-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                POSICIONAMIENTO GLOBAL
              </h3>
              <p className="text-sm leading-relaxed">
                Lograr un mejor posicionamiento provincial tanto en su vinculación con otros estados, regiones, así como con organismos internacionales.
              </p>
            </div>
          </div>

          {/* Fila inferior - 3 cards divididas */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Acompañamiento Empresarial */}
            <div className="bg-pink-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                ACOMPAÑAMIENTO EMPRESARIAL
              </h3>
              <p className="text-sm leading-relaxed">
                Lograr un mejor posicionamiento provincial tanto en su vinculación con otros estados, regiones, así como con organismos internacionales.
              </p>
            </div>

            {/* Consultoría Especializada */}
            <div className="bg-purple-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                CONSULTORÍA ESPECIALIZADA
              </h3>
              <p className="text-sm leading-relaxed">
                Asistir y acompañar a empresarios y potenciales exportadores correntinos en la búsqueda de oportunidades comerciales y de negocios en el exterior.
              </p>
            </div>

            {/* Diversificación de Mercados */}
            <div className="bg-blue-400 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {/* Placeholder for icon - will be replaced */}
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">
                DIVERSIFICACIÓN DE MERCADOS
              </h3>
              <p className="text-sm leading-relaxed">
                Diversificar y consolidar la oferta exportable correntina en los mercados externos.
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mb-16">
          <div className="text-center">
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              Trabajamos coordinadamente con organismos públicos y privados locales, nacionales e internacionales - 
              <span className="font-semibold"> Ministerio de Producción, Agencia Argentina de Inversiones, SENASA, Aduana</span>
            </p>
          </div>
        </div>

        {/* Services Tabs Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
            Servicios
          </h2>
          
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-3 border-2 border-green-500 text-green-500 bg-white rounded-lg font-medium hover:bg-green-500 hover:text-white transition-colors duration-300">
              CAPACITACIÓN
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-500 bg-white rounded-lg font-medium hover:border-gray-400 hover:text-gray-600 transition-colors duration-300">
              ASESORAMIENTO
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-500 bg-white rounded-lg font-medium hover:border-gray-400 hover:text-gray-600 transition-colors duration-300">
              OFERTA EXPORTABLE
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-500 bg-white rounded-lg font-medium hover:border-gray-400 hover:text-gray-600 transition-colors duration-300">
              DEMANDA INTERNACIONAL
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-500 bg-white rounded-lg font-medium hover:border-gray-400 hover:text-gray-600 transition-colors duration-300">
              PROMOCIÓN COMERCIAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
