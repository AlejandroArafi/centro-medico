import React from "react";
import {
  Stethoscope,
  Brain,
  Heart,
  Baby,
  Bone,
  Eye,
  Scissors,
  Cross,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
    title: "Medicina General",
    description:
      "Atención médica integral para toda la familia, con enfoque preventivo y tratamiento de enfermedades comunes.",
    features: [
      "Consultas médicas",
      "Chequeos generales",
      "Certificados médicos",
    ],
  },
  {
    icon: <Brain className="h-12 w-12 text-blue-600" />,
    title: "Neurología",
    description:
      "Diagnóstico y tratamiento especializado de trastornos del sistema nervioso central y periférico.",
    features: [
      "Electroencefalogramas",
      "Evaluación neurológica",
      "Tratamiento de migrañas",
    ],
  },
  {
    icon: <Heart className="h-12 w-12 text-blue-600" />,
    title: "Cardiología",
    description:
      "Cuidado experto del corazón y sistema circulatorio con tecnología de última generación.",
    features: [
      "Electrocardiogramas",
      "Pruebas de esfuerzo",
      "Control de hipertensión",
    ],
  },
  {
    icon: <Baby className="h-12 w-12 text-blue-600" />,
    title: "Pediatría",
    description:
      "Atención especializada para bebés, niños y adolescentes, garantizando su desarrollo saludable.",
    features: [
      "Control de crecimiento",
      "Vacunación",
      "Atención pediátrica urgente",
    ],
  },
  {
    icon: <Bone className="h-12 w-12 text-blue-600" />,
    title: "Traumatología",
    description:
      "Tratamiento de lesiones y enfermedades del sistema músculo-esquelético.",
    features: ["Fisioterapia", "Rehabilitación", "Tratamiento de fracturas"],
  },
  {
    icon: <Eye className="h-12 w-12 text-blue-600" />,
    title: "Oftalmología",
    description:
      "Cuidado completo de la salud visual con equipamiento moderno y especialistas certificados.",
    features: [
      "Exámenes de vista",
      "Cirugía ocular",
      "Tratamiento de glaucoma",
    ],
  },
  {
    icon: <Scissors className="h-12 w-12 text-blue-600" />,
    title: "Odontología",
    description:
      "Servicios dentales integrales para mantener una sonrisa saludable y brillante.",
    features: ["Limpieza dental", "Ortodoncia", "Implantes dentales"],
  },
  {
    icon: <Cross className="h-12 w-12 text-blue-600" />,
    title: "Urgencias",
    description:
      "Atención médica inmediata 24/7 para emergencias y situaciones que requieren cuidado urgente.",
    features: ["Atención inmediata", "Unidad de trauma", "Ambulancia"],
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios Médicos
            </h1>
            <p className="text-xl text-blue-100">
              Ofrecemos una amplia gama de servicios médicos especializados con
              profesionales altamente calificados y tecnología de vanguardia
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="w-full">
                  <div className="border-t border-gray-100 pt-4 mb-4"></div>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-white text-blue-600 border-2 border-blue-600 py-2 px-6 rounded-full font-medium hover:bg-blue-50 transition-colors">
                  Más Información
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
            ¿Necesitas atención médica especializada?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de profesionales está listo para atenderte y
            brindarte la mejor atención médica.
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

export default Services;
