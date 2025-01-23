import React from "react";
import {
  Brain,
  Heart,
  Stethoscope,
  Eye,
  Bone,
  Baby,
  Pill,
  Microscope,
  Activity,
  Thermometer,
  Scissors,
  UserCheck,
} from "lucide-react";

const specialties = [
  {
    icon: <Brain className="w-12 h-12" />,
    name: "Neurología",
    description: "Diagnóstico y tratamiento de trastornos del sistema nervioso",
    doctor: "Dra. María González",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    expertise: ["Epilepsia", "Alzheimer", "Migrañas", "Trastornos del sueño"],
  },
  {
    icon: <Heart className="w-12 h-12" />,
    name: "Cardiología",
    description: "Atención especializada en salud cardiovascular",
    doctor: "Dr. Carlos Rodríguez",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    expertise: [
      "Hipertensión",
      "Arritmias",
      "Insuficiencia cardíaca",
      "Prevención cardiovascular",
    ],
  },
  {
    icon: <Eye className="w-12 h-12" />,
    name: "Oftalmología",
    description: "Cuidado integral de la salud visual",
    doctor: "Dr. Juan Pérez",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    expertise: ["Cirugía láser", "Glaucoma", "Cataratas", "Retinopatía"],
  },
  {
    icon: <Bone className="w-12 h-12" />,
    name: "Traumatología",
    description: "Especialistas en sistema músculo-esquelético",
    doctor: "Dra. Ana Martínez",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800",
    expertise: [
      "Artroscopia",
      "Lesiones deportivas",
      "Prótesis",
      "Rehabilitación",
    ],
  },
  {
    icon: <Baby className="w-12 h-12" />,
    name: "Pediatría",
    description: "Cuidado especializado para niños y adolescentes",
    doctor: "Dr. Luis Sánchez",
    image:
      "https://images.unsplash.com/photo-1666214280503-dd8bd9c14ebb?auto=format&fit=crop&q=80&w=800",
    expertise: [
      "Desarrollo infantil",
      "Vacunación",
      "Pediatría general",
      "Nutrición infantil",
    ],
  },
  {
    icon: <Stethoscope className="w-12 h-12" />,
    name: "Medicina Interna",
    description: "Diagnóstico y tratamiento de enfermedades en adultos",
    doctor: "Dra. Patricia López",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800",
    expertise: [
      "Diabetes",
      "Enfermedades crónicas",
      "Medicina preventiva",
      "Geriatría",
    ],
  },
  {
    icon: <Microscope className="w-12 h-12" />,
    name: "Dermatología",
    description: "Especialistas en salud de la piel",
    doctor: "Dr. Roberto Silva",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    expertise: [
      "Acné",
      "Dermatitis",
      "Cirugía dermatológica",
      "Tratamientos estéticos",
    ],
  },
  {
    icon: <Activity className="w-12 h-12" />,
    name: "Endocrinología",
    description: "Tratamiento de trastornos hormonales",
    doctor: "Dra. Carmen Ruiz",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    expertise: ["Tiroides", "Diabetes", "Obesidad", "Trastornos metabólicos"],
  },
];

const Specialties = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras Especialidades Médicas
            </h1>
            <p className="text-xl text-blue-100">
              Contamos con un equipo de especialistas altamente calificados y
              tecnología de vanguardia para brindarte la mejor atención médica
            </p>
          </div>
        </div>
      </div>

      {/* Specialties Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">{specialty.doctor}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {specialty.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">{specialty.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Áreas de expertise:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {specialty.expertise.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 w-full bg-white text-blue-600 border-2 border-blue-600 rounded-full py-2 px-6 font-medium hover:bg-blue-50 transition-colors">
                  Agendar Consulta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas una consulta especializada?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de especialistas está listo para brindarte la
            atención que necesitas. Agenda tu cita hoy mismo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Agendar Cita
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contactar Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
