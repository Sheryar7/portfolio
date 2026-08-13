import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section flex items-center min-h-[90vh] relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Changed items-center to items-stretch */}
      <div className="container-custom grid md:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Column - Added h-full flex flex-col justify-between */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
              Full-Stack Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Sheryar Khan
            </h1>

            <p className="mt-4 text-muted text-xl md:text-2xl font-semibold text-white/90 max-w-2xl">
              Next.js • MERN • Supabase • Nest.js • TypeScript
            </p>

            <p className="text-muted mt-8 text-lg leading-relaxed max-w-xl">
              Self-taught Full-Stack Developer building scalable web applications, AI-powered RAG systems, and production SaaS architectures using Next.js 15, React, NestJS, Supabase (pgvector), and MongoDB/PostgreSQL. I specialize in vector similarity search, role-based access control (RBAC), secure authentication, and shipping deploy-ready applications.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-gray-400 max-w-xl">
              <p>📍 Peshawar, Pakistan</p>
              <p>📞 WhatsApp: <a href="https://wa.me/923120916801" className="text-blue-300 hover:underline">+92 312 0916801</a></p>
              <p>📧 <a href="mailto:sheryarkhan7712@gmail.com" className="text-blue-300 hover:underline">sheryarkhan7712@gmail.com</a></p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            {/* View CV Button */}
            <a
              href="/Sheryar Khan CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View CV
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Column - Added h-full flex flex-col justify-between */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative surface-panel p-8 overflow-hidden h-full flex flex-col justify-between"
        >
          <div>
            <div className="absolute top-6 right-6 text-[80px] font-bold opacity-5">
              CV
            </div>

            <p className="text-xs tracking-widest uppercase text-blue-400 mb-4">
              Resume overview
            </p>

            <h3 className="text-2xl font-semibold">
              Full-Stack Engineering Highlights
            </h3>

            <div className="mt-8 space-y-5">
              {/* 1. Real-world Internship Experience */}
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <p className="text-sm leading-relaxed surface-copy">
                  <strong>Frontend Developer Intern (2 Months):</strong> Built modular, responsive UI components using Next.js, TypeScript, and Tailwind CSS.
                </p>
              </div>

              {/* 2. Modern AI & RAG Architecture */}
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400 shrink-0" />
                <p className="text-sm leading-relaxed surface-copy">
                  Engineered AI-powered RAG pipelines with NestJS, Gemini API embeddings, and Supabase <code className="text-xs px-1 py-0.5 rounded bg-blue-500/10">pgvector</code> search.
                </p>
              </div>

              {/* 3. SaaS & LMS Development */}
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0" />
                <p className="text-sm leading-relaxed surface-copy">
                  Built & deployed modern SaaS apps featuring role-based dashboards, JWT/Zustand authentication, and dynamic Markdown UI parsing.
                </p>
              </div>

              {/* 4. Deployment & Cloud */}
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
                <p className="text-sm leading-relaxed surface-copy">
                  Experienced in end-to-end cloud deployments on Vercel, Supabase, and PostgreSQL database architectures.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-sm text-muted">
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="flex justify-between gap-15 flex-wrap">
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