import { motion } from "framer-motion";

const Skills = () => {

    const skills = [
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "JWT Authentication", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
    ];

    return (
        <section className="section">

            <div className="container-custom text-center">

                <h2 className="text-3xl font-bold gradient-text mb-10">
                    Skills
                </h2>

                {/* <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="card glass px-4 py-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div> */}

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((s, i) => (
                        <div key={i} className="card glass text-center">
                            <h3 className="text-xl font-semibold">{s.name}</h3>
                            <p className="text-gray-400">{s.level}</p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Skills;