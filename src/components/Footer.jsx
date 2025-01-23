import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Información del centro */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-bold text-white">
                Centro Médico Salud
              </h3>
            </div>
            <p className="text-sm mb-4">
              Comprometidos con tu salud y bienestar, ofreciendo atención médica
              de calidad desde 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-500" />
                <span>(2) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-500" />
                <span>contacto@centromedico.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-500" />
                <span>Av. Principal 123, Santiago</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-blue-500" />
                <span>Lun - Vie: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Servicios Médicos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Nuestros Doctores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Horarios de Atención
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Emergencias
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Boletín Informativo
            </h3>
            <p className="text-sm mb-4">
              Suscríbete para recibir información sobre servicios y consejos de
              salud.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Centro Médico Salud. Todos los
              derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm hover:text-blue-500 transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-500 transition-colors"
              >
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
