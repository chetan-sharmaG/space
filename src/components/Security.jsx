import React from 'react'

const Security = () => {
    return (
        <section className='w-full flex flex-col h-[calc(100vh-68px)] relative items-center justify-center'>
            <div className='flex w-full text-white  relative   flex-col justify-center items-center'>
                <div className='flex text-3xl  top-0 items-center'><span className='font-poppins'>Performance</span><span className='text-blue-700'>&nbsp; & &nbsp;</span><span className='font-poppins'>Security</span></div>
                <video preload="metadata" className="w-full h-auto   relative z-[-1]  rotate-180 pointer-events-none" playsInline={true} loop muted autoPlay src="/security.webm"></video>
            </div>
        </section>
    )
}

export default Security
