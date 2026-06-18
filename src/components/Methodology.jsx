import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Radio, Briefcase, Users, MessageCircle, Quote } from 'lucide-react'

const pillars = [
  {
    icon: Radio,
    color: '#00A3FF',
    title: '100% en vivo',
    desc: 'No grabaciones pregrabadas. Cada sesión es en tiempo real con los docentes. Preguntas, debugging en vivo y feedback inmediato.',
  },
  {
    icon: Briefcase,
    color: '#7B2FBE',
    title: 'Proyecto integrador real',
    desc: 'RetailPe: un pipeline completo de producción de punta a punta. Construyes algo que puedes mostrar en tu portfolio y entrevistas.',
  },
  {
    icon: Users,
    color: '#F4B942',
    title: '2 docentes especializados',
    desc: 'Un experto en Databricks y otro en Microsoft Fabric. No un solo instructor que "sabe de todo", sino especialistas reales.',
  },
  {
    icon: MessageCircle,
    color: '#00A3FF',
    title: 'Comunidad activa',
    desc: 'Canal dedicado en Discord, sesiones de Q&A y acceso a la red Data Wizard para networking y oportunidades laborales.',
  },
]

function Card({ icon: Icon, color, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className="flex flex-col gap-4 p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-all duration-300 group"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div>
        <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Methodology() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-4 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4B942]/10 text-[#F4B942] border border-[#F4B942]/20 mb-4">
            Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Aprendizaje que <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Diseñado para que en 4 meses puedas decir "construí esto en producción"
            — no "completé el curso".
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map((p, i) => (
            <Card key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Highlighted quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#00A3FF]/20 bg-gradient-to-br from-[#00A3FF]/5 to-[#7B2FBE]/5 p-8 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/40 to-transparent" />
          <Quote className="w-8 h-8 text-[#00A3FF]/30 mx-auto mb-4" />
          <p className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-3xl mx-auto">
            "Construyes un pipeline real de producción,
            no ejercicios de juguete."
          </p>
          <p className="text-slate-400 mt-4 text-sm">
            Proyecto <span className="text-[#F4B942] font-semibold">RetailPe</span> — de la ingesta raw hasta el dashboard de consumo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
