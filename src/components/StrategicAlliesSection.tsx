import Image from 'next/image';

export default function StrategicAlliesSection() {
  const allies = [
    {
      id: 1,
      name: 'Agencia Argentina de Inversiones y Comercio Internacional',
      logo: '/Asssets/aliados-estrategicos-1.png'
    },
    {
      id: 2,
      name: 'Ministerio de Relaciones Exteriores, Comercio Internacional y Culto República Argentina',
      logo: '/Asssets/aliados-estrategicos-2.png'
    },
    {
      id: 3,
      name: 'CORRIENTES somos todos!',
      logo: '/Asssets/aliados-estrategicos-3.png'
    },
    {
      id: 4,
      name: 'IFE Instituto de Fomento Empresarial S-E-M-',
      logo: '/Asssets/aliados-estrategicos-4.png'
    },
    {
      id: 5,
      name: 'VUCE VENTANILLA ÚNICA DE COMERCIO EXTERIOR',
      logo: '/Asssets/aliados-estrategicos-5.png'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          {/* Subtitle */}
          <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#8DC63F' }}>
            QUIENES NOS AVALAN
          </p>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C4A6E' }}>
            Aliados Estratégicos
          </h2>
          
          {/* Green underline */}
          <div className="h-1 w-16 mb-6" style={{ backgroundColor: '#8DC63F' }}></div>
          
          {/* Description */}
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
            Somos una institución reconocida por los diferentes sectores de la sociedad, sectores productivos y académicos de la PROVINCIA DE CORRIENTES.
          </p>
        </div>

        {/* Allies Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {allies.map((ally) => (
            <div
              key={ally.id}
              className="flex flex-col items-center text-center space-y-4 group hover:scale-105 transition-transform duration-300"
            >
              {/* Logo Container */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <Image
                  src={ally.logo}
                  alt={ally.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              
              {/* Organization Name */}
              <div className="space-y-1">
                {ally.id === 3 ? (
                  // Special styling for "CORRIENTES somos todos!"
                  <div className="text-center">
                    <div className="text-lg font-bold text-black leading-tight">
                      CORRIENTES
                    </div>
                    <div className="text-sm font-medium" style={{ color: '#8DC63F', fontStyle: 'italic' }}>
                      somos todos!
                    </div>
                  </div>
                ) : ally.id === 5 ? (
                  // Special styling for VUCE
                  <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: '#2C4A6E' }}>
                      VUCE
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      VENTANILLA ÚNICA DE COMERCIO EXTERIOR
                    </div>
                  </div>
                ) : (
                  // Standard styling for other allies
                  <p className="text-sm text-gray-700 leading-tight font-medium">
                    {ally.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
