import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Layers, Zap, Database, GitBranch, Activity,
  Shield, Rocket, Brain, Grid3x3
} from 'lucide-react'

const pillars = [
  {
    icon: Layers,
    title: 'Patrones de diseño',
    desc: 'Metadata-driven ingestion, idempotencia, SCD Tipo 2, MERGE patterns y diseño de pipelines tolerantes a fallos.',
    color: '#F4B942',
  },
  {
    icon: Zap,
    title: 'Ingesta de datos',
    desc: 'JDBC, Kafka, CDC, Azure Data Factory, Autoloader. Todos los patrones reales de ingesta.',
    color: '#00A3FF',
  },
  {
    icon: Activity,
    title: 'Apache Spark',
    desc: 'Desde fundamentos hasta optimización avanzada. DataFrames, SQL, tuning, AQE.',
    color: '#00A3FF',
  },
  {
    icon: Database,
    title: 'Delta Lake',
    desc: 'ACID, Time Travel, Merge, Schema Evolution. Patrones de diseño de tablas Delta.',
    color: '#7B2FBE',
  },
  {
    icon: Activity,
    title: 'Streaming e Incremental',
    desc: 'Structured Streaming, DLT, procesamiento incremental y patrones de baja latencia.',
    color: '#7B2FBE',
  },
  {
    icon: Shield,
    title: 'Unity Catalog & Gobierno',
    desc: 'Control de acceso, linaje de datos, secrets, políticas de seguridad y cumplimiento.',
    color: '#F4B942',
  },
  {
    icon: GitBranch,
    title: 'CI/CD y Asset Bundles',
    desc: 'Pipelines de despliegue, Databricks Asset Bundles, automatización y buenas prácticas DevOps.',
    color: '#00A3FF',
  },
  {
    icon: Brain,
    title: 'IA sobre el Lakehouse',
    desc: 'Genie, RAG sobre datos propios, integración con modelos de lenguaje desde el Lakehouse.',
    color: '#7B2FBE',
  },
  {
    icon: Grid3x3,
    title: 'Microsoft Fabric End-to-End',
    desc: '17 sesiones dedicadas. Proyecto RetailPe completo: ingesta, transformación y visualización.',
    color: '#F4B942',
  },
]

function Card({ icon: Icon, title, desc, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 p-6 transition-all duration-300 hover:border-white/15 overflow-hidden"
    >
      {/* Hover glow top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
      />

      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      <h3 className="font-bold text-white text-base mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function WhatYouLearn() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-4 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#7B2FBE]/10 text-[#a56fd8] border border-[#7B2FBE]/20 mb-4">
            Contenido del programa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Qué vas a <span className="gradient-text">dominar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            9 pilares del Data Engineering moderno, cubiertos con profundidad real —
            no demos rápidos, sino comprensión de producción.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Card key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
