import React from 'react';

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  stack: string[];
  features: string[];
  company: string;
  duration: string;
};

const PROJECTS: Project[] = [
  {
    title: "Gold Shop ERP System",
    category: "Full Stack | Enterprise",
    image: "🏪",
    description:
      "Built a full ERP system for a gold shop to manage inventory, sales, pawn, and financial workflows. Improved business efficiency and data tracking.",
    stack: ["Spring Boot", "Angular", "MySQL", "REST API"],
    features: ["Inventory tracking", "Pawn system", "Gold saving", "Audit logs"],
    company: "MIT Company",
    duration: "7 months",
  },
  {
    title: "Travel Guide Platform",
    category: "Full Stack | Tourism",
    image: "✈️",
    description:
      "Developed a travel platform with search, booking, and user reviews. Focused on user experience and scalable backend APIs.",
    stack: ["Spring Boot", "React", "MongoDB"],
    features: ["Search system", "Booking", "Reviews", "Maps"],
    company: "Training Project",
    duration: "3 months",
  },
  {
    title: "Library Management System",
    category: "Desktop Application",
    image: "📚",
    description:
      "Created a desktop system to manage books, members, and borrowing process with automated fine calculation.",
    stack: ["VB.NET", "SQL Server"],
    features: ["Catalog", "Members", "Borrow/Return", "Reports"],
    company: "Training Project",
    duration: "2 months",
  },
  {
    title: "Eye Clinic Management",
    category: "Healthcare ERP",
    image: "🏥",
    description:
      "Built a clinic system to manage patient records, appointments, and reporting, improving daily workflow.",
    stack: ["VB.NET", "SQL Server"],
    features: ["Patients", "Appointments", "Reports"],
    company: "Freelance Project",
    duration: "5 months",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-slate-400 font-semibold mb-2 tracking-wider"
          >
            MY WORK
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold"
          >
            Featured Projects
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-24 h-[2px] bg-slate-600 mx-auto mt-4 rounded-full"
          ></div>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            Real-world projects demonstrating my ability to build scalable systems and solve business problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Top */}
              <div className="h-40 flex items-center justify-center text-6xl bg-slate-700 relative">
                {project.image}

                <div className="absolute top-3 right-3 bg-slate-900/80 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-600">
                  {project.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-slate-100 mt-1">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="text-slate-500 text-xs mt-2">
                  🏢 {project.company}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-700 border border-slate-600 rounded text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.features.map((f, i) => (
                    <span key={i} className="text-xs text-slate-400">
                      • {f}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;