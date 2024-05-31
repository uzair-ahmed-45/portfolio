import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import useSpin from './Hooks/useSpin'
import Spinner from './Components/Spinner'
import Lift from './Components/Lift'

export default function App() {
  const { loader, setloader } = useSpin()

  useEffect(() => {
    setloader(true)
  }, [])

  return (

    <div className='bg-[rgba(9,27,42,255)] text-white min-h-screen'>
      {
        loader ? <Spinner /> : <>
          <Lift />
          <Navbar />
          <Home />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </>
      }

    </div>
  )
}
