import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import HighlightText from "./HighlightText";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActive("contact");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
    }
  };

  const linkClass = (section) =>
    `relative cursor-pointer transition duration-300 font-medium nav-link ${
      active === section ? "nav-link-active" : ""
    }`;

  const Underline = ({ section }) => (
    <span
      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
        active === section ? "w-full" : "w-0"
      }`}
    />
  );

  return (
    <nav className="fixed w-full z-50 shadow-sm transition-all duration-300 nav-surface">
      <div className="container-custom flex justify-between items-center py-4 px-4 sm:px-6">
        <h1 className="font-bold text-xl cursor-pointer shrink-0" onClick={() => handleScrollTo("about")}>
          <HighlightText>Sheryar Khan</HighlightText>
        </h1>

        {/* Desktop Navigation - Unchanged */}
        <div className="hidden md:flex gap-8 items-center">
          <span onClick={() => handleScrollTo("about")} className={linkClass("about")}>
            About <Underline section="about" />
          </span>
          <span onClick={() => handleScrollTo("experience")} className={linkClass("experience")}>
            Experience <Underline section="experience" />
          </span>
          <span onClick={() => handleScrollTo("skills")} className={linkClass("skills")}>
            Skills <Underline section="skills" />
          </span>
          <span onClick={() => handleScrollTo("projects")} className={linkClass("projects")}>
            Projects <Underline section="projects" />
          </span>
          <span onClick={() => handleScrollTo("contact")} className={linkClass("contact")}>
            Contact <Underline section="contact" />
          </span>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl ml-4 transition-transform hover:rotate-12 nav-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="p-2 text-lg rounded-lg transition-colors nav-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          <button 
            onClick={() => setOpen(!open)} 
            className="p-2 text-xl rounded-lg focus:outline-none nav-toggle"
            aria-label="Toggle Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-800/50 backdrop-blur-lg mobile-menu ${
          open ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 px-6">
          {["about", "experience", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className={`text-base font-medium capitalize transition-colors w-full text-center py-1 nav-link ${
                active === item ? "nav-link-active font-bold text-blue-500" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;