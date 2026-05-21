import React from 'react';

const Hero: React.FC = () => {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-400 blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            {/* Name */}
            <p
              data-aos="fade-up"
              className="text-slate-300 mb-3 tracking-wide text-base md:text-lg"
            >
              👋 Hi, I'm{" "}
              <span className="text-white font-semibold text-xl md:text-2xl">
                Hpone Marn
              </span>
            </p>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Building Real-World
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Business Systems
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-slate-400 max-w-lg mb-8 leading-relaxed"
            >
              Full Stack Developer specializing in
              <span className="text-slate-200"> Spring Boot</span> and
              <span className="text-slate-200"> React</span>, building scalable ERP systems and business workflows.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-full font-semibold transition"
              >
                View Work →
              </a>

              <button
                onClick={handleContact}
                className="px-8 py-3 border border-slate-500 rounded-full hover:bg-slate-700/40 transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative flex justify-center"
          >
            <div className="relative group">

              {/* Image */}
              <img
                src="/unnamed.jpg" // put image in public folder
                alt="Hpone Marn"
                className="w-80 h-[420px] object-cover rounded-2xl shadow-2xl opacity-90 group-hover:opacity-100 transition duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white border border-white/20">
                Yangon, Myanmar
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <div
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center cursor-pointer"
        >
          <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-ping" />
        </div>
      </div>

    </section>
  );
};

export default Hero;