import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CTO, TechVision",
    image: "/images/client1.jpg", // replace with real images
    text: "Govinda is an exceptional backend engineer. He built a robust CRM system that scaled seamlessly and reduced our processing time by 60%.",
    rating: 5,
    company: "TechVision"
  },
  {
    name: "Anita Patel",
    role: "Product Manager, Nexus Labs",
    image: "/images/client2.jpg",
    text: "Working with Govinda was a pleasure. His expertise in Django and PostgreSQL helped us deliver a complex project ahead of schedule.",
    rating: 5,
    company: "Nexus Labs"
  },
  {
    name: "Suresh Khadka",
    role: "Founder, SmartFlow",
    image: "/images/client3.jpg",
    text: "Govinda's deep understanding of scalable architecture and clean code made him invaluable to our startup. Highly recommended!",
    rating: 5,
    company: "SmartFlow"
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
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}