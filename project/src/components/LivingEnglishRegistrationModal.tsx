import { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getNextTwoSessions, formatDate } from '../utils/sessionDates';

interface LivingEnglishRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LivingEnglishRegistrationModal({ isOpen, onClose }: LivingEnglishRegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedSession: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [sessions, setSessions] = useState<{ date: Date; dayName: string }[]>([]);

  useEffect(() => {
    try {
      const nextSessions = getNextTwoSessions();
      setSessions(nextSessions);
      if (nextSessions.length > 0) {
        setFormData(prev => ({
          ...prev,
          selectedSession: nextSessions[0].date.toISOString().split('T')[0]
        }));
      }
    } catch (err) {
      console.error('Error getting sessions:', err);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { error: submitError } = await supabase
        .from('living_english_registrations')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone || null,
            session_date: formData.selectedSession,
            session_time: '6:00 PM - 8:00 PM'
          }
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selectedSession: sessions[0]?.date.toISOString().split('T')[0] || ''
      });
    } catch (err) {
      setError('Hubo un error al procesar tu registro. Por favor intenta nuevamente.');
      console.error('Error submitting registration:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-green-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-3xl font-bold mb-2">Living English</h2>
          <p className="text-green-100">Regístrate para la próxima sesión</p>
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-4">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Registro Confirmado!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Estás confirmado para nuestra próxima sesión de Living English.
              </p>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-3">
                  <Calendar className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-xl font-semibold text-gray-900">
                    {sessions.find(s => s.date.toISOString().split('T')[0] === formData.selectedSession)?.dayName}
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-2">
                  {formatDate(new Date(formData.selectedSession))}
                </p>
                <div className="flex items-center justify-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">6:00 PM - 8:00 PM (Hora Colombia)</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Te enviaremos un correo con los detalles de acceso a la sesión.
              </p>
              <button
                onClick={handleClose}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Próximas Sesiones:</h3>
                <div className="space-y-3">
                  {sessions.map((session, index) => (
                    <div
                      key={index}
                      className="bg-green-50 border border-green-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="font-semibold text-gray-900">
                              {session.dayName}, {formatDate(session.date)}
                            </p>
                            <p className="text-sm text-gray-600 flex items-center mt-1">
                              <Clock className="h-4 w-4 mr-1" />
                              6:00 PM - 8:00 PM (Hora Colombia)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="sessionDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Selecciona tu sesión *
                  </label>
                  <select
                    id="sessionDate"
                    required
                    value={formData.selectedSession}
                    onChange={(e) => setFormData({ ...formData, selectedSession: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {sessions.map((session, index) => (
                      <option key={index} value={session.date.toISOString().split('T')[0]}>
                        {session.dayName}, {formatDate(session.date)} - 6:00 PM - 8:00 PM
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Registrando...' : 'Confirmar Registro'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
