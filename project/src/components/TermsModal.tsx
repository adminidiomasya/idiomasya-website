import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Términos y Condiciones</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="prose max-w-none text-gray-900">
            <p className="text-sm text-gray-600 mb-6">Última actualización: Octubre 7, 2025</p>

            <p className="mb-6 text-gray-900">
              Bienvenido(a) a IdiomasYa. Al acceder y utilizar nuestro sitio web y nuestros servicios,
              aceptas cumplir con los presentes Términos y Condiciones. Te recomendamos leerlos atentamente.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Objeto</h3>
            <p className="mb-6 text-gray-900">
              IdiomasYa es una plataforma educativa que ofrece cursos de idiomas en diferentes modalidades
              (clases personalizadas, grupales, suscripciones y programas de autoaprendizaje).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Uso del sitio web</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>El usuario se compromete a utilizar esta página de manera legal, ética y responsable.</li>
              <li>No se permite el uso del sitio para fines fraudulentos, difamatorios o que violen derechos de terceros.</li>
              <li>IdiomasYa se reserva el derecho de suspender o bloquear usuarios que incumplan estas normas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Servicios educativos</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Nuestros cursos se imparten por profesores calificados y/o nativos, de acuerdo con la modalidad contratada.</li>
              <li>Al finalizar un curso, el estudiante podrá recibir un certificado de finalización emitido por IdiomasYa.</li>
              <li>Dicho certificado no constituye certificación internacional. Sin embargo, ofrecemos preparación para exámenes internacionales (ej. TOEFL, IELTS, etc.).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Pagos y facturación</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Los precios de los cursos y servicios estarán indicados en la página web o serán informados al solicitar más información.</li>
              <li>Los pagos deben realizarse a través de los medios autorizados por IdiomasYa.</li>
              <li>No se realizan reembolsos salvo en casos excepcionales evaluados por la administración.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Propiedad intelectual</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>Todos los contenidos de la página (textos, videos, materiales, logotipos, etc.) son propiedad de IdiomasYa o de sus respectivos autores.</li>
              <li>Queda prohibida su reproducción, distribución o uso sin autorización previa.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Protección de datos</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>IdiomasYa cumple con la normativa de protección de datos personales aplicable en Colombia (Ley 1581 de 2012).</li>
              <li>La información proporcionada por los usuarios será utilizada únicamente con fines académicos, administrativos o de comunicación.</li>
              <li>Los usuarios podrán solicitar en cualquier momento la actualización, corrección o eliminación de sus datos.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Responsabilidad</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-900">
              <li>IdiomasYa no se hace responsable por interrupciones temporales del servicio por causas de fuerza mayor o ajenas a nuestro control (ej. fallas técnicas, cortes de internet).</li>
              <li>Los resultados de aprendizaje dependerán del compromiso y participación activa del estudiante.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Modificaciones</h3>
            <p className="mb-6 text-gray-900">
              IdiomasYa podrá modificar estos Términos y Condiciones en cualquier momento. Los cambios serán
              publicados en este mismo apartado y entrarán en vigencia desde su publicación.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contacto</h3>
            <p className="mb-2 text-gray-900">
              Si tienes dudas o comentarios sobre estos Términos y Condiciones, puedes escribirnos a:
            </p>
            <ul className="list-none mb-6 space-y-1 text-gray-900">
              <li>📧 info@idiomasya.com.co</li>
              <li>📱 +57 319 336 7563</li>
            </ul>
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
