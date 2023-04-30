import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className='h-[calc(100vh-110px)] bg-blue text-red'>
      <div className='w-[70%] mx-auto'>
        <p className='pt-5 text-3xl font-bold'>
          Projects I've worked on:
        </p>

        <div className='flex flex-col justify-center items-center pt-8 gap-5'>
          <div className='p-2 border border-beige rounded-lg'>
            <ProjectCard name='Visual Portfolio (Group Project): Georgia Gwinnett College' 
              description='A web application to create documents for your portfolio in a visually interactive way. My roles for this project 
              were Client Liasion/ Team Manager/ Data Modeler/ Programmer.' 
              tools='ReactJS, Firebase/Firestore, TailwindCSS, JIRA' github='' deploy='https://visual-portfolio.onrender.com/' />
          </div>

          <div className='p-2 border border-beige rounded-lg'>
            <ProjectCard name='Crypto-Betting-App (Group Project): Georgia Gwinnett College'
              description='A web application where you can bet tokens (not real money) on the prices of certain crypto coins 
              whether it goes up or down a certain strike %. For this project, Pair Progamming was used instead of each team member 
              having a different role.' tools='MERN, Coingecko API, TailwindCSS, Asana' 
              github='https://github.com/BenMoreira/crypto-betting-app' deploy='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects