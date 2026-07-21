import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  // Timeline events
  const timeline = [
    {
      year: '2021',
      title: 'Started Learning',
      desc: 'First line of Python code'
    },
    {
      year: '2022',
      title: 'Built First Backend',
      desc: 'Django project deployed'
    },
    {
      year: '2023',
      title: 'Full Stack Journey',
      desc: 'Added React to arsenal'
    },
    {
      year: '2024',
      title: 'Internship & Live Projects',
      desc: 'CRM system in production'
    }
  ]

  // Developer stats
  const stats = [
    { number: '200+', label: 'Hours Coding Weekly' },
    { number: '6+', label: 'Production Projects' },
    { number: '15+', label: 'Technologies' },
    { number: '1', label: 'Live Product' }
  ]

  // Dev philosophy
  const philosophy = [
    { icon: '⚡', title: 'Clean Code', desc: 'Readable, maintainable, efficient' },
    { icon: '🔗', title: 'Scalability', desc: 'Systems that grow with demand' },
    { icon: '🤝', title: 'Collaboration', desc: 'Shipping, not solo projects' },
    { icon: '📚', title: 'Always Learning', desc: 'Staying ahead of the curve' }
  ]

  // Fun facts
  const funFacts = [
    '🐧 Linux enthusiast since 2022',
    '☕ 3 cups of coffee = 1 feature completed',
    '🎧 Lo-fi beats while debugging',
    '🚀 Favorite error: "Works on my machine"',
    '📖 Currently reading Clean Code',
    '🎮 Indie game dev side projects'
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
            <p>From curious learner to full-stack developer building real products</p>
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
            <img src="https://via.placeholder.com/280" alt="Govinda Sapkota" />
          </div>
          
          <div className="profile-text">
            <h3>Govinda Sapkota</h3>
            <p className="role">Backend Developer & AI Enthusiast</p>
            <p className="bio">
              Building robust systems and scalable backends. Final year BCA student at Madan Bhandari Memorial College. 
              Interning at Autonomous Technology, shipping real products that solve real problems.
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

        {/* Timeline Section */}
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
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
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
          <h3>Currently</h3>
          <div className="focus-items">
            <div className="focus-item">
              <span className="focus-emoji">📖</span>
              <div>
                <h4>Learning</h4>
                <p>Advanced Django patterns, AI/ML applications</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-emoji">💼</span>
              <div>
                <h4>Working On</h4>
                <p>CRM system at Autonomous Technology</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-emoji">🚀</span>
              <div>
                <h4>Building</h4>
                <p>Multiple full-stack projects for portfolio</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}