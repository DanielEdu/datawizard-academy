import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import danielPhoto from '../assets/professors/daniel.jpeg'
import hectorPhoto from '../assets/professors/hector.jpeg'

const instructors = [
  {
    id: 'databricks',
    photo: danielPhoto,
    platform: 'Databricks',
    platformColor: '#00A3FF',
    name: 'Daniel Portugal Revilla',
    handle: 'danielportugalr',
    role: 'Sr. Data Engineer en Yape · Founder de Data Wizard',
    location: 'Perú 🇵🇪',
    initials: 'DP',
    bio: 'Ingeniero de datos con M.Sc. en Big Data & Data Science y más de 9 años en la industria, con 5+ años especializados en Data Engineering. Ha diseñado plataformas de datos escalables en banca, telecomunicaciones, seguros y unicornios. Co-Fundador de Data Engineering LATAM y Fundador de Data Wizard, la comunidad que democratiza el Data Engineering en español.',
    certs: [
      'Databricks Certified Data Engineer Professional',
      'Databricks Certified Data Engineer Associate',
      'AWS Certified · GCP Certified · Airflow Certified',
    ],
    tags: ['Apache Spark', 'Delta Lake', 'Kafka', 'Airflow', 'Unity Catalog', 'Databricks'],
    linkedin: 'https://www.linkedin.com/in/danielportugalr/',
    company: 'Yape · Data Wizard',
  },
  {
    id: 'fabric',
    photo: hectorPhoto,
    platform: 'Microsoft Fabric',
    platformColor: '#7B2FBE',
    name: 'Hector Loja Alvarado',
    handle: 'heloal',
    role: 'Data Engineer Cloud · Especialista Microsoft Fabric & Azure',
    location: 'Perú 🇵🇪',
    initials: 'HL',
    bio: 'Ingeniero de datos especializado en el ecosistema Microsoft: Fabric, Azure, Power BI y Databricks. Ponente activo en la comunidad Data Wizard, donde ha dado sesiones sobre Microsoft Foundry, agentes inteligentes y las últimas actualizaciones de Microsoft Fabric en producción. Apasionado por conectar Data Engineering e IA.',
    highlights: [
      'Especialista en Microsoft Fabric y arquitectura OneLake',
      'Implementación de pipelines end-to-end en Azure',
      'Referente en Power BI avanzado y gobierno de datos en Fabric',
    ],
    tags: ['Microsoft Fabric', 'Azure', 'Power BI', 'Databricks', 'Python', 'SQL'],
    linkedin: 'https://www.linkedin.com/in/heloal/',
    company: 'handytec',
  },
]

function InstructorCard({ instructor, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const color = instructor.platformColor

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden flex flex-col"
    >
      {/* Top color bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}50)` }} />

      <div className="p-6 flex-1 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div
            className="w-24 h-24 rounded-2xl shrink-0 overflow-hidden"
            style={{ border: `2px solid ${color}40` }}
          >
            <img
              src={instructor.photo}
              alt={instructor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <div
              className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-1.5"
              style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
            >
              {instructor.platform}
            </div>
            <h3 className="font-extrabold text-white text-lg leading-tight">{instructor.name}</h3>
            <p className="text-slate-400 text-sm leading-snug mt-0.5">{instructor.role}</p>
            <p className="text-slate-600 text-xs mt-0.5">{instructor.location} · {instructor.company}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{instructor.bio}</p>

        {/* Certs or highlights */}
        <div>
          {instructor.certs ? (
            <>
              <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-2">Certificaciones</p>
              <ul className="space-y-1.5">
                {instructor.certs.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-slate-300 text-xs">
                    <Award className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                    {cert}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-2">Especialidad</p>
              <ul className="space-y-1.5">
                {instructor.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-300 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {instructor.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-lg font-medium"
              style={{ background: `${color}10`, color, border: `1px solid ${color}20` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LinkedIn link */}
        <a
          href={instructor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold transition-colors group"
          style={{ color: `${color}cc` }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Ver perfil en LinkedIn
          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Instructors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="instructors" className="py-24 px-4 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4B942]/10 text-[#F4B942] border border-[#F4B942]/20 mb-4">
            Docentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Aprende de <span className="gradient-text">especialistas reales</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Dos expertos dedicados — uno por plataforma. Ingenieros que construyen
            en producción y comparten lo que funciona en el mundo real.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {instructors.map((instructor, i) => (
            <InstructorCard key={instructor.id} instructor={instructor} index={i} />
          ))}
        </div>

        {/* Community note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center p-5 rounded-2xl bg-white/2 border border-white/6"
        >
          <p className="text-slate-400 text-sm">
            Ambos son parte activa de{' '}
            <span className="text-white font-semibold">Data Wizard</span>
            {' '}— disponibles para Q&A entre sesiones y con acceso directo a la comunidad en Discord.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
