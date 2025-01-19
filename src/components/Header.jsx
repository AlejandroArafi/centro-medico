import React, { useState } from "react";
import { Phone, Clock, MapPin, Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top bar - Oculto en móvil */}
      <div className="bg-blue-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Lun - Vie: 8:00 - 20:00</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
              Emergencias
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600 mr-2" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Centro Médico Salud
              </h1>
              <p className="text-sm text-gray-600 hidden md:block">
                Cuidando tu bienestar
              </p>
            </div>
          </div>

          {/* Botón de emergencias móvil */}
          <button className="md:hidden bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Emergencias
          </button>

          {/* Botón menú hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 p-2 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Navegación desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Doctores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Doctores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Especialidades
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    Contacto
                  </a>
                </li>
              </ul>

              {/* Información de contacto en móvil */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone size={16} className="mr-2 text-blue-600" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-2 text-blue-600" />
                  <span>Lun - Vie: 8:00 - 20:00</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-2 text-blue-600" />
                  <span>Av. Principal 123, Ciudad</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
