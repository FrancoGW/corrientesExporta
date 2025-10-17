import Image from 'next/image';

export default function CollaborationSection() {
  const services = [
    {
      id: 1,
      title: 'OFERTA COMPETITIVA',
      description: 'Conformar una oferta exportable provincial competitiva que responda a los estándares exigidos internacionalmente, compatible con la realidad productiva de la provincia.',
      icon: '/Asssets/Vector-OFERTA-COMPETITIVA.svg',
      color: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'POSICIONAMIENTO GLOBAL',
      description: 'Lograr un mejor posicionamiento provincial tanto en su vinculación con otros estados, regiones, así como con organismos internacionales.',
      icon: '/Asssets/Vector-POSICIONAMIENTO-GLOBAL.svg',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'ACOMPAÑAMIENTO EMPRESARIAL',
      description: 'Lograr un mejor posicionamiento provincial tanto en su vinculación con otros estados, regiones, así como con organismos internacionales.',
      icon: '/Asssets/Vector-ACOMPAÑAMIENTO-EMPRESARIAL.svg',
      color: 'bg-pink-500'
    },
    {
      id: 4,
      title: 'CONSULTORÍA ESPECIALIZADA',
      description: 'Asistir y acompañar a empresarios y potenciales exportadores correntinos en la búsqueda de oportunidades comerciales y de negocios en el exterior.',
      icon: '/Asssets/Vector-CONSULTORIA-ESPECIALIZADA.svg',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'DIVERSIFICACIÓN DE MERCADOS',
      description: 'Diversificar y consolidar la oferta exportable correntina en los mercados externos.',
      icon: '/Asssets/Vector-DIVERSIF-DE-MERCADOS.svg',
      color: 'bg-blue-400'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
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
        {/* Service Cards Grid - Layout exacto de la imagen: 2 arriba anchas, 3 abajo chicas */}
        <div className="mb-16">
          {/* Fila superior - 2 cards anchas */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {services.slice(0, 2).map((service) => (
              <div
                key={service.id}
                className={`${service.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Fila inferior - 3 cards chicas centradas */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.slice(2, 5).map((service) => (
              <div
                key={service.id}
                className={`${service.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 text-white"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Text */}
        <div className="text-center">
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Trabajamos coordinadamente con organismos públicos y privados locales, nacionales e internacionales - 
            <span className="font-semibold"> Ministerio de la Producción de la Nación; Agencia Argentina de Inversiones y Comercio Internacional, Ministerio de Agricultura Ganadería y Pesca de la Nación, Consejo Federal de Inversiones, Cámara de Exportadores de la República Argentina, SENASA, Aduana</span>, entre otros.
          </p>
        </div>
      </div>
    </section>
  );
}
