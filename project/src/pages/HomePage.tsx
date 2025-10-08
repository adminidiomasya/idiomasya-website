import { useState } from 'react';
import { BookOpen, Users, Award, Clock, CheckCircle, Star, Globe as Globe2, MessageSquare, TrendingUp } from 'lucide-react';
import LeadFormModal from '../components/LeadFormModal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const openModal = (program: string) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Aprende Idiomas Online
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Instituto de aprendizaje para adultos, niños y empresas con metodología personalizada y una plataforma robusta para facilitar el aprendizaje
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => openModal('Información General')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Comienza tu aventura lingüística
                </button>
                <button
                  onClick={() => onNavigate('ofertas')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Ver Cursos
                </button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-lg font-medium">4.8/5</span>
                </div>
                <span className="text-blue-100">150+ reseñas</span>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Estudiante aprendiendo idiomas online"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir IdiomasYa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una experiencia de aprendizaje única con tecnología moderna y profesores expertos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: 'Nativos y Profesores 100% Calificados',
                description: 'Clases guiadas por profesores expertos, preparados para llevar tu aprendizaje de ese otro idioma al siguiente nivel.'
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-600" />,
                title: 'Horarios Flexibles',
                description: 'Estudia a tu propio ritmo con horarios que se adaptan a tu estilo de vida y compromisos.'
              },
              {
                icon: <BookOpen className="h-12 w-12 text-blue-600" />,
                title: 'Metodología Personalizada',
                description: 'Tu camino para aprender un idioma es único. Por eso, diseñamos un plan de estudio hecho a tu medida, enfocado en tus metas personales y profesionales, para que logres resultados reales y duraderos.'
              },
              {
                icon: <Globe2 className="h-12 w-12 text-blue-600" />,
                title: 'Plataforma Interactiva',
                description: 'Acceso 24/7 a nuestra plataforma con recursos multimedia y ejercicios prácticos.'
              },
              {
                icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
                title: 'Clases en Vivo',
                description: 'Sesiones interactivas en tiempo real con feedback inmediato de tus profesores.'
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600" />,
                title: 'Certificados y Exámenes Internacionales',
                description: 'Te entregamos tu certificado de finalización y te ayudamos a prepararte para pruebas internacionales como TOEFL, IELTS y más.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Cursos
            </h2>
            <p className="text-xl text-gray-600">
              Amplía tu experiencia con nuestras ofertas de idiomas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Inglés para Adultos',
                description: 'Domina el idioma más hablado del mundo con nuestra metodología probada.',
                level: 'Todos los niveles'
              },
              {
                image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Francés para Adultos',
                description: 'Aprende el idioma de la cultura y los negocios internacionales.',
                level: 'Principiante a Avanzado'
              },
              {
                image: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Árabe para Adultos',
                description: 'Descubre uno de los idiomas más fascinantes del mundo.',
                level: 'Principiante a Intermedio'
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {course.level}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <button
                    onClick={() => openModal(course.title)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Tu camino hacia el dominio de un nuevo idioma en 4 simples pasos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                title: 'Regístrate',
                description: 'Crea tu cuenta gratuita en nuestra plataforma'
              },
              {
                number: '2',
                title: 'Elige tu curso',
                description: 'Selecciona el idioma y nivel que deseas aprender'
              },
              {
                number: '3',
                title: 'Aprende',
                description: 'Asiste a clases en vivo y practica con ejercicios'
              },
              {
                number: '4',
                title: 'Certifícate',
                description: 'Obtén tu certificado y cumple tus metas.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Números
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que hablan por sí mismos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Estudiantes' },
              { number: '15+', label: 'Profesores' },
              { number: '5+', label: 'Países representados' },
              { number: '98%', label: 'Tasa de satisfacción' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Testimonios
            </h2>
            <p className="text-xl text-gray-600">
              Lo que dicen nuestros estudiantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <video
                controls
                controlsList="nodownload"
                className="w-full h-full object-cover"
              >
                <source src="/angie.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <video
                controls
                controlsList="nodownload"
                className="w-full h-full object-cover"
              >
                <source src="/mir video.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <video
                controls
                controlsList="nodownload"
                className="w-full h-full object-cover"
              >
                <source src="/Omar video.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para comenzar tu aventura lingüística?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Únete a miles de estudiantes que ya están aprendiendo con IdiomasYa
          </p>
          <button
            onClick={() => openModal('Comenzar Gratis')}
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Comienza Gratis Hoy
          </button>
        </div>
      </section>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programInterest={selectedProgram}
      />
    </div>
  );
}
