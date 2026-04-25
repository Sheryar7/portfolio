import { motion } from "framer-motion";
import { FaCog, FaServer, FaNetworkWired, FaBullseye } from "react-icons/fa";
import HighlightText from "./HighlightText";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">

      {/* soft background glow */}
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
        <motion.div
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[10%] h-[220px] w-[220px] bg-cyan-400/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="container-custom">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="gradient-text">
              <HighlightText>About Me</HighlightText>
            </span>
          </h2>

          <p className="text-muted mt-4 text-sm tracking-wide max-w-2xl mx-auto">
            Building systems, not just applications — with a polished, production-grade product mindset.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="surface-card group relative overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(59,130,246,0.16)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-blue-200 transition group-hover:scale-105">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
                    <FaCog />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Engineering
                  </span>
                </div>
                <span className="text-xs text-muted">01</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 surface-heading">
                Engineering Mindset
              </h3>
              <p className="text-sm leading-relaxed surface-copy">
                I’m a self-taught Full-Stack Developer focused on backend systems
                and scalable architecture using MERN and NestJS. My approach is
                centered around building production-ready systems, not just UI.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="surface-card group relative overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(59,130,246,0.16)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-3 rounded-full bg-fuchsia-500/10 px-4 py-2 text-fuchsia-200 transition group-hover:scale-105">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/20">
                    <FaServer />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Systems
                  </span>
                </div>
                <span className="text-xs text-muted">02</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 surface-heading">
                Real-World Systems
              </h3>
              <p className="text-sm leading-relaxed surface-copy">
                I built an LMS with authentication, RBAC, and scalable backend design.
                More recently, I developed a NestJS Time-Off Microservice with HCM integration,
                balance reservation, rollback logic, and audit tracking.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="surface-card group relative overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(59,130,246,0.16)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-200 transition group-hover:scale-105">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
                    <FaNetworkWired />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Thinking
                  </span>
                </div>
                <span className="text-xs text-muted">03</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 surface-heading">
                Distributed Thinking
              </h3>
              <p className="text-sm leading-relaxed surface-copy">
                I learned how systems interact across services, how to maintain data consistency,
                and how to build defensive backend systems that handle external failures like HCM sync issues.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="surface-card group relative overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(59,130,246,0.16)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-3 rounded-full bg-amber-500/10 px-4 py-2 text-amber-200 transition group-hover:scale-105">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 text-white shadow-lg shadow-amber-500/20">
                    <FaBullseye />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Focus
                  </span>
                </div>
                <span className="text-xs text-muted">04</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 surface-heading">
                Current Focus
              </h3>
              <p className="text-sm leading-relaxed surface-copy">
                I’m currently digging into modern tools like Next.js,
                mastering TypeScript deeply, and building production-ready systems with PostgreSQL
                and Supabase. My goal is to deliver scalable backend systems with clean architecture.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;