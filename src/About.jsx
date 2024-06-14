import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {

    const control = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5
    });

    React.useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    const variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        // exit: { opacity: 0, scale: 0.8 },
    }
    const variant1 = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        // exit: { opacity: 0, scale: 0.8 },
    }

    const tiles = [{
        title: "Problem Solver",
        icons: "/solver.png",
        description: "Proficient in analytical thinking and creative problem-solving, capable of addressing complex issues."
    }, {
        title: "Frontend Wizard",
        icons: "/frontend.png",
        description: "Skilled in front-end technologies, capable of developing engaging and interactive user interfaces."
    }, {
        title: "Backend Maestro",
        icons: "/backend.png",
        description: "Experienced in server-side development, capable of creating robust and scalable backend architectures."
    }, {
        title: "Code Artian",
        icons: "/artisan.png",
        description: "Dedicated to writing clean, maintainable code that aligns with best practices and coding standards."
    }]

    return (
        <section id='About' className='  lg:mt-[68px] mt-44'>
           
            <div className='min-h-[calc(100vh + 68px)] w-screen lg:w-full md:w-[90vw]  flex items-center justify-center '>
                <div className='flex flex-col gap-6 md:w-[76%] w-[90%] mx-auto  text-white'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-base leading-[24px]  font-normal text-[#AAA6C3]'>WELCOME TO THE JOURNEY</span>
                        <span className='md:text-4xl text-[24px] leading-[40px] font-bold font-poppins text-[#9354E4]'>Explore the Overview</span>
                    </div>
                    <span className=' md:w-[55%] w-[90%] leading-[26px] font-poppins text-[#AAA6C3] text-[16px] font-light'>Hey there! 👋 I'm a passionate software developer, skilled in JavaScript and TypeScript. With expertise in Angular, Dotnet , and Three.js, I create beautiful and efficient solutions. Let's collaborate to transform your ideas into user-friendly, scalable realities. Ready for the journey? 🚀</span>
                    <div className='w-full flex lg:min-h-[400px] md:py-5 md:min-h-[400px] md:mt-2 mt-8  flex-wrap gap-y-10 md:gap-x-6 relative justify-evenly z-20 items-center '>
                        {tiles.map((tile, index) => {
                            return (

                                <motion.div key={tile.title}
                                    id='box' className='relative group hover:scale-110  flex items-center   w-[250px] h-[280px] bg-[#151030] gradient-border '
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    // animate={{ opacity: 1, x: 0 }}
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -100 }
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                >
                                    <motion.span
                                        className='group-hover:hidden  font-xl flex flex-col gap-3 items-center justify-center font-poppins text-xl font-bold '
                                        ref={ref}
                                        initial="hidden"
                                        animate={control}
                                        viewport={{ once: false }}
                                        whileInView={"visible"}
                                        variants={variants}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }}

                                    > <img className='icons' src={tile.icons} width={60} />{tile.title}</motion.span>
                                    <span
                                        className='group-hover:flex px-4  bg-[#151030]  rounded-[20px]   description hidden  z-10  font-poppins text-xl text-center leading-normal font-semibold'>{tile.description}
                                    </span>

                                </motion.div>
                            )
                        })}


                    </div>
                </div>

            </div>
        </section>

    )
}

export default About

{/* <div id='box' className='relative group hover:scale-110  flex items-center  gradient-border w-[250px] h-[280px] bg-[#151030]  '>
<motion.span
    className='group-hover:hidden  font-xl flex flex-col gap-3 items-center justify-center font-poppins text-xl font-bold '
    ref={ref}
    initial="hidden"
    animate={control}
    variants={variants}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }}

> <img className='icons' src='/solver.png' width={60} />Problem solver</motion.span>
<span
    className='group-hover:flex px-4  bg-[#151030]  rounded-[20px]   description hidden  z-10  font-poppins text-xl text-center leading-normal font-semibold'

> Proficient in analytical thinking and creative problem-solving, capable of addressing complex issues.
</span>

</div>
<div id='box' className='relative group hover:scale-110  flex items-center jus gradient-border w-[250px] h-[280px] bg-[#151030]  '>
<motion.span
    className='group-hover:hidden flex flex-col gap-3 items-center justify-cente font-xl font-poppins text-xl font-bold '
    ref={ref}
    initial="hidden"
    animate={control}
    variants={variants}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }}
> <img className='icons' src='/frontend.png' width={60} />Frontend Wizard</motion.span>
<span
    className='group-hover:flex px-4  bg-[#151030]  rounded-[20px]   description hidden  z-10  font-poppins text-xl text-center leading-normal font-semibold'

> Skilled in front-end technologies, capable of developing engaging and interactive user interfaces</span>

</div>
<div id='box' className='relative group hover:scale-110  flex items-center jus gradient-border w-[250px] h-[280px] bg-[#151030]  '>
<motion.span
    className='group-hover:hidden flex flex-col gap-3 items-center justify-cente font-xl font-poppins text-xl font-bold '
    ref={ref}
    initial="hidden"
    animate={control}
    variants={variants}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }}
><img className='icons' src='/backend.png' width={60} /> Backend Maestro</motion.span>
<span
    className='group-hover:flex px-4  bg-[#151030]  rounded-[20px]   description hidden  z-10  font-poppins text-xl text-center leading-normal font-semibold'

> Experienced in server-side development, capable of creating robust and scalable backend architectures.</span>

</div>
<div id='box' className='relative group hover:scale-110  flex items-center jus gradient-border w-[250px] h-[280px] bg-[#151030]  '>
<motion.span
    className='group-hover:hidden flex flex-col gap-3 items-center justify-cente font-xl font-poppins text-xl font-bold '
    ref={ref}
    initial="hidden"
    animate={control}
    variants={variants}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }}
><img className='icons' src='/artisan.png' width={60} /> Code Artian</motion.span>
<span
    className='group-hover:flex px-4   bg-[#151030]  rounded-[20px]   description hidden  z-10  font-poppins text-xl text-center leading-normal   font-bold'

> 
Dedicated to writing clean, maintainable code that aligns with best practices and coding standards
</span>

</div> */}