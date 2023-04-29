import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navoption from './Navoption'

const Navbar = () => {
  return (
    <nav className='flex flex-row w-full fixed p-10 bg-black'>
        <div className='flex flex-row justify-center items-center gap-20'>
            {
                ["Home", "Projects", "About", "Contact"].map((page) => {
                    return <Navoption path={page} key={page} />
                })
            }
        </div>
    </nav>
  )
}

export default Navbar