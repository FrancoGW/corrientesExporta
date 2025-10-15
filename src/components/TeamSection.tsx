import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'MA. AMANDA ZARRATEA',
      title: 'LIC. EN COMERCIO INTERNACIONAL',
      role: 'Coordinación General',
      location: 'Corrientes Exporta',
      icon: '/Asssets/Vector-rompecabezas-1.svg',
      iconColor: 'bg-yellow-400'
    },
    {
      id: 2,
      name: 'MAURICIO COLOMBO',
      title: 'LIC. EN COMERCIO INTERNACIONAL',
      role: 'Representante Casa Central',
      location: 'Corrientes Capital',
      icon: '/Asssets/Vector-rompecabezas-2.svg',
      iconColor: 'bg-orange-400'
    },
    {
      id: 3,
      name: 'MA. FLORENCIA ESPÍNDOLA',
      title: 'LIC. EN COMERCIO INTERNACIONAL',
      role: 'Representante Casa Central',
      location: 'Corrientes Capital',
      icon: '/Asssets/Vector-rompecabezas-3.svg',
      iconColor: 'bg-green-400'
    },
    {
      id: 4,
      name: 'ANDRÉS AZCUÉ',
      title: 'LIC. EN COMERCIO INTERNACIONAL',
      role: 'Representante zonal',
      location: 'Paso de los Libres',
      icon: '/Asssets/Vector-rompecabezas-4.svg',
      iconColor: 'bg-blue-400'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C4A6E' }}>
            Equipo
          </h2>
          {/* Línea de subrayado verde */}
          <div className="h-1 w-16" style={{ backgroundColor: '#8DC63F' }}></div>
          
          {/* Descripción */}
          <p className="text-lg text-gray-600 mt-6 max-w-3xl">
            Contamos con un gabinete especializado orientado a brindar asesoramiento.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Circle Background */}
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    {/* Puzzle Piece Icon */}
                    <div className={`w-16 h-16 ${member.iconColor} rounded-lg flex items-center justify-center`}>
                      <Image
                        src={member.icon}
                        alt={`${member.name} icon`}
                        width={48}
                        height={48}
                        className="w-12 h-12 text-black"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  {member.name}
                </h3>
                
                {/* Title */}
                <p className="text-sm font-medium" style={{ color: '#8DC63F' }}>
                  {member.title}
                </p>
                
                {/* Role */}
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
                
                {/* Location */}
                <p className="text-sm text-gray-500">
                  {member.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
