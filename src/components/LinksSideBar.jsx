import React from 'react'
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai' 
import { motion } from 'framer-motion'

const LinksSideBar = () => {
  return (
    <div className='bg-blue text-beige fixed w-[100px] bottom-0'>
        <div className='flex flex-col justify-end items-center gap-5 h-[calc(80vh-110px)]'>
            <motion.div
              whileHover={{
                scale: 1.2
              }}
              whileTap={{
                scale:0.8
              }}
            >
                <a href='https://github.com/BenMoreira' className='hover:text-red'><AiOutlineGithub size='2rem' /></a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2
              }}
              whileTap={{
                scale:0.8
              }}
            >
                <a href='https://www.linkedin.com/in/benjamin-moreira-338327210' className='hover:text-red'><AiOutlineLinkedin size='2rem' /></a>
            </motion.div>
            <div className='w-[1px] h-[90px] bg-beige'>
            </div>
        </div>
    </div>
  )
}

export default LinksSideBar