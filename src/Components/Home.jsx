import React, { useEffect } from 'react'
import "./Home.css"
import Aos from 'aos';


export default function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <>
            <div className='flex justify-center text-center items-center py-24 px-20 relative  md:mt-[-50px] ' id='home'>
                <img src="/bg.jpg" alt="" className='absolute opacity-5 h-[650px] md:max-h-[550px] w-full z-0' />
                <div className='w-[80vw] md:w-[50vw] flex flex-col gap-5 md:gap-8 z-10' data-aos="fade-up">
                    <h1 className='md:text-2xl text-lg font-bold'>Hi,</h1>
                    <h1 className='md:text-5xl text-2xl'>I'm <span className='text-[rgb(122,182,228)] cursor-pointer hover:drop-shadow'>Uzair Ahmed</span> </h1>
                    <p className=' text-gray-400 md:text-xl text-[12px] '>A passionate MernStack Developer building web and mobile applications with Javascript/Reactjs/TailwindCSS/Nodejs/Expressjs/MongoDB and many other cool frameworks and liberaries</p>
                    <div>
                        <a href='#contacts' className='bt px-4 py-2 font-small text-lg text-white bg-[rgb(122,182,228)] rounded-xl hover:bg-transparent border-1 border-solid border-[rgb(122,182,228)] hover:text-[rgb(122,182,228)] '>Contact me</a>
                        <a href='' className='bt px-4 py-2 font-small text-lg text-[rgb(122,182,228)] ms-4 rounded-xl hover:bg-[rgb(122,182,228)] hover:text-white' style={{ border: '1px solid rgb(122,182,228)' }}>Download CV</a>
                    </div>
                </div>

            </div>

        </>
    )
}
