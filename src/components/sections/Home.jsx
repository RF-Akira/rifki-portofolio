import { TypeAnimation } from "react-type-animation";
import ScrollIndicator from "../ScrollIndicator";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Hai, Saya Rifki Permana Putra
        </h1>

        <TypeAnimation
          sequence={[
            'Mahasiswa Teknik Informatika',
            2000,
            'Pengembang Web Full-Stack',
            2000,
            'Pecinta Desain Antarmuka',
            2000,
          ]}
          wrapper="p"
          speed={50}
          className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-8"
          repeat={Infinity}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-8 rounded-md font-medium transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-400 py-3 px-8 rounded-md font-medium transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            Contact Me
          </a>
        </div>
      </div>
      <ScrollIndicator/>
    </section>
  );
};  