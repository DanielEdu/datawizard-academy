import { MessageCircle, ExternalLink } from 'lucide-react'
import logoImg from '../assets/datawizard.png'

const DISCORD_URL  = 'https://discord.gg/bzH8Pjajv6'
const YOUTUBE_URL  = 'https://www.youtube.com/@DataWizardClub'
const LINKEDIN_URL = 'https://linkedin.com/company/data-wizard-club/'
const DATASHOW_URL = 'https://daniel-datashow.vercel.app/es'

function YoutubeIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
    </svg>
  )
}

function LinkedinIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const socials = [
  { label: 'Discord',  href: DISCORD_URL,  Icon: MessageCircle, color: '#7B2FBE' },
  { label: 'YouTube',  href: YOUTUBE_URL,  Icon: YoutubeIcon,   color: '#FF0000' },
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedinIcon,  color: '#0A66C2' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Data Wizard" className="h-8 w-8 object-contain" />
              <span className="font-bold text-white">
                Data Wizard <span className="text-[#00A3FF]">Academy</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm">@DataWizard</p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 transition-all duration-200 text-slate-400 hover:text-white text-sm font-medium"
              >
                <Icon className="w-4 h-4" style={{ color }} />
                {label}
              </a>
            ))}

            {/* Daniel DataShow */}
            <a
              href={DATASHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#00A3FF]/20 bg-[#00A3FF]/5 hover:bg-[#00A3FF]/10 transition-all duration-200 text-[#00A3FF] hover:text-white text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Daniel DataShow
            </a>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#curriculum" className="hover:text-slate-300 transition-colors">Programa</a>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Precio</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">FAQ</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Data Wizard Academy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
