import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, CalendarDays, Tv } from 'lucide-react'
import logoImg from '../assets/datawizard.png'

const DISCORD_URL  = 'https://discord.gg/bzH8Pjajv6'
const YOUTUBE_URL  = 'https://www.youtube.com/@DataWizardClub'
const LINKEDIN_URL = 'https://linkedin.com/company/data-wizard-club/'
const DATASHOW_URL = 'https://daniel-datashow.vercel.app/es'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  )
}

const socials = [
  { label: 'Discord',  href: DISCORD_URL,  Icon: DiscordIcon,  color: '#7B2FBE' },
  { label: 'YouTube',  href: YOUTUBE_URL,  Icon: YoutubeIcon,  color: '#FF0000' },
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedinIcon, color: '#0A66C2' },
]

const sections = [
  {
    icon: GraduationCap,
    tag: 'Formación',
    title: 'Data Wizard Academy',
    desc: 'Especialización en Data Engineering con Databricks + Microsoft Fabric. 132 horas en vivo, 2 docentes expertos y proyectos de nivel producción.',
    href: '/academy',
    cta: 'Conoce el programa',
    color: '#00A3FF',
    external: false,
  },
  {
    icon: CalendarDays,
    tag: 'Comunidad',
    title: 'Eventos',
    desc: 'Meetups presenciales, workshops virtuales y sesiones en vivo con referentes del mundo data. Entérate de lo que viene.',
    href: '/eventos',
    cta: 'Ver próximos eventos',
    color: '#7B2FBE',
    external: false,
  },
  {
    icon: Tv,
    tag: 'Show',
    title: 'Daniel DataShow',
    desc: 'Entrevistas y conversaciones con profesionales top del mundo de los datos — carreras, tecnología y el detrás de cámaras de la industria.',
    href: DATASHOW_URL,
    cta: 'Ir al show',
    color: '#F4B942',
    external: true,
  },
]

export default function CommunityHome() {
  return (
    <div className="min-h-screen bg-[#0D1117] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#00A3FF]/6 blur-[140px]" />
        <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#7B2FBE]/6 blur-[120px]" />
        <div className="absolute top-[60%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#F4B942]/4 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20 pb-16">

        {/* ── Hero de la comunidad ── */}
        <div className="text-center mb-20">
          {/* Logo grande */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="flex justify-center mb-8"
          >
            <img
              src={logoImg}
              alt="Data Wizard"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-[0_0_45px_rgba(0,163,255,0.4)]"
            />
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-6"
          >
            DATA <span className="gradient-text">WIZARD</span>
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="text-slate-300 text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            La comunidad que <span className="text-white font-semibold">democratiza el conocimiento</span>.
          </motion.p>

          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Compartimos conocimiento real de la industria: sesiones en vivo, eventos,
            formación especializada y una red de profesionales de datos en toda LATAM y España.
          </motion.p>

          {/* Redes */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            className="flex items-center justify-center gap-4"
          >
            {socials.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/10 bg-white/4 hover:bg-white/8 transition-all text-base font-semibold text-slate-200"
              >
                <Icon className="w-5 h-5" style={{ color }} />
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Apartados ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Explora <span className="gradient-text">Data Wizard</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {sections.map(({ icon: Icon, tag, title, desc, href, cta, color, external }, i) => (
            <motion.a
              key={title}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group relative rounded-2xl border bg-white/3 p-7 flex flex-col transition-all duration-300 hover:bg-white/6 overflow-hidden"
              style={{ borderColor: `${color}30` }}
            >
              {/* Glow top */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              <span
                className="inline-block w-fit text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-2"
                style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
              >
                {tag}
              </span>

              <h3 className="font-extrabold text-white text-xl mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{desc}</p>

              <span
                className="flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
                style={{ color }}
              >
                {cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* ── Footer mini ── */}
        <div className="text-center pt-10 border-t border-white/6">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Data Wizard · Democratizando el conocimiento
          </p>
        </div>

      </div>
    </div>
  )
}
