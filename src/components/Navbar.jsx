import React, { useRef, useState } from "react";

const Navbar = ({ showPortfolio }) => {
  const ref = useRef();
  const [menuActive, setmenuActive] = useState(false);

  const loseFocus = () => {
    ref.current.src = "/menu.svg";
    setmenuActive(false);
  };
  const menuButton = () => {
    if (ref.current.src.includes("/menu.svg")) {
      setmenuActive(true);
      ref.current.src = "/close.svg";
    } else if (ref.current.src.includes("/close.svg")) {
      setmenuActive(false);
      ref.current.src = "/menu.svg";
    }
  };
  return (
    <>
      {showPortfolio && (
        <>
          <div className="element-fade-in  md:w-[1250px] left-[50%] translate-x-[-50%] h-full z-[-10] absolute top-[-280px] flex flex-row items-start justify-center">
            <video
              preload="metadata"
              className="w-full h-auto rotate-180 pointer-events-none"
              playsInline
              loop
              muted
              autoPlay
            >
              <source src="/orbit1.webm" type="video/webm" />
              <source src="/orbit.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="element-fade-in  md:hidden w-full h-full z-[-10] absolute left-[50%] translate-x-[-50%] md:top-[-280px] sm:top-[-296px] top-[-300px] flex flex-row overflow-clip items-start justify-center">
            <video
              preload="metadata"
              className="w-full h-full rotate-180 scale-150 pointer-events-none"
              playsInline
              loop
              muted
              autoPlay
              src="/orbit.webm"
            ></video>
          </div>
        </>
      )}
      <nav className="element-fade-in  Navbar  fixed top-0 md:justify-around justify-between md:px-0 px-7 md:gap-[30rem] items-center z-50 flex text-white h-[68px]   w-full">
        
        <div
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="flex flex-col leftToRight cursor-pointer"
        >
            
          <div className=" magic font-bold text-lg font-poppins">Chetan</div>
          <div className="text-xs font-poppins">Frontend Developer </div>
        </div>
        <div className="rightToLeft md:flex hidden text-lg gap-10 text-[#88869B] font-[500]">
          <a href="#About" className="font-poppins  hover:text-white">
            About
          </a>
          
          <a href="#Projects" className="font-poppins hover:text-white">
            Work
          </a>
          <a href="#contact" className="font-poppins hover:text-white">
            Contact
          </a>
        </div>
        <div className="menu relative z-10 md:hidden ">
          <img
            ref={ref}
            onClick={() => menuButton()}
            src="/menu.svg"
            alt="menu toggle"
            className="cursor-pointer"
          />
        </div>
        {menuActive && (
          <div className="w-[150px] md:hidden flex flex-col p-3 absolute items-start text-start justify-evenly bottom-[-165px] rounded-xl right-[30px] h-[160px] text-[#88869B] font-[500] text-lg bg-[#371c5c]">
            <a
              href="#About"
              onClick={loseFocus}
              className="font-poppins  hover:text-white"
            >
              About
            </a>
            <a
              href="#Projects"
              onClick={loseFocus}
              className="font-poppins hover:text-white"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={loseFocus}
              className="font-poppins hover:text-white"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
