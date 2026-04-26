import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt
} from "react-icons/fa";
import HighlightText from "./HighlightText";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import loader from "./loader";
import { toast } from "react-toastify";

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
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_93844nm",
        "template_8nhdoqf",
        form.current,
        "17NW7VfOyy6qcHgDC"
      )
      .then(() => {
        toast.success("Message sent successfully");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold mb-4">
            <span className="gradient-text">
              <HighlightText>Let’s Build Something</HighlightText>
            </span>
          </h2>

          <p className="text-muted max-w-xl mx-auto text-lg">
            Open for backend, full-stack, and system design opportunities.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted">
            <FaMapMarkerAlt className="text-red-400" />
            Peshawar, Pakistan
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 surface-card"
            >
              <div className="text-2xl mb-4 surface-icon">
                {item.icon}
              </div>

              <h3 className="text-xs uppercase text-muted">
                {item.label}
              </h3>

              <p className="text-sm break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="mt-16 max-w-2xl mx-auto space-y-4"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="input"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="input"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="input resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-xl font-medium transition
              bg-blue-600 hover:bg-blue-700 text-white
              flex items-center justify-center
            "
          >
            {loading ? <Loader /> : "Send Message"}
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;