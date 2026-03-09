import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import LanguageSwitcher from './components/LanguajeSwitcher.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
      <LanguageSwitcher sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }} />
    </>
  )
}

export default App
