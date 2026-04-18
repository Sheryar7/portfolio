import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const projects = [
  {
    title: "SkillForge LMS",
    desc: "A comprehensive EdTech platform built with the MERN stack, featuring secure course management, student progress tracking, and interactive learning dashboards. Focused on scalable architecture and seamless user experience.",
    img: "/home.png",
    live: "https://skillforge-frontend-blue.vercel.app/",
    github: "https://github.com/Sheryar7/skillforge-frontend",
  },
  {
    title: "Auth-App",
    desc: "Developed to master Zustand as a lightweight alternative to Redux, focusing on reducing boilerplate in MERN applications. Implements a secure flow with JWT sessions, Bcrypt hashing, and OTP-based email verification.",
    img: "/authapp.png",
    live: "https://auth-app-frontend-blue.vercel.app/",
    github: "https://github.com/Sheryar7/auth-app-frontend",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          <HighlightText>My Work</HighlightText>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              // Added flex flex-col to make the card a column container
              className="card glass flex flex-col h-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src={project.img} alt={project.title} className="rounded-lg mb-4 object-cover h-48 w-full" />

              <h3 className="text-xl font-semibold">{project.title}</h3>
              
              {/* line-clamp-3 adds the '...' after 3 lines of text */}
              <p className="text-gray-400 mt-2 line-clamp-3 text-sm flex-grow">
                {project.desc}
              </p>

              {/* mt-auto pushes this div to the very bottom */}
              <div className="flex gap-4 mt-6">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;