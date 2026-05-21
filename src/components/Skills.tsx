import React from 'react';
import {
  FaReact, FaAngular, FaHtml5, FaCss3Alt, FaBootstrap, FaGit, FaJava, FaDatabase
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiTailwindcss,
  SiSpringboot, SiSpringsecurity, SiMysql, SiMongodb,
  SiPostman, SiIntellijidea, SiApache, SiVite
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
      { name: "Spring Security", icon: <SiSpringsecurity className="text-green-400" /> },

      // ❗ fallback icons
      { name: "Spring MVC", icon: <SiSpringboot className="text-green-300" /> },
      { name: "JPA", icon: <FaDatabase className="text-green-300" /> },
      { name: "REST API", icon: <FaDatabase className="text-blue-300" /> },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },

      // ❗ SQL Server fallback
      { name: "SQL Server", icon: <FaDatabase className="text-red-500" /> },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: <FaGit className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "IntelliJ", icon: <SiIntellijidea className="text-pink-500" /> },
      { name: "Maven", icon: <SiApache className="text-red-700" /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-slate-400 font-semibold mb-2 tracking-wider">
            MY EXPERTISE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Skills
          </h2>

          <div className="w-24 h-[2px] bg-slate-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-6 flex items-center gap-2">
                <span>{category.icon}</span> {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-5">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 text-slate-300 hover:text-blue-400 transition"
                  >
                    <div className="text-3xl transition transform hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;