import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();
  return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='absolute top-8 right-8'>
                <Button func={() => {
                    navigate('/')
                }} text={"Home"} className='custom-text'></Button>
            </div>
            <div className='flex flex-col gap-4'>
                <h6 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Project <span className='text-purple-400'>List</span></h6>
            </div>
            <p className='text-sm md:text-base font-light'>Here is a short list of <span className='text-purple-400'>projects</span> that I done over some time</p>
            <ul>
                <li>
                    Gym Application
                </li>
                <li>
                    Context Aware Music Application
                </li>
                <li>
                    
                </li>
                <li>
                    ToDo List
                </li>
            </ul>
            
        </div>
  )
}
