import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Problem from './components/Problem'
import WhatYouLearn from './components/WhatYouLearn'
import Curriculum from './components/Curriculum'
import Methodology from './components/Methodology'
import ForWho from './components/ForWho'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import SoldOut from './components/SoldOut'
import CommunityHome from './components/CommunityHome'
import Eventos from './components/Eventos'

const DATASHOW_URL = 'https://daniel-datashow.vercel.app/es'

function Academy() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Problem />
        <WhatYouLearn />
        <Curriculum />
        <Methodology />
        <ForWho />
        <Instructors />
        <Schedule />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/academy') return <Academy />
  if (path === '/academy/soldout' || path === '/sold-out') return <SoldOut />
  if (path === '/eventos') return <Eventos />
  if (path === '/danieldatashow') {
    window.location.replace(DATASHOW_URL)
    return null
  }

  return <CommunityHome />
}
