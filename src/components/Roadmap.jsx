import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

const futureSkills = [
  { 
    name: "Next.js", 
    reason: "For Server-Side Rendering (SSR) and superior SEO.", 
    progress: 25 // Out of 100
  },
  { 
    name: "TypeScript", 
    reason: "To write safer, bug-free code with static typing.", 
    progress: 10
  },
  { 
    name: "PostgreSQL", 
    reason: "Mastering Relational Databases (SQL) alongside MongoDB.", 
    progress: 5
  },
  { 
    name: "Supabase", 
    reason: "Leveraging Backend-as-a-Service for rapid scaling.", 
    progress: 5
  },
];

// Simple blinking animation for the status dot
const dotVariants = {
  blink: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-extrabold mb-5 gradient-text">
          <HighlightText>Next on the Horizon</HighlightText>
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Currently expanding my expertise beyond the MERN stack to master the next generation of web technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, borderColor: "#3b82f6" }} // Border lights up on hover
              className="p-8 rounded-3xl border border-gray-800 bg-gray-900/40 backdrop-blur-md flex flex-col items-center relative"
            >
              {/* === THE "IN PROGRESS" BADGE === */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800 text-xs text-blue-300 font-medium">
                <motion.span
                  variants={dotVariants}
                  animate="blink"
                  className="w-2 h-2 rounded-full bg-blue-400"
                ></motion.span>
                Learning
              </div>

              {/* Icon Placeholder (You can add actual icons here later) */}
              <div className="w-16 h-16 rounded-2xl bg-gray-800/80 mb-6 flex items-center justify-center text-gray-600 text-3xl font-mono">
                {`{ }`}
              </div>

              <h3 className="text-blue-400 font-bold text-2xl mb-3 tracking-tight">
                {skill.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">
                {skill.reason}
              </p>

              {/* === THE PROGRESS BAR === */}
              <div className="w-full mt-auto">
                <div className="flex justify-between items-center mb-1 text-xs text-gray-600">
                  <span>Current Progress</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-blue-600 rounded-full"
                  ></motion.div>
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