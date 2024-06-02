import React, { useEffect } from 'react'
import "./Skills.css"
import Aos from 'aos'

export default function Skills() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className='w-full bg-gray-400  relative' id='skills'>
        <img src="/bg2.jpg" alt="" className=' opacity-5 h-[40vh] w-full absolute' />
        <div className='md:flex md:justify-between grid grid-cols-3 justify-center place-items-center gap-x-10 gap-y-10  md:w-[80vw] m-auto py-10 px-10' data-aos="fade-up">
          <abbr title="HTML5"> <i class="fa-brands fa-html5 sk"></i></abbr>
          <abbr title="CSS3"><i class="fa-brands fa-css3-alt sk"></i></abbr>
          <abbr title="BOOTSTRAP 5"><i class="fa-brands fa-bootstrap sk"></i></abbr>
          <abbr title="TAILWIND CSS">
            <img src="/tailwind.png" alt="" className="w-[200px]  opacity-50 cursor-pointer hover:colored-image" />
          </abbr>
          <abbr title="JAVSCRIPT"><i class="fa-brands fa-js sk"></i></abbr>
          <abbr title="REACT"><i class="fa-brands fa-react sk"></i></abbr>
          <abbr title="EXPRESS JS">
            <img src="/express.png" alt="" className="w-[300px]  opacity-50 cursor-pointer" />
          </abbr>
          <abbr title="NODE JS"><i class="fa-brands fa-node sk"></i></abbr>
          <abbr title="GIT"><i class="fa-brands fa-github sk"></i></abbr>
        </div>

      </div>

    </>
  )
}
