import React from 'react';

type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2024 - 2025",
    title: "Junior Developer (Freelance)",
    company: "Eye Clinic, Sitagu",
    description:
      "Developed a clinic ERP system using VB.NET and SQL Server, managing patient records and generating reports. Improved daily workflow efficiency and trained staff for system usage.",
    tags: ["VB.NET", "SQL Server", "Mini ERP"],
  },
  {
    year: "2025 - Present",
    title: "Full Stack Developer",
    company: "MIT Company",
    description:
      "Built a gold shop ERP web application using Spring Boot and Angular. Designed scalable business logic for inventory, sales, pawn, and financial workflows. Developed REST APIs and optimized database performance.",
    tags: ["Java", "Spring MVC", "Angular", "SSMS"],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-slate-400 font-semibold mb-2 tracking-wider"
          >
            MY JOURNEY
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold"
          >
            Work Experience
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-24 h-[2px] bg-slate-600 mx-auto mt-4 rounded-full"
          ></div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-[2px] bg-slate-700"></div>

          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>

              {/* Content */}
              <div className="md:w-1/2 pl-8 md:pl-0">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 hover:scale-[1.02] transition-all duration-300">
                  
                  <span className="text-sm text-blue-400 font-semibold">
                    {exp.year}
                  </span>

                  <h3 className="text-xl font-semibold text-slate-100 mt-2">
                    {exp.title}
                  </h3>

                  <p className="text-slate-400 font-medium mb-3">
                    {exp.company}
                  </p>

                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Empty side */}
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;