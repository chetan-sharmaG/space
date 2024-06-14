import React, { useRef, useState } from 'react'
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
    const control1 = useRef(null)
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

    const randomize = (index) => {

        const skill = skills.splice(index, 1)[0]
        const randomIndex = Math.floor(Math.random() * skills.length);
       
        const diffX = (randomIndex-index)*106
        const diffY = 54
        setMoveDiffX(diffX)
        setMoveDiffY(diffY)


        skills.splice(randomIndex, 0, skill)
        setmovingIndex(index)
        setTimeout(() => {
            setmovingIndex(null)
            setskills([...skills])

        }, 500)}
        return (
            <section className='w-screen flex items-center justify-center min-h-[80vh]   lg:mt-[68px] mt-44'>
                <div className='flex flex-row gap-14  opacity-100 gap-y-14 justify-center flex-wrap w-[80%] md:w-[60%] mx-auto '>

                    {skills.map((skill, index) => {
                        return (<motion.img src={skill.img}
                            key={skill.name}
                            ref={ref}
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
                            onMouseLeave={() => randomize(index)}
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
