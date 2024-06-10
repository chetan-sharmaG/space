import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-animation h-[100vh]">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>

      </div>


      <div className=" w-[1250px] left-[50%] translate-x-[-50%]  h-full z-[-10] absolute  top-[-280px]  flex flex-row   items-start justify-center ">
        <video className="w-full h-auto  rotate-180 " playsInline={true} loop muted autoPlay src="/orbit.webm"></video>
      </div>
      <nav className='Navbar  fixed top-0 justify-around items-center z-20 flex text-white h-[68px]   w-full'>
        <div className='flex flex-col '>
          <a href='/' className='magic font-bold text-lg font-poppins'>Chetan</a>
          <a href='/' className='text-xs font-poppins'>Frontend Developer </a>
        </div>
        <div className='flex text-lg gap-10 '>
          <a href='#' className='font-poppins'>About</a>
          <a href='#' className='font-poppins'>Work</a>
          <a href='Contacts' className='font-poppins'>Contact</a>
        </div>
      </nav>
      <section>
        <div className='flex lg:w-[70vw] md:w-[90vw] h-[450px]  justify-between items-start mx-auto mt-44'>
          <div className='flex w-[50%]'>
            <div className="flex flex-col  justify-center items-center mt-9">
              <div className="w-5 h-5 rounded-full bg-purple-500 to-cyan-500"></div>
              <div className="w-1 relative z-10  sm:h-[450px] h-[200px] violet-gradient sm:mt-0"></div>
            </div>
            <div className='flex flex-col p-1 gap-6 mt-14 md:w-[400px] text-white'>
              <h1 className='flex  font-extrabold  gap-y-6 flex-wrap text-7xl whitespace-pre-line '>Hi, I'm&nbsp; <p className='name-gradient font-poppins'> Chetan</p></h1>
              <span className='text-2xl font-poppins'>
                A passionate Front-End Developer based in Bangalore, India.
              </span>
            </div>
          </div>
          <div className='w-[50%] h-[450px]'>
            <img src='/skill-svg.svg' className='w-full h-full object-contain '></img>
          </div>

        </div>
      </section>
      <div className='w-screen flex items-center justify-center '>
        <a href='#work'>
          <div className='w-[35px] relative flex items-center justify-center h-[60px] border-4 rounded-3xl '>
            <div className="vert-move w-3 h-3  bg-white rounded-full" >

            </div>
          </div>
        </a>
      </div>
      <section id='work'>
        <div className='h-[calc(100vh-68px)] w-screen flex items-center justify-center '>
          <div className='flex flex-col gap-3 w-[76%] mx-auto  text-white'>
            <div className='flex flex-col gap-1'>
              <span className='text-base font-normal text-[#A4A0BD]'>WELCOME TO THE JOURNEY</span>
              <span className='text-4xl  font-bold font-poppins text-blue-500'>Explore the Overview</span>
            </div>
            <span className=' w-[55%] font-poppins text-[#A4A0BD] text-[16px] font-extralight'>Hey there! 👋 I'm a passionate software developer, skilled in JavaScript and TypeScript. With expertise in Angular, Dotnet , and Three.js, I create beautiful and efficient solutions. Let's collaborate to transform your ideas into user-friendly, scalable realities. Ready for the journey? 🚀</span>
            <div className='w-full flex h-[400px] flex-wrap gap-y-10 relative justify-evenly z-20 items-center '>
            <div className='w-[250px] h-[280px] bg-slate-600 rounded-2xl '>  
            </div>
            <div className='w-[250px] h-[280px] bg-slate-600 rounded-2xl '>  
            </div>
            <div className='w-[250px] h-[280px] bg-slate-600 rounded-2xl '>  
            </div>
            <div className='w-[250px] h-[280px] bg-slate-600 rounded-2xl '>  
            </div>
           
          </div>
          </div>
         
        </div>
      </section>
    </>
  )
}

export default App
