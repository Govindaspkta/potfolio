import { motion } from 'framer-motion'
import { playSound } from '../utils/sounds'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend',
      color: '#c91b68',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Django', level: 92 },
        { name: 'DRF', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 88 },
        { name: 'REST APIs', level: 94 },
        { name: 'JWT Auth', level: 90 }
      ]
    },
    {
      category: 'Data Science',
      color: '#20d9a3',
      icon: '📊',
      skills: [
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 88 },
        { name: 'Matplotlib', level: 86 },
        { name: 'Seaborn', level: 82 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'Jupyter Notebook', level: 88 }
      ]
    },
    {
      category: 'Database',
      color: '#809fff',
      icon: '💾',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'SQLite', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Database Design', level: 88 },
        { name: 'Query Optimization', level: 86 }
      ]
    },
    {
      category: 'Tools & DevOps',
      color: '#ffa500',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'Google OAuth', level: 86 },
        { name: 'Linux', level: 87 },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const handleSkillHover = () => {
    playSound('hover')
  }

  const handleSkillClick = () => {
    playSound('click')
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Technical Arsenal</h2>
          <p className="skills-subtitle">
            Backend engineering, data science, and database expertise
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="skills-grid-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              variants={categoryVariants}
              style={{ '--category-color': category.color }}
            >
              {/* Category Header */}
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>

              {/* Skills in this category */}
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={skillVariants}
                    transition={{ delay: skillIndex * 0.05 }}
                    onMouseEnter={handleSkillHover}
                    onClick={handleSkillClick}
                    whileHover={{ y: -4 }}
                  >
                    {/* Skill Name */}
                    <div className="skill-name">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="stat">
            <div className="stat-number">22+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-number">4</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-number">8+</div>
            <div className="stat-label">Projects Built</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}