import { motion } from "framer-motion";
import HighlightText from "./HighlightText";
import useTheme from "../hooks/useTheme";

const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    { name: "Docker & Container Orchestration", level: 75, type: "DevOps" },
    { name: "Redis (Cache-Aside & Performance)", level: 72, type: "Backend / Caching" },
    { name: "NestJS & Microservices", level: 72, type: "Backend" },
    { name: "RAG Architecture & Embeddings", level: 70, type: "AI / LLM" },
    { name: "PostgreSQL / Supabase (pgvector)", level: 72, type: "Database" },
    { name: "React.js / Next.js 15", level: 80, type: "Frontend" },
    { name: "TypeScript", level: 75, type: "Frontend" },
    { name: "Tailwind CSS", level: 80, type: "Frontend" },
    { name: "Node.js / Express", level: 73, type: "Backend" },
    { name: "TypeORM & SQL Persistence", level: 70, type: "Database" },
    { name: "MongoDB / Mongoose", level: 68, type: "Database" },
    { name: "JWT Auth & RBAC", level: 70, type: "Security" },
    { name: "HTML5 / CSS3", level: 85, type: "Frontend" },
    { name: "JavaScript (ES6+)", level: 75, type: "Frontend" },
  ];

  // Dynamic theme background for the track bar
  const trackBg = theme === "light" ? "bg-slate-200" : "bg-slate-800/80";

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14">
          <span className="gradient-text">
            <HighlightText>Technical Skills</HighlightText>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-4 sm:p-5 surface-card hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 relative overflow-hidden rounded-xl sm:rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />

              <div className="flex justify-between items-center mb-2.5 relative z-10 gap-2">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight leading-snug">
                  {skill.name}
                </h3>
                <span className="text-[11px] sm:text-xs surface-copy px-2 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0 font-medium">
                  {skill.type}
                </span>
              </div>

              {/* TRACK CONTAINER */}
              <div className={`w-full h-2 rounded-full overflow-hidden relative z-10 ${trackBg}`}>
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              <div className="text-[11px] sm:text-xs text-muted mt-2 relative z-10 font-medium">
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