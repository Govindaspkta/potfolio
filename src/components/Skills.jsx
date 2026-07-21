import { playSound } from '../utils/sounds'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend',
      skills: ['Python', 'Django', 'DRF','FastAPI', 'Flask', 'REST APIs', 'JWT Auth']
    },
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design']
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'SQLite', 'Redis', 'Database Design']
    },
    {
      category: 'Tools & Others',
      skills: ['Git/GitHub', 'Docker', 'Jupyter Notebook', 'Google OAuth', 'Linux']
    }
  ]

  const handleSkillHover = () => {
    playSound('hover')
  }

  const handleSkillClick = () => {
    playSound('click')
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <p className="skills-subtitle">Full-stack development with modern technologies</p>
        
        <div className="skills-container">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="skill-card"
                    style={{ animationDelay: `${(catIndex * 6 + index) * 0.05}s` }}
                    onMouseEnter={handleSkillHover}
                    onClick={handleSkillClick}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}