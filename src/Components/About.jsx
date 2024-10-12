import React, { useEffect } from 'react';
import "./About.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='flex justify-center py-40 md:py-32 px-5'>
            <div className='flex flex-col md:flex-row justify-center items-center px-10 gap-x-24 gap-y-10 w-full' id='about'>
                <div className='' data-aos="fade-right">
                    <img src="/profile.jpg" alt="Uzair Ahmed" className='img' />
                </div>
                <div className='w-full md:w-[40vw] flex flex-col md:items-start items-center gap-3' data-aos="fade-up">
                    <h1 className='text-4xl font-bold text-[rgb(122,182,228)]'>About me</h1>
                    <p className='mt-5 text-gray-400 text-sm text-center md:text-start md:text-lg'>
                        As a web developer, I specialize in utilizing cutting-edge technologies to create high-performance web applications. My proficiency includes front-end development with React.js, employing its component-based architecture for intuitive user interfaces. On the back end, I leverage Node.js and Express.js to build scalable server-side applications, complemented by MongoDB for efficient data storage and retrieval. I enhance user experiences with responsive designs using Tailwind CSS and other frameworks, ensuring a seamless and visually appealing presentation.
                    </p>
                    <a href="#contacts" className='px-4 py-2 w-40 text-center rounded-lg hover:bg-[rgb(122,182,228)] contact' style={{ border: "2px solid rgb(122,182,228)" }}>Contact me</a>
                </div>
            </div>
        </div>
    );
}
