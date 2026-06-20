import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, Layers, Zap, Database, BarChart3, Shield, Brain, Puzzle, BookOpen, Activity } from 'lucide-react'

/* ── Data ─────────────────────────────────────────────────────────────────── */

const DATABRICKS = '#00A3FF'
const FABRIC     = '#00B294'
const GOLD       = '#F4B942'
const VIOLET     = '#7B2FBE'

const modules = [
  /* ── DATABRICKS TRACK ─────────────────────────────────────────────── */
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: BookOpen,
    color: GOLD,
    tag: 'Módulo 0',
    title: 'Fundamentos del Data Engineering',
    sessionCount: 2,
    sessions: [
      { n: 1,  title: 'Rol del DE, ciclo de vida y arquitecturas',    type: 'Teoría' },
      { n: 2,  title: 'Formatos de datos e introducción a Databricks', type: 'Teoría' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: Zap,
    color: DATABRICKS,
    tag: 'Módulo 1',
    title: 'Databricks Core — Spark, Delta Lake & Unity Catalog',
    sessionCount: 6,
    sessions: [
      { n: 3,  title: 'Arquitectura Databricks y setup en Azure',                   type: 'Teoría + Práctica' },
      { n: 4,  title: 'Fundamentos de Spark para Data Engineers',                   type: 'Teoría + Práctica' },
      { n: 5,  title: 'Delta Lake: fundamentos y filosofía',                         type: 'Teoría + Práctica' },
      { n: 6,  title: 'Spark intermedio: shuffles, joins y optimización',            type: 'Teoría + Práctica' },
      { n: 7,  title: 'Unity Catalog y modelo Medallion',                            type: 'Teoría + Práctica' },
      { n: 8,  title: 'Entorno de desarrollo y flujo de trabajo profesional',        type: 'Práctica' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: Database,
    color: DATABRICKS,
    tag: 'Módulo 2',
    title: 'Ingesta y Zona Bronze',
    sessionCount: 8,
    sessions: [
      { n: 9,  title: 'Ingesta desde bases de datos relacionales',         type: 'Teoría + Práctica' },
      { n: 10, title: 'Azure Data Factory — Ingesta batch',                type: 'Práctica' },
      { n: 11, title: 'Kafka con Databricks Structured Streaming',         type: 'Práctica' },
      { n: 12, title: 'CDC: conceptos y con Debezium + Kafka',             type: 'Teoría + Demo' },
      { n: 13, title: 'Autoloader y diseño de la zona Bronze',             type: 'Práctica' },
      { n: 14, title: 'Metadata-driven Ingestion',                         type: 'Teoría + Práctica' },
      { n: 15, title: 'Desarrollo asistido por IA: Claude Code, Genie Code y Spec-Driven Development', type: 'Práctica + Demo', note: 'Método SDD que se aplica en todas las sesiones de construcción posteriores' },
      { n: 16, title: 'Jobs, Workflows y Asset Bundles (DABs)',            type: 'Teoría + Práctica' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: Layers,
    color: VIOLET,
    tag: 'Módulo 3',
    title: 'Zona Silver — Transformación y Calidad',
    sessionCount: 3,
    sessions: [
      { n: 17, title: 'Diseño de Silver y SCD Tipo 2',                              type: 'Teoría + Práctica' },
      { n: 18, title: 'MERGE, deduplicación e idempotencia',                        type: 'Teoría + Práctica' },
      { n: 19, title: 'Structured Streaming, Windows y ForEach Batch',              type: 'Teoría + Práctica' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: BarChart3,
    color: VIOLET,
    tag: 'Módulo 4',
    title: 'Zona Gold — Consumo y Métricas',
    sessionCount: 3,
    sessions: [
      { n: 20, title: 'Diseño de la capa Gold y Change Data Feed',        type: 'Teoría + Práctica' },
      { n: 21, title: 'Optimización de tablas Gold',                      type: 'Práctica' },
      { n: 22, title: 'Construcción de capa de métricas',                 type: 'Práctica' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: Shield,
    color: GOLD,
    tag: 'Módulo 5',
    title: 'Unity Catalog y Gobierno',
    sessionCount: 2,
    sessions: [
      { n: 23, title: 'Unity Catalog: gobierno, linaje y configuración segura', type: 'Teoría + Práctica', note: 'Grants, Row/Column security, linaje automático + Key Vault y Secret Scopes' },
      { n: 24, title: 'CI/CD y gestión de ambientes (DEV/STG/PROD)',            type: 'Teoría + Práctica', note: 'Branching strategy, GitHub Actions, promoción automatizada con Asset Bundles' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: Brain,
    color: VIOLET,
    tag: 'Módulo IA',
    title: 'IA sobre el Lakehouse — Genie y RAG',
    sessionCount: 1,
    sessions: [
      { n: 25, title: 'IA sobre el Lakehouse: Genie Spaces y RAG (conceptual)', type: 'Demo + Práctica', note: 'Genie Space sobre tablas Gold, Vector Search, embeddings a nivel conceptual' },
    ],
  },

  /* ── MICROSOFT FABRIC TRACK ───────────────────────────────────────── */
  {
    track: 'Microsoft Fabric',
    trackColor: FABRIC,
    icon: Activity,
    color: FABRIC,
    tag: 'Fabric · Bloque 0',
    title: 'Primeros pasos en Fabric — El DE de verdad',
    sessionCount: 1,
    sessions: [
      { n: 'F1', title: 'Cómo trabaja un Data Engineer de verdad en Fabric', type: 'Teoría + Lab', note: 'Workspace, Git, carga inicial de RetailPe' },
    ],
  },
  {
    track: 'Microsoft Fabric',
    trackColor: FABRIC,
    icon: Database,
    color: FABRIC,
    tag: 'Fabric · Bloque 1',
    title: 'Bronze en Fabric — Arquitectura y Pipelines',
    sessionCount: 3,
    sessions: [
      { n: 'F2', title: 'Arquitectura Medallion y decisión de almacenamiento',  type: 'Teoría + Lab', note: 'Diseño de arquitectura RetailPe en Fabric' },
      { n: 'F3', title: 'Delta Lake y el formato de tabla abierto en Fabric',   type: 'Teoría + Lab', note: 'Time Travel y recuperación ante fallos' },
      { n: 'F4', title: 'Ingesta a Bronze y Metadata Driven Pipelines',          type: 'Teoría + Lab', note: 'Construcción de Bronze en RetailPe' },
    ],
  },
  {
    track: 'Microsoft Fabric',
    trackColor: FABRIC,
    icon: Layers,
    color: FABRIC,
    tag: 'Fabric · Bloque 2',
    title: 'Silver en Fabric — Calidad y CDC',
    sessionCount: 4,
    sessions: [
      { n: 'F5', title: 'Notebooks, Spark e Idempotencia en Fabric',             type: 'Teoría + Lab', note: 'Ejecuciones múltiples sin duplicidad' },
      { n: 'F6', title: 'CDC y datos de llegada tardía',                          type: 'Teoría + Lab', note: 'Corrección de CDC en RetailPe' },
      { n: 'F7', title: 'Limpieza y calidad de datos — Silver I',                 type: 'Teoría + Lab', note: 'Construcción de Silver validado' },
      { n: 'F8', title: 'MERGE, Upserts y SCD — Silver II',                       type: 'Teoría + Lab', note: 'Historización e integración Silver' },
    ],
  },
  {
    track: 'Microsoft Fabric',
    trackColor: FABRIC,
    icon: BarChart3,
    color: FABRIC,
    tag: 'Fabric · Bloque 3',
    title: 'Gold en Fabric — Modelado y Enriquecimiento',
    sessionCount: 2,
    sessions: [
      { n: 'F9',  title: 'Modelado dimensional en Fabric',                        type: 'Teoría + Lab', note: 'Star Schema y diseño dimensional RetailPe' },
      { n: 'F10', title: 'Construcción y enriquecimiento de Gold',                type: 'Teoría + Lab', note: 'Construcción completa de Gold en Fabric' },
    ],
  },
  {
    track: 'Microsoft Fabric',
    trackColor: FABRIC,
    icon: Shield,
    color: FABRIC,
    tag: 'Fabric · Bloque 4',
    title: 'Orquestación, Observabilidad y CI/CD en Fabric',
    sessionCount: 4,
    sessions: [
      { n: 'F11', title: 'Orquestación de pipelines en Fabric',                   type: 'Teoría + Lab', note: 'Flujo Bronze → Silver → Gold' },
      { n: 'F12', title: 'Logging, observabilidad y robustez',                    type: 'Teoría + Lab', note: 'Framework de monitoreo en Fabric' },
      { n: 'F13', title: 'Testing de datos y Performance Engineering',             type: 'Teoría + Lab', note: 'Optimización de consultas en Fabric' },
      { n: 'F14', title: 'CI/CD y ambientes en Microsoft Fabric',                 type: 'Teoría + Lab', note: 'Promoción entre ambientes DEV/STG/PROD' },
    ],
  },
  {
    track: 'Microsoft Fabric',
    trackColor: FABRIC,
    icon: Activity,
    color: FABRIC,
    tag: 'Fabric · Bloque 5',
    title: 'Streaming, Power BI y Gobernanza en Fabric',
    sessionCount: 2,
    sessions: [
      { n: 'F15', title: 'Análisis en tiempo real: Eventstream y KQL',            type: 'Teoría + Lab', note: 'Streaming aplicado a RetailPe' },
      { n: 'F16', title: 'Gobernanza y consumo en Power BI sobre Fabric',         type: 'Teoría + Lab', note: 'Dashboard seguro sobre Gold' },
    ],
  },
  {
    track: 'Databricks',
    trackColor: DATABRICKS,
    icon: Puzzle,
    color: GOLD,
    tag: 'Módulo Fabric · Puente',
    title: 'Databricks + Fabric: integración y cierre',
    sessionCount: 1,
    sessions: [
      { n: 26, title: 'Databricks y Fabric: posicionamiento e integración', type: 'Teoría + Demo', note: 'Delta Sharing, Shortcuts y Mirroring — puente hacia el track Fabric' },
    ],
  },
  {
    track: 'Integración',
    trackColor: GOLD,
    icon: BookOpen,
    color: GOLD,
    tag: 'Proyecto Final',
    title: 'Proyecto final y defensa de arquitectura RetailPe',
    sessionCount: 1,
    sessions: [
      { n: '—', title: 'Defensa de arquitectura RetailPe end-to-end', type: 'Evaluación + Demo', note: 'Portafolio listo para entrevistas' },
    ],
  },
]

const TYPE_COLORS = {
  'Teoría': '#64748b',
  'Práctica': '#00A3FF',
  'Teoría + Práctica': '#7B2FBE',
  'Teoría + Lab': '#00B294',
  'Teoría + Demo': '#F4B942',
  'Demo + Práctica': '#7B2FBE',
  'Evaluación + Demo': '#FF3621',
  'Práctica': '#00A3FF',
}

/* ── Module item ──────────────────────────────────────────────────────────── */

function ModuleItem({ mod, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = mod.icon
  const isFabric = mod.track === 'Microsoft Fabric'
  const isIntegration = mod.track === 'Integración'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 7) * 0.06, ease: 'easeOut' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
          open ? 'border-white/15 bg-white/5' : 'border-white/6 bg-white/2 hover:border-white/12 hover:bg-white/4'
        }`}
          style={{ borderLeftColor: `${mod.trackColor}50`, borderLeftWidth: 2 }}
        >
          {/* Icon */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}35` }}
          >
            <Icon className="w-4 h-4" style={{ color: mod.color }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
                style={{ background: `${mod.trackColor}18`, color: mod.trackColor, border: `1px solid ${mod.trackColor}30` }}
              >
                {mod.track}
              </span>
              <span className="text-[10px] text-slate-600 font-semibold">{mod.tag}</span>
              <span className="text-[10px] text-slate-600">·</span>
              <span className="text-[10px] text-slate-600">{mod.sessionCount} {mod.sessionCount === 1 ? 'sesión' : 'sesiones'}</span>
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base leading-snug">{mod.title}</h3>
          </div>

          <ChevronDown
            className={`w-4 h-4 text-slate-500 shrink-0 mt-1.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 pt-1 ml-[52px] space-y-1.5">
              {mod.sessions.map((s) => {
                const typeColor = TYPE_COLORS[s.type] || '#64748b'
                return (
                  <div key={s.n} className="flex items-start gap-3 py-1.5 px-3 rounded-xl bg-white/2 border border-white/5">
                    <span className="text-xs text-slate-600 font-mono w-7 shrink-0 mt-0.5">
                      {typeof s.n === 'number' ? `#${String(s.n).padStart(2,'0')}` : s.n}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-slate-300 text-sm leading-snug">{s.title}</span>
                      {s.note && <span className="block text-xs text-slate-600 mt-0.5">{s.note}</span>}
                    </div>
                    <span
                      className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-0.5"
                      style={{ background: `${typeColor}18`, color: typeColor }}
                    >
                      {s.type}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Track separator ─────────────────────────────────────────────────────── */

function TrackHeader({ track, color, count }) {
  return (
    <div className="flex items-center gap-3 mt-8 mb-3 first:mt-0">
      <div className="h-px flex-1" style={{ background: `${color}30` }} />
      <div
        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
        style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
        {track}
        <span className="opacity-60 font-normal">·  {count} sesiones</span>
      </div>
      <div className="h-px flex-1" style={{ background: `${color}30` }} />
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────────────── */

export default function Curriculum() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const databricksModules   = modules.filter(m => m.track === 'Databricks')
  const fabricModules       = modules.filter(m => m.track === 'Microsoft Fabric')
  const integrationModules  = modules.filter(m => m.track === 'Integración')

  const dbSessions    = databricksModules.reduce((a, m) => a + m.sessionCount, 0)
  const fabSessions   = fabricModules.reduce((a, m) => a + m.sessionCount, 0)

  return (
    <section id="curriculum" className="py-24 px-4 bg-[#11162B] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/20 mb-4">
            Estructura del programa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            44 sesiones, <span className="gradient-text">un sistema completo</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Dos tracks en paralelo — cada semana combinas Databricks y Microsoft Fabric
            sobre el mismo proyecto integrador{' '}
            <span className="text-white font-semibold">RetailPe</span>.
          </p>

          {/* Track pills */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold"
              style={{ borderColor: `${DATABRICKS}40`, background: `${DATABRICKS}10`, color: DATABRICKS }}>
              <span className="w-2 h-2 rounded-full" style={{ background: DATABRICKS }} />
              Databricks · {dbSessions} sesiones
            </div>
            <span className="text-slate-700">+</span>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold"
              style={{ borderColor: `${FABRIC}40`, background: `${FABRIC}10`, color: FABRIC }}>
              <span className="w-2 h-2 rounded-full" style={{ background: FABRIC }} />
              Microsoft Fabric · {fabSessions} sesiones
            </div>
          </div>
        </motion.div>

        {/* Databricks track */}
        <TrackHeader track="Track Databricks" color={DATABRICKS} count={dbSessions} />
        <div className="space-y-2">
          {databricksModules.map((mod, i) => (
            <ModuleItem key={mod.tag} mod={mod} index={i} />
          ))}
        </div>

        {/* Fabric track */}
        <TrackHeader track="Track Microsoft Fabric" color={FABRIC} count={fabSessions} />
        <div className="space-y-2">
          {fabricModules.map((mod, i) => (
            <ModuleItem key={mod.tag} mod={mod} index={i} />
          ))}
        </div>

        {/* Integration */}
        <TrackHeader track="Integración y Proyecto Final" color={GOLD} count={2} />
        <div className="space-y-2">
          {integrationModules.map((mod, i) => (
            <ModuleItem key={mod.tag} mod={mod} index={i} />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-4"
        >
          {[
            { value: '44', label: 'sesiones en vivo' },
            { value: '132h', label: 'de formación' },
            { value: '4', label: 'meses de programa' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-4 rounded-xl bg-white/3 border border-white/8">
              <div className="text-2xl font-extrabold gradient-text mb-1">{value}</div>
              <div className="text-slate-400 text-xs">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FBE]/30 to-transparent" />
    </section>
  )
}
