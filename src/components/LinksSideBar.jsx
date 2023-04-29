import React from 'react'
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai' 

const LinksSideBar = () => {
  return (
    <div className='bg-blue text-beige fixed h-screen w-[100px]'>
        <div className='flex flex-col justify-center items-center gap-5 mt-[600px]'>
            <div className=''>
                <a href='https://github.com/BenMoreira'><AiOutlineGithub size='2rem' /></a>
            </div>
            <div className=''>
                <a href='https://www.linkedin.com/in/benjamin-moreira-338327210'><AiOutlineLinkedin size='2rem' /></a>
            </div>
        </div>
    </div>
  )
}

export default LinksSideBar