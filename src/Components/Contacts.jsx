import React, { useEffect, useState } from 'react'
import "./Contact.css"
import Aos from 'aos';

export default function Contacts() {
    const [modal, setmodal] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "84b7b3ee-d23f-454e-8b35-3763b8aa4122");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setmodal(true)
            // console.log("Success", res);
        }
    };

    return (
        <>
            <div className='md:py-20 md:px-20 py-12 px-8' id='contacts'>
                <h1 className='text-2xl md:text-4xl font-bold text-center text-[rgb(122,182,228)]' data-aos="fade-up">Contact me</h1>
                <div className='flex flex-wrap md:justify-between justify-center gap-14 md:mt-20 mt-12 md:items-center items-start md:px-'>
                    <div className='flex flex-col gap-8 justify-start' data-aos="fade-up">
                        <div className='flex justify-start items-center gap-x-5'>
                            <div className=''>
                                <i class="fa-solid fa-user " style={{ fontSize: "25px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Name</h1>
                                <h2 className='text-lg md:text-xl text-gray-300'>Uzair Ahmed</h2>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-x-5 '>
                            <div>
                                <i class="fa-solid fa-envelope" style={{ fontSize: "25px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Email</h1>
                                <h2 className='text-lg md:text-xl text-gray-300'>uzairahmed45994@gmail.com</h2>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-x-5'>
                            <div className=''>
                                <i class="fa-solid fa-phone md:mt-0 mt-2" style={{ fontSize: "25px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Phone</h1>
                                <h2 className='text-lg md:text-xl text-gray-300'>+92 334 8593896</h2>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-x-5'>
                            <div className=''>
                                <i class="fa-solid fa-location-dot" style={{ fontSize: "30px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col '>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Location</h1>
                                <h2 className='text-lg md:text-xl text-gray-300'>Agra Taj Colony lyari Karachi</h2>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-x-5'>
                            <div className='i w-11 h-11  rounded-full text-center py-2 px-2 cursor-pointer hover:bg-[rgb(43,110,161)]' style={{ border: "1px solid rgb(122,182,228)" }}>
                                <a href="https://wa.me/+923348593896" target='blank'> <i class="fa-brands fa-whatsapp icon"></i></a>
                            </div>
                            <div className='i w-11 h-11  rounded-full text-center py-2 px-2 cursor-pointer hover:bg-[rgb(43,110,161)]' style={{ border: "1px solid rgb(122,182,228)" }}>
                                <a href="tel:+923348593896" target='blank'><i class="fa-solid fa-phone icon"></i></a>
                            </div>

                            <div className='i w-11 h-11  rounded-full text-center py-2 px-2 cursor-pointer hover:bg-[rgb(43,110,161)]' style={{ border: "1px solid rgb(122,182,228)" }}>
                                <a href="https://www.linkedin.com/in/uzairahmed4594" target='blank'><i class="fa-brands fa-linkedin-in icon"></i></a>
                            </div>
                            <div className='i w-11 h-11 rounded-full text-center py-2 px-2 cursor-pointer hover:bg-[rgb(43,110,161)]' style={{ border: "1px solid rgb(122,182,228)" }}>
                                <a href="https://github.com/uzair-bmj" target='blank'><i class="fa-brands fa-github icon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='md:max-w-[40vw] max-w-[80vw] ' data-aos="fade-up">
                        <form className='flex flex-col gap-3' onSubmit={onSubmit}>
                            <input type="text" placeholder='Username' required name='username' className='px-4 py-3 rounded-lg focus:bg-transparent inputs text-black focus:text-white' />
                            <input type="email" placeholder='Email' required name='email' className=' px-4 py-3 rounded-lg focus:bg-transparent text-black focus:text-white' />
                            <textarea name="message" id="" cols="50" rows="6" required className=' px-4 py-3 rounded-lg focus:bg-transparent text-black focus:text-white' placeholder='Message'></textarea>
                            <input type="submit" value="Send Message" className='w-full py-2 px-4 font-medium  cursor-pointer hover:bg-[rgb(122,182,228)] rounded-lg hover:text-black hover:transition-all hover:duration-500' style={{ border: "2px solid rgb(122,182,228)" }} />
                        </form>
                    </div>

                </div>
            </div>
            {
                modal &&
                <>
                    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(189, 189, 189, 0.9)]' onClick={() => setmodal(false)} style={{ background: "rgb(189, 189, 189, 0.9)" }}></div>
                    <div className='fixed top-[50%] left-[50%] w-[40vw] max-w-[15rem]  bg-[white] rounded-lg shadow-lg py-4 px-4 ' style={{ transform: "translate(-50% , -50%)" }}>
                        <h1 className='text-black ' >Message Sent Successfully</h1>
                        <button className='mt-3 py-1 px-4 text-xl rounded-xl font-medium border-1 border-solid border-[rgb(95,141,184)] text-[rgb(95,141,184)]  hover:border-none hover:bg-[rgb(95,141,184)] hover:text-white hover:transition-all hover:duration-300 hover:scale-110' onClick={() => setmodal(false)} >Ok</button>
                    </div>
                </>
            }
        </>
    )
}
