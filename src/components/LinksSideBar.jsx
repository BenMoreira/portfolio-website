import React from 'react'
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai' 

const LinksSideBar = () => {
  return (
    <div className='bg-blue text-beige fixed w-[100px] bottom-0'>
        <div className='flex flex-col justify-end items-center gap-5 h-[calc(80vh-110px)] pb-8'>
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