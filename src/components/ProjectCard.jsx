import React from 'react'

const ProjectCard = ({name, description, tools, github, deploy}) => {
  return (
    <div className='flex flex-col justify-start text-xl gap-2'>
        <div className='flex flex-row justify-between items-center'>
            <div className='font-bold text-red'>
                {name}
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div className=''>
                    {deploy ? <a href={deploy} className='hover:text-beige'>Link</a> : 
                        <a href={deploy} className='cursor-not-allowed'>Link</a>}
                </div>
                <div className=''>
                    {github ? <a href={github} className='hover:text-beige'>Github</a> : 
                        <a href={github} className='cursor-not-allowed'>Github: Private/Unavailable</a>}
                </div>
            </div>
        </div>

        <div className='text-beige'>
            {description}
        </div>

        <div className='text-beige text-lg'>
            Used: {tools}
        </div>
    </div>
  )
}

export default ProjectCard