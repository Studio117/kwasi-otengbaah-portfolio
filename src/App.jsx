import './App.scss'
import ContactPage from './components/ContactPage/ContactPage'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <Skills />
      <ContactPage />
    </>
  )
}

export default App
