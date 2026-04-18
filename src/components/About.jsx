import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/10">
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
            <p className="text-gray-400 text-lg leading-relaxed text-center balance">
              I am a dedicated <strong>MERN Stack Developer</strong> with a passion for 
              building scalable, real-world applications. After developing 
              <strong> SkillForge</strong>, a comprehensive Learning Management System 
              using <strong>Redux</strong> for state management, I transitioned to 
              exploring lightweight architectural patterns.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed text-center mt-6 balance">
              This led me to build a specialized <strong>Authentication System</strong> leveraging 
              <strong> Zustand</strong> to optimize boilerplate and performance. My journey 
              includes deep-diving into state management through dedicated 
              e-commerce projects. I am currently focused on advancing my stack toward 
              <strong> Next.js, TypeScript, and PostgreSQL</strong> to build the next 
              generation of high-performance web solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;