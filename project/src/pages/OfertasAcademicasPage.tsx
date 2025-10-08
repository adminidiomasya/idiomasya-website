import { useState } from 'react';
import { BookOpen, Clock, Users, Video, FileText, Award, CheckCircle, TrendingUp, Globe, Calendar } from 'lucide-react';
import LeadFormModal from '../components/LeadFormModal';
import LivingEnglishRegistrationModal from '../components/LivingEnglishRegistrationModal';

export default function OfertasAcademicasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [isTrialClass, setIsTrialClass] = useState(false);
  const [isLivingEnglishModalOpen, setIsLivingEnglishModalOpen] = useState(false);

  const openModal = (program: string, isTrialClassBooking: boolean = false) => {
    setSelectedProgram(program);
    setIsTrialClass(isTrialClassBooking);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ofertas Académicas
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros programas diseñados para impulsar tu dominio de idiomas
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cursos para Adultos
            </h2>
            <p className="text-xl text-gray-600">
              Programas especializados adaptados a las necesidades de profesionales y adultos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                image: 'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Inglés para Adultos',
                subtitle: 'Business & General English',
                description: 'Curso completo de inglés para adultos con metodología comunicativa. Perfecto para profesionales que buscan mejorar sus habilidades de comunicación en el ámbito laboral y personal.',
                levels: ['A1 - Principiante', 'A2 - Elemental', 'B1 - Intermedio', 'B2 - Intermedio Alto', 'C1 - Avanzado', 'C2 - Maestría'],
                duration: '6-12 meses',
                hours: '4-8 horas/semana',
                modality: 'Online en vivo',
                price: '',
                features: [
                  'Clases en vivo con profesores calificados',
                  'Material digital interactivo',
                  'Enfoque en conversación práctica',
                  'Preparación para exámenes internacionales',
                  'Certificado al completar cada nivel',
                  'Acceso a plataforma 24/7'
                ]
              },
              {
                image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Francés para Adultos',
                subtitle: 'Français Professionnel & Général',
                description: 'Aprende francés con profesores altamente calificados. Ideal para quienes buscan oportunidades laborales en países francófonos o simplemente desean dominar el idioma de la cultura.',
                levels: ['A1 - Débutant', 'A2 - Élémentaire', 'B1 - Intermédiaire', 'B2 - Avancé', 'C1 - Autonome'],
                duration: '6-12 meses',
                hours: '4-6 horas/semana',
                modality: 'Online en vivo',
                price: '',
                features: [
                  'Profesores nativos y/o 100% calificados',
                  'Inmersión cultural francesa',
                  'Preparación DELF/DALF',
                  'Material auténtico francófono',
                  'Clubes de conversación',
                  'Certificado oficial'
                ]
              },
              {
                image: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Árabe para Adultos',
                subtitle: 'Árabe Moderno Estándar',
                description: 'Sumérgete en el fascinante mundo del árabe con nuestro programa especializado. Aprende uno de los idiomas más hablados del mundo con expertos nativos.',
                levels: ['A1 - Principiante', 'A2 - Básico', 'B1 - Intermedio', 'B2 - Intermedio Superior'],
                duration: '8-14 meses',
                hours: '4-6 horas/semana',
                modality: 'Online en vivo',
                price: '',
                features: [
                  'Profesores nativos del mundo árabe',
                  'Enfoque en árabe moderno estándar',
                  'Escritura y lectura árabe',
                  'Cultura y costumbres árabes',
                  'Práctica de conversación diaria',
                  'Material multimedia interactivo'
                ]
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">{course.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-medium">Duración:</span>
                      <span className="ml-2">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-medium">Intensidad:</span>
                      <span className="ml-2">{course.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Video className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-medium">Modalidad:</span>
                      <span className="ml-2">{course.modality}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                      Niveles Disponibles:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.levels.map((level, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <button
                      onClick={() => openModal(`Adultos - ${course.subtitle}`)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Solicitar Información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IdiomasYA Flex
            </h2>
            <p className="text-xl text-gray-600">
              Planes flexibles adaptados a tu ritmo de aprendizaje
            </p>
            <p className="text-lg text-gray-500 mt-4">
              Sin contratos - Cancela en cualquier momento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flex Basic',
                subtitle: 'Plan Básico',
                price: '$60.000 COP/mes',
                description: 'Ideal para quienes buscan aprender a su propio ritmo con acceso a recursos fundamentales.',
                features: [
                  'Acceso a plataforma 24/7',
                  'Material digital básico',
                  'Clases grabadas',
                  'Ejercicios de práctica',
                  'Evaluaciones mensuales',
                  'Soporte por email'
                ]
              },
              {
                title: 'Flex Standard',
                subtitle: 'Plan Estándar',
                price: '$100.000 COP/mes',
                description: 'La opción más completa para un aprendizaje efectivo con acompañamiento constante.',
                features: [
                  'Todo lo de Flex Basic',
                  'Tutoría individual semanal',
                  'Material digital premium',
                  'Certificado de nivel',
                  'Soporte prioritario'
                ]
              },
              {
                title: 'Flex Premium',
                subtitle: 'Plan Premium',
                price: '$190.000 COP/mes',
                description: 'Experiencia personalizada con atención exclusiva para resultados excepcionales.',
                features: [
                  'Todo lo de Flex Standard',
                  'Clase individual por semana',
                  'Tutor personal dedicado',
                  'Simulacros de exámenes internacionales',
                  'Preparación TOEFL/IELTS/DELF',
                  'Acceso a eventos exclusivos'
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-2">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <button
                      onClick={() => openModal(plan.title)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Solicitar Información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IdiomasYA Living English
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Living English: práctica grupal de conversación guiada por un profesor, sin clases magistrales. Solo $30.000 por clase o $100.000 por 4 al mes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Conversación Real, Sin Clases Magistrales
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Practica inglés en un ambiente dinámico donde lo importante es hablar. Nuestro profesor te guía y corrige en tiempo real mientras conversas con personas como tú.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: 'Conversación real',
                      description: 'Practica inglés en situaciones cotidianas'
                    },
                    {
                      title: 'Grupos dinámicos',
                      description: 'Aprende con 2 a 10 personas como tú'
                    },
                    {
                      title: 'Ambiente práctico y guiado',
                      description: 'El profesor te corrige en el momento, sin clases magistrales'
                    },
                    {
                      title: 'Pierde el miedo',
                      description: 'Practica con personas diferentes'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-900 font-semibold text-lg">{item.title}: </span>
                        <span className="text-gray-700 text-lg">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsLivingEnglishModalOpen(true)}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                >
                  Reserva tu Clase
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-800 p-12 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-8">Precios Accesibles:</h4>
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-5xl font-bold mb-2">$30.000</div>
                    <div className="text-xl">Por clase individual</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                    <div className="text-5xl font-bold mb-2">$100.000</div>
                    <div className="text-xl mb-2">Paquete de 4 clases</div>
                    <div className="text-sm opacity-90">¡Ahorra $20.000!</div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <p className="text-sm leading-relaxed">
                    Sin compromisos a largo plazo. Paga solo las clases que tomes. Horarios flexibles para adaptarse a tu rutina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programas Corporativos
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones de capacitación en idiomas para empresas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Capacitación Empresarial en Idiomas
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Diseñamos programas personalizados para empresas que buscan mejorar las competencias lingüísticas de sus equipos. Nuestros cursos corporativos se adaptan a los horarios y necesidades específicas de su organización.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Programas a medida según las necesidades de la empresa',
                    'Horarios flexibles adaptados a jornadas laborales',
                    'Clases grupales o individuales',
                    'Evaluaciones periódicas de progreso',
                    'Reportes detallados para recursos humanos',
                    'Certificación internacional al finalizar',
                    'Plataforma LMS corporativa personalizada',
                    'Soporte técnico y académico dedicado'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal('Programas Corporativos')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Solicitar Cotización
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-8">Empresas que confían en nosotros:</h4>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Users className="h-8 w-8" />,
                      stat: '10+',
                      label: 'Empresas clientes'
                    },
                    {
                      icon: <Globe className="h-8 w-8" />,
                      stat: '200+',
                      label: 'Empleados capacitados'
                    },
                    {
                      icon: <Award className="h-8 w-8" />,
                      stat: '85%',
                      label: 'Tasa de finalización'
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8" />,
                      stat: '80%',
                      label: 'Mejora promedio'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <div className="text-3xl font-bold">{item.stat}</div>
                        <div className="text-blue-100">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Metodología de Enseñanza
            </h2>
            <p className="text-xl text-gray-600">
              Nuestro enfoque comprobado para el aprendizaje efectivo de idiomas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-12 w-12 text-blue-600" />,
                title: 'Enfoque Comunicativo',
                description: 'Priorizamos la comunicación práctica desde la primera clase'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: 'Grupos Reducidos',
                description: 'Máximo 8 estudiantes por clase para atención personalizada'
              },
              {
                icon: <Video className="h-12 w-12 text-blue-600" />,
                title: 'Clases Interactivas',
                description: 'Sesiones dinámicas con actividades multimedia y ejercicios prácticos'
              },
              {
                icon: <FileText className="h-12 w-12 text-blue-600" />,
                title: 'Evaluación Continua',
                description: 'Seguimiento constante del progreso con feedback personalizado'
              }
            ].map((method, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programas para Niños
            </h2>
            <p className="text-xl text-gray-600">
              Cursos diseñados especialmente para jóvenes aprendices
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Aprendizaje de Idiomas para Niños
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Nuestros programas para niños combinan diversión y educación para crear una experiencia de aprendizaje memorable. Utilizamos metodologías interactivas adaptadas a cada edad para desarrollar habilidades lingüísticas desde temprana edad.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Clases dinámicas y entretenidas',
                    'Metodología adaptada por edades',
                    'Profesores especializados en educación infantil',
                    'Actividades lúdicas y juegos educativos',
                    'Material multimedia interactivo',
                    'Grupos pequeños para mejor atención',
                    'Seguimiento personalizado del progreso',
                    'Certificado de participación'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal('Programas para Niños')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Solicitar Información
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-12 text-white flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-8">Edades y Programas:</h4>
                <div className="space-y-6">
                  {[
                    {
                      icon: <BookOpen className="h-8 w-8" />,
                      age: '6-9 años',
                      label: 'Iniciación temprana'
                    },
                    {
                      icon: <Users className="h-8 w-8" />,
                      age: '10-13 años',
                      label: 'Desarrollo intermedio'
                    },
                    {
                      icon: <Award className="h-8 w-8" />,
                      age: '14-17 años',
                      label: 'Preparación avanzada'
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8" />,
                      age: '100%',
                      label: 'Satisfacción familiar'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <div className="text-3xl font-bold">{item.age}</div>
                        <div className="text-purple-100">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Agenda una clase de prueba gratuita y descubre por qué somos la mejor opción
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal('Clase de Prueba Gratuita', true)}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Agendar Clase de Prueba
            </button>
            <button
              onClick={() => openModal('Contacto con Asesor')}
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Contactar Asesor
            </button>
          </div>
        </div>
      </section>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsTrialClass(false);
        }}
        programInterest={selectedProgram}
        isTrialClass={isTrialClass}
      />
      <LivingEnglishRegistrationModal
        isOpen={isLivingEnglishModalOpen}
        onClose={() => setIsLivingEnglishModalOpen(false)}
      />
    </div>
  );
}
