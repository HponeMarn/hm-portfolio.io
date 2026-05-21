import React from 'react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "phmam187@gmail.com",
      href: "mailto:phmam187@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "09792552520",
      href: "tel:09792552520",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Yangon, Myanmar",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Header */}
        <p
          data-aos="fade-up"
          className="text-slate-400 font-semibold mb-2 tracking-wider"
        >
          GET IN TOUCH
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl md:text-5xl font-bold"
        >
          Let’s Work Together
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-slate-400 mt-4 max-w-xl mx-auto"
        >
          Feel free to reach out for opportunities, collaborations, or just a quick hello.
        </p>

        {/* Contact Methods */}
        <div className="mt-12 space-y-6">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="flex items-center justify-center gap-4 p-5 bg-slate-800 border border-slate-700 rounded-2xl hover:border-slate-500 hover:scale-[1.02] transition-all group"
            >
              <div className="text-2xl">{method.icon}</div>
              <div>
                <p className="text-sm text-slate-400">{method.label}</p>
                <p className="text-slate-200 font-medium group-hover:text-blue-400 transition">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 flex justify-center gap-4"
        >
          <a className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-500 transition">
            𝕏
          </a>
          <a className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-500 transition">
            in
          </a>
          <a className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-500 transition">
            🐙
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;