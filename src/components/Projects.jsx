import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  // no flipping behaviour — we show actions on the card directly
  const [projects, setprojects] = useState([
    {
      projectIndex: "project0",
      projectName: "WhatToWatch",
      projectImage: "/Movie.png",
      projectDescription:
        "WhatToWatch is a smart movie discovery app built with React, designed to help users find films quickly and intuitively. It features a Netflix-inspired UI, a powerful search experience, and an AI-driven recommendation workflow.",
      projectTechStack: [
        { name: "React.js", color: "text-blue-500" },
        { name: "Groq", color: "text-green-500" },
        { name: "MUI", color: "text-red-500" },
      ],
      projectLink: "https://what-to-watch-beta.vercel.app/",
      projectGithub: "https://github.com/chetan-sharmaG/MovieSysytem",
    },
    {
      projectIndex: "project1",
      projectName: "Newzify",
      projectImage: "/newzifyDesk.png",
      projectDescription:
        "Discover Newzify, the ultimate news hub! Browse global headlines and trending stories by keywords in one elegant, classy app. Stay informed, entertained, and maybe even chuckle a bit – because who said staying updated can't be stylish and fun?",
      projectTechStack: [
        { name: "React.js", color: "text-blue-500" },
        { name: "Tailwind", color: "text-green-500" },
        { name: "RestApi", color: "text-red-500" },
        { name: "Redux", color: "text-yellow-500" },
      ],
      projectLink: "https://newzify-news-app.vercel.app/",
      projectGithub: "https://github.com/chetan-sharmaG/Newzify-News-App",
    },
    // {
    //   projectIndex: "project2",
    //   projectName: "BuyMeAPopcorn",
    //   projectImage: "/popcornDesk.png",
    //   projectDescription:
    //     "Popcorn is a user-friendly platform where creators showcase their work and connect with fans. Earn 'popcorns,' a unique currency, sent straight to your Razorpay account without service charges. Be a creator, a fan, or both, and enjoy secure, private, and fun interactions. Let’s get popping!",
    //   projectTechStack: [
    //     { name: "Next.js", color: "text-blue-500" },
    //     { name: "Tailwind", color: "text-green-500" },
    //     { name: "Firebase", color: "text-red-500" },
    //     { name: "MongoDb", color: "text-yellow-500" },
    //   ],
    //   projectLink: "https://get-me-a-pop-corn.vercel.app/",
    //   projectGithub: "https://github.com/chetan-sharmaG/get_Me_a_PopCorn",
    // },
    {
      projectIndex: "project3",
      projectName: "VALTRACKER",
      projectImage: "/valTrackerDesk.png",
      projectDescription:
        "The Valorant Match-Tracking Website provides comprehensive match analytics, agent details, and map insights for Valorant players. Its intuitive interface and extensive features make it an invaluable tool for enhancing gameplay strategy and performance",
      projectTechStack: [
        { name: "JavaScript", color: "text-blue-500" },
        { name: "NodeJs", color: "text-green-500" },
        { name: "CSS", color: "text-red-500" },
        { name: "MongoDb", color: "text-yellow-500" },
      ],
      projectLink: "https://val-t-racker.vercel.app/",
      projectGithub: "https://github.com/chetan-sharmaG/ValTRacker",
    },
    // {
    //   projectIndex: "project4",
    //   projectName: "PassKeeper",
    //   projectImage: "/passkeeper1.png",
    //   projectDescription:
    //     "Welcome to 'PassKeeper' - your very own digital keyring! Our handy tool stashes your URLs, usernames, and passwords, storing them securely in your local treasure chest or our impregnable Google cloud vault. Accessible anytime, anywhere, on any device - forget about forgetting passwords, let's make memory loss fun!",
    //   projectTechStack: [
    //     { name: "React.js", color: "text-blue-500" },
    //     { name: "NodeJs", color: "text-green-500" },
    //     { name: "Tailwind", color: "text-red-500" },
    //     { name: "MongoDb", color: "text-yellow-500" },
    //   ],
    //   projectLink: "https://chetan-sharmag.github.io/ReactPassKeeper/",
    //   projectGithub: "https://github.com/chetan-sharmaG/PassKeeper",
    // },
    // {
    //   projectIndex: "project5",
    //   projectName: "CLassRoom",
    //   projectImage: "/classroom.png",
    //   projectDescription:
    //     "ClassRoom is a mobile application built with Flutter, revolutionizing education by streamlining student engagement and facilitating communication within educational institutions. It offers features like a notes organizer, calendar manager, announcement broadcaster, user directory, and ERP integration, all in a user-friendly interface. ClassRoom enhances learning experiences and efficiently manages course materials and announcements.",
    //   projectTechStack: [
    //     { name: "Flutter", color: "text-blue-500" },
    //     { name: "Firebase", color: "text-green-500" },
    //     { name: "Dart", color: "text-red-500" },
    //     // { name: "Firebase", color: "text-yellow-500" }
    //   ],
    //   projectLink: "",
    //   projectGithub: "https://github.com/chetan-sharmlinaG/ClassRoom",
    // },
  ]);
  const control = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    // exit: { opacity: 0, scale: 0.8 },
  };

  const goTo = (link) => {
    if (link) window.open(link);
  };
  return (
    <>
      <section
        id="Projects"
        className="w-full min-h-screen mb-44 text-white   lg:mt-[68px] mt-44"
      >
        <div className="flex   flex-col gap-6 justify-center lg:w-[80%] w-[85vw] md:w-[90vw] mx-auto">
          <div className="flex flex-col gap-1 lg:pl-[10px]">
            <span className="text-base leading-[24px] font-normal text-[#AAA6C3]">
              MY WORK
            </span>
            <span className="md:text-[40px]  text-[24px] leading-[40px] font-bold font-poppins text-[#9354E4]">
              Projects
            </span>
          </div>
          <span className=" lg:pl-[10px] md:w-[71%] w-[90%] leading-[26px sm:leading-[30px] font-poppins text-[#AAA6C3] text-[17px] font-light">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </span>
          <motion.div
            // onMouseLeave={() => setFlippedCard(null)}
            className="flex flex-wrap gap-5 justify-center items-center w-[95%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              // faster reveal, smaller stagger so cards appear quickly as the user scrolls
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {projects.map((project, index) => {
              return (
                <motion.div
                  // modern cards: subtle hover scale, no flip
                  key={project.projectGithub}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                  }}
                  transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  <div
                    id="project"
                    className="relative transform-gpu transition-transform duration-300 hover:scale-105 flex flex-col sm:w-[370px] w-[300px] sm:max-h-[580px] min-h-[280px] max-h-[500px] p-4 gap-4 z-1 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b0a14]/60 via-[#261a39]/30 to-[#071026]/30 border border-[#7042f8]/20 shadow-xl"
                  >
                    <div className="w-full relative overflow-hidden">
                      {/* responsive picture: AVIF -> WebP -> PNG fallback */}
                      <picture>
                        <source
                          type="image/avif"
                          srcSet={`${project.projectImage.replace(
                            /\.[^/.]+$/,
                            ""
                          )}-1200.avif 1200w, ${project.projectImage.replace(
                            /\.[^/.]+$/,
                            ""
                          )}-768.avif 768w, ${project.projectImage.replace(
                            /\.[^/.]+$/,
                            ""
                          )}-480.avif 480w`}
                          sizes="(max-width:640px) 100vw, 370px"
                        />
                        <source
                          type="image/webp"
                          srcSet={`${project.projectImage.replace(
                            /\.[^/.]+$/,
                            ""
                          )}-1200.webp 1200w, ${project.projectImage.replace(
                            /\.[^/.]+$/,
                            ""
                          )}-768.webp 768w, ${project.projectImage.replace(
                            /\.[^/.]+$/,
                            ""
                          )}-480.webp 480w`}
                          sizes="(max-width:640px) 100vw, 370px"
                        />
                        <img
                          src={project.projectImage}
                          alt={`${project.projectName} screenshot`}
                          loading="lazy"
                          className="w-full h-[220px] object-cover block"
                        />
                      </picture>

                      {/* Removed decorative floating icon to avoid distracting overlay */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="flex justify-center gap-3 flex-col w-full h-fit p-4">
                      <div className="flex items-start justify-between gap-3 w-full">
                        <h1 className="font-normal font-poppins sm:text-[24px] text-[20px] text-white tracking-wide leading-tight">
                          {project.projectName}
                        </h1>

                        {/* inline action icons (icons only) with tooltips on hover */}
                        <div className="flex items-center gap-2 ml-3">
                          <div className="group relative inline-flex">
                            <button
                              aria-label={`Open ${project.projectName} on GitHub`}
                              onClick={() => goTo(project.projectGithub)}
                              className="p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                className="text-white opacity-90 transition-colors duration-150 group-hover:text-blue-400 group-focus:text-blue-400"
                              >
                                <path d="M12 .5C5.73.5.75 4.98.75 11.29c0 4.42 2.87 8.16 6.86 9.49.5.1.68-.22.68-.48 0-.23-.01-.85-.01-1.67-2.79.52-3.38-1.28-3.38-1.28-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.9 1.53 2.35 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.23-.26-4.57-1.12-4.57-4.98 0-1.1.39-2 .98-2.71-.1-.26-.43-1.3.09-2.71 0 0 .8-.26 2.62 1.04a9.33 9.33 0 012.38-.33c.81.01 1.63.11 2.38.33 1.82-1.3 2.62-1.04 2.62-1.04.52 1.41.19 2.45.09 2.71.6.71.98 1.61.98 2.71 0 3.87-2.35 4.71-4.59 4.97.36.31.69.92.69 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.6.69.5 4-1.33 6.86-5.07 6.86-9.49C23.25 4.98 18.27.5 12 .5z" />
                              </svg>
                            </button>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-1 text-xs font-semibold text-white shadow-md transition-all duration-200 group-hover:scale-100 group-focus:scale-100">
                              GitHub
                            </span>
                          </div>

                          <div className="group relative inline-flex">
                            <button
                              aria-label={`Open ${project.projectName} live preview`}
                              onClick={() => goTo(project.projectLink)}
                              className={`p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                                !project.projectLink
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 64 64"
                                strokeWidth="2"
                                className="text-white transition-colors duration-150 group-hover:text-blue-400 group-focus:text-blue-400"
                                stroke="currentColor"
                                fill="none"
                              >
                                <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
                                <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
                                <line
                                  x1="10.37"
                                  y1="19.9"
                                  x2="53.75"
                                  y2="19.9"
                                />
                              </svg>
                            </button>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-black py-1 text-xs font-semibold text-white shadow-md transition-all duration-200 group-hover:scale-100 group-focus:scale-100">
                              Preview
                            </span>
                          </div>
                        </div>
                      </div>
                      <h1 className="text-[14px] line-clamp-3 overflow-hidden font-normal text-[#AAA6C3]">
                        {project.projectDescription}
                      </h1>
                      <div className="flex sm:flex-nowrap flex-wrap gap-2 mt-3">
                        {project.projectTechStack.map((tech, index1) => {
                          return (
                            <span
                              key={tech.name}
                              className={`inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/2 border border-white/5 ${tech.color} shadow-sm`}
                            >
                              #{tech.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Actions / controls — visible on the card directly */}
                    {/* Inline icons next to title now — top-right block removed */}
                    {/* end .project card */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
