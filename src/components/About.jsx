import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0.45, x: -30, y: -10 }}
          animate={{ x: [-30, 20, -30], y: [-10, 10, -10], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] left-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/10 blur-[100px] sm:blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.4, x: 20, y: 10 }}
          animate={{ x: [20, -20, 20], y: [10, -10, 10], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-150px] right-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-500/10 blur-[100px] sm:blur-[120px] rounded-full"
        />
      </div>

      {/* FULL WIDTH CONTAINER WITH MATCHING PADDING */}
      <div className="w-full px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            <span className="gradient-text">
              <HighlightText>Resume</HighlightText>
            </span>
          </h2>
        </motion.div>

        {/* FULL WIDTH GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full items-stretch">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="surface-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                Professional Summary
              </h3>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
                Full-Stack Software Engineer with hands-on expertise building production-ready web applications, microservices, containerized deployments, and AI-driven systems. Specializes in modern JavaScript/TypeScript ecosystems across Next.js 15, React, NestJS, Docker, Redis, Supabase (pgvector), and relational databases (PostgreSQL).
              </p>

              <div className="space-y-4 mb-5">
                <div>
                  <h4 className="text-blue-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">
                    Key Capabilities & Systems Engineering
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Demonstrated track record transitioning from modular frontend systems to end-to-end full-stack and microservice architectures. Skilled in containerizing multi-tier environments with Docker Compose, implementing sub-millisecond cache-aside strategies with Redis, handling asynchronous analytics pipelines, and securing RESTful APIs with RBAC, DTO validation, and TypeORM.
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">
                    Architecture & AI Engineering Focus
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Experienced in building Retrieval-Augmented Generation (RAG) pipelines leveraging vector embeddings (Gemini API) and Supabase <code className="text-[11px] sm:text-xs px-1 py-0.5 rounded bg-blue-500/10">pgvector</code> for similarity searching. Focuses on system reliability, high throughput caching, isolated container networking, and clean separation of concerns using modular pattern-driven architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-emerald-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">
                Professional Objective
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Seeking a Full-Stack, Web Developer, or Backend Software Engineering role in a high-growth team to deliver scalable microservices, containerized infrastructure, and performant web products.
              </p>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="surface-card p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Education</h3>
              <p className="text-gray-500 font-semibold text-base sm:text-lg">Abasyn University, Peshawar</p>
              <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">Bachelor of Software Engineering</p>
              <p className="text-xs sm:text-sm text-gray-500">Graduated: September 2023</p>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="surface-card p-6 sm:p-8 rounded-2xl flex-1"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Strengths</h3>
              <ul className="space-y-3 text-gray-500 text-xs sm:text-sm leading-relaxed">
                <li>• <b>Rapid Self-Learner & Adaptable:</b> Proven track record of independently mastering modern stacks (MERN, Next.js 15, NestJS, TypeScript) and quickly adapting to production environments.</li>
                <li>• <b>Full-Stack Systems Architecture:</b> Solid understanding of end-to-end web architectures—including RESTful API design, database modeling (Supabase/PostgreSQL, MongoDB), and modern server/client rendering patterns.</li>
                <li>• <b>Debugging & Problem Solving:</b> Strong hands-on capability in isolating and resolving complex TypeScript, state management, and production backend/build issues efficiently.</li>
                <li>• <b>AI and RAG Integration:</b> Experienced in architecting Retrieval-Augmented Generation (RAG) pipelines, integrating vector databases (pgvector), generating LLM embeddings (Gemini API), and leveraging AI tools (Copilot, Claude) to build intelligent applications.</li>
                <li>• <b>Clean & Scalable Code Base:</b> Focused on writing modular, maintainable, and reusable component/service structures adhering to design patterns (MVC, NestJS modules, DTO validations).</li>
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="surface-card p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-gray-500 text-sm sm:text-base">
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