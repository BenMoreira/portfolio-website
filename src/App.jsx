import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import LinksSideBar from './components/LinksSideBar'

function App() {
  return (
    <div className='flex flex-row'>
      <Navbar />

      <LinksSideBar />
      
      <div className='w-full mt-[80px]'>
        <div className=''>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/*<Route path='/Home' element={<Home/>}/>*/}
            <Route path='/Projects' element={<Projects/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
