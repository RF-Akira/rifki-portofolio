import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaAws,
  FaGraduationCap,
  FaBriefcase,
  FaGitAlt, 
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiNextdotjs, 
} from "react-icons/si";
import GambarProfil from "../../assets/profil.jpeg";
import Marquee from "react-fast-marquee";

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact />, color: "bg-sky-500" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "bg-white" }, 
    { name: "Vue", icon: <FaVuejs />, color: "bg-emerald-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-600" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-cyan-500" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-600" },
    { name: "Python", icon: <SiPython />, color: "bg-yellow-500" },
    { name: "Git", icon: <FaGitAlt />, color: "bg-orange-600" }, 
    { name: "AWS", icon: <FaAws />, color: "bg-orange-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "bg-green-500" },
  ];

  const educationData = [
    {
      institution: "Universitas Satya Terra Bhinneka",
      degree: "S1 Teknik Informatika",
      period: "2024 - Sekarang",
    },
    {
      institution: "SMKN 1 Percut Sei Tuan",
      degree: "Teknik Komputer dan Jaringan",
      period: "2020 - 2023",
    },
  ];

  const experienceData = [
    {
      company: "PT. Media Antar Nusa",
      role: "IT Engginer | Vocational Training",
      period: "Jul 2022 - Sep 2022",
      description: [],
    },
    {
      company: "Horison Sky Kualanamu",
      role: "IT Support | Vocational Training",
      period: "Jan 2022 - Mar 2022",
      description: [],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/10 bg-gray-900/20 mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
            <img
              src={GambarProfil}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-2 border-blue-500/50 shadow-lg"
            />
            <p className="text-gray-300 text-center md:text-left">
              Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada
              pengembangan web dan desain antarmuka pengguna, yang berfokus
              dengan design yang modernlook..
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Skills
            </h3>
            <Marquee
              gradient={true}
              gradientColor="#111827" 
              gradientWidth={50}
              speed={40}
              pauseOnHover={true}
            >
              {frontendSkills.map((tech, key) => (
                <div key={key} className={`flex items-center gap-3 py-3 px-6 rounded-lg text-lg mx-4 border border-white/10 shadow-lg ${tech.name === 'Next.js' ? 'text-black' : 'text-white'} ${tech.color}`}>
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-semibold">{tech.name}</span>
                </div>
              ))}
            </Marquee>
            <Marquee
              gradient={true}
              gradientColor="#111827"
              gradientWidth={50}
              speed={40}
              pauseOnHover={true}
              direction="right"
            >
              {backendSkills.map((tech, key) => (
                <div key={key} className={`flex items-center gap-3 py-3 px-6 rounded-lg text-lg mx-4 border border-white/10 shadow-lg text-white ${tech.color}`}>
                   <span className="text-2xl">{tech.icon}</span>
                   <span className="font-semibold">{tech.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white">
              <FaGraduationCap className="text-cyan-400" /> Pendidikan
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-gray-900/20 relative pl-8 hover:border-cyan-400/50 transition-colors"
                >
                  <div className="absolute left-0 top-6 h-full border-l-2 border-blue-500/30"></div>
                  <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-2 border-gray-800"></div>
                  <p className="font-bold text-lg text-white">
                    {edu.institution}
                  </p>
                  <p className="text-blue-300">{edu.degree}</p>
                  <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white">
              <FaBriefcase className="text-cyan-400" /> Pengalaman
            </h3>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-white/10 bg-gray-900/20 hover:border-cyan-400/50 transition-colors"
                >
                  <p className="font-bold text-lg text-white">{exp.role}</p>
                  <p className="text-blue-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm mt-1 mb-3">
                    {exp.period}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
