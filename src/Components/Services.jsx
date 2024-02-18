import React, { useEffect } from 'react'
import "./Service.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Services() {

    useEffect(() => {

        Aos.init({ duration: 2000 })
    }, []);

    return (
        <>
            <div className='bg-[rgba(2,24,42,255)] py-24 px-24 '>
                <h1 className='text-center text-4xl text-[rgb(122,182,228)] font-bold'>My Services</h1>
                <div className='flex flex-wrap justify-center mt-12 gap-10'>
                    <div className='py-16 bg-[rgba(18,27,42,255)] px-12 rounded-2xl cursor-pointer servicebox w-[40vw] flex flex-col ' data-aos="flip-right">
                        <i class="fa-solid fa-pen-nib cursor-pointer" style={{ fontSize: "30px", color: "rgb(122,182,228)" }}></i>
                        <h1 className='text-4xl font-bold mt-4'>Web Developer</h1>
                        <p className='text-gray-300 text-md mt-2'>I'm passionate web developer dedicated to crafting stunning online experiences. With expertise in front-end and back-end technologies, I offer comprehensive web development services tailored to your needs. Let's collaborate to bring your vision to life and elevate your online presence.</p>
                    </div>
                    <div className='py-16 bg-[rgba(18,27,42,255)] px-12 rounded-2xl cursor-pointer servicebox w-[40vw] flex flex-col ' data-aos="flip-left">
                        <i class="fa-brands fa-react cursor-pointer" style={{ fontSize: "40px", color: "rgb(122,182,228)" }}></i>
                        <h1 className='text-4xl font-bold mt-4'>Mern Stack Developer</h1>
                        <p className='text-gray-300 text-md mt-2'>I provide expert MERN stack development services, crafting robust web solutions tailored to your unique business needs. With a focus on efficiency and innovation, I deliver dynamic applications that leverage the power of MongoDB, Express.js, React, and Node.js. Let me elevate your online presence with seamless, scalable, and secure solutions, driving your digital success forward.</p>
                    </div>
                    <div className='py-16 bg-[rgba(18,27,42,255)] px-12 rounded-2xl cursor-pointer servicebox w-[40vw] flex flex-col ' data-aos="flip-up">
                        <i class="fa-brands fa-dropbox cursor-pointer" style={{ fontSize: "40px", color: "rgb(122,182,228)" }}></i>
                        <h1 className='text-4xl font-bold mt-4'>Responsive Design</h1>
                        <p className='text-gray-300 text-md mt-2'>I create responsive web applications that seamlessly adapts their layout and design across various devices and screen sizes. Utilizing modern web development techniques such as media queries and flexible grids, my applications ensures an optimal user experience on desktops, laptops, tablets, and smartphones. Their responsiveness allows users to interact with the application comfortably, regardless of the device they're using, enhancing accessibility and usability.</p>
                    </div>
                    <div className='py-16 bg-[rgba(18,27,42,255)] px-12 rounded-2xl cursor-pointer servicebox w-[40vw] flex flex-col ' data-aos="flip-up">
                        <i class="fa-solid fa-link cursor-pointer" style={{ fontSize: "35px", color: "rgb(122,182,228)" }}></i>
                        <h1 className='text-4xl font-bold mt-4'>API Intergration</h1>
                        <p className='text-gray-300 text-md mt-2'>
                            I specialize in API integration within web development, proficient in seamlessly linking frontend interfaces with external APIs. With expertise in this area, I ensure smooth communication between the user-facing interface and external data sources or services. My skills facilitate the exchange of information, enabling dynamic and interactive web applications to access and manipulate data from diverse sources, enhancing the functionality and user experience of web platforms.</p>
                    </div>
                </div>
            </div>

        </>
    )
}