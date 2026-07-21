import { playSound } from '../utils/sounds'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Meor Fare',
      description: 'Real-time ride-sharing system with Redis caching and Google OAuth',
      tech: ['Django', 'React', 'PostgreSQL', 'Redis', 'Google Auth'],
      status: 'In Progress',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'CRM System',
      description: 'Complete Customer Relationship Management built during internship',
      tech: ['Django', 'React', 'PostgreSQL', 'DRF'],
      status: 'Completed',
      link: 'https://crm.autonomoustechnology.net/',
      isExternal: true
    },
    {
      id: 3,
      title: 'Stock Prediction Portal',
      description: 'AI-powered stock prediction with data analysis and visualization',
      tech: ['Jupyter', 'Django', 'React', 'ML'],
      status: 'Completed',
      link: 'https://github.com/Govindaspkta/stock-prediction-portal',
      github: 'https://github.com/Govindaspkta/stock-prediction-portal',
      isExternal: true
    },
    {
      id: 4,
      title: 'Travelling App',
      description: 'Simple travel booking application with Django templates',
      tech: ['Django', 'HTML/CSS', 'SQLite', 'JavaScript'],
      status: 'Completed',
      link: 'https://github.com/Govindaspkta/Travel-Booking-Application',
      github: 'https://github.com/Govindaspkta/Travel-Booking-Application',
      isExternal: true
    },
    {
      id: 5,
      title: 'QuizMaster',
      description: 'Interactive quiz system with real-time leaderboards and stats',
      tech: ['Flask', 'React', 'Redis', 'PostgreSQL'],
      status: 'Completed',
      link: 'https://github.com/Govindaspkta/Quiz-Master',
      github: 'https://github.com/Govindaspkta/Quiz-Master',
      isExternal: true
    },
    {
      id: 6,
      title: 'Aetherix',
      description: 'Complaints management system with JWT auth and Google OAuth',
      tech: ['Django REST', 'React', 'PostgreSQL', 'JWT'],
      status: 'Completed',
      link: '#',
      github: '#'
    }
  ]

  const handleCardHover = () => {
    playSound('hover')
  }

  const handleCardClick = () => {
    playSound('click')
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">6+ complete projects showcasing full-stack expertise</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onMouseEnter={handleCardHover}
              onClick={handleCardClick}
            >
              <div className="project-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="project-back">
                <h4>Tech Stack</h4>
                <div className="tech-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      className="project-link"
                      target={project.isExternal ? '_blank' : '_self'}
                      rel={project.isExternal ? 'noopener noreferrer' : ''}
                    >
                      {project.link.includes('crm.') ? 'View Live' : 'GitHub Repo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-stats">
          <div className="stat">
            <h3>6+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>
          <div className="stat">
            <h3>4</h3>
            <p>GitHub Repos</p>
          </div>
        </div>
      </div>
    </section>
  )
}