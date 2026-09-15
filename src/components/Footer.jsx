import { playSound } from '../utils/sounds'
import './Footer.css'


export default function Footer() {
  const handleLinkHover = () => {
    playSound('hover')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Govinda Sapkota</h3>
            <p>Python Backend Developer | Django |</p>
          </div>
          
          <div className="footer-section">
            <h4>Links</h4>
            <a href="#home" onMouseEnter={handleLinkHover}>Home</a>
            <a href="#projects" onMouseEnter={handleLinkHover}>Projects</a>
            <a href="#contact" onMouseEnter={handleLinkHover}>Contact</a>
          </div>
          
          <div className="footer-section">
            <h4>Socials</h4>
            <a href="https://github.com/Govindaspkta" onMouseEnter={handleLinkHover}>GitHub</a>
<a href="https://www.linkedin.com/in/govinda-sapkota" target="_blank" rel="noopener noreferrer"onMouseEnter={handleLinkHover}>LinkedIn</a>            <a href="#" onMouseEnter={handleLinkHover}>Twitter</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Govinda Sapkota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
