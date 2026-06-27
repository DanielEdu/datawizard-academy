import { motion } from 'framer-motion'
import logoImg from '../assets/datawizard.png'

export default function SoldOut() {
  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F4B942]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-[#00A3FF]/5 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-[#7B2FBE]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <img src={logoImg} alt="Data Wizard" className="w-10 h-10 object-contain" />
          <span className="text-white font-bold text-lg tracking-wide">Data Wizard Academy</span>
        </motion.div>

        {/* SOLD OUT badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-8"
        >
          <span className="px-6 py-2 rounded-full border-2 border-[#F4B942] text-[#F4B942] font-black text-sm tracking-[0.3em] uppercase">
            Aforo completo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-7xl sm:text-8xl md:text-[7rem] font-black leading-[0.9] tracking-tighter mb-6"
          style={{
            background: 'linear-gradient(135deg, #00A3FF 0%, #7B2FBE 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          SOLD OUT
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-4"
        >
          Gracias por la increíble acogida. No esperábamos llenar el aforo tan rápido — eso dice mucho de la comunidad Data Wizard.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 text-base leading-relaxed mb-10"
        >
          Ya estamos planeando la <span className="text-white font-semibold">2da cohorte</span>. Si quieres ser el primero en enterarte cuando abran los cupos, únete a la lista de espera.
        </motion.p>

        {/* Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="https://discord.gg/bzH8Pjajv6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F4B942] to-[#e0a832] hover:from-[#ffc94d] hover:to-[#F4B942] text-[#0D1117] font-bold text-base transition-all duration-300 shadow-lg shadow-[#F4B942]/20"
          >
            Únete al Discord · Avísame para la 2da cohorte
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-white/8" />
          <span className="text-slate-600 text-sm">mientras tanto</span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        {/* Community links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center justify-center gap-6 text-sm"
        >
          <a
            href="https://www.youtube.com/@datawizardpe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
          <span className="text-slate-700">·</span>
          <a
            href="https://linkedin.com/company/data-wizard-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <span className="text-slate-700">·</span>
          <a
            href="https://daniel-datashow.vercel.app/es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Daniel DataShow
          </a>
        </motion.div>

      </div>
    </div>
  )
}
