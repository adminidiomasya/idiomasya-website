import { useState } from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Plataforma moderna de aprendizaje de idiomas online para adultos y empresas.
              Cursos interactivos con profesores nativos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Idiomasyacolombia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/idiomasyaoficialco/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Cursos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inglés para Adultos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Francés para Adultos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Árabe para Adultos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cursos Corporativos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metodología</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Colombia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">+57 319 336 7563</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">info@idiomasya.com.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 IdiomasYa. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
}
