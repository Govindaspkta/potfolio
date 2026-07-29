import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
            <Testimonials />

      <Contact />
      <Footer />
  
    </>
  )
}

export default App