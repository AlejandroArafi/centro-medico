
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

const servicesData = [
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

export default servicesData;