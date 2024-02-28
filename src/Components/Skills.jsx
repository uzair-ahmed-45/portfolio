import React from 'react'
import "./Skills.css"

export default function Skills() {
  return (
    <>
      <div className='w-full bg-gray-400  relative' id='skills'>
        <img src="/bg2.jpg" alt="" className=' opacity-5 h-[40vh] w-full absolute' />
        <div className='flex justify-between flex-wrap w-[80vw] m-auto py-10 px-10'>
          <abbr title="HTML5"> <i class="fa-brands fa-html5 sk"></i></abbr>
          <abbr title="CSS3"><i class="fa-brands fa-css3-alt sk"></i></abbr>
          <abbr title="BOOTSTRAP 5"><i class="fa-brands fa-bootstrap sk"></i></abbr>
          <abbr title="JAVSCRIPT"><i class="fa-brands fa-js sk"></i></abbr>
          <abbr title="REACT"><i class="fa-brands fa-react sk"></i></abbr>
          <abbr title="NODE JS"><i class="fa-brands fa-node sk"></i></abbr>
          <abbr title="GIT"><i class="fa-brands fa-github sk"></i></abbr>
        </div>

      </div>

    </>
  )
}
