import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HighlightText from "./HighlightText";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaTimes,
} from "react-icons/fa";

const projects = [
  {
    id: "modern-lms-saas",
    title: "SkillForge — Modern LMS SaaS Platform",
    desc: "Modern SaaS-style LMS with role-based dashboards, Supabase auth, and responsive Tailwind UI.",
    img: "/homepage.png",
    live: "https://modern-lms-smoky.vercel.app/",
    github: "https://github.com/Sheryar7/skillforge-lms",
    features: [
      "Instructor & student role-based dashboards",
      "Protected routes and authentication middleware",
      "Course curriculum builder with sections and lessons",
      "Supabase authentication with PostgreSQL integration",
      "Responsive SaaS-style UI built with Tailwind CSS",
      "Reusable component architecture and App Router structure",
      "Analytics dashboard foundation",
    ],
    tech: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "hcm-timeoff",
    title: "HCM Time-Off Microservice",
    desc: "NestJS backend service for time-off requests with balance consistency, rollback logic, and HCM-style sync.",
    img: "/HCM.png",
    github: "https://github.com/Sheryar7/readyon-timeoff-microservice",
    features: [
      "Modular NestJS architecture",
      "Balance reservation and rollback mechanism",
      "SQLite database with TypeORM",
      "DTO validation and audit logging",
      "Designed for external HCM sync scenarios",
    ],
    tech: ["NestJS", "TypeScript", "SQLite", "TypeORM"],
  },
  {
    id: "skillforge-lms",
    title: "SkillForge — Learning Management System",
    desc: "Full-stack LMS with role-based access, secure JWT authentication, and course enrollment workflows.",
    img: "/home.png",
    live: "https://skillforge-frontend-blue.vercel.app/",
    github: "https://github.com/Sheryar7/skillforge-frontend",
    features: [
      "MERN stack architecture with separate frontend and backend",
      "OTP-based authentication and secure JWT flows",
      "Instructor dashboard for course creation",
      "Student dashboard for enrollment and progress",
      "Cloudinary-based media upload support",
      "RBAC for Student, Instructor, and Admin roles",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "auth-system",
    title: "Authentication System (Zustand + JWT)",
    desc: "Modern auth system with OTP email verification, JWT security, and Zustand for global state.",
    img: "/authapp.png",
    live: "https://vercel.com/sheryar7s-projects/auth-app-frontend",
    github: "https://github.com/Sheryar7/auth-app-frontend",
    features: [
      "Signup/Login with JWT authentication",
      "OTP email verification flow",
      "Forgot/reset password flow",
      "Global state management using Zustand",
      "Protected routes and middleware handling",
    ],
    tech: ["React", "Zustand", "JWT", "Node.js"],
  },
  {
    id: "shopping-cart",
    title: "Shopping Cart (Redux Toolkit)",
    desc: "Frontend practice app focused on Redux Toolkit state management and cart persistence.",
    img: "/shoppingCart.png",
    github: "https://github.com/Sheryar7/shopping-cart",
    features: [
      "Redux Toolkit slices and reducers",
      "Global cart state management",
      "Persisted cart and product interactions",
      "Optimized state updates and UI rendering",
    ],
    tech: ["React", "Redux Toolkit"],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-10 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-6"
          >
            <FaStar size={16} className="text-violet-600" />
            Resume Projects
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              <HighlightText>Highlighted Projects</HighlightText>
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Real projects showcasing full-stack architecture, secure authentication, backend services, and modern SaaS UI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md border border-white/10 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.desc}
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelected(project);
                    }}
                    className="text-sm font-semibold text-violet-400"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              />

              <motion.div
                layoutId={selected.id}
                className="fixed top-1/2 left-1/2 w-[94%] max-w-4xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 z-50 rounded-[32px] overflow-hidden border border-white/10 bg-[#0d0d12] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 z-50 p-2 rounded-full bg-black/40 border border-white/10 text-white hover:bg-black/70 transition"
                >
                  <FaTimes size={18} />
                </button>

                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={selected.img}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-black/40 to-transparent" />

                  <div className="absolute bottom-8 left-8">
                    <h2 className="text-4xl font-black text-white mb-3">
                      {selected.title}
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-gray-200 backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 overflow-y-auto max-h-[calc(90vh-320px)]">
                  <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                    {selected.desc}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-white text-lg font-semibold mb-5">
                      Key Features
                    </h4>

                    <div className="grid md:grid-cols-2 gap-4">
                      {selected.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03]"
                        >
                          <div className="mt-1 w-2 h-2 rounded-full bg-violet-400" />
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {selected.live && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] transition"
                      >
                        <FaExternalLinkAlt size={18} />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-semibold hover:bg-white/[0.06] transition"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
