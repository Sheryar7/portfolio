import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section flex items-center min-h-[90vh] relative overflow-hidden">

      {/* Soft background glow (Apple style depth) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">
            Full-Stack Engineer
          </p>

          <h1 className="text-4xl font-semibold leading-tight">
            Building{" "}
            <span className="gradient-text">Scalable Backend Systems</span>{" "}
            with NestJS, MERN & Microservices
          </h1>

          <p className="text-muted mt-6 text-lg leading-relaxed max-w-xl">
            I design and build production-grade backend systems focused on
            <span className="theme-highlight"> scalability, reliability, and clean architecture</span>.
            My work spans APIs, microservices, and real-world distributed systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Work
            </a>

            <a href="#contact" className="btn-secondary">
              Contact
            </a>

            <a href="/Sheryar Khan CV.pdf" download className="btn-secondary">
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Apple-style System Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative surface-panel p-8 overflow-hidden"
        >

          {/* Floating label */}
          <div className="absolute top-6 right-6 text-[80px] font-bold opacity-5">
            Sherry
          </div>

          <p className="text-xs tracking-widest text-blue-400 uppercase">
            Current Focus
          </p>

          <h3 className="text-2xl font-semibold mt-2">
            Backend Architecture & Distributed Systems
          </h3>

          <div className="mt-8 space-y-5">

            {/* Item */}
            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
              <p className="text-sm leading-relaxed surface-copy">
                <span className="surface-heading font-medium">SkillForge LMS</span> —
                scalable MERN system with structured state management and clean architecture.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />
              <p className="text-sm leading-relaxed surface-copy">
                <span className="surface-heading font-medium">Auth System</span> —
                secure authentication with JWT, OTP verification, and modern state handling.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
              <p className="text-sm leading-relaxed surface-copy">
                <span className="surface-heading font-medium">Time-Off Microservice (NestJS)</span> —
                built with HCM integration, balance reservation, rollback logic, and audit system.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
              <p className="text-sm leading-relaxed surface-copy">
                <span className="surface-heading font-medium">Next Phase</span> —
                system design, PostgreSQL, TypeScript architecture & scalable backend systems.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-muted">
            <span>Pakistan</span>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Backend Roles
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;