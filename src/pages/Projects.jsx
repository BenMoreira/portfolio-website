import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='h-[calc(100vh-80px)] bg-blue text-red'>
      <div className='w-[70%] mx-auto'>
        <motion.p className='pt-10 text-3xl font-bold'
          initial={{
            x:'-10vh'
          }}
          animate={{
            x: 0,
            transition: {
              duration: 0.5
            }
          }}
        >
          Projects I've worked on:
        </motion.p>

        <div className='flex flex-col justify-center items-center pt-8 gap-5'>
          <motion.div className='p-2 border border-beige rounded-lg'
            initial={{
              y: '20vh',
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5
              }
            }}
          >
            <ProjectCard name='Visual Portfolio (Group Project): Georgia Gwinnett College' 
              description='A web application to create documents for your portfolio in a visually interactive way. My roles for this project 
              were Client Liasion/ Team Manager/ Data Modeler/ Programmer.' 
              tools='ReactJS, Firebase/Firestore, TailwindCSS, JIRA' github='' deploy='https://visual-portfolio.onrender.com/' />
          </motion.div>

          <motion.div className='p-2 border border-beige rounded-lg'
            initial={{
              y: '20vh',
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5
              }
            }}
          >
            <ProjectCard name='Crypto-Betting-App (Group Project): Georgia Gwinnett College'
              description='A web application where you can bet tokens (not real money) on the prices of certain crypto coins 
              whether it goes up or down a certain strike %. For this project, Pair Progamming was used instead of each team member 
              having a different role.' tools='MERN, Coingecko API, TailwindCSS, Asana' 
              github='https://github.com/BenMoreira/crypto-betting-app' deploy='https://crypto-betting-app.netlify.app/' />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects