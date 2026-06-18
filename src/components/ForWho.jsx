import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X } from 'lucide-react'

const prerequisites = [
  'Python básico-intermedio (funciones, estructuras de datos)',
  'SQL intermedio (JOINs, subqueries, agregaciones)',
  'Git básico y manejo de terminal',
  'Ganas de dar el salto al Data Engineering real',
]

const notNeeded = [
  'Spark (se enseña desde cero)',
  'Azure, Databricks o Fabric (desde cero)',
  'Experiencia previa en ingeniería de datos',
  'Conocimiento de streaming o Delta Lake',
]

const profiles = [
  'Data Analyst que quiere pasar a ingeniería',
  'Desarrollador de software que quiere trabajar con datos',
  'Egresado de sistemas/informática buscando especialización',
  'Profesional de datos que quiere actualizar su stack',
]

export default function ForWho() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="for-who" className="py-24 px-4 bg-[#11162B] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#7B2FBE]/10 text-[#a56fd8] border border-[#7B2FBE]/20 mb-4">
            ¿Es para ti?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Para quién es este <span className="gradient-text">programa</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No necesitas ser un experto para entrar — necesitas las bases correctas
            y las ganas de aprender de verdad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#00A3FF]/20 bg-[#00A3FF]/5 p-6"
          >
            <h3 className="font-bold text-[#00A3FF] text-lg mb-5 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00A3FF]/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#00A3FF]" />
              </div>
              Este programa es para ti si...
            </h3>
            <ul className="space-y-3">
              {profiles.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-4 h-4 text-[#00A3FF] mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Prerequisites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-[#F4B942]/20 bg-[#F4B942]/5 p-6"
          >
            <h3 className="font-bold text-[#F4B942] text-lg mb-5 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#F4B942]/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#F4B942]" />
              </div>
              Necesitas saber...
            </h3>
            <ul className="space-y-3">
              {prerequisites.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4B942] mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not needed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-[#7B2FBE]/20 bg-[#7B2FBE]/5 p-6"
          >
            <h3 className="font-bold text-[#a56fd8] text-lg mb-5 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#7B2FBE]/20 flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[#a56fd8]" />
              </div>
              NO necesitas saber...
            </h3>
            <ul className="space-y-3">
              {notNeeded.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-400 text-sm">
                  <X className="w-4 h-4 text-[#7B2FBE]/60 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/30 to-transparent" />
    </section>
  )
}
