import { useState } from 'react'
import { playSound } from '../utils/sounds'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    playSound('click')
    setOpen(false)
  }

  const handleHover = () => {
    playSound('hover')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand" onClick={handleNavClick}>
          ⚡ Govinda
        </a>
        
        <button 
          className={`hamburger ${open ? 'active' : ''}`} 
          onClick={() => {
            playSound('click')
            setOpen(!open)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${open ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleNavClick} onMouseEnter={handleHover}>Home</a>
          <a href="#about" className="nav-link" onClick={handleNavClick} onMouseEnter={handleHover}>About</a>
          <a href="#projects" className="nav-link" onClick={handleNavClick} onMouseEnter={handleHover}>Projects</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick} onMouseEnter={handleHover}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
