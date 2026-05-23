import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section flex items-center min-h-[90vh] relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Sheryar Khan
          </h1>

          <p className="mt-4 text-muted text-xl md:text-2xl font-semibold text-white/90 max-w-2xl">
            Full-Stack Developer | Next.js • MERN • Supabase • TypeScript
          </p>

          <p className="text-muted mt-8 text-lg leading-relaxed max-w-xl">
            Self-taught Full-Stack Developer building scalable web applications with Next.js, React, Node.js, Express, Supabase, PostgreSQL, and MongoDB.
            I focus on modern SaaS architecture, authentication systems, role-based access, and deploy-ready production applications.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-gray-300 max-w-xl">
            <p>📍 Peshawar, Pakistan</p>
            <p>📞 WhatsApp: <a href="https://wa.me/923120916801" className="text-blue-300 hover:underline">0312-0916801</a></p>
            <p>📧 <a href="mailto:sheryarkhan7712@gmail.com" className="text-blue-300 hover:underline">sheryarkhan7712@gmail.com</a></p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
            <a href="https://portfolio-snowy-six-91.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary">
              Portfolio Live
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative surface-panel p-8 overflow-hidden"
        >
          <div className="absolute top-6 right-6 text-[80px] font-bold opacity-5">
            CV
          </div>

          <p className="text-xs tracking-widest uppercase text-blue-400 mb-4">
            Resume overview
          </p>

          <h3 className="text-2xl font-semibold">
            Internship / Junior full-stack role seeker
          </h3>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
              <p className="text-sm leading-relaxed surface-copy">
                Built and deployed a modern LMS with role-based dashboards, Supabase, and responsive SaaS UI.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />
              <p className="text-sm leading-relaxed surface-copy">
                Designed production-ready authentication systems with JWT, OTP verification, and Zustand state management.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
              <p className="text-sm leading-relaxed surface-copy">
                Developed backend services with NestJS, SQLite, TypeORM, and HCM-style synchronization logic.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
              <p className="text-sm leading-relaxed surface-copy">
                Experienced in full-stack deployments on Vercel, Supabase, and cloud-hosted web applications.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-sm text-muted">
            <div className="flex justify-between gap-4 flex-wrap">
              <span>Available for junior roles</span>
              <span>Open to internships</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
