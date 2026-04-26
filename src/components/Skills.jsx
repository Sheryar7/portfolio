import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const Skills = () => {
  const skills = [
    { name: "React", level: 75, type: "Frontend" },
    { name: "Node.js", level: 70, type: "Backend" },
    { name: "NestJS", level: 50, type: "Backend" },
    { name: "MongoDB", level: 70, type: "Database" },
    { name: "JWT Authentication", level: 70, type: "Backend" },
    { name: "REST APIs", level: 75, type: "Backend" },
    { name: "System Design", level: 70, type: "Architecture" },
    { name: "Tailwind CSS", level: 75, type: "Frontend" }
  ];

  return (
    <section className="section">
      <div className="container-custom">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="gradient-text">
            <HighlightText>Technical Expertise</HighlightText>
          </span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-5 surface-card hover:scale-[1.02] transition relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />

              {/* Header */}
              <div className="flex justify-between items-center mb-2 relative z-10">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-xs surface-copy">
                  {skill.type}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 surface-bar rounded-full overflow-hidden relative z-10">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Level */}
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