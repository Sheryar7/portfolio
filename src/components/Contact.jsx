import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section">

      <div className="container-custom text-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-3xl font-bold gradient-text mb-6">
            Contact Me
          </h2>

          <div className="space-y-3 text-gray-400">
            <p>Email: sheryarkhan7712@gmail.com</p>
            <p>GitHub: github.com/Sheryar7</p>
            <p>LinkedIn: linkedin.com/in/sheryar-khan-209608280</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;