import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito experiencia previa en Data Engineering?',
    a: 'No necesitas experiencia en Data Engineering. El programa está diseñado para profesionales que ya dominan Python básico-intermedio y SQL. Empezamos desde los fundamentos del ecosistema y vamos construyendo profundidad de manera progresiva.',
  },
  {
    q: '¿Las clases son grabadas o en vivo?',
    a: 'Todas las sesiones son 100% en vivo. Tendrás acceso a las grabaciones de cada sesión para repasar el material, pero el programa está diseñado para la experiencia en vivo: preguntas, debugging en tiempo real y dinamismo entre docentes y alumnos.',
  },
  {
    q: '¿Qué pasa si falto a una sesión?',
    a: 'Recibirás la grabación de cada sesión en las horas posteriores. Recomendamos asistir en vivo siempre que sea posible para aprovechar la interacción, pero entendemos que surgen imprevistos. Contarás con el canal de Discord para resolver dudas.',
  },
  {
    q: '¿Recibiré algún certificado?',
    a: 'Sí, recibirás un certificado de finalización de Data Wizard Academy que acredita las 132 horas del programa. Estará respaldado por los proyectos reales que construiste durante el curso.',
  },
  {
    q: '¿Cómo funcionan los pagos en cuotas?',
    a: 'Puedes pagar en 3 cuotas de $120 USD (o S/. 400 cada una). La primera cuota confirma tu lugar en el programa. Las siguientes cuotas se coordinan al inicio de cada mes. El equipo de Data Wizard te dará los detalles al reservar.',
  },
  {
    q: '¿Desde qué países puedo tomarlo?',
    a: 'El programa es 100% remoto y está disponible para cualquier país de habla hispana. Las sesiones se dan en horario compatible con LATAM (Perú, Colombia, México, Argentina y el resto). Se confirma el horario exacto al inicio de la cohorte.',
  },
  {
    q: '¿Qué necesito instalar o tener para comenzar?',
    a: 'Solo necesitas una computadora con conexión a internet estable. Usaremos Databricks Community Edition y las herramientas cloud que se explican en el Módulo 0. El equipo te enviará una guía de configuración antes del primer día de clases.',
  },
  {
    q: '¿Cuándo empieza la próxima cohorte?',
    a: 'Reserva tu lugar ahora para asegurar tu cupo. Las fechas exactas de inicio se confirman cuando se completa el grupo. Al reservar, entras a la lista de prioridad y eres el primero en recibir las fechas oficiales.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06, ease: 'easeOut' }}
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-base transition-colors ${open ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-0.5 transition-all duration-300 ${
            open ? 'rotate-180 text-[#00A3FF]' : 'text-slate-500'
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="py-24 px-4 bg-[#0D1117]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Todo lo que necesitas <span className="gradient-text">saber</span>
          </h2>
          <p className="text-slate-400 text-lg">
            ¿Tienes más preguntas? Únete a nuestro{' '}
            <a
              href="https://discord.gg/bzH8Pjajv6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7B2FBE] hover:text-[#a56fd8] underline transition-colors"
            >
              Discord
            </a>
            .
          </p>
        </motion.div>

        <div className="rounded-2xl border border-white/8 bg-white/2 divide-y-0 overflow-hidden px-6">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
