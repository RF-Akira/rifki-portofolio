import { FaReact, FaVuejs, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPython } from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-all">
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <img
              src="/public/profil.jpeg"
              alt="Profile"
              className="w-160 h-40 object-cover rounded-xl border-2 border-white/20"
            />
            <p className="text-gray-300">
              Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada
              pengembangan web dan desain antarmuka pengguna...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center gap-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-400 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center gap-1 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-400 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pendidikan dan Pengalaman Kerja (tetap sama) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* ... */}
        </div>
      </div>
    </section>
  );
};
