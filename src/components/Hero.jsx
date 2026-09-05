import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full flex items-center min-h-[90vh] relative overflow-hidden py-12 md:py-16">

      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] md:top-[-200px] md:left-[-200px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 blur-[90px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] md:bottom-[-200px] md:right-[-200px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 blur-[90px] md:blur-[120px] rounded-full" />
      </div>

      {/* MATCHING FULL WIDTH CONTAINER */}
      <div className="w-full px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-full flex flex-col justify-between"
        >
          <div>
            {/* Header + Profile Image Container */}
            <div className="flex items-center gap-4 sm:gap-5 mb-4 md:mb-6">
              <div className="relative shrink-0">
                <img
                  src="/Sheryar_Khan_Picture.png"
                  alt="Sheryar Khan"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-blue-500/30 shadow-lg shadow-blue-500/10"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 border-2 border-slate-950 rounded-full" />
              </div>

              <div>
                <p className="text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase text-muted mb-1">
                  Full-Stack Developer
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  Sheryar Khan
                </h1>
              </div>
            </div>

            <p className="mt-3 md:mt-4 text-muted text-lg sm:text-xl md:text-2xl font-semibold text-white/90 leading-snug">
              Next.js • MERN • Supabase • Nest.js • TypeScript
            </p>

            <p className="text-muted mt-6 md:mt-8 text-base md:text-lg leading-relaxed">
              Self-taught Full-Stack Developer building scalable web applications, microservices, and AI-powered RAG systems using Next.js 15, NestJS, TypeScript, Docker, and Redis. I specialize in multi-container orchestration, high-performance caching pipelines, vector similarity search (pgvector), and shipping deploy-ready SaaS architectures.
            </p>

            <div className="mt-6 md:mt-8 grid gap-2.5 sm:gap-3 text-sm text-gray-400">
              <p>📍 Peshawar, Pakistan</p>
              <p>📞 WhatsApp: <a href="https://wa.me/923120916801" className="text-blue-300 hover:underline">+92 312 0916801</a></p>
              <p className="break-all sm:break-normal">📧 <a href="mailto:sheryarkhan7712@gmail.com" className="text-blue-300 hover:underline">sheryarkhan7712@gmail.com</a></p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary text-center w-full sm:w-auto">
              View Projects
            </a>
            <a
              href="/Sheryar Khan CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-center w-full sm:w-auto"
            >
              View CV
            </a>
            <a href="#contact" className="btn-secondary text-center w-full sm:w-auto">
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative surface-panel p-6 sm:p-8 overflow-hidden h-full flex flex-col justify-between rounded-2xl w-full"
        >
          <div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[50px] sm:text-[80px] font-bold opacity-5 pointer-events-none select-none">
              CV
            </div>

            <p className="text-xs tracking-widest uppercase text-blue-400 mb-3 md:mb-4">
              Resume overview
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold">
              Full-Stack Engineering Highlights
            </h3>

            <div className="mt-6 md:mt-8 space-y-4 sm:space-y-5">
  <div className="flex gap-3 sm:gap-4">
    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
    <p className="text-xs sm:text-sm leading-relaxed surface-copy">
      <strong>Frontend Developer Intern (2 Months):</strong> Built modular, responsive UI components using Next.js, TypeScript, and Tailwind CSS.
    </p>
  </div>

  <div className="flex gap-3 sm:gap-4">
    <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400 shrink-0" />
    <p className="text-xs sm:text-sm leading-relaxed surface-copy">
      Engineered AI-powered RAG pipelines with NestJS, Gemini API embeddings, and Supabase <code className="text-[11px] sm:text-xs px-1 py-0.5 rounded bg-blue-500/10">pgvector</code> search.
    </p>
  </div>

  <div className="flex gap-3 sm:gap-4">
    <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0" />
    <p className="text-xs sm:text-sm leading-relaxed surface-copy">
      Architected microservices featuring sub-millisecond <code className="text-[11px] sm:text-xs px-1 py-0.5 rounded bg-purple-500/10">Redis</code> caching, non-blocking asynchronous analytics, and TypeORM persistence.
    </p>
  </div>

  <div className="flex gap-3 sm:gap-4">
    <div className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
    <p className="text-xs sm:text-sm leading-relaxed surface-copy">
      Configured multi-container environments using <code className="text-[11px] sm:text-xs px-1 py-0.5 rounded bg-green-500/10">Docker Compose</code> across isolated networks, along with cloud deployments on Vercel and Supabase.
    </p>
  </div>
</div>

          <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-white/10 text-xs sm:text-sm text-muted">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 flex-wrap">
              <span>Open to Junior Full-Stack Roles</span>
              <span>Available for Opportunities</span>
            </div>
          </div>
        </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;