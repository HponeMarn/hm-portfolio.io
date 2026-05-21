import React from 'react';

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

const EDUCATIONS: EducationItem[] = [
  {
    institution: "Taungoo University",
    degree: "Bachelor of Science (Physics)",
    period: "2018 - 2025",
  },
  {
    institution: "Youth Resource College",
    degree: "Diploma in Computing",
    period: "2024",
  },
  {
    institution: "Youth Resource College",
    degree: "Diploma in Business IT",
    period: "2025",
  },
  {
    institution: "One Stop Bootcamp",
    degree: "Java Developer Certificate (JDC)",
    period: "2025",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          🎓 Education & Certifications
        </h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 w-[2px] h-full bg-slate-700"></div>

          <div className="space-y-12">
            {EDUCATIONS.map((edu, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-5 h-5 bg-blue-400 rounded-full border-4 border-slate-900"></div>

                {/* Card */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-500 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {edu.institution}
                  </h3>

                  <p className="text-slate-300 mt-1">
                    {edu.degree}
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;