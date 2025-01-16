import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para atenderte. No dudes en contactarnos para cualquier
            consulta o para agendar una cita médica.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                    <p className="text-gray-600">Emergencias: (555) 123-4567</p>
                    <p className="text-gray-600">Citas: (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Correo Electrónico
                    </h4>
                    <p className="text-gray-600">contacto@centromedico.com</p>
                    <p className="text-gray-600">citas@centromedico.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">Av. Principal 123</p>
                    <p className="text-gray-600">Ciudad, País</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Horario de Atención
                    </h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 - 20:00
                    </p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                    <p className="text-gray-600 font-semibold">
                      Emergencias: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tipo"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tipo de Consulta *
                    </label>
                    <select
                      id="tipo"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="cita">Agendar Cita</option>
                      <option value="informacion">Solicitar Información</option>
                      <option value="urgencia">Consulta Urgente</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacidad"
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="privacidad" className="text-sm text-gray-600">
                    Acepto la política de privacidad y el tratamiento de mis
                    datos personales *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensaje
                </button>

                <p className="text-sm text-gray-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Los campos marcados con * son obligatorios
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Nuestra Ubicación
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.524379395281496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1635525007331!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;