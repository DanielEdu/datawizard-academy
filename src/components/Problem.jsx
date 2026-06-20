import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check, ArrowRight } from 'lucide-react'

const others = [
  'Cubren 10+ tecnologías superficialmente',
  'Proyectos de juguete desconectados',
  'Sin profundidad de producción',
  'Foco en herramientas, no en ingeniería',
  'Sin contexto de arquitectura real',
]

const us = [
  'Patrones de diseño: metadata-driven, idempotencia, SCD Tipo 2',
  'Streaming de datos con Structured Streaming en producción',
  'Buenas prácticas desde el día 1: CI/CD, DABs y DevOps real',
  'IA sobre el Lakehouse: RAG + Genie Spaces',
  'Microsoft Fabric end-to-end (no solo teoría)',
  'Proyecto integrador con sentido de negocio real',
]

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Problem() {
  return (
    <section className="py-24 px-4 bg-[#11162B] relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4B942]/10 text-[#F4B942] border border-[#F4B942]/20 mb-4">
              El problema
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              ¿Cansado de cursos que enseñan{' '}
              <span className="gradient-text">un poco de todo?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              La mayoría de bootcamps recorren 15 tecnologías en superficie.
              Terminas sabiendo de todo y siendo experto en nada.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Others column */}
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="font-bold text-red-400 text-lg">Otros bootcamps</h3>
              </div>
              <ul className="space-y-3">
                {others.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                    <X className="w-4 h-4 text-red-500/60 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* VS divider */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent md:block hidden" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A3FF] to-[#7B2FBE] flex items-center justify-center font-black text-white text-sm shadow-lg">
                  VS
                </div>
                <div className="flex items-center gap-2 md:hidden">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent md:block hidden" />
              </div>
            </div>
          </AnimatedSection>

          {/* Us column */}
          <AnimatedSection delay={0.3}>
            <div className="h-full rounded-2xl border border-[#00A3FF]/30 bg-[#00A3FF]/5 p-6 relative overflow-hidden">
              {/* Glow top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/50 to-transparent" />

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#00A3FF]/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#00A3FF]" />
                </div>
                <h3 className="font-bold text-[#00A3FF] text-lg">Data Wizard Academy</h3>
              </div>
              <ul className="space-y-3">
                {us.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200 text-sm">
                    <Check className="w-4 h-4 text-[#00A3FF] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom callout */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#00A3FF]/10 to-[#7B2FBE]/10 border border-white/10">
              <ArrowRight className="w-5 h-5 text-[#F4B942]" />
              <p className="text-slate-200 font-medium">
                Profundidad en el <span className="text-[#F4B942] font-bold">ciclo de vida completo</span> de Data Engineering — de la ingesta al gobierno.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/30 to-transparent" />
    </section>
  )
}
