import { motion } from "framer-motion";
import { Briefcase, Database, Server, ShieldCheck } from "lucide-react";
import "./Hero.css";
import avatar from "../../assets/govinda.png";

const skills = [
  { name: "Python", level: 95 },
  { name: "Django", level: 92 },
  { name: "DRF", level: 90 },
  { name: "PostgreSQL", level: 88 },
];

export default function HeroDashboard() {
  return (
    <motion.div className="hero-dashboard" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <div className="profile-card">
        <div className="profile-image">
          <img src={avatar} alt="Govinda Sapkota" />
        </div>
        <h2>Govinda Sapkota</h2>
        <p>Python Backend Engineer</p>
        <div className="profile-status">
          <span></span> Available for Work
        </div>
      </div>

      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">Current Position</span>
          <h3>Backend Engineer</h3>
          <p>Building scalable business software.</p>
        </div>
        <div className="status-circle"></div>
      </div>

      <div className="experience-card">
        <Briefcase size={18} />
        <div>
          <strong>Autonomous Technology</strong>
          <span>Backend Developer Intern</span>
        </div>
      </div>

      <div className="dashboard-skills">
        {skills.map(skill => (
          <div className="dashboard-skill" key={skill.name}>
            <div className="dashboard-skill-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="dashboard-progress">
              <motion.div className="dashboard-progress-fill" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.2 }} />
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-footer">
        <div><Server size={16} /> REST APIs</div>
        <div><Database size={16} /> PostgreSQL</div>
        <div><ShieldCheck size={16} /> Authentication</div>
      </div>
    </motion.div>
  );
}