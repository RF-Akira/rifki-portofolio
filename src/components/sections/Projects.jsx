import {
  FaShoppingBag,
  FaClinicMedical,
  FaUserCircle,
  FaReact,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiSqlite } from "react-icons/si";

export const Projects = () => {
  const projects = [
    {
      title: "Klassy Marketplace",
      description:
        "Sebuah platform preloved dengan fitur autentikasi, keranjang, dan checkout.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "LocalStorage", icon: <FaDatabase /> },
      ],
      icon: <FaShoppingBag />,
    },
    {
      title: "SIMKLIN MedNest",
      description:
        "Aplikasi desktop manajemen klinik berbasis Java & SQLite dengan fitur rekam medis, pasien, dan keuangan.",
      tech: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaFX", icon: <FaJava /> },
        { name: "SQLite", icon: <SiSqlite /> },
      ],
      icon: <FaClinicMedical />,
    },
    {
      title: "Portofolio Web",
      description:
        "Website pribadi untuk menampilkan profil, skill, dan proyek-proyek dengan animasi interaktif.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "ReactBits", icon: <FaReact /> },
      ],
      icon: <FaUserCircle />,
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-white bg-black">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/20 p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-blue-400 text-4xl">{project.icon}</div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-gray-400 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((techItem, key) => (
                <span
                  key={key}
                  className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                >
                  {techItem.icon}
                  <span>{techItem.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};