import React from "react";
import { Phone, Clock, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
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

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600 mr-2" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Centro Médico Salud
              </h1>
              <p className="text-sm text-gray-600">Cuidando tu bienestar</p>
            </div>
          </div>

          <nav>
            {/* inicio */}

            <ul className="flex space-x-8">
              <li>
                <Link
                  to='/Home'
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Inicio
                </Link>
              </li>

              {/* servicios*/}
              <li>
                <a
                  href="/Service"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Servicios
                </a>
              </li>

              {/* doctores*/}
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Doctores
                </Link>
              </li>

              {/* especialidades*/}
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Especialidades
                </a>
              </li>

              {/* contacto*/}

              <li>
                <Link
                  to='/Contact'
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
