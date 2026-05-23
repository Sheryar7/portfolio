import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const Skills = () => {
  const skills = [
    { name: "HTML5 / CSS3", level: 75, type: "Frontend" },
    { name: "JavaScript (ES6+)", level: 70, type: "Frontend" },
    { name: "React.js / Next.js", level: 70, type: "Frontend" },
    { name: "TypeScript", level: 72, type: "Frontend" },
    { name: "Tailwind CSS", level: 78, type: "Frontend" },
    { name: "Node.js / Express", level: 78, type: "Backend" },
    { name: "NestJS", level: 60, type: "Backend" },
    { name: "MongoDB / Mongoose", level: 75, type: "Database" },
    { name: "PostgreSQL / Supabase", level: 60, type: "Database" },
    { name: "JWT Auth & RBAC", level: 72, type: "Security" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="gradient-text">
            <HighlightText>Technical Skills</HighlightText>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-5 surface-card hover:scale-[1.02] transition relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />

              <div className="flex justify-between items-center mb-2 relative z-10">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-xs surface-copy">{skill.type}</span>
              </div>

              <div className="w-full h-2 surface-bar rounded-full overflow-hidden relative z-10">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <div className="text-xs text-muted mt-2 relative z-10">
                Proficiency: {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
