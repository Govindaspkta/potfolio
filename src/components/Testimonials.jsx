import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Kiran Adhikari",
    role: "Lecturer & AI Instructor",
    image: "/images/client1.jpg", // replace with real images
    text: "Govinda built a CRM backend that scaled without a hitch. His grasp of Django and clean API design stood out immediately.",
    rating: 5,
    company: ""
  },
  {
    name: "Sabina Rai",
    role: "Startup Founder",
    image: "/images/client2.jpg",
    text: "He delivered a complex PostgreSQL-backed system ahead of schedule and communicated clearly at every step.",
    rating: 5,
    company: ""
  },
  {
    name: "Prakash Shrestha",
    role: "Civil Engineer",
    image: "/images/client3.jpg",
    text: "Reliable, detail-oriented, and genuinely invested in getting the architecture right. Would work with him again.",
    rating: 5,
    company: ""
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>What Clients Say</h2>
          <p>Real feedback from people I've worked with</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="quote-icon">
                <Quote size={32} />
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffd700" color="#ffd700" />
                ))}
              </div>

              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-img" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  {testimonial.company && <span>{testimonial.company}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}