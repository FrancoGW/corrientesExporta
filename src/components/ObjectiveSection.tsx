import Image from 'next/image';

export default function ObjectiveSection() {
  const objectives = [
    {
      id: 1,
      title: 'ASESORAMIENTO INTEGRAL',
      description: 'Brindar asesoría integral en la operatoria de comercio exterior y las PyMex.',
      image: '/Asssets/card-image-1.png',
      alt: 'Asesoramiento Integral'
    },
    {
      id: 2,
      title: 'INTERNALIZACIÓN DE PYMEX',
      description: 'Actuar de agente facilitador de la internalización de las PyMex.',
      image: '/Asssets/card-image-2.png',
      alt: 'Internalización de PyMex'
    },
    {
      id: 3,
      title: 'CRECIMIENTO EXPORTADOR',
      description: 'Fomentar el incremento y la diversificación de las exportaciones.',
      image: '/Asssets/card-image-3.png',
      alt: 'Crecimiento Exportador'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" style={{backgroundColor: '#DAEDD4'}}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/30 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <p className="text-green-400 text-sm uppercase tracking-wide mb-2 font-medium">
            MISIÓN
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{color: '#1A486A'}}>
            Nuestro Objetivo
          </h2>
        </div>

        {/* Objective Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="mb-6">
                <div className="relative w-full h-32 rounded-xl overflow-hidden">
                  <Image
                    src={objective.image}
                    alt={objective.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {objective.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
