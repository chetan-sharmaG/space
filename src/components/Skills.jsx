import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {

    const control = useAnimation();
    const [skills, setskills] = useState([
        {
            name: 'Javascript',
            img: '/javascript.svg'
        },
        {
            name: 'React',
            img: '/reactjs.svg'
        },
        {
            name: 'Express',
            img: '/expressjs.svg'
        },
        {
            name: 'Next',
            img: '/nextjs.svg'
        }, {
            name: 'Chakra UI',
            img: '/chakra.svg'
        },
        {
            name: 'Firebase',
            img: '/firebase.svg'
        }, {
            name: 'Framer',
            img: '/framer.svg'
        }, {
            name: 'Tailwind',
            img: '/tailwindcss.svg'
        },
        {
            name: 'Git',
            img: '/git.svg'
        },
        {
            name: 'mongoDB',
            img: '/mongodb.svg'
        }
        , {
            name: 'Node',
            img: '/nodejs.svg'
        }, {
            name: 'Vercel',
            img: '/vercel.svg'
        },
        {
            name: 'PostgreSQL',
            img: '/postgresql.svg'
        }
    ])
    const [moveDiffX, setMoveDiffX] = useState(0)
    const [moveDiffY, setMoveDiffY] = useState(0)
    const [movingIndex, setmovingIndex] = useState(null)
    // timer ref used when animating items so we can cleanup on unmount
    const timerRef = useRef(null)
    const [ref, inView] = useInView({
        triggerOnce: true,

    });
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }

        // no cleanup needed for intersection observer hook here (triggerOnce)
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [control, inView]);

    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        // exit: { opacity: 0, scale: 0.8 },
    }

    const randomize = (index) => {
        // Avoid mutating state directly. Work on a shallow copy.
        const copy = [...skills]
        const [skill] = copy.splice(index, 1)

        const randomIndex = Math.floor(Math.random() * copy.length)

        const diffX = (randomIndex - index) * 106
        const diffY = 54
        setMoveDiffX(diffX)
        setMoveDiffY(diffY)

        copy.splice(randomIndex, 0, skill)
        setmovingIndex(index)

        // use a timer ref/cleanup: store id and allow effect-cleanup if unmounted
        timerRef.current = setTimeout(() => {
            setmovingIndex(null)
            setskills(copy)
            timerRef.current = null
        }, 500)
    }
        return (
            <section className='w-screen flex flex-col items-center justify-start min-h-[80vh]   lg:mt-[60px] mt-44 gap-6'>
               <div className="w-full flex flex-col justify-center items-center p-8 mr-8" style={{opacity: 1, transform: "none"}}><div id="Wecom-box" className="animate-slidedown12 inline-flex items-center px-4 py-3 border border-[#7042f88b] rounded-md bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5 text-[#b49bff] mr-2"><path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd"></path></svg><span id="Wecom-text" className="text-sm 310:text-xs 370:text-sm text-white">Experience With Some Technology</span></div></div>
                <div ref={ref} className='flex flex-row gap-14  opacity-100 gap-y-14 justify-center flex-wrap w-[80%] md:w-[60%] mx-auto '>

                    {skills.map((skill, index) => {
                        return (<motion.img src={skill.img}
                            key={skill.name}
                            // `ref` should be on the wrapper — not each image (avoids duplicate refs)
                            // alt and lazy-loading improve performance and accessibility
                            alt={skill.name}
                            loading="lazy"
                            initial="hidden"
                            animate={control}
                            viewport={{ once: true, amount: 0.9 }}
                            whileInView={"visible"}
                            variants={variants}
                            transition={{
                                duration: 0.3,
                                delay: 0.1 * index,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            // onMouseLeave={() => randomize(index)}
                            className={`${movingIndex === index ? "moving" : ""} object-contain md:w-[80px] md:h-[80px] w-[65px] beat`}
                            style={{
                                '--move-x': movingIndex === index ? `${moveDiffX}px` : "0px",
                                '--move-y': movingIndex === index ? `${moveDiffY}px` : "0px",
                                transform: movingIndex === index ? `translate(${moveDiffX}px, ${moveDiffY}px)` : "none",
                                transition: movingIndex === index ? 'transform 0.5s ease-in' : 'none'
                            }}
                        ></motion.img>)
                    })}



                </div>

            </section>
        )
    }

    export default Skills
