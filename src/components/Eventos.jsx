import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Bell, Ticket, MessageCircle, ChevronDown, Coffee, Utensils, ClipboardList, MessagesSquare } from 'lucide-react'
import logoImg from '../assets/datawizard.png'
import arequipaImg from '../assets/arequipa.jpeg'

const DISCORD_URL = 'https://discord.gg/bzH8Pjajv6'

const RUBRO_COLORS = {
  'Data':                   '#00A3FF',
  'Data Analyst':           '#F4B942',
  'Analytics Engineer':     '#7B2FBE',
  'Data Engineer':          '#00A3FF',
  'Data Science':           '#10B981',
  'AI Engineer':            '#7B2FBE',
  'Data Driven Specialist': '#F4B942',
  'Data Architect':         '#00B294',
  'Sr ESE - CRM Solutions': '#00B294',
}

const arequipaLineup = [
  { time: '8:00 – 9:00', break: true, icon: ClipboardList, label: 'Registro de asistentes' },
  {
    time: '9:00 – 9:40',
    speaker: 'Daniel Portugal',
    tema: 'De los archivos de papel a la inteligencia artificial: la revolución silenciosa de los datos',
    rubro: 'Data',
    linkedin: 'https://www.linkedin.com/in/danielportugalr/',
    bio: 'Sr. Data Engineer en Yape. Maestría en Big Data & Data Science y más de 9 años de experiencia en la industria IT, con más de 6 especializados en Ingeniería de Datos. Ha trabajado en banca, telecomunicaciones, seguros, unicornios y startups. Fundador de Data Engineering Latam y Data Wizard, dos comunidades globales de datos orientadas a democratizar el conocimiento en Latinoamérica y más allá.',
  },
  {
    time: '9:40 – 10:20',
    speaker: 'Deyvit Jeri',
    tema: 'Cuentas por cobrar en PBI. Del libro diario a Análisis Visual',
    rubro: 'Data Analyst',
    linkedin: 'https://www.linkedin.com/in/deyvit-jeri/',
    bio: 'Analista de datos con Power BI. Profesional contable, con experiencia en la construcción de reportes analíticos, métricas con DAX y visualizaciones orientadas a la toma de decisiones. Se dedica a enseñar Power BI de forma práctica y sencilla, ayudando a profesionales de distintas áreas a transformar datos en información útil.',
  },
  {
    time: '10:20 – 11:00',
    speaker: 'Jonatan Espejo Ibañez',
    tema: 'Business Intelligence en Agroexportaciones',
    rubro: 'Data Analyst',
    linkedin: 'https://www.linkedin.com/in/jonatan-espejo-ibanez',
    bio: 'Ingeniero Industrial de la Universidad Nacional de Trujillo. Business Analyst en Agroexportadora "Westfalia Fruit".',
  },
  { time: '11:00 – 11:15', break: true, icon: Coffee, label: 'Break' },
  {
    time: '11:15 – 11:55',
    speaker: 'Adrian Vela',
    tema: 'Acelerando el ciclo de desarrollo en BI con IA',
    rubro: 'Analytics Engineer',
    linkedin: 'https://www.linkedin.com/in/adrianvelad/',
    bio: 'Data Analytics Engineer en Woori Financial Group, con experiencia en Business Intelligence, automatización de procesos y proyectos con agentes de IA en n8n. Ha desarrollado soluciones con Power BI, SQL, Python y Power Automate para dashboards, pipelines ETL y flujos automatizados, integrando herramientas, APIs y workflows en Azure y entornos locales.',
  },
  {
    time: '11:55 – 12:30',
    speaker: 'Jesus Evangelista',
    tema: 'Fundamentos ETL Azure',
    rubro: 'Data Engineer',
    linkedin: 'https://www.linkedin.com/in/jesusevangelist/',
    bio: 'Ingeniero de Sistemas de la Universidad Nacional José Faustino. Data Engineer en Kyndryl.',
  },
  {
    time: '12:30 – 1:00',
    speaker: 'Hector Loja',
    tema: 'Del dashboard al agente: IA aplicada a decisiones operativas en minería',
    rubro: 'Data Engineer',
    linkedin: 'https://www.linkedin.com/in/heloal/',
    bio: 'Data Engineer especializado en analítica, Business Intelligence y arquitecturas modernas de datos en la nube. Trabaja con Microsoft Fabric, Azure, Databricks, Spark, Delta Lake, SQL Server y Power BI. Actualmente explora la IA aplicada al mundo de los datos: agentes de IA, semántica de negocio y arquitecturas Lakehouse.',
  },
  { time: '1:00 – 2:00', break: true, icon: Utensils, label: 'Almuerzo' },
  {
    time: '2:00 – 2:40',
    speaker: 'Mirina Gonzales Rodriguez',
    tema: 'Agentic Data pipelines: Construyendo pipelines que razonan y actúan',
    rubro: 'Data Engineer',
    linkedin: 'https://www.linkedin.com/in/mirina-gonzales-rodriguez/',
    bio: 'Ingeniera de Sistemas de la Universidad Católica de Santa María, con más de 5 años como Ingeniera de Datos en AWS, Azure y Databricks. Embajadora de Women Techmakers y organizadora de Google Developer Group Arequipa, dedicada a iniciativas que reducen la brecha de género y crean espacios seguros para las mujeres en tecnología.',
  },
  {
    time: '2:40 – 3:20',
    speaker: 'Kennedy Molina',
    tema: 'Databricks',
    rubro: 'Data Engineer',
    linkedin: 'https://www.linkedin.com/in/kennedymolinaq/',
    bio: 'Ingeniero de Sistemas de la Universidad Nacional del Callao. Data Engineer en Kyndryl, con experiencia en desarrollo de pipelines de datos, procesamiento distribuido y automatización usando Databricks, PySpark, SQL y AWS.',
  },
  {
    time: '3:20 – 4:00',
    speaker: 'Junior Candela',
    tema: 'Cómo identificar clientes de alto valor con Machine Learning',
    rubro: 'Data Science',
    linkedin: 'https://www.linkedin.com/in/juniorcandelac/',
    bio: 'Data Analytics Engineer con experiencia en proyectos de Data Science, Business Intelligence y Data Engineering end-to-end: desde la construcción y orquestación de pipelines hasta el análisis exploratorio, machine learning y visualización de resultados para negocio.',
  },
  {
    time: '4:00 – 4:40',
    speaker: 'Daniel Santos',
    tema: 'De cero a agente: construye un asistente de IA con LangGraph, RAG y Claude Code',
    rubro: 'AI Engineer',
    linkedin: 'https://www.linkedin.com/in/danielsantosp/',
    bio: 'Ingeniero de datos y consultor especializado en datos e IA. Trabaja en entornos multicloud (Azure, AWS y GCP) diseñando arquitecturas Lakehouse con Databricks, Microsoft Fabric y Spark. Desarrolla soluciones con LLMs, sistemas RAG y agentes usando LangChain y LangGraph. Fundador de DataHackers, comunidad y academia de datos e IA en Latinoamérica.',
  },
  {
    time: '4:40 – 5:20',
    speaker: 'Jorge Muchaypiña',
    secret: true,
    tema: 'Gobernanza Inteligente de Datos e IA con Microsoft Fabric',
    rubro: 'Data Driven Specialist',
    linkedin: 'https://www.linkedin.com/in/jorge-michael-muchaypi%C3%B1a-gutierrez-79038491/',
    bio: 'Data Driven Specialist en MiBanco, especializado en analítica de datos, business intelligence y transformación data-driven. Microsoft Certified Trainer (MCT), speaker en conferencias internacionales.',
  },
  {
    time: '5:20 – 6:00',
    speaker: 'Frank Chambillo',
    secret: true,
    tema: 'Diseñando una plataforma moderna de datos en Azure con Microsoft Fabric',
    rubro: 'Data Architect',
    linkedin: 'https://www.linkedin.com/in/frankchambillo/',
    bio: 'MVP Microsoft Azure | MCP | MCSP. Profesional en TI con más de 13 años de experiencia implementando tecnologías emergentes para empresas. Microsoft Most Valuable Professional (MVP), MCITP, MTA y MCP.',
  },
  {
    time: '6:00 – 6:40',
    speaker: 'Juan Rafael',
    secret: true,
    tema: 'Cree aplicaciones de IA escalables con Azure SQL Database Hyperscale',
    rubro: 'Sr ESE - CRM Solutions',
    linkedin: 'https://www.linkedin.com/in/juanrafael/',
    bio: 'Microsoft MVP en BizApps x11, Microsoft Global MCT x16. Sr ESE - CRM Solutions en NTT DATA. Líder de la comunidad Microsoft Cloud Experts y del Capítulo Lima-Perú de Global AI Bootcamp. Speaker nacional e internacional en tecnologías Microsoft.',
  },
  { time: '6:40 – 7:00', break: true, icon: MessagesSquare, label: 'Ronda de preguntas y cierre' },
]

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function LineupItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.break) {
    const Icon = item.icon
    return (
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#F4B942]/8 border border-[#F4B942]/20">
        <Icon className="w-4 h-4 text-[#F4B942] shrink-0" />
        <span className="text-[#F4B942] text-sm font-bold uppercase tracking-wider">{item.label}</span>
        <span className="text-slate-500 text-xs font-medium ml-auto shrink-0">{item.time}</span>
      </div>
    )
  }

  const color = RUBRO_COLORS[item.rubro] || '#00A3FF'

  if (item.secret) {
    return (
      <div className="rounded-xl border border-white/8 bg-white/3 overflow-hidden">
        <div className="px-5 py-4 flex items-start gap-4">
          <span className="text-slate-500 text-xs font-semibold whitespace-nowrap pt-1 w-20 shrink-0">{item.time}</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="text-[#F4B942] font-bold text-sm">🔒 Speaker por revelar</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide"
                style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
              >
                {item.rubro}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-snug">{item.tema}</p>
            <p className="text-slate-600 text-xs italic mt-1">Muy pronto anunciamos a este expositor 👀</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/8 bg-white/3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-start gap-4 group"
        aria-expanded={open}
      >
        <span className="text-slate-500 text-xs font-semibold whitespace-nowrap pt-1 w-20 shrink-0">{item.time}</span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className="text-white font-bold text-sm">{item.speaker}</span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide"
              style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
            >
              {item.rubro}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-snug">{item.tema}</p>
        </div>
        <ChevronDown
          className={`w-4 h-4 shrink-0 mt-1 transition-all duration-300 ${open ? 'rotate-180 text-[#00A3FF]' : 'text-slate-600 group-hover:text-slate-400'}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-4 pl-[6.25rem]">
          <p className="text-slate-400 text-xs leading-relaxed mb-2.5">{item.bio}</p>
          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] hover:text-[#3b8ae0] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            Ver perfil en LinkedIn
          </a>
        </div>
      )}
    </div>
  )
}

/*
 * Próximos eventos — agregar objetos a este array para anunciarlos.
 * modo: 'Presencial' | 'Virtual'
 */
const upcoming = [
  {
    flyer: arequipaImg,
    date: '10 JUL',
    year: '2026',
    title: 'Arequipa Data Fest 2026',
    emoji: '🌋',
    tagline: 'El futuro se construye con datos',
    desc: 'El primer evento presencial de la comunidad Data Wizard en Arequipa, en colaboración con la Universidad Nacional de San Agustín (UNSA), la Escuela de Ingeniería de Sistemas y el Comité ACM UNSA. Un espacio donde los datos, la tecnología y la innovación serán los protagonistas.',
    temas: ['Inteligencia Artificial', 'Análisis de datos', 'Ingeniería de Datos', 'Analítica Avanzada', 'Arquitectura de datos'],
    modo: 'Presencial',
    lugar: 'Auditorio UNSA – Facultad de Ingenierías, Arequipa',
    gratuito: true,
    link: 'https://luma.com/7a2wz8cs',
    whatsapp: 'https://chat.whatsapp.com/D3AlPpGFWdNH6JscEz9iH5',
    lineup: arequipaLineup,
  },
]

export default function Eventos() {
  return (
    <div className="min-h-screen bg-[#0D1117] relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7B2FBE]/6 blur-[130px]" />
        <div className="absolute top-[50%] left-[15%] w-[400px] h-[400px] rounded-full bg-[#00A3FF]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-20">

        {/* Volver */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Data Wizard
        </motion.a>

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <img src={logoImg} alt="Data Wizard" className="w-20 h-20 object-contain" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#7B2FBE]/10 text-[#a56fd8] border border-[#7B2FBE]/20 mb-4"
          >
            Comunidad
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            Eventos <span className="gradient-text">Data Wizard</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Meetups presenciales, workshops virtuales y sesiones en vivo
            con referentes del mundo data.
          </motion.p>
        </div>

        {/* Lista de eventos */}
        <div className="space-y-8">
          {upcoming.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="rounded-3xl border border-[#7B2FBE]/30 bg-gradient-to-b from-[#7B2FBE]/6 to-[#00A3FF]/4 overflow-hidden"
            >
              {/* Glow top */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7B2FBE] to-transparent" />

              <div className="grid md:grid-cols-[minmax(0,340px)_1fr]">
                {/* Flyer */}
                <div className="relative">
                  <img
                    src={ev.flyer}
                    alt={ev.title}
                    className="w-full h-full object-cover md:min-h-[420px]"
                  />
                  {ev.gratuito && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F4B942] text-[#0D1117] text-xs font-black uppercase tracking-wide shadow-lg">
                      🎟️ Acceso gratuito
                    </span>
                  )}
                </div>

                {/* Detalles */}
                <div className="p-7 sm:p-8 flex flex-col">
                  {/* Fecha */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#7B2FBE]/15 border border-[#7B2FBE]/30 flex flex-col items-center justify-center shrink-0">
                      <span className="text-white font-black text-lg leading-none">{ev.date.split(' ')[0]}</span>
                      <span className="text-[#a56fd8] text-[10px] font-bold uppercase tracking-wider">{ev.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{ev.modo} · {ev.year}</span>
                      <p className="text-[#F4B942] text-sm font-semibold italic">"{ev.tagline}"</p>
                    </div>
                  </div>

                  <h2 className="text-white font-black text-2xl sm:text-3xl tracking-tight mb-3">
                    {ev.emoji} {ev.title}
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{ev.desc}</p>

                  {/* Temas */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ev.temas.map((tema) => (
                      <span
                        key={tema}
                        className="text-xs px-2.5 py-1 rounded-lg font-medium bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20"
                      >
                        {tema}
                      </span>
                    ))}
                  </div>

                  {/* Lugar */}
                  <p className="flex items-start gap-2 text-slate-300 text-sm mb-6">
                    <MapPin className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                    {ev.lugar}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={ev.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#7B2FBE] to-[#5d2390] hover:from-[#8f42d4] hover:to-[#7B2FBE] text-white font-bold text-sm transition-all duration-300"
                    >
                      <Ticket className="w-4 h-4" />
                      Reserva tu lugar
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={ev.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 py-3.5 px-5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-bold text-sm transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Grupo de WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Line-up / Agenda */}
              {ev.lineup && (
                <div className="border-t border-white/8 p-7 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center">
                      <CalendarDays className="w-4 h-4 text-[#00A3FF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-extrabold text-lg leading-tight">Line-up del evento</h3>
                      <p className="text-slate-500 text-xs">Toca cada charla para conocer al expositor</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {ev.lineup.map((item, idx) => (
                      <LineupItem key={`${item.time}-${idx}`} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Aviso Discord */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 rounded-2xl border border-white/8 bg-white/3 p-8 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#00A3FF]/10 border border-[#00A3FF]/20 flex items-center justify-center mx-auto mb-4">
            <CalendarDays className="w-6 h-6 text-[#00A3FF]" />
          </div>
          <h2 className="text-white font-extrabold text-xl mb-2">
            Más eventos en camino
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Únete al Discord para ser el primero en enterarte cuando se anuncien
            nuevos meetups y workshops.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#7B2FBE]/40 bg-[#7B2FBE]/10 hover:bg-[#7B2FBE]/20 text-[#a56fd8] font-bold text-sm transition-all duration-300"
          >
            <Bell className="w-4 h-4" />
            Recibir avisos en Discord
          </a>
        </motion.div>

      </div>
    </div>
  )
}
