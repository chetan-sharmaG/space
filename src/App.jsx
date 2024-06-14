import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import StarAnimation from './components/StarAnimation'
import Header from './components/Header'
import About from './About'
import Skills from './components/Skills'
import Security from './components/Security'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarAnimation/>
      <Navbar/>
      <Header/>
     <div className='relative'>
     <About/>
     </div>
      <Skills/>
      {/* <Security/> */}
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
