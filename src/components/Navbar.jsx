import React, { useRef, useState } from 'react'

const Navbar = () => {
    const ref = useRef();
    const [menuActive, setmenuActive] = useState(false)

    const loseFocus = () => {
        ref.current.src = '/menu.svg'
        setmenuActive(false)
    }
    const menuButton = () => {

        if (ref.current.src.includes('/menu.svg')) {
            setmenuActive(true)
            ref.current.src = '/close.svg'
        } else if (ref.current.src.includes('/close.svg')) {
            setmenuActive(false)
            ref.current.src = '/menu.svg'
        }
    }
    return (
        <>
            <div className=" md:w-[1250px]  left-[50%] translate-x-[-50%]  h-full z-[-10] absolute  top-[-280px]  flex flex-row   items-start justify-center ">
                <video className="w-full h-auto  rotate-180 " playsInline={true} loop muted autoPlay src="/orbit.webm"></video>
            </div>
            <div className=" md:hidden w-full h-full z-[-10] absolute left-[50%] translate-x-[-50%] md:top-[-280px] sm:top-[-296px] top-[-300px] flex flex-row  overflow-clip items-start justify-center ">
                <video className="w-full h-full  rotate-180  scale-150 " playsInline={true} loop muted autoPlay src="/orbit.webm"></video>
            </div>
            <nav className='Navbar  fixed top-0 md:justify-around justify-between md:px-0 px-7 md:gap-20 items-center z-50 flex text-white h-[68px]   w-full'>
                <div className='flex flex-col '>
                    <a href='/' className='magic font-bold text-lg font-poppins'>Chetan</a>
                    <a href='/' className='text-xs font-poppins'>Frontend Developer </a>
                </div>
                <div className='md:flex hidden text-lg gap-10 text-[#88869B] font-[500]'>
                    <a href='#About' className='font-poppins  hover:text-white'>About</a>
                    <a href='#Projects' className='font-poppins hover:text-white'>Work</a>
                    <a href='#contact' className='font-poppins hover:text-white'>Contact</a>
                </div>
                <div className='menu relative z-10 md:hidden '>
                    <img ref={ref} onClick={() => menuButton()} src='/menu.svg' className='cursor-pointer'></img>
                </div>
                {menuActive &&
                    <div className='w-[150px] md:hidden flex flex-col p-3 absolute items-start text-start justify-evenly bottom-[-165px] rounded-xl right-[30px] h-[160px] text-[#88869B] font-[500] text-lg bg-[#371c5c]'>
                        <a href='#About' onClick={loseFocus} className='font-poppins  hover:text-white'>About</a>
                        <a href='#Projects' onClick={loseFocus} className='font-poppins hover:text-white'>Work</a>
                        <a href='#contact' onClick={loseFocus} className='font-poppins hover:text-white'>Contact</a>

                    </div>}
            </nav>
        </>

    )
}

export default Navbar
