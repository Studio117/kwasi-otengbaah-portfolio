import ContactPage from '../../components/ContactPage/ContactPage'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import './HomePage.scss'

import React from 'react'

function HomePage() {
  return (
      <div>
          <HeroSection />
          <Projects />
          <Skills />
          <ContactPage />
          <Footer />
    </div>
  )
}

export default HomePage 