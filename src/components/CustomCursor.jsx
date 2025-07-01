import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target.closest('a, button, .cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorSize = isHovering ? 60 : 30;

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        x: '-50%', 
        y: '-50%',
      }}
    >
      <motion.svg
        width={cursorSize}
        height={cursorSize}
        viewBox="0 0 60 60"
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        animate={{ width: cursorSize, height: cursorSize }}
      >
        <motion.path
          d="M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z"
          fill="currentColor"
          className="text-blue-500 animate-rgb-hue"
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: isHovering ? 1.2 : 1,
            rotate: isHovering ? 45 : 0
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        />
      </motion.svg>
    </motion.div>
  );
};