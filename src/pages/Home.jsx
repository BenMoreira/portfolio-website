import React from 'react'
import Pdf from '../documents/ResumeIT.pdf'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='bg-blue h-[calc(100vh-80px)]'>
      <motion.div className='mx-auto w-[70%] flex flex-col justify-center items-center'
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
      >
        <div className='text-8xl pt-14 text-red'>
          Welcome.
        </div>

        <div className='text-4xl pt-10 text-beige'>
          My name is Benjamin Moreira.
        </div>

        <div className='text-2xl pt-10 text-beige'>
          I'm a Software Developer that has recently graduated, excited to get into the field.
        </div>

        <motion.div className='text-2xl pt-10 text-beige'
          whileHover={{
            scale: 1.2
          }}
          whileTap={{
            scale:0.8
          }}
        >
          <a href={Pdf} className='border-2 border-beige rounded-lg px-5 py-2 hover:text-red hover:border-red'>
            Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home