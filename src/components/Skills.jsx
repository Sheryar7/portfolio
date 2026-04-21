import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

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

                <h2 className="text-4xl font-bold gradient-text mb-10">
                    <HighlightText>Skills</HighlightText>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((s, i) => (
                        <div key={i} className="card glass text-center">
                            <h3 className="text-xl font-semibold">{s.name}</h3>
                            <p className="text-gray-500">{s.level}</p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Skills;