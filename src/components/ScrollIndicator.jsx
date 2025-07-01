import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <a href="#projects" aria-label="Scroll down to projects section">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <i className="bx bx-chevron-down text-4xl text-white/70 hover:text-white transition-colors"></i>
        </motion.div>
      </div>
    </a>
  );
};

export default ScrollIndicator;
