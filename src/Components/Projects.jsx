import Aos from 'aos'
import React, { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const projects = [
        {
            imgurl: "/ecommercewebsite.PNG",
            name: "LeatherTech Oasis Ecommerce Website",
            des: "Build a successful e-commerce store by strategically selecting a niche and optimizing user experience.",
            githubLink: "https://github.com/uzair-bmj/Leathertech_oasis.git",
            websiteLink: "https://leathertech-oasis.vercel.app/"
        },
        {
            imgurl: "/homeopathy.PNG",
            name: "Homeopathy Case Taking Application",
            des: "Simplify homeopathy case-taking with an intuitive app for accurate diagnosis and patient management.",
            githubLink: "",
            websiteLink: "/HomeoPathy.mp4"
        },
        {
            imgurl: "/LK.jpg",
            name: "Ecommerce Social Media Plateform",
            des: "Connect, share, and trade fashion on a social commerce platform designed for clothing enthusiasts.",
            githubLink: "",
            websiteLink: "https://lk-jade.vercel.app/"
        },
        {
            imgurl: "/ems.jpg",
            name: "Employee Management System",
            des: "Manage employee rentals seamlessly with an intuitive platform designed for efficient staffing and client coordination.",
            githubLink: "",
            websiteLink: "/EMS.mp4"
        }
    ]
    return (
        <>
            <div className='py-20 bg-[rgba(2,24,42,255)] mt-10 flex flex-col justify-center items-center gap-y-10' id='Projects'>
                <h1 className='text-2xl md:text-4xl font-medium text-[rgb(122,182,228)] text-center mt-16' data-aos="fade-up">My Projects</h1>
                <div className='flex justify-center items-center'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-y-5 gap-x-8'>
                        {
                            projects && projects.map((items, index) => (
                                <div key={index} className=' px-5 py-10 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[25vw] bg-[rgba(9,27,42,255)] rounded-xl hover:drop-shadow-[0_5px_10px_rgb(122,182,228)] hover:scale-110 hover:transition-all hover:duration-1000' data-aos="fade-up">
                                    <div className='overflow-hidden'>
                                        <a href={items.websiteLink} target="blank">
                                            <img src={items.imgurl} alt={items.name} className=" hover:scale-110 hover:transition-all hover:duration-300 rounded-xl h-60 w-full" />
                                        </a>
                                    </div>
                                    <div className='mt-5 '>
                                        <h1 className='text-[rgb(122,182,228)] text-xl font-bold'>{items.name}</h1>
                                        <h2 className='text-base text-gray-400 mt-2 '>{items.des}</h2>
                                    </div>
                                    <div className='flex justify-between  mt-5'>
                                        <a href={items.websiteLink} target="blank" className='bt px-4 py-2 font-small text-lg text-[rgb(122,182,228)]  rounded-xl hover:bg-[rgb(122,182,228)] hover:text-white' style={{ border: '1px solid rgb(122,182,228)' }}>Preview</a>
                                        <a href={items.githubLink} target="blank" ><i class="fa-brands fa-github text-[40px] cursor-pointer  hover:text-[rgb(122,182,228)] hover:transition-all hover:duration-300 mr-10 mt-1"></i></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


