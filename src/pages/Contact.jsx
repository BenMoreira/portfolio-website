import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='h-[calc(100vh-80px)] bg-blue w-full'>
      <div className='w-[70%] mx-auto'>
        <div className='text-red text-3xl font-bold text-center pt-10'>
          Want to get in contact with me?
        </div>

        <div className='text-beige text-xl text-center pt-5'>
          Shoot me an email at: benmoreira1012@gmail.com
        </div>

        <div className='text-beige text-xl pt-5 flex flex-row justify-center items-center gap-2'>
          Or send me a message on Linkdedin: 
          <a href='https://www.linkedin.com/in/benjamin-moreira-338327210'><AiOutlineLinkedin size='2rem' /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact