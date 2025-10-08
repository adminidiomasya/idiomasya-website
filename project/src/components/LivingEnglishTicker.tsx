import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import LivingEnglishRegistrationModal from './LivingEnglishRegistrationModal';

export default function LivingEnglishTicker() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('LivingEnglishTicker rendering');

  return (
    <>
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-4 overflow-hidden relative w-full" style={{ minHeight: '60px' }}>
        <div className="flex animate-marquee">
          <div className="flex items-center whitespace-nowrap">
            <span className="text-lg font-semibold mx-8 inline-flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Living English - Conversación Real Sin Clases Magistrales
            </span>
            <span className="text-lg mx-8 inline-flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Martes y Jueves 6:00 PM - 8:00 PM
            </span>
            <span className="text-lg font-semibold mx-8">
              Solo $30.000 por clase
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-600 px-6 py-2 rounded-full font-bold mx-8 hover:bg-green-50 transition-colors"
            >
              ¡Regístrate Ahora!
            </button>
          </div>
          <div className="flex items-center whitespace-nowrap">
            <span className="text-lg font-semibold mx-8 inline-flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Living English - Conversación Real Sin Clases Magistrales
            </span>
            <span className="text-lg mx-8 inline-flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Martes y Jueves 6:00 PM - 8:00 PM
            </span>
            <span className="text-lg font-semibold mx-8">
              Solo $30.000 por clase
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-600 px-6 py-2 rounded-full font-bold mx-8 hover:bg-green-50 transition-colors"
            >
              ¡Regístrate Ahora!
            </button>
          </div>
        </div>
      </div>

      <LivingEnglishRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
