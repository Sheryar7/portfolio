import React from 'react';
import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Remote",
    period: "2 Months",
    type: "Internship",
    description: [
      "Developed modern, responsive user interfaces using Next.js, TypeScript, and Tailwind CSS.",
      "Architected modular, reusable frontend components adhering to clean code standards.",
      "Collaborated on client-side feature development, styling UI layouts, and optimizing frontend performance.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Clean Architecture"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden w-full">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0.45, x: -30, y: -10 }}
          animate={{ x: [-30, 20, -30], y: [-10, 10, -10], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0.4, x: 20, y: 10 }}
          animate={{ x: [20, -20, 20], y: [10, -10, 10], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Changed max-width constraint to full width with max-w-7xl for clean alignment */}
      <div className="container-custom w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="gradient-text">
              <HighlightText>Work Experience</HighlightText>
            </span>
          </h2>
          <p className="text-muted mt-4 text-sm tracking-wide max-w-2xl mx-auto">
            My professional journey and hands-on industry experience building modern web applications.
          </p>
        </motion.div>

        {/* Experience Cards Wrapper - Removed max-w-4xl to allow full width */}
        <div className="w-full space-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="surface-card p-8 transition-all duration-300 w-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-blue-500 font-medium text-sm mt-1">
                    {exp.company} <span className="text-muted">• {exp.type}</span>
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-muted text-sm mb-6 leading-relaxed">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* Tech Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-500/10">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-md bg-blue-500/5 text-muted border border-blue-500/10"
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