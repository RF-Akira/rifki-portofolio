import React, { useState, useEffect } from 'react';

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

  return (
    <div className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999]">
      {/* RGB Flashing outer */}
      <div
        className={`w-6 h-6 rounded-full border-2 transition-transform duration-75 ease-in-out 
          ${isHovering ? 'scale-[2]' : 'scale-100'} animate-rgb-flash`}
        style={{
          transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
        }}
      />

      {/* Dot in center */}
      <div
        className={`w-2 h-2 rounded-full bg-white fixed top-0 left-0 
          transition-transform duration-75 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
    </div>
  );
};
