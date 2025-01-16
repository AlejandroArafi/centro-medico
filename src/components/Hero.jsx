import React from "react";
import { Calendar, Shield, UserPlus } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tu salud es nuestra prioridad
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Brindamos atención médica de calidad con tecnología avanzada y
              profesionales expertos comprometidos con tu bienestar.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Agendar Cita
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Conocer Más
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Citas Online</h3>
                <p className="text-sm text-gray-600">Agenda 24/7</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Atención Segura</h3>
                <p className="text-sm text-gray-600">Protocolos Estrictos</p>
              </div>
              <div className="text-center">
                <UserPlus className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900">Especialistas</h3>
                <p className="text-sm text-gray-600">Equipo Experto</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Equipo médico profesional"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="font-medium">Atención Disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
