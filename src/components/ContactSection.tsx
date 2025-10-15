'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Section - Contact Form */}
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#2C4A6E' }}>
                  Contacto
                </h2>
                {/* Green underline */}
                <div className="flex">
                  <div className="h-1 w-16" style={{ backgroundColor: '#5B8C51' }}></div>
                  <div className="h-1 w-20" style={{ backgroundColor: '#8DC63F' }}></div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre*
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre Apellido"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ backgroundColor: '#f0fdf4' }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email@domain.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ backgroundColor: '#f0fdf4' }}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+549 0 000 000000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    style={{ backgroundColor: '#f0fdf4' }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje*
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Hola, deseo contactarme por el siguiente motivo..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    style={{ backgroundColor: '#f0fdf4' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg font-bold text-white uppercase tracking-wide hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#22c55e' }}
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

            {/* Right Section - Map */}
            <div className="relative bg-gray-100">
              {/* Google Maps Embed */}
              <div className="relative w-full h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.123456789!2d-58.830000!3d-27.480000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzQ4LjAiUyA1OMKwNDknNDguMCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Map Info Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                  <div className="font-bold text-gray-800 mb-1">
                    Instituto de Fomento Empresarial
                  </div>
                  <div className="text-sm text-gray-600">
                    Casa Central: H. Yrigoyen 2289<br />
                    Corrientes Capital<br />
                    C.P. 3400
                  </div>
                </div>

                {/* View Larger Map Link */}
                <div className="absolute top-4 right-4">
                  <a 
                    href="https://www.google.com/maps/place/Instituto+de+Fomento+Empresarial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white px-3 py-2 rounded text-sm font-medium text-blue-600 hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
