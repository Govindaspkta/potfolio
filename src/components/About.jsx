import { motion } from 'framer-motion'
import './About.css'
import profileImg from "../assets/govinda_spkta.jpeg";  


export default function About() {
  // Timeline events - Complete Journey
  const timeline = [
    {
      year: '2024 End',
      title: 'Learned Java & Spring Boot',
      desc: 'Enterprise backend frameworks, microservices',
      type: 'milestone'
    },
    {
      year: '2025',
      title: 'Started Learning Python',
      desc: 'First Python programming language, fundamentals',
      type: 'milestone'
    },
    {
      year: '2025',
      title: 'College Projects',
      desc: 'Building projects for coursework and learning',
      type: 'college'
    },
    {
      year: '2025 Nov - 2026 Mar',
      title: 'Internship at Autonomous Tech',
      desc: 'Backend Developer - Built production CRM system with Django',
      type: 'internship'
    },
    {
      year: '2026',
      title: 'Personal Projects',
      desc: 'Hamro Awaj, Stock Prediction, Quiz Master, Travel App',
      type: 'personal'
    },
    {
      year: '2026 Now',
      title: 'Mastering Backend & AI',
      desc: 'Advanced Django, AI/ML integration, System Design',
      type: 'achievement'
    }
  ]

  // Developer stats
  const stats = [
    { number: '300+', label: 'Hours Coding Weekly' },
    { number: '6+', label: 'Production Projects' },
    { number: '22+', label: 'Technologies' },
    { number: '2', label: 'Live Products' }
  ]

  // Dev philosophy
  const philosophy = [
    { icon: '⚡', title: 'Clean Code', desc: 'Readable, maintainable, efficient systems' },
    { icon: '🤖', title: 'AI Integration', desc: 'Leveraging ML to solve problems' },
    { icon: '🔗', title: 'Scalability', desc: 'Systems that grow with demand' },
    { icon: '📚', title: 'Always Learning', desc: 'Latest tech & best practices' }
  ]

  // Fun facts
  const funFacts = [
    '🐧 Linux enthusiast & command line wizard',
    '☕ 3 cups of coffee = 1 production feature',
    '🎧 Lo-fi beats while debugging at 2 AM',
    '🚀 Favorite error: "Works perfectly on my machine"',
    '🤖 Obsessed with AI/ML applications',
    '📊 Data science & visualization enthusiast'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="about" id="about">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="about-hero"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-intro">
            <h2>About My Journey</h2>
            <p>From Java & Python learner to full-stack backend engineer mastering AI integration</p>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="about-profile"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-image">
            <img src={profileImg} alt="Govinda Sapkota" />
          </div>
          <div className="profile-text">
            <h3>Govinda Sapkota</h3>
            <p className="role">Backend Developer & AI/ML Enthusiast</p>
            <p className="bio">
             BCA student building scalable backend systems with modern technologies. Recently completed internship as Backend Developer at Autonomous Technology where I shipped a production CRM system. Currently mastering Backend development with AI/ML integration and data science.
            </p>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-card"
              variants={itemVariants}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section - Enhanced */}
        <motion.div 
          className="timeline-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">My Journey</h3>
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`timeline-item timeline-${item.type}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-type-badge">{item.type}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="philosophy-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">My Philosophy</h3>
          <motion.div 
            className="philosophy-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {philosophy.map((item, i) => (
              <motion.div 
                key={i}
                className="philosophy-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="philosophy-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div 
          className="funfacts-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">Fun Facts</h3>
          <motion.div 
            className="funfacts-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {funFacts.map((fact, i) => (
              <motion.div 
                key={i}
                className="funfact-item"
                variants={itemVariants}
              >
                {fact}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Current Focus */}
        <motion.div 
          className="current-focus"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Currently Focused On</h3>
          <div className="focus-items">
            <div className="focus-item">
              <span className="focus-emoji">🤖</span>
              <div>
                <h4>AI/ML Integration</h4>
                <p>Building intelligent backend systems with TensorFlow, scikit-learn</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-emoji">⚡</span>
              <div>
                <h4>Backend Mastery</h4>
                <p>FastAPI, Django, React, databases, caching strategies</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-emoji">🎯</span>
              <div>
                <h4>Seeking Opportunities</h4>
                <p>Full-time Backend / Freelancing</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}