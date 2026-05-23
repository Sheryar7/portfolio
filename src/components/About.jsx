import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0.45, x: -30, y: -10 }}
          animate={{ x: [ -30, 20, -30 ], y: [ -10, 10, -10 ], opacity: [ 0.45, 0.8, 0.45 ] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.4, x: 20, y: 10 }}
          animate={{ x: [ 20, -20, 20 ], y: [ 10, -10, 10 ], opacity: [ 0.4, 0.75, 0.4 ] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="gradient-text">
              <HighlightText>Resume</HighlightText>
            </span>
          </h2>

          <p className="text-muted mt-4 text-sm tracking-wide max-w-2xl mx-auto">
            Self-taught full-stack developer with hands-on experience building scalable web applications and production-ready systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="surface-card p-8"
          >
            <h3 className="text-3xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Self-taught Full-Stack Developer with hands-on experience building scalable web applications using Next.js, React, Node.js, Express, Supabase, PostgreSQL, and MongoDB.
              Strong understanding of modern SaaS architecture, authentication systems, REST APIs, role-based access control, and reusable frontend/backend systems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Recently built and deployed a modern Learning Management System (LMS) using Next.js App Router, TypeScript, Supabase, and Tailwind CSS, focusing on scalable architecture, protected dashboards, curriculum management, and responsive SaaS UI patterns.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Actively seeking a remote internship or junior full-stack developer role to contribute to real-world software systems and continue growing in modern web engineering.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="surface-card p-8"
            >
              <h3 className="text-3xl font-semibold mb-6">Education</h3>
              <p className="text-gray-300 font-semibold">Abasyn University, Peshawar</p>
              <p className="text-gray-400 mb-4">Bachelor of Software Engineering</p>
              <p className="text-sm text-gray-500">Graduated: September 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="surface-card p-8"
            >
              <h3 className="text-3xl font-semibold mb-6">Strengths</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Strong self-learning ability and independent development.</li>
                <li>• Hands-on backend debugging and production problem solving.</li>
                <li>• Understanding of scalable frontend/backend architecture.</li>
                <li>• Fast learner with a consistent growth mindset.</li>
                <li>• Able to work independently and adapt quickly.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="surface-card p-8"
            >
              <h3 className="text-3xl font-semibold mb-6">Languages</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <span>English</span>
                <span>Urdu</span>
                <span>Pashto</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
