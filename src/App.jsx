import './styles/App.css'
import LanguageSwitcher from './components/LanguajeSwitcher.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './pages/Footer.jsx'

function App({ mode, onToggleTheme }) {

  return (
    <>
      <Navbar mode={mode} onToggleTheme={onToggleTheme} />
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
