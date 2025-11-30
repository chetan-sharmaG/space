import React from 'react'

// Single, clean Skills component (no animations, responsive grid)
const SKILLS = [
    { name: 'JavaScript', img: '/javascript.svg', level: 'Advanced' },
    { name: 'React', img: '/reactjs.svg', level: 'Advanced' },
    { name: 'Express', img: '/expressjs.svg', level: 'Intermediate' },
    { name: 'Next.js', img: '/nextjs.svg', level: 'Intermediate' },
    { name: 'Chakra UI', img: '/chakra.svg', level: 'Intermediate' },
    { name: 'Firebase', img: '/firebase.svg', level: 'Intermediate' },
    { name: 'Framer Motion', img: '/framer.svg', level: 'Intermediate' },
    { name: 'Tailwind', img: '/tailwindcss.svg', level: 'Advanced' },
    { name: 'Git', img: '/git.svg', level: 'Advanced' },
    { name: 'MongoDB', img: '/mongodb.svg', level: 'Intermediate' },
    { name: 'Node.js', img: '/nodejs.svg', level: 'Advanced' },
    { name: 'Vercel', img: '/vercel.svg', level: 'Intermediate' },
    { name: 'PostgreSQL', img: '/postgresql.svg', level: 'Intermediate' }
]

export default function Skills() {
    return (
        <section id="Skills" className="w-screen flex flex-col items-center justify-center lg:min-h-[70vh] mt-44 pb-12">
            <div className="w-full flex flex-col justify-center  py-8  lg:w-[80%] w-[85vw] md:w-[90vw] mx-auto">
                <div className="mb-6 text-left lg:text-left">
                    <p className="text-base text-[#AAA6C3]">MY TOOLBOX</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#9354E4] font-poppins mt-2">Skills & Tools</h2>
                    <p className="text-sm md:text-base text-[#AAA6C3] max-w-[900px]  mt-3">Technologies I use to build fast, accessible, and delightful web experiences — I focus on modern front-end stacks, strong fundamentals, and practical tooling.</p>
                </div>

                <div role="list" className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
                    {SKILLS.map((s) => (
                        <div role="listitem" key={s.name} className="flex flex-col items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-[#070615]/40 via-[#1a0a2f]/20 to-transparent border border-white/5 hover:shadow-xl hover:scale-105 transform transition-transform duration-200">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#7A5CFF]/20 to-[#3AD1FF]/10 border border-white/5">
                                <img src={s.img} alt={s.name} loading="lazy" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-semibold text-white">{s.name}</div>
                                <div className="text-[11px] text-[#AAA6C3] mt-1">{s.level}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



