import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="section flex items-center">

      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Building <span className="gradient-text">Modern Web Apps</span> <br />
            with MERN Stack
          </h1>

          <p className="text-gray-400 mt-4">
            I create scalable, full-stack applications with clean UI and powerful backend systems.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
            <a href="/Sheryar-Khan-CV.pdf" className="btn-outline">Download CV</a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-6 rounded-2xl"
        >
          <p className="text-sm text-gray-400">Currently Working On</p>
          <h3 className="text-xl font-semibold mt-2">SkillForge LMS</h3>
          <p className="text-gray-400 mt-2">
            Full-featured LMS platform with authentication, dashboards & payments.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;