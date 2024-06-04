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
        <video className="w-full h-auto  rotate-180 "  playsInline={true} loop={true} autoPlay={true} src="/orbit.webm"></video>
      </div>
      <nav className='Navbar justify-around items-center flex text-white h-[68px]   w-full'>
        <div className='flex flex-col'>
          <a href='/' className='font-bold text-lg'>Chetan</a>
          <a href='/' className='text-xs'>Frontend Developer </a>
        </div>
        <div className='flex text-lg gap-10'>
          <a href='#'>About</a>
          <a href='#'>Work</a>
          <a href='Contacts'>Contact</a>
        </div>
      </nav>
      <div className='flex md:w-[70vw] gap-2 items-start mx-auto mt-36'>
        <div className="flex flex-col  justify-center items-center mt-9">
          <div className="w-5 h-5 rounded-full bg-purple-500 to-cyan-500"></div>
          <div className="w-1 relative z-10  sm:h-[450px] h-[200px] violet-gradient sm:mt-0"></div>
        </div>
        <div className='flex flex-col p-1 gap-6 mt-14 md:w-[400px] text-white'>
          <h1 className='flex  font-extrabold  gap-y-6 flex-wrap text-8xl whitespace-pre-line '>Hi, I'm&nbsp; <p className='name-gradient font-poppins'> Chetan</p></h1>
          <span className='text-2xl font-poppins'>
          A passionate Front-End Developer based in Bangalore, India.
          </span>
        </div>
      </div>
    </>
  )
}

export default App
