import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

import HeroDashboard from "./HeroDashboard";
import { playSound } from "../../utils/sounds";
import "./Hero.css";

const technologies = [
  "Python",
  "Django",
  "Django REST",
  "PostgreSQL",
  "Odoo",
  "React",
];

export default function Hero() {
  const handleProjects = () => {
    playSound("success");

    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">

      <div className="hero-grid-bg"></div>

      <div className="hero-glow hero-glow-1"></div>

      <div className="hero-glow hero-glow-2"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <motion.div
            className="availability"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >

            <Sparkles size={16} />

            Available for Full-Time & Freelance

          </motion.div>

          <motion.p
            className="hero-greeting"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >

            Hi, I'm

          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: .1 }}
          >

            Govinda
            <br />
            <span>Sapkota</span>

          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: .2 }}
          >
            Python Backend Engineer

            specializing in scalable APIs,
            enterprise CRM systems,
            and modern backend architecture.

          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: .3 }}
          >

            I specialize in Django, Django REST Framework,
            PostgreSQL and Odoo, with practical experience
            building CRM solutions during my backend internship.
            I'm passionate about designing reliable backend
            architectures that solve real business problems.

          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
          >

            <button
              className="hero-btn-primary"
              onClick={handleProjects}
            >

              Explore Projects

              <ArrowRight size={18} />

            </button>

            <a
              href="/resume.pdf"
              className="hero-btn-secondary"
              download
            >

              <Download size={18} />

              Resume

            </a>

          </motion.div>

          <motion.div
            className="hero-tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
          >

            {technologies.map((tech) => (

              <span key={tech}>

                {tech}

              </span>

            ))}

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <HeroDashboard />

      </div>

    </section>
  );
}