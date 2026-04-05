import { motion } from "framer-motion";

const projects = [
  {
    title: "SkillForge LMS",
    desc: "Full-stack LMS with authentication & dashboards",
    img: "/home.png",
    live: "https://skillforge-frontend-blue.vercel.app/",
    github: "https://github.com/Sheryar7/skillforge-frontend",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">

      <div className="container-custom">

        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          My Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="card glass"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src={project.img} className="rounded-lg mb-4" />

              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>

              <div className="flex gap-4 mt-4">
                <a href={project.live} className="btn-primary">Live</a>
                <a href={project.github} className="btn-outline">Code</a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;