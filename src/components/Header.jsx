import React from 'react'

const Header = () => {
    return (
        <section id='Intro'>
            <div className='flex lg:w-[70vw] md:w-[90vw] relative  h-screen justify-between items-start mx-auto pt-44'>
                <div className='personDetails flex md:w-[50%] w-[70%] md:mx-0 mx-auto h-[450px] '>
                    <div className="flex flex-col  justify-center items-center mt-9">
                        <div className="w-5 h-5 rounded-full bg-purple-500 to-cyan-500"></div>
                        <div className="w-1 relative z-10  sm:h-[450px] h-[400px] violet-gradient sm:mt-0"></div>
                    </div>
                    <div className='flex flex-col md:items-start md:justify-start items-center justify-center p-1 gap-6 mt-14 md:w-[400px] text-white'>
                        <h1 className='flex font-extrabold sm:justify-normal justify-center sm:text-start  gap-y-6  flex-wrap md:text-7xl sm:text-[50px] text-[60px] whitespace-pre-line font-mono'><p className='cursive'>Hi,  </p>I'm&nbsp;<p className='name-gradient font-poppins'> Chetan</p></h1>
                        <span className='md:text-2xl w-[80%] md:text-start text-center md:w-full text-[20px] font-poppins'>
                        I design and code beautifully simple things, and I love what I do.
                        </span>
                    </div>
                </div>
                <div className='skills-image w-[50%] md:block hidden h-[450px]'>
                    <img src='/skill-svg.svg' className='w-full h-full object-contain '></img>
                </div>
                <div className='bottonToTop w-full cursor-pointer absolute sm:bottom-0 md:bottom-6  flex items-center justify-center '>
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
