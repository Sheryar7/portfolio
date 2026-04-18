import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="about" className="section flex items-center min-h-[90vh]">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT - The Professional Pitch */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            I build <span className="gradient-text">Scalable Solutions</span> <br />
            with the MERN Stack.
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            I am a Full-Stack Developer focused on building high-performance applications. 
            From architecting a comprehensive **LMS with Redux** to optimizing state management 
            with **Zustand**, I specialize in creating clean, efficient, and user-centric web systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
            {/* Ensure your CV is in the 'public' folder for this link to work */}
            <a href="/Sheryar-Khan-CV.pdf" download className="btn-outline">Download CV</a>
          </div>
        </motion.div>

        {/* RIGHT - The Tech Evolution Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold italic">
            MERN
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Current Focus</p>
          <h3 className="text-2xl font-bold mt-2">Architecture & State</h3>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
              <p className="text-gray-300 text-sm">
                <strong>SkillForge LMS:</strong> Robust state handling with Redux.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
              <p className="text-gray-300 text-sm">
                <strong>Auth-App:</strong> Lightweight logic with Zustand.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
              <p className="text-gray-300 text-sm">
                <strong>Next Phase:</strong> Transitioning to Next.js & TypeScript.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
            <span className="text-xs text-gray-500">Peshawar, PK</span>
            <div className="flex gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs text-gray-400">Available for Work</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;