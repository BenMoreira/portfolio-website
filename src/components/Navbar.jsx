import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navoption from './Navoption'
import Logo from '../assets/logo-no-background.png'

const Navbar = () => {
  return (
    <nav className='w-full fixed p-10 bg-blue'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <p className='text-red text-2xl'>BM</p>
          </div>

          <div className='flex flex-row items-center gap-12'>
            {
              ["Home", "Projects", "About", "Contact"].map((page) => {
                  return <Navoption path={page} key={page} />
              })
            }
          </div>
        </div>
    </nav>
  )
}

export default Navbar