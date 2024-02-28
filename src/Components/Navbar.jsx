import React, { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {
  const [bars, setBars] = useState(false);

  function show() {
    setBars(!bars);
  }

  return (
    <>
      <div className='md:flex md:justify-between px-10 md:px-20 md:py-6 py-5 md:bg-[rgba(9,27,42,255)] z-20 md:z-10 sticky top-0 left-0 right-0 nav'>
        <div className='flex justify-between'>
          <h1 className='cursor-pointer text-animation text-[rgb(122,182,228)] hover:text-white  duration-500 text-3xl'>Uzair <span className='text-white hover:text-[rgb(122,182,228)]'>Ahmed</span> </h1>
          <div className='text-xl cursor-pointer md:hidden block mt-1' onClick={show} style={{ position: 'relative' }}>
            {bars ? (
              <i className="fas fa-times icon" style={{ position: 'absolute', top: 0, right: "10px", fontSize: "30px" }} onClick={show}></i>
            ) : (
              <i className="fas fa-bars icon" style={{ position: 'absolute', top: 0, right: "10px", fontSize: "30px" }} onClick={show}></i>
            )}
          </div>

        </div>
        <ul className='md:flex hidden md:block md:items-center z-[-1] md:z-auto md:py-0 py-5'>
          <li className='md:mx-5 md:my-0 my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#home">Home</a></li>
          <li className='md:mx-5 md:my-0 my-5  hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#about">About</a></li>
          <li className='md:mx-5 md:my-0 my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#services">Services</a></li>
          <li className='md:mx-5 md:my-0 my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#skills">Skills</a></li>
          <li className='md:mx-5 md:my-0 my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#Projects">Projects</a></li>
          <li className='md:mx-5 md:my-0 my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#contacts">Contacts</a></li>
        </ul>
        {bars && (
          <ul className='md:hidden flex flex-col items-center'>
            <li className='my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#home">Home</a></li>
            <li className='my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#about">About</a></li>
            <li className='my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#services">Services</a></li>
            <li className='my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#skills">Skills</a></li>
            <li className='my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#Projects">Projects</a></li>
            <li className='my-5 hover:text-[rgb(89,122,148)] cursor-pointer duration-500'><a href="#contacts">Contacts</a></li>
          </ul>
        )}
      </div>
    </>
  );
}
