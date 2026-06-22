import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Layers, Zap, Database, Activity,
  Shield, Brain, Grid3x3, BarChart3
} from 'lucide-react'

const pillars = [
  {
    icon: Layers,
    title: 'Patrones de diseño',
    desc: 'Metadata-driven ingestion, idempotencia, SCD Tipo 2, MERGE patterns y pipelines tolerantes a fallos — aplicados en ambas plataformas.',
    color: '#F4B942',
  },
  {
    icon: Database,
    title: 'Lakehouse con Delta Lake',
    desc: 'ACID, Time Travel, Merge, Schema Evolution y arquitectura Medallion desde cero en Databricks.',
    color: '#00A3FF',
  },
  {
    icon: Grid3x3,
    title: 'Microsoft Fabric de punta a punta',
    desc: 'OneLake, Lakehouses, Pipelines de datos, Notebooks Spark y Direct Lake. 17 sesiones dedicadas.',
    color: '#00B294',
  },
  {
    icon: Activity,
    title: 'Apache Spark real',
    desc: 'DataFrames, Spark SQL, optimización avanzada, AQE y tuning de producción en Databricks.',
    color: '#00A3FF',
  },
  {
    icon: Zap,
    title: 'Orquestación y CI/CD',
    desc: 'Databricks Asset Bundles, pipelines de despliegue y promoción de ambientes DEV/STG/PROD en Fabric y Databricks.',
    color: '#F4B942',
  },
  {
    icon: Activity,
    title: 'Streaming de datos',
    desc: 'Structured Streaming en Databricks y Eventstream + KQL en Microsoft Fabric para análisis en tiempo real.',
    color: '#7B2FBE',
  },
  {
    icon: Shield,
    title: 'Gobierno y seguridad',
    desc: 'Unity Catalog en Databricks y Sensitivity Labels, RLS, OLS y Endorsement en Microsoft Fabric.',
    color: '#F4B942',
  },
  {
    icon: BarChart3,
    title: 'Power BI sobre Fabric',
    desc: 'Modelado dimensional, Star Schema, Gold en Direct Lake y dashboards seguros sobre datos de producción.',
    color: '#00B294',
  },
  {
    icon: Brain,
    title: 'IA sobre el Lakehouse',
    desc: 'Genie Spaces, RAG sobre datos propios y desarrollo asistido con Claude Code desde el Lakehouse.',
    color: '#7B2FBE',
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
