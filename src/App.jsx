import './App.css'
import Buttons from './components/Buttons.jsx'
import Header from './components/Header.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Home from './pages/home/Home.jsx'
import Projects from './pages/projects/Projects.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Buttons />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Projects" element = {<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
