import React from 'react'

const About = () => {
  return (
    <div className='h-[calc(100vh-80px)] bg-blue w-full'>
      <div className='w-[70%] mx-auto'>
        <div className='text-red font-bold text-3xl pt-10 border-b border-beige'>
          About Me
        </div>

        <div className='text-beige text-xl w-[90%] pt-5'>
          Hi! My name is Benjamin Moreira. I'm 22 years old, and I recently graduated from Georgia Gwinnett College with 
          a Bachelor's degree in Information Technology, with a concentration in Software Development. I've been coding/programming 
          for 4 years now, and its been great. I love the problem solving aspect of programming, and how there is 
          always something new to learn in it as well.
        </div>

        <div className='text-red font-bold text-3xl pt-10 border-b border-beige'>
          My Technical Skills
        </div>

        <div className='text-lg pt-5'>
          <div className='flex flex-col justify-start gap-5'>
            <div className='flex flex-row justify-start items-center gap-2'>
              <div className='bg-beige p-2 rounded-lg font-bold text-xl w-[245px] text-center'>
                Languages
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Java
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                JavaScript
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                PHP
              </div>
            </div>

            <div className='flex flex-row justify-start items-center gap-2'>
              <div className='bg-beige p-2 rounded-lg font-bold text-xl w-[245px] text-center'>
                Technologies/Frameworks
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                HTML/CSS
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                ReactJS
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                NodeJS
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Express
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                TailwindCSS
              </div>
            </div>

            <div className='flex flex-row justify-start items-center gap-2'>
              <div className='bg-beige p-2 rounded-lg font-bold text-xl w-[245px] text-center'>
                Database
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                MySQL
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                SQLite
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Firebase/Firestore
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                MongoDB
              </div>
            </div>

            <div className='flex flex-row justify-start items-center gap-2'>
              <div className='bg-beige p-2 rounded-lg font-bold text-xl w-[245px] text-center'>
                Project Management
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Github
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Git
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Jira
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Asana
              </div>
            </div>

            <div className='flex flex-row justify-start items-center gap-2'>
              <div className='bg-beige p-2 rounded-lg font-bold text-xl w-[245px] text-center'>
                Methodology
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Agile
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Waterfall
              </div>
              <div className='bg-beige p-2 rounded-lg'>
                Scrum
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About