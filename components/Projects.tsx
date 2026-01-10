import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center mt-40 '>
      <header>
        <h2 className='font-semibold text-4xl md:text-5xl text-center mb-10'>What have I been working on?</h2>
      </header>
      <div className='flex flex-wrap gap-10 items-center justify-center mt-12'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

      </div>
      
    </div>
  )
}

export default Projects