export default function Products() {
  const products = [
    {
      name: 'Yerba Mate Premium',
      description: 'Yerba mate seleccionada de los mejores yerbales de Corrientes, con un sabor único y auténtico.',
      image: '🌿',
      origin: 'Corrientes, Argentina',
      certifications: ['Orgánica', 'Fair Trade', 'ISO 9001'],
      markets: ['Estados Unidos', 'Europa', 'Asia']
    },
    {
      name: 'Cítricos Frescos',
      description: 'Naranjas, mandarinas y limones de temporada, cosechados y procesados con técnicas modernas.',
      image: '🍊',
      origin: 'Corrientes, Argentina',
      certifications: ['HACCP', 'GlobalGAP', 'Organic'],
      markets: ['Canadá', 'Estados Unidos', 'Europa']
    },
    {
      name: 'Arroz Orgánico',
      description: 'Arroz de grano largo cultivado con métodos orgánicos, libre de químicos y pesticidas.',
      image: '🌾',
      origin: 'Corrientes, Argentina',
      certifications: ['USDA Organic', 'EU Organic', 'JAS'],
      markets: ['Europa', 'Japón', 'Australia']
    },
    {
      name: 'Maderas Nobles',
      description: 'Maderas de especies nativas procesadas con técnicas sostenibles y certificadas.',
      image: '🌳',
      origin: 'Corrientes, Argentina',
      certifications: ['FSC', 'PEFC', 'CITES'],
      markets: ['Estados Unidos', 'Europa', 'Brasil']
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos de la más alta calidad, cultivados y procesados en Corrientes 
            con los más estrictos estándares internacionales.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-6xl">{product.image}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {product.origin}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Certificaciones:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Markets */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Mercados:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.markets.map((market, marketIndex) => (
                      <span
                        key={marketIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas un producto personalizado?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Trabajamos con productores locales para desarrollar productos 
              específicos según las necesidades de tu mercado.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Consultar Productos Personalizados
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

