import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Zap } from 'lucide-react'

const CTA_URL = '/academy/soldout'

const includes = [
  '44 sesiones en vivo (132 horas reales de formación)',
  '2 docentes especializados por plataforma',
  'Sesión 1:1 para impulsar tu perfil profesional',
  'Acceso a comunidad Data Wizard',
  'Grabaciones de cada sesión para repaso',
  'Canal dedicado en Discord',
  'Sesión de networking en vivo como cierre de curso',
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="pricing" className="py-24 px-4 bg-[#11162B] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />
      <div className="absolute inset-0 hex-pattern opacity-30" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4B942]/10 text-[#F4B942] border border-[#F4B942]/20 mb-4">
            Inversión
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Precio <span className="gradient-text">transparente</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Sin sorpresas. Todo incluido desde el primer día.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden border border-[#00A3FF]/30 bg-gradient-to-b from-[#00A3FF]/5 to-[#7B2FBE]/5"
        >
          {/* Top glow border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF] to-[#7B2FBE]" />

          {/* Badge */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F4B942]/15 border border-[#F4B942]/30">
              <Zap className="w-3 h-3 text-[#F4B942]" />
              <span className="text-[#F4B942] text-xs font-bold">Early Access</span>
            </div>
          </div>

          <div className="p-8">
            {/* Inicio de clases */}
            <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-[#7B2FBE]/10 border border-[#7B2FBE]/25 w-fit">
              <span className="text-lg">📅</span>
              <span className="text-slate-200 text-base font-medium">Inicio de clases: <span className="text-white font-bold">1 de agosto, 2026</span></span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">$350</span>
                <span className="text-xl text-slate-400">USD</span>
              </div>
              <div className="text-slate-400 text-sm mb-3">
                o equivalente <span className="text-white font-semibold">S/. 1,150</span> (soles peruanos)
              </div>

              {/* Installments */}
              <div className="inline-flex flex-col gap-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-300 text-sm">
                  o <span className="text-white font-bold">3 cuotas de $123 USD</span>
                  <span className="text-slate-400 ml-1">(S/. 403 c/u)</span>
                </span>
                <span className="text-slate-500 text-xs">Incluye 5% de recargo por pago en cuotas</span>
              </div>
            </div>

            {/* Includes */}
            <div className="mb-8">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4 font-semibold">
                Todo lo que incluye
              </p>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#00A3FF]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#00A3FF]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment methods */}
            <div className="mb-8">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4 font-semibold">
                Métodos de pago
              </p>
              <div className="grid grid-cols-2 gap-3">
                {/* Internacional */}
                <div className="rounded-xl border border-white/8 bg-white/3 p-3">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">🌎 Internacional</p>
                  <div className="flex flex-col gap-1.5">
                    <span className="flex items-center gap-2 text-slate-300 text-xs">
                      <span className="text-base">💳</span> Visa / Mastercard
                    </span>
                    <span className="flex items-center gap-2 text-slate-300 text-xs">
                      <span className="text-base">🅿️</span> PayPal
                    </span>
                  </div>
                </div>
                {/* Perú */}
                <div className="rounded-xl border border-white/8 bg-white/3 p-3">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">🇵🇪 Perú</p>
                  <div className="flex flex-col gap-1.5">
                    <span className="flex items-center gap-2 text-slate-300 text-xs">
                      <span className="text-base">🏦</span> BCP · BBVA
                    </span>
                    <span className="flex items-center gap-2 text-slate-300 text-xs">
                      <span className="text-base">📱</span> Yape
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-[#00A3FF] to-[#0080cc] hover:from-[#00b8ff] hover:to-[#00A3FF] text-white font-bold text-lg transition-all duration-300 glow-electric"
            >
              Reserva tu lugar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-center text-slate-500 text-xs mt-3">
              Cupos limitados · Se confirma con el primer pago
            </p>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/30 to-transparent" />
    </section>
  )
}
