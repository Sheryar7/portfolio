import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import HighlightText from "./HighlightText";

const contactData = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sheryarkhan7712@gmail.com",
    link: "mailto:sheryarkhan7712@gmail.com",
    color: "hover:text-red-500",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "sheryar-khan-209608280",
    link: "https://www.linkedin.com/in/sheryar-khan-209608280",
    color: "hover:text-blue-600",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Sheryar7",
    link: "https://github.com/Sheryar7",
    color: "hover:text-gray-400",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+92 312 0916801",
    link: "https://wa.me/923120916801",
    color: "hover:text-green-500",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            <HighlightText>Get In Touch</HighlightText>
          </h2>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> Peshawar, Pakistan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 ${item.color}`}
            >
              <div className="text-3xl mb-4 bg-white/5 p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">
                {item.label}
              </h3>
              <p className="text-gray-300 text-sm break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Professional Footer-like Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center border-t border-white/5 pt-10"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} | Designed & Built by Sheryar Khan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;