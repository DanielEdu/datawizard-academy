import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA_URL = 'https://tally.so/r/b5g4d6'

export default function CTAFinal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-4 bg-[#11162B] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-[#00A3FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#7B2FBE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4B942]/10 text-[#F4B942] border border-[#F4B942]/20 mb-6">
            ¿Listo para empezar?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            "No aprenderás tecnologías. Aprenderás a{' '}
            <span className="gradient-text">construir como lo hace</span>{' '}
            un Data Engineer en el mundo real."
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Cupos limitados. Reserva tu lugar hoy y da el salto al Data Engineering que el mercado demanda.
          </p>

          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00A3FF] to-[#7B2FBE] hover:from-[#00b8ff] hover:to-[#9040d4] text-white font-bold text-xl transition-all duration-300 shadow-2xl"
            style={{ boxShadow: '0 0 40px rgba(0, 163, 255, 0.3), 0 0 80px rgba(123, 47, 190, 0.15)' }}
          >
            Reserva tu lugar
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-slate-500 text-sm mt-5">
            $350 USD · 4 meses · 132 horas en vivo
          </p>
        </motion.div>
      </div>
    </section>
  )
}
