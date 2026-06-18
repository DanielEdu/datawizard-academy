import { motion } from 'framer-motion'
import { Clock, Users, Calendar, Mic, ArrowRight, ChevronDown } from 'lucide-react'
import databricksImg from '../assets/logos/databricks.png'
import fabricImg from '../assets/logos/fabric.png'
import azureImg from '../assets/logos/azure.png'

const CTA_URL = 'https://lu.ma/datawizard'

const badges = [
  { icon: Calendar, value: '4',   label: 'meses',            color: '#F4B942' },
  { icon: Clock,    value: '132', label: 'hrs en vivo',      color: '#00A3FF' },
  { icon: Mic,      value: '3',   label: 'sesiones/semana',  color: '#7B2FBE' },
  { icon: Users,    value: '2',   label: 'docentes expertos', color: '#10B981' },
]

/* ── Tech architecture background ─────────────────── */

function TechBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="center-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.07" />
          <stop offset="50%" stopColor="#7B2FBE" stopOpacity="0.04" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <filter id="node-blur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* Background glow */}
      <rect width="100%" height="100%" fill="url(#center-glow)" />

      {/* Grid dots */}
      {Array.from({ length: 20 }).map((_, row) =>
        Array.from({ length: 30 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={`${(col + 0.5) * (100 / 30)}%`}
            cy={`${(row + 0.5) * (100 / 20)}%`}
            r="0.8"
            fill="#00A3FF"
            opacity="0.12"
          />
        ))
      )}

      {/* Pipeline left → center (Databricks side) */}
      <line x1="5%" y1="35%" x2="30%" y2="50%" stroke="#00A3FF" strokeWidth="1" opacity="0.2" strokeDasharray="6 4" />
      <line x1="8%" y1="55%" x2="30%" y2="50%" stroke="#00A3FF" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
      <line x1="3%" y1="45%" x2="30%" y2="50%" stroke="#00A3FF" strokeWidth="0.8" opacity="0.12" strokeDasharray="4 6" />

      {/* Pipeline center → right (Fabric side) */}
      <line x1="70%" y1="50%" x2="95%" y2="35%" stroke="#7B2FBE" strokeWidth="1" opacity="0.2" strokeDasharray="6 4" />
      <line x1="70%" y1="50%" x2="92%" y2="55%" stroke="#7B2FBE" strokeWidth="1" opacity="0.15" strokeDasharray="6 4" />
      <line x1="70%" y1="50%" x2="97%" y2="47%" stroke="#7B2FBE" strokeWidth="0.8" opacity="0.12" strokeDasharray="4 6" />

      {/* Central flow */}
      <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="url(#flow-grad)" strokeWidth="1.5" opacity="0.25" />

      <defs>
        <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#00A3FF" /><stop offset="1" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>

      {/* Left cluster nodes */}
      <circle cx="5%" cy="35%" r="4" fill="#00A3FF" opacity="0.3" />
      <circle cx="5%" cy="35%" r="8" fill="#00A3FF" opacity="0.06" filter="url(#node-blur)" />
      <circle cx="8%" cy="55%" r="3" fill="#00A3FF" opacity="0.25" />
      <circle cx="3%" cy="45%" r="2.5" fill="#00A3FF" opacity="0.2" />
      <circle cx="12%" cy="30%" r="3" fill="#00A3FF" opacity="0.18" />
      <circle cx="15%" cy="62%" r="2.5" fill="#00A3FF" opacity="0.15" />
      <circle cx="20%" cy="38%" r="2" fill="#00A3FF" opacity="0.15" />
      <circle cx="22%" cy="58%" r="2" fill="#00A3FF" opacity="0.12" />

      {/* Center nodes */}
      <circle cx="30%" cy="50%" r="5" fill="#00A3FF" opacity="0.35" />
      <circle cx="30%" cy="50%" r="12" fill="#00A3FF" opacity="0.05" filter="url(#node-blur)" />
      <circle cx="50%" cy="50%" r="7" fill="url(#center-node)" opacity="0.4" />
      <circle cx="50%" cy="50%" r="18" fill="#ffffff" opacity="0.03" filter="url(#node-blur)" />
      <circle cx="70%" cy="50%" r="5" fill="#7B2FBE" opacity="0.35" />
      <circle cx="70%" cy="50%" r="12" fill="#7B2FBE" opacity="0.05" filter="url(#node-blur)" />

      <defs>
        <radialGradient id="center-node" cx="50%" cy="50%" r="50%">
          <stop stopColor="#00A3FF" /><stop offset="1" stopColor="#7B2FBE" />
        </radialGradient>
      </defs>

      {/* Right cluster nodes */}
      <circle cx="95%" cy="35%" r="4" fill="#7B2FBE" opacity="0.3" />
      <circle cx="95%" cy="35%" r="8" fill="#7B2FBE" opacity="0.06" filter="url(#node-blur)" />
      <circle cx="92%" cy="55%" r="3" fill="#7B2FBE" opacity="0.25" />
      <circle cx="97%" cy="47%" r="2.5" fill="#7B2FBE" opacity="0.2" />
      <circle cx="88%" cy="30%" r="3" fill="#7B2FBE" opacity="0.18" />
      <circle cx="85%" cy="63%" r="2.5" fill="#7B2FBE" opacity="0.15" />
      <circle cx="80%" cy="38%" r="2" fill="#7B2FBE" opacity="0.15" />
      <circle cx="78%" cy="58%" r="2" fill="#7B2FBE" opacity="0.12" />

      {/* Sub-connections left */}
      <line x1="12%" y1="30%" x2="20%" y2="38%" stroke="#00A3FF" strokeWidth="0.6" opacity="0.15" />
      <line x1="15%" y1="62%" x2="22%" y2="58%" stroke="#00A3FF" strokeWidth="0.6" opacity="0.12" />
      <line x1="20%" y1="38%" x2="30%" y2="50%" stroke="#00A3FF" strokeWidth="0.6" opacity="0.15" />
      <line x1="22%" y1="58%" x2="30%" y2="50%" stroke="#00A3FF" strokeWidth="0.6" opacity="0.12" />

      {/* Sub-connections right */}
      <line x1="88%" y1="30%" x2="80%" y2="38%" stroke="#7B2FBE" strokeWidth="0.6" opacity="0.15" />
      <line x1="85%" y1="63%" x2="78%" y2="58%" stroke="#7B2FBE" strokeWidth="0.6" opacity="0.12" />
      <line x1="80%" y1="38%" x2="70%" y2="50%" stroke="#7B2FBE" strokeWidth="0.6" opacity="0.15" />
      <line x1="78%" y1="58%" x2="70%" y2="50%" stroke="#7B2FBE" strokeWidth="0.6" opacity="0.12" />

      {/* Hex pattern overlay */}
      <pattern id="hex" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M28 66L0 50V16L28 0l28 16v34L28 66zm0-4L4 48.5V19.5L28 4l24 15.5v29L28 62z"
          fill="none"
          stroke="#00A3FF"
          strokeOpacity="0.04"
          strokeWidth="0.5"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  )
}

/* ── Platform card ─────────────────────────────────── */

function PlatformCard({ logo, name, sub, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center gap-3 px-8 py-5 rounded-2xl border"
      style={{
        borderColor: `${color}40`,
        background: `linear-gradient(135deg, ${color}12, ${color}05)`,
        boxShadow: `0 0 30px ${color}15, inset 0 1px 0 ${color}20`,
      }}
    >
      {logo}
      <div className="text-center">
        <div className="font-extrabold text-xl text-white tracking-tight">{name}</div>
        {sub && <div className="text-xs mt-0.5" style={{ color }}>{sub}</div>}
      </div>
    </motion.div>
  )
}

/* ── Main Hero ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.11, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Tech architecture background */}
      <div className="absolute inset-0">
        <TechBackground />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/60 via-[#0D1117]/20 to-[#0D1117]/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full pt-24 pb-10">

        {/* Brand badge */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00A3FF]/30 bg-[#00A3FF]/8 text-[#00A3FF] text-sm font-semibold mb-5 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
          DATA WIZARD ACADEMY
        </motion.div>

        {/* Main heading */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show" className="mb-2">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em] mb-1">
            Especialización en
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black text-white leading-[0.9] tracking-tighter">
            DATA
            <br />
            <span className="gradient-text">ENGINEERING</span>
          </h1>
        </motion.div>

        {/* Platform pills — PROMINENT */}
        <motion.div
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 my-6"
        >
          <PlatformCard
            logo={
              <div className="bg-white/90 rounded-xl px-3 py-2 flex items-center justify-center">
                <img src={databricksImg} alt="Databricks" className="h-8 w-auto object-contain max-w-[120px]" />
              </div>
            }
            name="Databricks"
            sub="Apache Spark · Delta Lake · Unity Catalog"
            color="#00A3FF"
            delay={0.3}
          />

          {/* Connector */}
          <div className="flex sm:flex-col items-center gap-1 px-2">
            <div className="h-px w-8 sm:h-8 sm:w-px bg-gradient-to-r sm:bg-gradient-to-b from-[#00A3FF] to-[#7B2FBE]" />
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0"
              style={{ background: 'linear-gradient(135deg, #00A3FF, #7B2FBE)' }}
            >
              +
            </div>
            <div className="h-px w-8 sm:h-8 sm:w-px bg-gradient-to-r sm:bg-gradient-to-b from-[#7B2FBE] to-[#00A3FF]" />
          </div>

          <PlatformCard
            logo={<img src={fabricImg} alt="Microsoft Fabric" className="h-10 w-auto object-contain" />}
            name="Microsoft Fabric"
            sub="OneLake · Pipelines · Power BI"
            color="#7B2FBE"
            delay={0.4}
          />
        </motion.div>

        {/* Azure tag — PROMINENT */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mb-6">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full font-bold text-base text-white"
            style={{
              background: 'linear-gradient(135deg, rgba(0,120,212,0.18), rgba(80,176,248,0.10))',
              border: '1px solid rgba(0,120,212,0.45)',
              boxShadow: '0 0 20px rgba(0,120,212,0.2)',
            }}
          >
            <img src={azureImg} alt="Azure" className="h-5 w-5 object-contain" />
            <span>en Microsoft Azure</span>
          </div>
        </motion.div>

        {/* Tagline — BOLD */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="mb-6">
          <div
            className="relative inline-block max-w-3xl mx-auto px-6 py-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,163,255,0.06), rgba(123,47,190,0.06))',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white font-bold italic leading-snug">
              "No aprenderás tecnologías.
              <br className="hidden sm:block" />
              Aprenderás a construir como lo hace un{' '}
              <span
                className="not-italic font-extrabold"
                style={{ background: 'linear-gradient(90deg,#00A3FF,#7B2FBE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Data Engineer en el mundo real.
              </span>
              "
            </p>
          </div>
        </motion.div>

        {/* Badges — stat cards */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="mb-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 sm:inline-flex sm:rounded-2xl sm:overflow-hidden sm:border sm:border-white/10 sm:divide-x sm:divide-white/10">
            {badges.map(({ icon: Icon, value, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 sm:bg-transparent rounded-xl sm:rounded-none border border-white/10 sm:border-0"
                style={{ background: `linear-gradient(135deg, ${color}08, transparent)` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div>
                  <div className="text-white font-black text-xl leading-none">{value}</div>
                  <div className="text-slate-400 text-xs font-medium whitespace-nowrap mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-9 py-4 rounded-xl text-white font-extrabold text-lg transition-all duration-300 shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #00A3FF, #0077cc)',
              boxShadow: '0 0 24px rgba(0,163,255,0.45), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Reserva tu lugar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#curriculum"
            className="px-9 py-4 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 font-semibold text-lg transition-all duration-200"
          >
            Ver el programa
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
