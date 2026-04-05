import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full glass z-50">
      <div className="container-custom flex justify-between items-center py-4">

        <h1 className="font-bold text-xl gradient-text">Sheryar Khan</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          {/* Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 text-xl"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <div onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass text-center py-4 space-y-4">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;