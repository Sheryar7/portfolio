import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HighlightText from "./HighlightText";

const projects = [
  {
    id: "skillforge",
    title: "SkillForge LMS",
    desc: "Scalable EdTech platform with course management and progress tracking.",
    img: "/home.png",
    live: "https://skillforge-frontend-blue.vercel.app/",
    github: "https://github.com/Sheryar7/skillforge-frontend",
    features: [
      "Course management system",
      "Student progress tracking",
      "Interactive dashboards",
      "JWT authentication"
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    id: "cart",
    title: "Shopping Cart",
    desc: "Advanced state management using Redux Toolkit.",
    img: "/shoppingCart.png",
    live: "https://shopping-cart-jet-alpha.vercel.app/",
    github: "https://github.com/Sheryar7/shopping-cart",
    features: [
      "Redux Toolkit slices",
      "Global state management",
      "Cart persistence"
    ],
    tech: ["React", "Redux Toolkit"]
  },
  {
    id: "auth",
    title: "Auth-App",
    desc: "Secure auth system with OTP + JWT + Zustand.",
    img: "/authapp.png",
    live: "https://auth-app-frontend-blue.vercel.app/",
    github: "https://github.com/Sheryar7/auth-app-frontend",
    features: [
      "JWT authentication",
      "OTP verification",
      "Bcrypt hashing"
    ],
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "hcm",
    title: "Time-Off Microservice",
    desc: "Backend system ensuring balance consistency with HCM.",
    img: "/HCM.png",
    github: "https://github.com/Sheryar7/timeoff-microservice",
    features: [
      "Balance reservation",
      "Rollback mechanism",
      "HCM sync",
      "Audit logging"
    ],
    tech: ["NestJS", "SQLite", "TypeORM", "Jest"]
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">
            <HighlightText>Selected Work</HighlightText>
          </span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelected(project)}
              className="cursor-pointer group rounded-2xl overflow-hidden surface-card shadow-xl"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2 surface-copy">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 APPLE-STYLE MORPH MODAL */}
        <AnimatePresence>
          {selected && (
            <>
              {/* Background blur */}
              <motion.div
                className="fixed inset-0 backdrop-overlay backdrop-blur-xl z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              />

              {/* Expanding Card */}
              <motion.div
                layoutId={selected.id}
                className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl overflow-hidden surface-panel shadow-2xl"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={selected.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold surface-heading mb-2">
                    {selected.title}
                  </h2>

                  <p className="text-sm mb-4 surface-copy">
                    {selected.desc}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 surface-heading">
                      Key Features
                    </h4>
                    <ul className="text-sm surface-copy list-disc list-inside space-y-1">
                      {selected.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {selected.tech.map((t, i) => (
                      <span
                        key={i}
                        className="surface-tag"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {selected.live && (
                      <a
                        href={selected.live}
                        target="_blank"
                        className="btn-primary"
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={selected.github}
                      target="_blank"
                      className="btn-outline"
                    >
                      Code
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