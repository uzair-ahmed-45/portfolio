import Aos from 'aos'
import React, { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const projects = [
        {
            imgurl: "/ecommercewebsite.PNG",
            name: "Ecommerce Website",
            des: "Build a successful e-commerce store by strategically selecting a niche and optimizing user experience.",
            githubLink: "https://github.com/uzair-bmj/Leathertech_oasis.git",
            websiteLink: "https://leathertech-oasis.vercel.app/"
        }
    ]
    return (
        <>
            <div className='py-20 bg-[rgba(2,24,42,255)] mt-10 flex flex-col justify-center items-center gap-y-10' id='Projects'>
                <h1 className='text-2xl md:text-4xl font-medium text-[rgb(122,182,228)] text-center mt-16' data-aos = "fade-up">My Projects</h1>
                <div className=''>~
                    {
                        projects && projects.map((items, index) => (
                            <div key={index} className='px-5 py-10 w-[80vw] md:w-[25vw] bg-[rgba(9,27,42,255)] rounded-xl hover:drop-shadow-[0_5px_10px_rgb(122,182,228)] hover:scale-110 hover:transition-all hover:duration-1000' data-aos = "fade-up">
                                <div>
                                    <a href={items.websiteLink} target="blank">
                                        <img src={items.imgurl} alt={items.name} className="rounded-xl h-60" />
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
        </>
    )
}


