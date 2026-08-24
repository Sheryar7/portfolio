import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

import { motion } from "framer-motion";

import HighlightText from "./HighlightText";
import useTheme from "../hooks/useTheme";
import Loader from "./loader";

const CONTACT_LINKS = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sheryarkhan7712@gmail.com",
    href: "mailto:sheryarkhan7712@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "sheryar-khan-209608280",
    href: "https://www.linkedin.com/in/sheryar-khan-209608280",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Sheryar7",
    href: "https://github.com/Sheryar7",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+92 312 0916801",
    href: "https://wa.me/923120916801",
  },
  {
    icon: <FaGlobe />,
    label: "Portfolio",
    value: "portfolio-snowy-six-91.vercel.app",
    href: "https://portfolio-snowy-six-91.vercel.app/",
  },
];

const Contact = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // THEME
  const sectionBg =
    theme === "light"
      ? "bg-white text-slate-900"
      : "bg-slate-950 text-white";

  const cardBg =
    theme === "light"
      ? "bg-white border-slate-200"
      : "bg-slate-900/80 border-slate-800";

  const inputBg =
    theme === "light"
      ? "bg-white border-slate-300 text-slate-900"
      : "bg-slate-950/80 border-slate-700 text-white";

  const mutedText =
    theme === "light"
      ? "text-slate-600"
      : "text-slate-300";

  // HANDLE CHANGE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // EMAIL VALIDATION
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus({
        loading: false,
        success: "",
        error: "Please complete all fields.",
      });

      return;
    }

    if (!validateEmail(email)) {
      setStatus({
        loading: false,
        success: "",
        error: "Please enter a valid email address.",
      });

      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        PUBLIC_KEY
      );

      setStatus({
        loading: false,
        success:
          "Message sent successfully. I’ll respond as soon as possible.",
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        loading: false,
        success: "",
        error:
          "Unable to send your message right now. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className={`py-12 sm:py-16 md:py-28 overflow-hidden w-full ${sectionBg}`}>
      {/* FULL WIDTH CONTAINER MATCHING OTHER SECTIONS */}
      <div className="w-full px-4 sm:px-6 md:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-violet-400 mb-2 sm:mb-4">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            <HighlightText>Send a Message</HighlightText>
          </h2>

          <p className={`max-w-2xl mx-auto mt-3 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed ${mutedText}`}>
            Feel free to reach out for collaborations, internship
            opportunities, freelance work, or technical discussions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-2xl sm:rounded-3xl md:rounded-[32px] border p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/10 ${cardBg}`}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* NAME */}
                <div>
                  <label className="text-xs sm:text-sm text-slate-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`mt-1.5 sm:mt-3 w-full rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm outline-none transition focus:ring-2 focus:ring-violet-500 ${inputBg}`}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-xs sm:text-sm text-slate-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`mt-1.5 sm:mt-3 w-full rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm outline-none transition focus:ring-2 focus:ring-violet-500 ${inputBg}`}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-xs sm:text-sm text-slate-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={`mt-1.5 sm:mt-3 w-full rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm outline-none transition focus:ring-2 focus:ring-violet-500 ${inputBg}`}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs sm:text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`mt-1.5 sm:mt-3 w-full rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm outline-none resize-none transition focus:ring-2 focus:ring-violet-500 ${inputBg}`}
                />
              </div>

              {/* ERROR */}
              {status.error && (
                <div className="rounded-xl sm:rounded-2xl border border-red-500/20 bg-red-500/10 px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-red-400">
                  {status.error}
                </div>
              )}

              {/* SUCCESS */}
              {status.success && (
                <div className="rounded-xl sm:rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-emerald-400">
                  {status.success}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-violet-600 px-6 sm:px-8 py-3.5 sm:py-4 font-medium text-xs sm:text-sm text-white transition hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <Loader />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.aside
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* CONTACT CARD */}
            <div
              className={`rounded-2xl sm:rounded-3xl md:rounded-[32px] border p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/10 ${cardBg}`}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-violet-400 mb-4 sm:mb-6">
                Contact Info
              </p>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {CONTACT_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:")
                        ? "_self"
                        : "_blank"
                    }
                    rel="noreferrer"
                    className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-slate-200/10 p-3.5 sm:p-4 md:p-5 transition hover:border-violet-500 hover:-translate-y-0.5 sm:hover:-translate-y-1"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-violet-500/10 text-violet-400 text-lg sm:text-xl">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* AVAILABILITY */}
            <div
              className={`rounded-2xl sm:rounded-3xl md:rounded-[32px] border p-5 sm:p-7 md:p-8 shadow-2xl shadow-black/10 ${cardBg}`}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-violet-400 mb-2.5 sm:mb-4">
                Availability
              </p>

              <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                Currently open to internships, freelance projects, and full-stack development opportunities.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;