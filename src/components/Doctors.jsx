import React from "react";
import {
  Star,
  Calendar,
  MessageSquare,
  Award,
  Languages,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";

const doctors = [
  {
    name: "Dra. María González",
    specialty: "Neurología",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 127,
    education: "Universidad de Barcelona",
    experience: "15 años de experiencia",
    languages: ["Español", "Inglés", "Francés"],
    specializations: [
      "Epilepsia",
      "Alzheimer",
      "Migrañas",
      "Trastornos del sueño",
    ],
    schedule: "Lunes a Viernes: 9:00 - 17:00",
    location: "Consulta 201",
  },
  {
    name: "Dr. Carlos Rodríguez",
    specialty: "Cardiología",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 143,
    education: "Universidad Complutense de Madrid",
    experience: "18 años de experiencia",
    languages: ["Español", "Inglés"],
    specializations: ["Hipertensión", "Arritmias", "Insuficiencia cardíaca"],
    schedule: "Lunes a Jueves: 8:00 - 16:00",
    location: "Consulta 305",
  },
  {
    name: "Dr. Juan Pérez",
    specialty: "Oftalmología",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 98,
    education: "Universidad de Valencia",
    experience: "12 años de experiencia",
    languages: ["Español", "Inglés", "Alemán"],
    specializations: ["Cirugía láser", "Glaucoma", "Cataratas"],
    schedule: "Martes a Sábado: 10:00 - 18:00",
    location: "Consulta 103",
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Pediatría",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 156,
    education: "Universidad de Sevilla",
    experience: "14 años de experiencia",
    languages: ["Español", "Inglés", "Portugués"],
    specializations: ["Desarrollo infantil", "Vacunación", "Pediatría general"],
    schedule: "Lunes a Viernes: 8:30 - 16:30",
    location: "Consulta 202",
  },
  {
    name: "Dr. Luis Sánchez",
    specialty: "Traumatología",
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 112,
    education: "Universidad de Salamanca",
    experience: "16 años de experiencia",
    languages: ["Español", "Inglés"],
    specializations: ["Artroscopia", "Lesiones deportivas", "Rehabilitación"],
    schedule: "Miércoles a Domingo: 9:00 - 17:00",
    location: "Consulta 304",
  },
  {
    name: "Dra. Patricia López",
    specialty: "Dermatología",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 134,
    education: "Universidad de Granada",
    experience: "13 años de experiencia",
    languages: ["Español", "Inglés", "Italiano"],
    specializations: [
      "Dermatología clínica",
      "Cirugía dermatológica",
      "Tratamientos estéticos",
    ],
    schedule: "Lunes a Viernes: 11:00 - 19:00",
    location: "Consulta 203",
  },
];

const Doctors = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Equipo Médico
            </h1>
            <p className="text-xl text-blue-100">
              Conoce a nuestros especialistas altamente calificados,
              comprometidos con tu salud y bienestar
            </p>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-blue-200">{doctor.specialty}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 font-bold">{doctor.rating}</span>
                    <span className="text-gray-600 ml-2">
                      ({doctor.reviews} reseñas)
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Ver perfil
                  </button>
                </div>

                {/* Education and Experience */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Languages className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="font-medium text-gray-900">Idiomas:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((language, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Schedule and Location */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{doctor.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{doctor.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Cita
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas una consulta médica?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas están listos para atenderte. Agenda tu cita
            hoy mismo y comienza a cuidar tu salud.
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

export default Doctors;
