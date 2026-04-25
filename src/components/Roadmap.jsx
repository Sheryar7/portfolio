import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const futureSkills = [
  {
    name: "Next.js",
    reason: "Server-side rendering, SEO optimization, and production-grade React architecture.",
    progress: 25,
  },
  {
    name: "TypeScript",
    reason: "Building scalable, type-safe applications with fewer runtime bugs.",
    progress: 40,
  },
  {
    name: "PostgreSQL",
    reason: "Mastering relational database design alongside NoSQL systems.",
    progress: 5,
  },
  {
    name: "Supabase",
    reason: "Modern backend-as-a-service for rapid full-stack scaling.",
    progress: 5,
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-28 relative overflow-hidden">

      {/* Background glow (Apple style depth) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="container-custom text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold mb-4">
            <span className="gradient-text">
              <HighlightText>Learning Roadmap</HighlightText>
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Expanding beyond MERN into modern backend systems, scalable architectures,
            and production-grade engineering practices.
          </p>
        </motion.div>

        {/* Timeline layout */}
        <div className="mt-20 max-w-4xl mx-auto space-y-6">

          {futureSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 p-6 rounded-2xl surface-card hover:border-white/20 transition"
            >

              {/* Left indicator line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-md shadow-blue-500/30" />
                <div className="flex-1 w-[1px] bg-white/10 mt-2" />
              </div>

              {/* Content */}
              <div className="flex-1 text-left">

                {/* Header row */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold surface-heading">
                    {skill.name}
                  </h3>

                  <span className="text-xs surface-copy">
                    {skill.progress}% progress
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm mt-2 leading-relaxed surface-copy">
                  {skill.reason}
                </p>

                {/* Progress bar (minimal Apple style) */}
                <div className="mt-4 w-full h-1 surface-bar rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Roadmap;