import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactCardFlip from 'react-card-flip'


const Projects = () => {

    const [flippedCard, setFlippedCard] = useState(null);
    const [projects, setprojects] = useState([{
        projectIndex: "project1",
        projectName: "Newzify",
        projectImage: "/newzifyDesk.png",
        projectDescription: "Discover Newzify, the ultimate news hub! Browse global headlines and trending stories by keywords in one elegant, classy app. Stay informed, entertained, and maybe even chuckle a bit – because who said staying updated can't be stylish and fun?",
        projectTechStack: [
            { name: "React.js", color: "text-blue-500" },
            { name: "Tailwind", color: "text-green-500" },
            { name: "RestApi", color: "text-red-500" },
            { name: "Redux", color: "text-yellow-500" }
        ],
        projectLink: "https://newzify-news-app.vercel.app/",
        projectGithub: "https://github.com/chetan-sharmaG/Newzify-News-App"
    }, {
        projectIndex: "project2",
        projectName: "BuyMeAPopcorn",
        projectImage: "/popcornDesk.png",
        projectDescription: "Popcorn is a user-friendly platform where creators showcase their work and connect with fans. Earn 'popcorns,' a unique currency, sent straight to your Razorpay account without service charges. Be a creator, a fan, or both, and enjoy secure, private, and fun interactions. Let’s get popping!",
        projectTechStack: [
            { name: "Next.js", color: "text-blue-500" },
            { name: "Tailwind", color: "text-green-500" },
            { name: "Firebase", color: "text-red-500" },
            { name: "MongoDb", color: "text-yellow-500" }
        ],
        projectLink: "https://get-me-a-pop-corn.vercel.app/",
        projectGithub: "https://github.com/chetan-sharmaG/get_Me_a_PopCorn"
    }, {
        projectIndex: "project3",
        projectName: "VALTRACKER",
        projectImage: "/valTrackerDesk.png",
        projectDescription: "The Valorant Match-Tracking Website provides comprehensive match analytics, agent details, and map insights for Valorant players. Its intuitive interface and extensive features make it an invaluable tool for enhancing gameplay strategy and performance",
        projectTechStack: [
            { name: "JavaScript", color: "text-blue-500" },
            { name: "NodeJs", color: "text-green-500" },
            { name: "CSS", color: "text-red-500" },
            { name: "MongoDb", color: "text-yellow-500" }
        ],
        projectLink: "https://val-t-racker.vercel.app/",
        projectGithub: "https://github.com/chetan-sharmaG/ValTRacker"
    },
    {
        projectIndex: "project4",
        projectName: "PassKeeper",
        projectImage: "/passkeeper1.png",
        projectDescription: "Welcome to 'PassKeeper' - your very own digital keyring! Our handy tool stashes your URLs, usernames, and passwords, storing them securely in your local treasure chest or our impregnable Google cloud vault. Accessible anytime, anywhere, on any device - forget about forgetting passwords, let's make memory loss fun!",
        projectTechStack: [
            { name: "React.js", color: "text-blue-500" },
            { name: "NodeJs", color: "text-green-500" },
            { name: "Tailwind", color: "text-red-500" },
            { name: "MongoDb", color: "text-yellow-500" }
        ],
        projectLink: "https://chetan-sharmag.github.io/ReactPassKeeper/",
        projectGithub: "https://github.com/chetan-sharmaG/PassKeeper"
    },
    {
        projectIndex: "project5",
        projectName: "CLassRoom",
        projectImage: "/classroom.png",
        projectDescription: "ClassRoom is a mobile application built with Flutter, revolutionizing education by streamlining student engagement and facilitating communication within educational institutions. It offers features like a notes organizer, calendar manager, announcement broadcaster, user directory, and ERP integration, all in a user-friendly interface. ClassRoom enhances learning experiences and efficiently manages course materials and announcements.",
        projectTechStack: [
            { name: "Flutter", color: "text-blue-500" },
            { name: "Firebase", color: "text-green-500" },
            { name: "Dart", color: "text-red-500" },
            // { name: "Firebase", color: "text-yellow-500" }
        ],
        projectLink: "",
        projectGithub: "https://github.com/chetan-sharmlinaG/ClassRoom"
    }])
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
    }



    const goTo = (link) => {
        if (link)
            window.open(link)
    }
    return (
        <>
            <section id='Projects' className='w-full min-h-screen mb-44 text-white   lg:mt-[68px] mt-44'>
                <div className='flex   flex-col gap-6 justify-center lg:w-[80%] w-[85vw] md:w-[90vw] mx-auto'>
                    <div className='flex flex-col gap-1 '>
                        <span className='text-base leading-[24px] font-normal text-[#AAA6C3]'>MY WORK</span>
                        <span className='md:text-[40px] text-[24px] leading-[40px] font-bold font-poppins text-[#9354E4]'>Projects</span>
                    </div>
                    <span className=' md:w-[70%] w-[90%] leading-[26px sm:leading-[30px] font-poppins text-[#AAA6C3] text-[17px] font-light'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</span>
                          <motion.div
                          // onMouseLeave={() => setFlippedCard(null)}
                            className='flex flex-wrap gap-5 justify-center items-center w-[95%] mx-auto'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.05 }}
                            variants={{
                                hidden: {},
                                // faster reveal, smaller stagger so cards appear quickly as the user scrolls
                                visible: { transition: { staggerChildren: 0.08 } }
                            }}
                          >
                        {projects.map((project, index) => {


                            return (
                                <motion.div
                                    key={project.projectGithub}
                                    variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 100 } }}
                                    transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                                >
                                    <ReactCardFlip isFlipped={flippedCard === `project${index}`} flipDirection="horizontal" className='containerBox w-full h-full'>
                                        <div id='project'

                                            onMouseOver={() => setFlippedCard(`project${index}`)}
                                            className='hover:z-[-1] relative transform-gpu transition-transform duration-300 hover:scale-105 flex flex-col sm:w-[370px] w-[300px] sm:max-h-[580px] min-h-[280px] max-h-[500px] p-0 gap-4 z-1 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b0a14]/60 via-[#261a39]/30 to-[#071026]/30 border border-[#7042f8]/20 shadow-xl'>
                                            <div className='w-full relative overflow-hidden'>
                                                {/* responsive picture: AVIF -> WebP -> PNG fallback */}
                                                <picture>
                                                    <source type="image/avif" srcSet={`${project.projectImage.replace(/\.[^/.]+$/, '')}-1200.avif 1200w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-768.avif 768w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-480.avif 480w`} sizes="(max-width:640px) 100vw, 370px" />
                                                    <source type="image/webp" srcSet={`${project.projectImage.replace(/\.[^/.]+$/, '')}-1200.webp 1200w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-768.webp 768w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-480.webp 480w`} sizes="(max-width:640px) 100vw, 370px" />
                                                        <img src={project.projectImage} alt={`${project.projectName} screenshot`} loading="lazy" className='w-full h-[220px] object-cover block' />
                                                </picture>
                                                
                                                    {/* floating planet accent */}
                                                    <div className='absolute right-3 top-3 w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF8ED4] via-[#7A5CFF] to-[#28D1FF] opacity-90 shadow-[0_6px_30px_rgba(122,92,255,0.18)] border border-white/10 flex items-center justify-center'>
                                                        <div style={{ animation: 'spin 8s linear infinite' }} className='w-6 h-6 rounded-full bg-white/70' />
                                                    </div>
                                                    <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                                            </div>
                                                <div className='flex justify-center gap-3 flex-col w-full h-fit p-4'>
                                                    <h1 className='font-normal font-poppins sm:text-[24px] text-[20px] text-white tracking-wide'>{project.projectName}
                                                </h1>
                                                <h1 className='text-[14px] line-clamp-6 overflow-hidden font-normal text-[#AAA6C3]'>{project.projectDescription}</h1>
                                                <div className='flex sm:flex-nowrap flex-wrap gap-2 mt-3'>
                                                    {project.projectTechStack.map((tech, index1) => {
                                                        return (

                                                            <span key={tech.name} className={`inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/2 border border-white/5 ${tech.color} shadow-sm`}>#{tech.name}</span>
                                                        )
                                                    })}



                                                </div>
                                            </div>
                                        </div>
                                        <div id='project'
                                            onMouseLeave={() => setFlippedCard(null)}
                                            className='flex flex-col sm::w-[370px] w-[370px] sm:max-h-[580px] min-h-[280px] max-h-[500px] p-6 gap-4 relative z-1 rounded-2xl bg-[linear-gradient(135deg,rgba(13,9,23,.62),rgba(36,16,54,.34))] border border-[#7042f8]/20'>
                                            <div className='relative   '>
                                                <div className='w-full flex collapse flex-col gap-1 opacity-0 user-select-none  items-center justify-between'>

                                                    <div className='w-full  '>
                                                        <picture>
                                                            <source type="image/avif" srcSet={`${project.projectImage.replace(/\.[^/.]+$/, '')}-1200.avif 1200w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-768.avif 768w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-480.avif 480w`} sizes="(max-width:640px) 100vw, 370px" />
                                                            <source type="image/webp" srcSet={`${project.projectImage.replace(/\.[^/.]+$/, '')}-1200.webp 1200w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-768.webp 768w, ${project.projectImage.replace(/\.[^/.]+$/, '')}-480.webp 480w`} sizes="(max-width:640px) 100vw, 370px" />
                                                            <img src={project.projectImage} alt={`${project.projectName} screenshot`} loading="lazy" className='w-full rounded-lg h-full object-cover' />
                                                        </picture>
                                                    </div>
                                                    <div className='flex justify-center  gap-2  flex-col w-full h-fit'>
                                                        <h1 className='font-bold text-[20px] sm:text-[24px] '>ch
                                                        </h1>
                                                        <h1 className='text-[14px] font-normal text-[#AAA6C3]'>The Valorant Match-Tracking Website provides comprehensive match analytics, agent details, and map insights for Valorant players. Its intuitive interface and extensive features make it an invaluable tool for enhancing gameplay strategy and performance</h1>
                                                        <div className='flex gap-3 mt-3'>
                                                            <h3 className='text-sm text-blue-500'>#JavaScript</h3>
                                                            <h3 className='text-sm text-green-700'>#CSS</h3>
                                                            <h3 className='text-sm text-red-500'>#ExpressJs</h3>
                                                            <h3 className='text-sm text-yellow-500'>#MongoDb</h3>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='absolute -bottom-8 left-[5%] w-[90%] opacity-80 rounded-full blur-xl h-[60px] bg-gradient-to-r from-[#7a5cff]/20 via-[#3ad1ff]/8 to-[#7a5cff]/6 pointer-events-none' />
                                                <div className='absolute top-0 flex flex-col gap-20 items-center justify-center w-full h-full'>
                                                    <div className="group relative ">
                                                        <button onClick={() => goTo(project.projectGithub)}>
                                                            <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-[50px] hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                        </button>
                                                        <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
      z-20 origin-left scale-0 px-3 rounded-lg border 
      border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">GitHub<span>
                                                            </span></span></div>


                                                    <div className="group relative ">
                                                        <svg onClick={() => goTo(project.projectLink)}
                                                            width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" className={`hover:scale-125 ${project.projectLink ? "cursor-pointer" : "cursor-not-allowed"} duration-200 hover:stroke-blue-500`} stroke="#ffffff" fill="none">

                                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                            <g id="SVGRepo_iconCarrier">

                                                                <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />

                                                                <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />

                                                                <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />

                                                                <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />

                                                                <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />

                                                                <line x1="32" y1="6.99" x2="32" y2="56.7" />

                                                                <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />

                                                                <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />

                                                                <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />

                                                            </g>

                                                        </svg>
                                                        <span className="absolute -bottom-20 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border  border-gray-300 bg-black py-2 text-sm font-bold shadow-md transition-all text-center duration-300 ease-in-out  group-hover:scale-100">Live Preview<span>
                                                        </span></span></div>
                                                </div>

                                            </div>

                                        </div>

                                    </ReactCardFlip>
                                </motion.div>
                            )
                        })}


                    </motion.div>
                </div >
            </section >
        </>
    )
}

export default Projects
