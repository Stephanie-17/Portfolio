import React from 'react'
import Image from 'next/image'
const ProjectCard = () => {
  return (
    <div className='flex items-center flex-col w-90 md:w-130'>
       <div className='w-full border-3 border-blue-300 rounded-3xl'>
     <header className='w-full flex items-center justify-between p-4 py-4'>
      <h2 className='font-bold text-3xl md:text-5xl'>01</h2>
      
      <div className='flex gap-5 md:gap-10'>
         <p className='font-semibold text-xl md:text-2xl'>TicketFlow</p>
        <button className='text-lg md:text-xl'>Live Link</button>
      </div>
       
     </header>
     <div className='h-1 w-full bg-blue-300' />

     <section>
       <Image className='rounded-b-3xl md:w-full' src={'/placeholder-project.jpg'} alt='A picture of my Project' width={400} height={300} />
     </section>

    </div>
     
     <section className='mt-3 flex gap-2 flex-wrap md:self-start'>
      <p className='text-center  bg-blue-300/30 border-2 border-blue-300 rounded-full p-2 px-4'>NextJs</p>
      <p className="text-center  bg-blue-300/30 border-2 border-blue-300 rounded-full  p-2 px-4">TypeScript</p>
      <p className="text-center  bg-blue-300/30 border-2 border-blue-300 rounded-full  p-2 px-4">TailwindCss</p>
      <p className="text-center  bg-blue-300/30 border-2 border-blue-300 rounded-full  p-2 px-4">Convex</p>
     </section>
    </div>
   
  )
}

export default ProjectCard