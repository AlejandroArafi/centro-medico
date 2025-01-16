import React from "react";
import {
  Stethoscope,
  Brain,
  Heart,
  Baby,
  Bone,
  Eye,
  Smile,
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
    icon: <Smile className="h-12 w-12 text-blue-600" />,
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios Médicos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos especializados con
            profesionales altamente calificados y tecnología de vanguardia.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Llamada a la acción */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas atención médica especializada?
            </h3>
            <p className="mb-6">
              Nuestro equipo de profesionales está listo para atenderte y
              brindarte la mejor atención médica.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Agendar Cita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
