import React from 'react';
import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "TechKhwa (Pvt) Ltd (Remote)",
    period: "June 2026 – Present",
    type: "Internship",
    description: [
      "Engineered responsive, high-performance web interfaces using Next.js, React.js, and TypeScript for an in-house Content Creation Helper platform.",
      "Built scalable, reusable UI components styled with Tailwind CSS, strictly adhering to clean code principles and modern design systems.",
      "Collaborated with backend teams to integrate RESTful API endpoints, managing client-side state and ensuring seamless data flow.",
      "Translated UI/UX design wireframes into production-ready frontend code, optimizing layouts for cross-browser compatibility and fast load times.",
      "Utilized Git and GitHub for daily version control, team pull requests, and feature branch management within agile development cycles.",
    ],
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git/GitHub"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 relative overflow-hidden w-full">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0.45, x: -30, y: -10 }}
          animate={{ x: [-30, 20, -30], y: [-10, 10, -10], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] right-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/10 blur-[100px] sm:blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.4, x: 20, y: 10 }}
          animate={{ x: [20, -20, 20], y: [10, -10, 10], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-150px] left-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-500/10 blur-[100px] sm:blur-[120px] rounded-full"
        />
      </div>

      {/* FULL WIDTH CONTAINER MATCHING HERO/ABOUT */}
      <div className="w-full px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            <span className="gradient-text">
              <HighlightText>Work Experience</HighlightText>
            </span>
          </h2>
          <p className="text-muted mt-3 md:mt-4 text-xs sm:text-sm tracking-wide max-w-2xl mx-auto">
            My professional journey and hands-on industry experience building modern web applications.
          </p>
        </motion.div>

        {/* Experience Cards Wrapper */}
        <div className="w-full space-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="surface-card p-5 sm:p-6 md:p-8 transition-all duration-300 w-full rounded-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{exp.role}</h3>
                  <p className="text-blue-500 font-medium text-xs sm:text-sm mt-1">
                    {exp.company} <span className="text-muted">• {exp.type}</span>
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 w-fit shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-2 text-muted text-xs sm:text-sm mb-6 leading-relaxed">
                {exp.description.map((point, index) => (
                  <li key={index} className="pl-1">{point}</li>
                ))}
              </ul>

              {/* Tech Skill Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-gray-500/10">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-md bg-blue-500/5 text-muted border border-blue-500/10 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}