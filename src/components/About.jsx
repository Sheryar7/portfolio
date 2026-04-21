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
              I’m a self-taught <strong>Full-Stack Developer</strong> specializing in the <strong>MERN</strong> stack. 
              I’ve built complex applications including a <strong>Learning Management System (LMS) </strong> 
              with <strong>role-based access control</strong>, <strong>authentication flows</strong>, and <strong>scalable backend architecture</strong>.<br/>

              From managing global state with <strong>Redux</strong> to optimizing performance using <strong>Zustand</strong>, 
              I focus on writing clean, maintainable code and building systems that scale.<br/>

              Currently, I’m expanding my skillset with modern technologies like 
              <strong> Next.js</strong>, <strong>TypeScript</strong>, <strong>Supabase</strong>, and <strong>PostgreSQL</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;