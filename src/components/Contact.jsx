import React, { useState } from 'react'

const Contact = () => {

    const [form, setform] = useState({ "name": "", "email": "", "message": "" })


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <section id='contact' className='w-full relative z-10 flex item-center mb-32 justify-center '>

            <div className='flex md:w-[70vw] w-[80vw] flex-col rounded-2xl bg-[#100D25] mx-auto p-7 '>

                <form onSubmit={handleSubmit} className='flex flex-col gap-8 ' >
                    <div className='flex flex-col gap-0'>
                        <h1 className='text-base font-[400] text-[#AAA6C3]'>GET IN TOUCH</h1>
                        <h1 className='text-[36px] font-[700] text-[#9354E4] '>Contact.</h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-white font-poppins font-light text-base'>Name</label>
                        <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Enter Your Name' className='bg-[#151030]  w-full h-[50px] outline-none rounded-md px-4 text-white font-poppins font-light text-sm ' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-white font-poppins font-light text-base'>Email</label>
                        <input type='email' name='email' value={form.email} onChange={handleChange} required={true} placeholder='Enter Your Email' className=' bg-[#151030] w-full h-[50px] outline-none    rounded-md px-4 text-white font-poppins font-light text-sm ' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-white font-poppins font-light text-base'>Message</label>
                        <textarea type='text' rows={7} name='message' value={form.message} onChange={handleChange} placeholder='Enter Your Email' className='  w-full h-[150px] outline-none  bg-[#151030]  rounded-md px-4 py-4  text-white font-poppins font-light text-sm ' />
                    </div>
                    <button  type="submit" disabled={form.email.length === 0 || form.name.length === 0 || form.message.length === 0 } className={`bg-tertiary py-3 px-8 rounded-xl outline-none  w-fit text-blue-700 shadow-slate-50 font-bold shadow-sm  ${form.email.length === 0 || form.name.length === 0 || form.message.length === 0 
                    ?'cursor-not-allowed':'cursor-pointer'}`}>Send</button>

                </form>
            </div>

        </section>
    )
}

export default Contact
