import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyWork from './components/My-Work/MyWork'
import Contact from './components/Contact/Contact'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <MyWork/>
    <Contact/>
    </div>
  )
}

export default App