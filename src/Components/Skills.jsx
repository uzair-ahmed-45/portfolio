import React, { useEffect } from 'react'
import "./Skills.css"
import Aos from 'aos'
import { IoLogoJavascript } from 'react-icons/io'
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaBootstrap, FaGitAlt  } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoFirebase } from "react-icons/io5";
import { SiDialogflow, SiTypescript, SiTailwindcss,SiZod } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { DiNpm } from "react-icons/di";

export default function Skills() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className='w-full bg-gray-400 bg-opacity-20 relative' id='skills'>
        <img src="/bg2.jpg" alt="" className=' opacity-5 h-full w-full absolute' />
        <div className='skillCeneterDiv py-10' data-aos="fade-up">
          <div className='myskill' title='HTML'>
            <FaHtml5 />
          </div>
          <div className="myskill" title='CSS'>
            <FaCss3Alt />
          </div>
          <div className="myskill" title='TailwindCSS'>
            <SiTailwindcss title='TailwindCSS' />
          </div>
          <div className="myskill" title='Bootstrap'>
            <FaBootstrap />
          </div>
          <div className="myskill" title='Javascript'>
            <IoLogoJavascript />
          </div>
          <div className="myskill" title='Python'>
            <FaPython />
          </div>
          <div className="myskill">
            <SiTypescript title='Typescript' />
          </div>
          <div className="myskill" title='Reactjs'>
            <FaReact />
          </div>
          <div className="myskill" title='Nextjs'>
            <TbBrandNextjs />
          </div>
          <div className="myskill" title='Firebase' >
            <IoLogoFirebase />
          </div>
          <div className="nodejs">
            <DiNodejs title='NodeJS and Express JS' />
          </div>
          <div className="myskill" title='MongoDB' >
            <DiMongodb />
          </div>
          <div className="myskill" title='npm' >
            <DiNpm />
          </div>
          <div className="myskill" title='Git' >
            <FaGitAlt />
          </div>
          <div className="myskill" title='Zod' >
            <SiZod />
          </div>
        </div>

      </div>

    </>
  )
}
