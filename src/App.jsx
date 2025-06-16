import { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import "./index.css"

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}     
      whileInView={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.8, delay: 0.1 }} 
      viewport={{ once: false }}             
    >
      {children}
    </motion.div>
  );
};


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div 
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 ${menuOpen ? 'overflow-hidden' : ''}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <Home />

        <AnimatedSection>
          <About />
        </AnimatedSection>

        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection>
          <Contact />
        </AnimatedSection>

        <CustomCursor />
      </div>
    </>
  );
};

export default App;