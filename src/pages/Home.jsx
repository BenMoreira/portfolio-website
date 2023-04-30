import React from 'react'

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
        </div>
      </div>
    </div>
  )
}

export default Home