import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: "50%", y: "50%" });
  };

  const { x, y } = mousePosition;

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <motion.a
            ref={ref}
            href="#home"
            className="relative font-mono text-xl font-bold text-white rounded-xl overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
            initial={{ rotateX: 0, rotateY: 0 }}
            animate={{
              rotateX: `calc((${y} - 50%) / 4 * -1deg)`,
              rotateY: `calc((${x} - 50%) / 4 * 1deg)`,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
              }}
              animate={{ x, y }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
            />

            <motion.div
              className="relative p-3"
              style={{
                transformStyle: "preserve-3d",
              }}
              initial={{ x: 0, y: 0 }}
              animate={{
                x: `calc((${x} - 50%) / 5 * -1px)`,
                y: `calc((${y} - 50%) / 5 * -1px)`,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
            >
              Portofolio <span className="text-blue-500">Rifki</span>
            </motion.div>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-blue-500 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-0 right-4 h-16 flex items-center transition-opacity ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="w-7 h-5 relative cursor-pointer text-3xl text-white">
            &#9776;
          </div>
        </div>
      </div>
    </nav>
  );
};
