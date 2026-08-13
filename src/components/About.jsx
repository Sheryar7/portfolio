import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0.45, x: -30, y: -10 }}
          animate={{ x: [-30, 20, -30], y: [-10, 10, -10], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.4, x: 20, y: 10 }}
          animate={{ x: [20, -20, 20], y: [10, -10, 10], opacity: [0.4, 0.75, 0.4] }}
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


        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="surface-card p-8"
          >
            <h3 className="text-3xl font-semibold mb-6">Professional Summary</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Full-Stack Developer with hands-on experience engineering AI-driven web applications,
              Retrieval-Augmented Generation (RAG) architectures,
              and scalable microservices using Next.js 15, React, NestJS,
              Supabase (pgvector), and MongoDB/PostgreSQL.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Backed by real-world frontend internship experience and end-to-end SaaS projects featuring vector search,
              full data-lifecycle cascade deletions, role-based access control (RBAC),
              and dynamic UI parsing with react-markdown.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Proficient in Gemini API embeddings and modern AI tools (Copilot, Claude) to accelerate development.
              Seeking a Full-Stack, Web Developer, or MERN role to contribute to production-grade systems.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="surface-card p-8"
            >
              <h3 className="text-3xl font-semibold mb-6">Education</h3>
              <p className="text-gray-400 font-semibold">Abasyn University, Peshawar</p>
              <p className="text-gray-400 mb-4">Bachelor of Software Engineering</p>
              <p className="text-sm text-gray-500">Graduated: September 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="surface-card p-8"
            >
              <h3 className="text-3xl font-semibold mb-6">Strengths</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• <b>Rapid Self-Learner & Adaptable:</b> Proven track record of independently mastering modern stacks (MERN, Next.js 15, NestJS, TypeScript) and quickly adapting to production environments.</li>
                <li>• <b>Full-Stack Systems Architecture:</b> Solid understanding of end-to-end web architectures—including RESTful API design, database modeling (Supabase/PostgreSQL, MongoDB), and modern server/client rendering patterns.</li>
                <li>• <b>Debugging & Problem Solving:</b> Strong hands-on capability in isolating and resolving complex TypeScript, state management, and production backend/build issues efficiently.</li>
                <li>• <b>AI and RAG(Retrieval-Augmented Generation) system integration:</b> Experienced in architecting Retrieval-Augmented Generation (RAG) pipelines, integrating vector databases (pgvector), generating LLM embeddings (Gemini API), and leveraging AI tools (Copilot, Claude) to build intelligent, context-aware web applications.</li>
                <li>• <b>Clean & Scalable Code Base:</b> Focused on writing modular, maintainable, and reusable component/service structures adhering to design patterns (MVC, NestJS modules, DTO validations).</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="surface-card p-8"
            >
              <h3 className="text-3xl font-semibold mb-6">Languages</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-400">
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
