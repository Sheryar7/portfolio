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
      const sections = ["about", "projects", "roadmap", "contact"];
      
      // 1. Check if user is at the very bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActive("contact");
        return;
      }

      // 2. Standard Scroll Spy Logic
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is in the top 40% of the screen
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
      // Offset for fixed navbar
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
      <div className="container-custom flex justify-between items-center py-4">
        <h1 className="font-bold text-xl cursor-pointer" onClick={() => handleScrollTo("about")}>
          <HighlightText>Sheryar Khan</HighlightText>
        </h1>

        <div className="hidden md:flex gap-8 items-center">
          <span onClick={() => handleScrollTo("about")} className={linkClass("about")}>
            About <Underline section="about" />
          </span>
          <span onClick={() => handleScrollTo("projects")} className={linkClass("projects")}>
            Projects <Underline section="projects" />
          </span>
          <span onClick={() => handleScrollTo("roadmap")} className={linkClass("roadmap")}>
            Roadmap <Underline section="roadmap" />
          </span>
          <span onClick={() => handleScrollTo("contact")} className={linkClass("contact")}>
            Contact <Underline section="contact" />
          </span>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl ml-4 transition-transform hover:rotate-12 nav-toggle"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="nav-toggle">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <div onClick={() => setOpen(!open)} className="nav-toggle cursor-pointer">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden text-center py-6 space-y-6 flex flex-col items-center mobile-menu">
          {["about", "projects", "roadmap", "contact"].map((item) => (
            <p key={item} onClick={() => handleScrollTo(item)} className={`text-lg capitalize cursor-pointer nav-link ${active === item ? "nav-link-active font-bold" : ""}`}>
              {item}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;