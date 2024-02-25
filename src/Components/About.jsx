import React, { useEffect, useState } from 'react'
import "./About.css"
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function About() {

    useEffect(() => {

        Aos.init({ duration: 2000 })
    }, []);

    return (
        <>
            <div className='lg:flex lg:justify-center grid justify-center gap-10 md:gap-0 py-40 md:py-32'>
                <div className='mx-28' data-aos="fade-right">
                    <img src="/profile.jpg" alt="" className='img' />
                </div>
                <div className='w-[60vw] md:w-[40vw] flex flex-col md:items-start m-auto items-center gap-3 ' data-aos="fade-up">
                    <h1 className='text-4xl font-bold  text-[rgb(122,182,228)]'>About me</h1>
                    <p className='mt-5 text-gray-400 text-sm text-center md:text-start md:text-lg'>As a web developer, I specialize in utilizing cutting-edge technologies to create high-performance web applications. My proficiency includes front-end development with React.js, employing its component-based architecture for intuitive user interfaces. On the back end, I leverage Node.js and Express.js to build scalable server-side applications, complemented by MongoDB for efficient data storage and retrieval. I enhance user experiences with responsive designs using Tailwind CSS and other frameworks, ensuring a seamless and visually appealing presentation.</p>
                    <a href="" className='px-4 py-2 w-40 text-center rounded-lg hover:bg-[rgb(122,182,228)] contact' style={{ border: "2px solid rgb(122,182,228)" }}>Contact me</a>
                </div>
            </div>

        </>
    )
}
