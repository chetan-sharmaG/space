import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [form, setform] = useState({ "to_name": "", "from_name": "", "message": "" })
    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        ref.current.textContent = "Sending.."
        console.log(form);
        emailjs
            .send("service_zyp0bgy", "template_op8mmqh",form, {publicKey:'8GQV6JCAESWD3Gb5q'},
            //      {
            //     from_name: form.email,
            //     to_name: form.name,
            //     message: form.message,

            // }
        )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Thank you. I will get back to you as soon as possible.")
                    ref.current.textContent = "Send"
                    // setform({ "name": "", "email": "", "message": "" })

                },
                (err) => {
                    console.log('FAILED...', err);
                    alert("Uffs... Something went wrong.")
                    ref.current.textContent = "Send"

                },
            );

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <section id='contact' className='w-full  relative z-10  flex item-center  justify-center '>

            <div className='flex md:w-[70vw] w-[80vw] flex-col rounded-2xl bg-[#100D25] mx-auto p-7 '>

                <form onSubmit={handleSubmit}  className='flex flex-col gap-8 ' >
                    <div className='flex flex-col gap-0'>
                        <h1 className='text-base font-[400] text-[#AAA6C3]'>GET IN TOUCH</h1>
                        <h1 className='text-[36px] font-[700] text-[#9354E4] '>Contact.</h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-white font-poppins font-light text-base'>Name</label>
                        <input type='text' name='to_name' value={form.to_name} onChange={handleChange} placeholder='Enter Your Name' className='bg-[#151030]  w-full h-[50px] outline-none rounded-md px-4 text-white font-poppins font-light text-sm ' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-white font-poppins font-light text-base'>Email</label>
                        <input type='email' name='from_name' value={form.from_name} onChange={handleChange} required={true} placeholder='Enter Your Email' className=' bg-[#151030] w-full h-[50px] outline-none    rounded-md px-4 text-white font-poppins font-light text-sm ' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-white font-poppins font-light text-base'>Message</label>
                        <textarea type='text' rows={7} name='message' value={form.message} onChange={handleChange} placeholder='Enter Your Email' className='  w-full h-[150px] outline-none  bg-[#151030]  rounded-md px-4 py-4  text-white font-poppins font-light text-sm ' />
                    </div>
                    <button ref={ref} type="submit" disabled={form.to_name  .length === 0 || form.from_name.length === 0 || form.message.length === 0} className={`bg-tertiary py-3 px-8 rounded-xl outline-none   w-fit text-blue-700 shadow-slate-50 font-bold shadow-sm  ${form.from_name.length === 0 || form.to_name.length === 0 || form.message.length === 0
                        ? 'cursor-not-allowed' : 'cursor-pointer active:scale-95'}`}>Send</button>

                </form>
            </div>

        </section>
    )
}

export default Contact
