import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navoption from './Navoption'
import Logo from '../assets/logo-no-background.png'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='w-full fixed p-6 bg-blue shadow-lg'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <motion.p className='text-red text-2xl font-bold'
              initial={{
                y: "-10vh"
              }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.8
                }
              }}
            >
              Benjamin Moreira
            </motion.p>
          </div>

          <div className='flex flex-row items-center gap-12'>
            {/*
              ["Home", "Projects", "About", "Contact"].map((page) => {
                  return <Navoption path={page} key={page} />
              })
            */}

            <Navoption path='Home' link='/' />
            <Navoption path='Projects' link='/Projects' />
            <Navoption path='About' link='/About' />
            <Navoption path='Contact' link='/Contact' />
          </div>
        </div>
    </nav>
  )
}

export default Navbar