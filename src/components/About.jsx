import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      
      <div className="container-custom text-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">
            About Me
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400">
            I'm a MERN Stack Developer with experience building full-stack
            applications like a Learning Management System (SkillForge).
            I enjoy backend development, APIs, and solving real-world problems.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default About;