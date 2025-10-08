import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Política de Privacidad</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="prose max-w-none text-gray-900">
            <p className="text-sm text-gray-600 mb-6">Última actualización: Octubre 10, 2025</p>

            <p className="mb-6 text-gray-900">
              En IdiomasYa nos tomamos muy en serio tu privacidad. Esta Política de Privacidad explica cómo
              recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web y
              nuestros servicios educativos.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Información que recopilamos</h3>
            <p className="mb-3 text-gray-900">Podemos recopilar la siguiente información:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li><strong>Datos de identificación:</strong> nombre, correo electrónico, número de teléfono, ciudad/país.</li>
              <li><strong>Datos académicos:</strong> nivel de idioma, intereses de aprendizaje, disponibilidad de horarios.</li>
              <li><strong>Datos de pago:</strong> información necesaria para procesar pagos (no almacenamos información de tarjetas directamente; usamos pasarelas de pago seguras).</li>
              <li><strong>Información de navegación:</strong> cookies, dirección IP, tiempo de visita, páginas consultadas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Uso de la información</h3>
            <p className="mb-3 text-gray-900">La información se utiliza para:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Ofrecer y mejorar nuestros servicios educativos.</li>
              <li>Gestionar inscripciones, pagos y certificados.</li>
              <li>Personalizar tu experiencia de aprendizaje.</li>
              <li>Enviar información relevante sobre cursos, promociones o novedades (puedes darte de baja en cualquier momento).</li>
              <li>Cumplir obligaciones legales y contractuales.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Protección de datos</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Aplicamos medidas de seguridad técnicas y organizativas para proteger tu información contra pérdida, uso indebido o acceso no autorizado.</li>
              <li>Solo el personal autorizado de IdiomasYa puede acceder a tus datos con fines académicos o administrativos.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Compartición de datos</h3>
            <p className="mb-3 text-gray-900">No vendemos ni alquilamos tu información personal a terceros.</p>
            <p className="mb-3 text-gray-900">Solo compartimos datos cuando es estrictamente necesario:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Con pasarelas de pago seguras para procesar transacciones.</li>
              <li>Con autoridades competentes si la ley lo requiere.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Uso de cookies</h3>
            <p className="mb-6 text-gray-900">
              Nuestro sitio web utiliza cookies para mejorar tu experiencia. Puedes desactivarlas en la
              configuración de tu navegador, aunque algunas funciones podrían verse limitadas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Derechos de los usuarios</h3>
            <p className="mb-3 text-gray-900">
              De acuerdo con la Ley 1581 de 2012 de Protección de Datos en Colombia, tienes derecho a:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Conocer, actualizar y corregir tus datos personales.</li>
              <li>Solicitar la eliminación de tu información cuando consideres que no se está utilizando adecuadamente.</li>
              <li>Retirar en cualquier momento tu consentimiento para el uso de tus datos.</li>
            </ul>
            <p className="mb-2 text-gray-900">Para ejercer estos derechos, escríbenos a:</p>
            <ul className="list-none mb-6 space-y-1 text-gray-900">
              <li>📧 info@idiomasya.com.co</li>
              <li>📱 +57 319 336 7563</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Cambios en la Política de Privacidad</h3>
            <p className="mb-6 text-gray-900">
              IdiomasYa podrá actualizar esta política en cualquier momento. La versión vigente siempre estará
              publicada en este sitio web.
            </p>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
