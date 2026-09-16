import { motion } from 'framer-motion'
import { playSound } from '../utils/sounds'
import './Footer.css'

export default function Footer() {
  const handleLinkHover = () => {
    playSound('hover')
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Govinda Sapkota</h3>
            <p>Backend Developer & AI/ML Enthusiast</p>
            <p className="tagline">Building scalable systems with Python & Django</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <a href="#home" onMouseEnter={handleLinkHover}>Home</a>
            <a href="#projects" onMouseEnter={handleLinkHover}>Projects</a>
            <a href="#skills" onMouseEnter={handleLinkHover}>Skills</a>
            <a href="#contact" onMouseEnter={handleLinkHover}>Contact</a>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Contact</h4>
            <a href="mailto:sapgovinda05@gmail.com" onMouseEnter={handleLinkHover}>
              📧 sapgovinda05@gmail.com
            </a>
            <a href="tel:+9843974443" onMouseEnter={handleLinkHover}>
              📱 +977 9843974443
            </a>
            <a href="#" onMouseEnter={handleLinkHover}>
              📍 Kathmandu, Nepal
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Follow Me</h4>
            <a 
              href="https://github.com/Govindaspkta" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={handleLinkHover}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/govinda-sapkota" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={handleLinkHover}
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={handleLinkHover}
            >
              Twitter
            </a>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Govinda Sapkota. All rights reserved.</p>
          <p className="footer-credit">Designed & Built with ❤️</p>
        </motion.div>
      </div>
    </footer>
  )
}