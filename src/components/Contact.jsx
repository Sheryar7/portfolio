import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt
} from "react-icons/fa";
import HighlightText from "./HighlightText";

const contactData = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sheryarkhan7712@gmail.com",
    link: "mailto:sheryarkhan7712@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "sheryar-khan-209608280",
    link: "https://www.linkedin.com/in/sheryar-khan-209608280",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Sheryar7",
    link: "https://github.com/Sheryar7",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+92 312 0916801",
    link: "https://wa.me/923120916801",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">

      {/* background glow (Apple style depth) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold mb-4">
            <span className="gradient-text">
              <HighlightText>Let’s Build Something</HighlightText>
            </span>
          </h2>

          <p className="text-muted max-w-xl mx-auto text-lg">
            Open for backend, full-stack, and system design opportunities.
            Let’s connect and build scalable products.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted">
            <FaMapMarkerAlt className="text-red-400" />
            Peshawar, Pakistan
          </div>
        </motion.div>

        {/* Contact hub */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 surface-card transition overflow-hidden"
            >

              {/* Icon */}
              <div className="text-2xl mb-4 surface-icon transition group-hover:text-blue-600">
                {item.icon}
              </div>

              {/* Label */}
              <h3 className="text-xs tracking-widest uppercase text-muted mb-1">
                {item.label}
              </h3>

              {/* Value */}
              <p className="text-sm surface-copy transition break-all">
                {item.value}
              </p>

            </motion.a>
          ))}

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <div className="h-px w-full bg-white/10 mb-8" />

          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Sheryar Khan — Built with React, NestJS & passion for scalable systems
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;