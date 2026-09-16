import { motion } from 'framer-motion'
import { playSound } from '../utils/sounds'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hamro Awaj',
      description: 'Complaint management system for reporting and tracking issues',
      tech: ['Django', 'React', 'PostgreSQL', 'Redis'],
      status: 'Live',
      link: 'https://complaint-mgmnt-sys.vercel.app/',
      github: 'https://github.com/Govindaspkta/complaint-management-system',
      icon: '📢'
    },
    {
      id: 2,
      title: 'CRM System',
      description: 'Enterprise Customer Relationship Management built during internship',
      tech: ['Django', 'React', 'PostgreSQL', 'DRF'],
      status: 'Live',
      link: 'https://crm.autonomoustechnology.net/',
      github: '#',
      icon: '💼'
    },
    {
      id: 3,
      title: 'Stock Prediction Portal',
      description: 'AI-powered stock prediction with data analysis and visualization',
      tech: ['Jupyter', 'Django', 'React', 'Pandas', 'ML'],
      status: 'Complete',
      link: 'https://github.com/Govindaspkta/stock-prediction-portal',
      github: 'https://github.com/Govindaspkta/stock-prediction-portal',
      icon: '📈'
    },
    {
      id: 4,
      title: 'Travelling App',
      description: 'Travel booking application with Django templates and responsive design',
      tech: ['Django', 'HTML/CSS', 'SQLite', 'JavaScript'],
      status: 'Complete',
      link: 'https://github.com/Govindaspkta/Travel-Booking-Application',
      github: 'https://github.com/Govindaspkta/Travel-Booking-Application',
      icon: '✈️'
    },
    {
      id: 5,
      title: 'QuizMaster',
      description: 'Interactive quiz system with real-time leaderboards and statistics',
      tech: ['Flask', 'React', 'Redis', 'PostgreSQL'],
      status: 'Complete',
      link: 'https://github.com/Govindaspkta/Quiz-Master',
      github: 'https://github.com/Govindaspkta/Quiz-Master',
      icon: '🎯'
    },
    {
      id: 6,
      title: 'Online Book Store',
      description: 'E-commerce book store with inventory management and user authentication',
      tech: ['PHP', 'HTML/CSS', 'MySQL', 'JavaScript'],
      status: 'Complete',
      link: '#',
      github: '#',
      icon: '📚'
    }
  ]

  const stats = [
    {
      icon: '🚀',
      number: '8+',
      label: 'Projects Built',
      description: 'Full-stack applications'
    },
    {
      icon: '🌐',
      number: '2',
      label: 'Live Products',
      description: 'In production now'
    },
    {
      icon: '⭐',
      number: '20',
      label: 'GitHub Repos',
      description: 'Open source & projects'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">Full-stack applications showcasing backend engineering expertise</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              whileHover={{ y: -8 }}
            >
              <div className="project-icon">{project.icon}</div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className={`status-badge status-${project.status.toLowerCase()}`}>
                  {project.status === 'Live' && <span className="status-dot" />}
                  {project.status}
                </div>

                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn view-btn">
                    {project.link.includes('vercel') || project.link.includes('.net') ? '🌐 Live' : '💻 Code'}
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github-btn">
                    ⭐ GitHub
                  </a>
                )}
              </div>

              <div className="project-accent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="projects-stats-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="stats-intro">
            <h3>My Impact</h3>
            <p>Metrics that showcase my journey and dedication</p>
          </div>

          <div className="projects-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="projects-stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
                <div className="stat-glow" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}