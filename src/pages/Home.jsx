import React from 'react'
import Pdf from '../documents/ResumeIT.pdf'

const Home = () => {
  return (
    <div className='bg-blue h-[calc(100vh-80px)]'>
      <div className='mx-auto w-[70%] text-center'>
        <div className='text-8xl pt-14 text-red'>
          Welcome.

          <div className='text-4xl pt-10 text-beige'>
            My name is Benjamin Moreira.
          </div>

          <div className='text-2xl pt-10 text-beige'>
            I'm a Software Developer that has recently graduated, excited to get into the field.
          </div>

          <div className='text-2xl pt-10 text-beige'>
            <a href={Pdf} className='border-2 border-beige rounded-lg px-5 py-2 hover:text-red hover:border-red'>Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home