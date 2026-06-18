import { motion } from 'framer-motion'
import databricksImg from '../assets/logos/databricks.png'
import fabricImg from '../assets/logos/fabric.png'
import azureImg from '../assets/logos/azure.png'
import sparkImg from '../assets/logos/spark.webp'
import deltaLakeImg from '../assets/logos/deltalake.svg'
import kafkaImg from '../assets/logos/kafka.png'
import dataFactoryImg from '../assets/logos/datafactory.png'
import claudeImg from '../assets/logos/claude.png'
import onelakeImg from '../assets/logos/onelake.webp'

/* ── Remaining SVG logo (no PNG yet) ────────────────────────────────────── */

function PowerBILogo() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-11 h-11">
      <rect x="6"  y="22" width="6" height="12" rx="1" fill="#F2C811"/>
      <rect x="14" y="16" width="6" height="18" rx="1" fill="#F2C811" opacity="0.85"/>
      <rect x="22" y="10" width="6" height="24" rx="1" fill="#F2C811" opacity="0.7"/>
      <rect x="30" y="6"  width="5" height="28" rx="1" fill="#F2C811" opacity="0.55"/>
    </svg>
  )
}

/* ── Tech list ──────────────────────────────────────────────────────────── */

const techs = [
  { name: 'Databricks',    src: databricksImg,   bg: '#FF3621' },
  { name: 'Apache Spark',  src: sparkImg,         bg: '#E25A1C' },
  { name: 'Delta Lake',    src: deltaLakeImg,     bg: '#00A3FF' },
  { name: 'MS Fabric',     src: fabricImg,        bg: '#00B294' },
  { name: 'Azure',         src: azureImg,         bg: '#0078D4' },
  { name: 'Apache Kafka',  src: kafkaImg,         bg: '#231F20' },
  { name: 'Data Factory',  src: dataFactoryImg,   bg: '#0078D4' },
  { name: 'Power BI',      svg: PowerBILogo,      bg: '#F2C811' },
  { name: 'Claude Code',   src: claudeImg,         bg: '#D97706' },
  { name: 'OneLake',       src: onelakeImg,        bg: '#0078D4' },
]

/* ── Component ─────────────────────────────────────────────────────────── */

export default function TechStack() {
  return (
    <section className="py-10 px-4 bg-[#0D1117] border-y border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs text-slate-600 uppercase tracking-[0.25em] font-semibold mb-8">
          Tecnologías que dominarás
        </p>

        <div className="grid grid-cols-5 gap-y-6 gap-x-3 sm:gap-x-4">
          {techs.map((tech, i) => {
            const Logo = tech.svg
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group flex flex-col items-center gap-2"
              >
                <div
                  className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${tech.bg}18`,
                    border: `1px solid ${tech.bg}35`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 0 18px ${tech.bg}45`
                    e.currentTarget.style.borderColor = `${tech.bg}70`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.borderColor = `${tech.bg}35`
                  }}
                >
                  {tech.src
                    ? <img src={tech.src} alt={tech.name} className="w-11 h-11 object-contain" />
                    : <Logo />
                  }
                </div>
                <span className="h-8 flex items-center text-slate-500 text-xs font-medium group-hover:text-slate-300 transition-colors text-center leading-tight max-w-[72px]">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
