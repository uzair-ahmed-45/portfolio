import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css"
import Aos from 'aos';

export default function Home() {
    const [text] = useTypewriter({
        words: ["MERN Stack Developer", "Full Stack Developer", "Freelancer", "Generative Ai"],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <>
            <div className='flex justify-center text-center items-center py-24 px-20 relative  md:mt-[-50px] ' id='home'>
                <img src="/bg.jpg" alt="" className='absolute opacity-5 h-[650px] md:max-h-[550px] w-full z-0' />
                <div className='w-[80vw] md:w-[50vw] flex flex-col gap-5 md:gap-8 mt-5' data-aos="fade-up">
                    <h1 className='md:text-4xl text-2xl font-bold'>Hi, I'm <span className='text-[rgb(122,182,228)]'>Uzair Ahmed</span></h1>
                    <h1 className='md:text-6xl  text-2xl font-bold text-[rgb(122,182,228)]'>
                        {text}
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#00ebfc"
                        />
                    </h1>
                    <p className=' text-gray-400 md:text-xl text-[12px] '>A passionate MernStack Developer building web and mobile applications with Javascript/Reactjs/TailwindCSS/Nodejs/Expressjs/MongoDB and many other cool frameworks and liberaries</p>
                    <div>
                        <a href='#contacts' className='bt px-4 py-2 font-small text-lg text-white bg-[rgb(122,182,228)] rounded-xl hover:bg-transparent border-1 border-solid border-[rgb(122,182,228)] hover:text-[rgb(122,182,228)] '>Contact me</a>
                        <a href='/myResume.pdf' target='blank' className='bt px-4 py-2 font-small text-lg text-[rgb(122,182,228)] ms-4 rounded-xl hover:bg-[rgb(122,182,228)] hover:text-white' style={{ border: '1px solid rgb(122,182,228)' }}>Download CV</a>
                    </div>
                </div>

            </div>

        </>
    )
}
