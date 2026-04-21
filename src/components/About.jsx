import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const About = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text mb-8">
            <HighlightText>About Me</HighlightText>
          </h2>

          <div className="max-w-3xl mx-auto px-4">
            <p className="text-gray-500 text-lg leading-relaxed text-center balance">
              Self-taught <strong>MERN Stack Developer</strong> with hands-on experience building full-stack web applications using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. 
              Strong understanding of authentication systems, REST APIs, and role-based access control.<br/>

              Built multiple real-world projects including a <strong>Learning Management System (LMS)</strong>, 
              a <strong>Authentication System</strong>, and a <strong>State Management Implementation</strong> using <strong>Redux</strong> and <strong>Zustand</strong>.<br/>

              Currently expanding skills in modern technologies including <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Supabase</strong>, and <strong>PostgreSQL</strong>.<br/>

              Seeking a internship or junior developer role where I can contribute, 
              learn real-world development practices, and grow in a professional environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;