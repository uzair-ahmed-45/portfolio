import React, { useEffect, useState } from 'react'

export default function Lift() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
                document.getElementById("icon").classList.remove("hidden")
            } else {
                setIsVisible(false);
                document.getElementById("icon").classList.add("hidden")

            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const movetotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className=''>
                <i class="fa-solid fa-arrow-up fixed bottom-8 left-5 text-white bg-[rgb(122,182,228)] px-3 py-2 rounded-xl hover:text-[rgb(122,182,228)] cursor-pointer hover:transition-all hover:duration-300 text-[20px] hover:bg-transparent hidden" id='icon' onClick={movetotop}></i>
            </div>

        </>
    )
}
