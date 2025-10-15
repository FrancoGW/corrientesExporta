export default function Services() {
  const services = [
    {
      title: 'Exportación de Yerba Mate',
      description: 'Yerba mate premium de la región de Corrientes, procesada con los más altos estándares de calidad.',
      icon: '🌿',
      features: ['Calidad Premium', 'Certificaciones Internacionales', 'Envío Seguro']
    },
    {
      title: 'Productos Cítricos',
      description: 'Naranjas, mandarinas y limones frescos, cosechados en el momento óptimo para garantizar su frescura.',
      icon: '🍊',
      features: ['Frescura Garantizada', 'Variedades Premium', 'Cadena de Frío']
    },
    {
      title: 'Arroz Orgánico',
      description: 'Arroz de alta calidad cultivado con métodos orgánicos y sostenibles en los campos de Corrientes.',
      icon: '🌾',
      features: ['100% Orgánico', 'Certificación Sostenible', 'Granos Seleccionados']
    },
    {
      title: 'Productos Madereros',
      description: 'Maderas nobles de la región, procesadas con técnicas tradicionales y modernas.',
      icon: '🌳',
      features: ['Maderas Nobles', 'Procesamiento Artesanal', 'Sostenibilidad']
    },
    {
      title: 'Consultoría Comercial',
      description: 'Asesoramiento especializado para empresas que desean incursionar en mercados internacionales.',
      icon: '📊',
      features: ['Análisis de Mercado', 'Estrategias de Exportación', 'Seguimiento Personalizado']
    },
    {
      title: 'Logística Internacional',
      description: 'Servicio completo de logística para garantizar que tus productos lleguen en perfectas condiciones.',
      icon: '🚛',
      features: ['Transporte Seguro', 'Documentación Completa', 'Seguimiento en Tiempo Real']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para la exportación 
            de productos locales hacia mercados internacionales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  );
}

