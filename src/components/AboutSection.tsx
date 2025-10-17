import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Asssets/descripcion.png"
          alt="Fondo industrial"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for text readability - reduced intensity */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-white">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold uppercase">
              CORRIENTES EXPORTA
            </h2>
            
            {/* First Paragraph */}
            <p className="text-lg leading-relaxed">
              <span className="text-white">Corrientes Exporta</span> es el área de promoción de exportaciones de la Provincia, 
              dependiente del <span className="text-[#5CB930]">Instituto de Fomento Empresarial</span>, que brinda asesoramiento 
              en comercio exterior a pequeñas y medianas empresas con o sin experiencia exportadora.
            </p>
            
            {/* Second Paragraph */}
            <p className="text-lg leading-relaxed">
              Entre las actividades que desarrolla se encuentran la <span className="text-[#5CB930]">planificación estratégica</span>, 
              el trabajo transversal y coordinado con las distintas unidades vinculadas a los sectores exportadores de la provincia, 
              brindando capacitación y asistencia técnica para <span className="text-[#5CB930]">actividades de promoción comercial en el exterior</span>, 
              y elaborando información estratégica para obtener mayores beneficios.
            </p>
          </div>

          {/* Right Side - Image with Caption */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden" style={{
              background: 'linear-gradient(to right, #54BD95, #5CB930)',
              padding: '15px'
            }}>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/Asssets/slider1.png"
                  alt="Gaucho con ganado en Corrientes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Caption Overlay - Half inside, half outside */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
              <div className="w-[85%] bg-gradient-to-r from-[#54BD95]/90 to-[#5CB930]/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
                <p className="text-white text-base font-medium text-center">
                  Corrientes Exporta es el área de promoción de exportaciones de la Provincia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
