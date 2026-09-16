import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { playSound } from '../utils/sounds'
import './Contact.css'

emailjs.init('P3WrhznaY4EfsT1eH')

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = () => {
    playSound('hover')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send('service_wf1dt7q', 'template_48x87yn', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      })

      playSound('success')
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">Have a project or question? Let's connect!</p>
        </motion.div>

        {success && <div className="success-message">✅ Message sent successfully!</div>}
        {error && <div className="error-message">❌ {error}</div>}

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            required
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            required
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            required
            disabled={loading}
          />

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Sending...' : '✉️ Send Message'}
          </button>
        </motion.form>

      </div>
    </section>
  )
}