import React from 'react'

const Header = () => {
    return (
        <section id='Intro'>
            <div className='flex lg:w-[70vw] md:w-[90vw] relative  h-screen justify-between items-start mx-auto pt-36'>
                <div className='personDetails flex md:w-[50%] w-[70%] md:mx-0 mx-auto h-[450px] '>
                    <div className="flex flex-col  justify-center items-center mt-9">
                        <div className="w-5 h-5 rounded-full bg-purple-500 to-cyan-500"></div>
                        <div className="w-1 relative z-10  sm:h-[450px] h-[400px] violet-gradient sm:mt-0"></div>
                    </div>
                    <div className='flex flex-col md:items-start md:justify-start items-center justify-center p-1 gap-6 mt-14 md:w-[500px] text-white'>
                        <h1 className='flex font-extrabold sm:justify-normal justify-center sm:text-start  gap-y-6  flex-wrap md:text-7xl sm:text-[50px] text-[60px] whitespace-pre-line font-mono'><p className='cursive'>Hi,  </p>I'm&nbsp;<p className='name-gradient font-poppins'> Chetan</p></h1>
                        <span className='md:text-2xl w-[80%] md:text-start text-center md:w-full text-[20px] font-poppins'>
                        I bring ideas to life through responsive, accessible, and performant frontend experiences.
                        </span>
                        <div className='inline-flex items-center px-4 py-3 border border-[#7042f88b] rounded-md bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5 text-[#b49bff] mr-2"><path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd"></path></svg>
                            <span>
                            Fueled by Curiosity, Engineered with Passion
                            </span>
                        </div>
                    </div>
                </div>
                <div className='skills-image w-[50%] md:block hidden h-[450px]'>
                    <img src='/skill-svg.svg' alt="skill illustration" loading="lazy" className='w-full h-full object-contain ' />
                </div>
                <div className='vert-move md:flex bottonToTop w-full cursor-pointer absolute bottom-5 md:bottom-6  hidden items-center justify-center '>
                    <a href='#About' >
                        <div className='w-[35px] relative flex items-center justify-center h-[60px] border-4 rounded-3xl '>
                            <div className="vert-move w-3 h-3  bg-white rounded-full" >

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header
