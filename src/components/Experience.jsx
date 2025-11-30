import React from "react";

/**
 * Experience — A small vertical timeline POC.
 * Current org: Chetan Sharma Pvt Limited — joined in 2022 (first org / no previous entries).
 */
export default function Experience() {
  const entries = [
    {
      year: "2022 — Present",
      title: "Software Engineer",
      org: "Chetan Sharma Pvt Limited",
      description:
        "Contributing to front-end web applications, focusing on performant front-end experiences, accessibility, and maintainable codebases. First role after graduation — ownership of features and end-to-end delivery.",
    },
  ];

  return (
    <section
      id="Experience"
      className="w-screen flex justify-center items-center mt-12 lg:mt-24 px-6 lg:px-0 "
    >
      <div className="mx-auto max-w-[1200px] lg:w-[80%] md:w-[90vw] w-full">
        <div className="mb-6 text-left lg:text-left">
          <p className="text-base text-gray-300">CAREER</p>
          <h2 className="text-3xl md:text-4xl font-bold  font-poppins text-[#9354E4] mt-2">
            Experience
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-[900px]  mt-3">
            A quick timeline of my professional experience — concise, readable,
            and mobile-first.
          </p>
        </div>
        <Timeline />
      </div>
    </section>
  );
}
const Timeline = () => {
  const experience = {
    role: "Frontend Developer",
    company: "HashedIn by Deloitte",
    period: "2023 – Present",
    location: "Bengaluru, India",
    description:
      "Contributing to front-end web applications, focusing on performant front-end experiences, accessibility, and maintainable codebases. First role after graduation — ownership of features and end-to-end delivery",
    tech: ["React", "JavaScript", "TypeScript"],
    logo: "/Logo.png", // put your PNG in public/
  };

  return (
    <div className="w-full flex justify-center mt-12 px-4">
      {/* flex-col on mobile, row on >= sm */}
      <div className="flex flex-col sm:flex-row items-stretch max-w-[750px] w-full">
        {/* LEFT: logo + line */}
        <div className="relative w-full sm:w-12 flex justify-center mb-6 sm:mb-0">
          {/* Vertical glowing line only on >= sm */}
          <div className="hidden sm:block absolute inset-y-4 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-violet-500/0 via-violet-500/80 to-violet-500/0" />

          {/* Logo node */}
          <div className="flex items-center justify-center sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <div
              className="
                w-14 h-14 rounded-full p-[2px]
                bg-gradient-to-br from-violet-500/30 to-blue-400/20
                shadow-[0_0_25px_rgba(120,80,255,0.6)]
                backdrop-blur-md
                border border-violet-400/30
              "
            >
              <img
                src={experience.logo}
                alt="Company Logo"
                className="w-full h-full rounded-full object-contain p-2 opacity-95 cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/company/hashedin/posts/?feedView=all", "_blank")
                }
              />
            </div>
          </div>
        </div>

        {/* RIGHT: card */}
        <article
          className="
            flex-1 sm:ml-4
            rounded-3xl border border-white/5
            bg-gradient-to-br from-white/5 via-white/[0.02] to-white/[0.01]
            shadow-[0_24px_80px_rgba(0,0,0,0.9)]
            backdrop-blur-xl
            px-5 py-5 sm:px-8 sm:py-7
          "
        >
          {/* header */}
          <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#AAA6C3] mb-1">
                Current Role
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <p className="text-sm text-[#AAA6C3] mt-1">
                {experience.company}
              </p>
            </div>

            <div className="text-sm sm:text-right text-[#AAA6C3]">
              <p className="font-medium text-white">{experience.period}</p>
              <p className="mt-1 opacity-80">{experience.location}</p>
            </div>
          </header>

          {/* description */}
          <p className="mt-4 text-sm md:text-base text-[#E2E1F5] leading-relaxed">
            {experience.description}
          </p>

          {/* if you want tech tags back, just uncomment and you're done */}
          {/* <div className="mt-4 flex flex-wrap gap-2">
            {experience.tech.map((t) => (
              <span
                key={t}
                className="
                  px-3 py-1 rounded-full
                  border border-white/10 
                  bg-white/[0.03]
                  text-[0.72rem] uppercase tracking-[0.15em]
                  text-[#E2E1F5]
                "
              >
                {t}
              </span>
            ))}
          </div> */}
        </article>
      </div>
    </div>
  );
};

