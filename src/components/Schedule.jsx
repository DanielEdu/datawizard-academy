import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Calendar } from 'lucide-react'

const sessions = [
  { day: 'Miércoles', time: '8:00 PM', color: '#00A3FF' },
  { day: 'Viernes',   time: '8:00 PM', color: '#7B2FBE' },
  { day: 'Sábado',    time: '2:00 PM', color: '#F4B942' },
]

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 px-4 bg-[#0D1117]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-white/8 bg-white/2 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#00A3FF]" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-xl">Frecuencia de clases</h3>
              <p className="text-slate-500 text-sm">3 sesiones por semana · GMT-5 · Perú / Colombia / Ecuador</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {sessions.map(({ day, time, color }) => (
              <div
                key={day}
                className="flex flex-col items-center gap-2 py-5 rounded-xl border"
                style={{ borderColor: `${color}25`, background: `${color}08` }}
              >
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{day}</span>
                <span className="text-3xl font-black text-white">{time}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/4 border border-white/8 w-fit mx-auto">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-300 text-sm">
              <span className="text-white font-semibold">3 horas por sesión</span>
              <span className="text-slate-500 mx-2">·</span>
              con break de 15 minutos incluido
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
