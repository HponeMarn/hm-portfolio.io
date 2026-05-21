import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Stat = {
  number: string;
  label: string;
};

const STATS: Stat[] = [
  { number: "1+", label: "Years Experience" },
  { number: "4+", label: "Projects Delivered" },
  { number: "3", label: "Certifications" },
  { number: "100%", label: "Commitment" },
];

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p
              data-aos="fade-right"
              className="text-slate-400 font-semibold mb-2 tracking-wider"
            >
              ABOUT ME
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Turning Complex Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Simple, Scalable Solutions
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-slate-400 mb-4 leading-relaxed"
            >
              I build real-world business systems using
              <span className="text-slate-200 font-medium"> Java Spring Boot</span> and
              <span className="text-slate-200 font-medium"> React</span>, focusing on clean architecture and maintainable code.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-slate-400 mb-4 leading-relaxed"
            >
              At MIT Company, I developed a full-featured Gold Shop ERP system handling 
              inventory, sales, purchase, gold saving, pawn, and audit workflows.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-slate-400 mb-6 leading-relaxed"
            >
              I also built a clinic management system using VB.NET + SQL Server, and now 
              specialize in modern full-stack development with React + Spring Boot.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-2 border border-slate-500 rounded-lg hover:bg-slate-700/40 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:scale-105 hover:border-slate-500 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;