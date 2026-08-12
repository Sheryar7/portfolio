import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HighlightText from "./HighlightText";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

const projects = [
  {
    id: "skillgraph-rag",
    title: "SkillGraph — Candidate RAG & Knowledge Search Engine",
    desc: "AI-powered Retrieval-Augmented Generation (RAG) platform that parses candidate PDFs, converts context into vector embeddings, and executes cosine similarity searches.",
    img: "/skillgraph.png",
    github: "https://github.com/Sheryar7/skillgraph",
    features: [
      "End-to-end RAG architecture with vector similarity search",
      "NestJS backend for asynchronous PDF parsing and text chunking",
      "Google Gemini API integration for generating high-dimensional embeddings",
      "Supabase PostgreSQL with pgvector extension for similarity indexing",
      "Cosine similarity search with confidence match scoring (75%+ precision)",
      "Next.js 14 frontend dashboard with real-time indexing status updates",
    ],
    tech: ["Next.js 14", "NestJS", "TypeScript", "Supabase (pgvector)", "Gemini AI"],
  },
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
  {
    id: "voltforge-solar",
    title: "VoltForge Solar Suite",
    desc: "Professional solar cable sizing and inverter compatibility application built to comply with global IEC engineering codes.",
    img: "/solar-cable-calc-app.png",
    live: "https://solar-cable-calc-app.vercel.app/",
    github: "https://github.com/Sheryar7/solar-cable-calc-app",
    features: [
      "IEC 60364-5-52 compliant current capacity calculation engine",
      "Dynamic ambient temperature and conduit grouping derating factors",
      "Real-time engineering calculations for string, main trunk, and AC losses",
      "Intelligent live matching engine for inverter selection sizing ratios",
      "Tailwind CSS responsive dashboard interface with client-side state caching",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Context Hook"],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-10 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-6"
          >
            <FaStar size={16} className="text-violet-500" />
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

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl flex flex-col hover:border-violet-500/40 transition duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/10 text-violet-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-violet-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-violet-400 flex items-center gap-1 group-hover:translate-x-1 transition">
                    View Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: "-45%", x: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                exit={{ opacity: 0, scale: 0.95, y: "-45%", x: "-50%" }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fixed top-1/2 left-1/2 w-[92%] max-w-3xl max-h-[85vh] z-50 rounded-2xl overflow-hidden border border-white/15 bg-[#0b0c10] shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 border border-white/20 text-gray-300 hover:text-white hover:bg-black/90 transition"
                >
                  <FaTimes size={16} />
                </button>

                {/* Modal Scrollable Body */}
                <div className="overflow-y-auto flex-1 custom-scrollbar">
                  {/* Banner Image */}
                  <div className="relative h-60 md:h-72 w-full bg-slate-900 border-b border-white/10">
                    <img
                      src={selected.img}
                      alt={selected.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/30 to-transparent" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8">
                    {/* Title & Badges */}
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                        {selected.title}
                      </h2>

                      <div className="flex flex-wrap gap-2">
                        {selected.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                        Overview
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {selected.desc}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-3">
                        Key Features & Architecture
                      </h4>

                      <div className="grid md:grid-cols-2 gap-3">
                        {selected.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.02]"
                          >
                            <FaCheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={15} />
                            <p className="text-xs text-gray-300 leading-normal">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sticky Action Footer */}
                <div className="p-4 md:px-8 border-t border-white/10 bg-[#0d0e14] flex items-center gap-4 justify-end">
                  {selected.live && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition"
                  >
                    <FaGithub size={16} />
                    View Code
                  </a>
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