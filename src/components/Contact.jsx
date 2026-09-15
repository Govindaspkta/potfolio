import { useState } from 'react'
import { playSound } from '../utils/sounds'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = () => {
    playSound('hover')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    playSound('success')
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have a project or question? Let's connect!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            required
          ></textarea>
          
          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="#" className="social-link" onMouseEnter={() => playSound('hover')}>GitHub</a>
          <a href="www.linkedin.com/in/govinda-sapkota" className="social-link" onMouseEnter={() => playSound('hover')}>LinkedIn</a>
          <a href="#" className="social-link" onMouseEnter={() => playSound('hover')}>Twitter</a>
        </div>
      </div>
    </section>
  )
}
