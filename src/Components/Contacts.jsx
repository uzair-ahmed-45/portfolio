import React from 'react'
import "./Contacts.css"


export default function Contacts() {
    return (
        <>
            <div className='md:py-20 md:px-20 py-12 px-8' id='contacts'>
                <h1 className='text-2xl md:text-4xl font-bold text-center text-[rgb(122,182,228)]'>Contact me</h1>
                <div className='flex flex-wrap justify-between w-[80vw] md:mt-20 mt-12 md:items-center items-start'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex justify-center md:items-center items-start'>
                            <div className='ms-[-75px]'>
                                <i class="fa-solid fa-user" style={{ fontSize: "25px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col ms-8'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Name</h1>
                                <h2 className='text-xl text-gray-300'>Uzair Ahmed</h2>
                            </div>
                        </div>
                        <div className='flex justify-center md:items-center items-startr '>
                            <div>
                                <i class="fa-solid fa-envelope"style={{ fontSize: "25px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col ms-8'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Email</h1>
                                <h2 className='text-xl text-gray-300'>uzairbmj@gmail.com</h2>
                            </div>
                        </div>
                        <div className='flex justify-center md:items-center items-start'>
                            <div className='ms-[-35px]'>
                                <i class="fa-solid fa-phone" style={{ fontSize: "25px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col ms-8'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Phone</h1>
                                <h2 className='text-xl text-gray-300'>+92 334 8593896</h2>
                            </div>
                        </div>
                        <div className='flex justify-center md:items-center items-start'>
                            <div className='ms-[60px]'>
                                <i class="fa-solid fa-location-dot" style={{ fontSize: "30px", color: "rgb(43, 110, 161)" }}></i>
                            </div>
                            <div className='flex flex-col ms-8'>
                                <h1 className='text-lg font-medium text-[rgb(122,182,228)]'>Location</h1>
                                <h2 className='text-xl text-gray-300'>Agra Taj Colony lyari Karachi</h2>
                            </div>
                        </div>
                        <div className='flex justify-between'>

                        </div>
                    </div>
                    <div className='md:max-w-[40vw] max-w-[90vw] px-6 md:px-12 '>
                        <form action="https://formspree.io/f/xeqykldl" method='POST' className='flex flex-col gap-3'>
                            <input type="text" placeholder='Username' required name='username' className='px-4 py-3 rounded-lg focus:bg-transparent inputs text-black focus:text-white'/>
                            <input type="email" placeholder='Email' required name='email' className=' px-4 py-3 rounded-lg focus:bg-transparent text-black focus:text-white'/>
                            <textarea name="message" id="" cols="50" rows="6" required className=' px-4 py-3 rounded-lg focus:bg-transparent text-black focus:text-white' placeholder='Message'></textarea>
                            <input type="submit" value="Send Message" className='w-full py-2 px-4 font-medium  cursor-pointer hover:bg-[rgb(122,182,228)] rounded-lg hover:text-black hover:transition-all hover:duration-500' style={{border : "2px solid rgb(122,182,228)"}}/>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
