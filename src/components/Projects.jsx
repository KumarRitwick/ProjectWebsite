import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import LinkButtons from './LinkButtons';

export default function Projects() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center text-center max-w-[800px] w-full mx-auto p-4 relative">
        {/* Buttons at the Top */}
        <div className="absolute top-4 center-4 flex gap-4">
            <Button
                func={() => {
                navigate('/');
                }} text={"Home"} className="custom-text-button">
            </Button>
            <Button
                func={() => {
                const link = document.createElement('a');
                link.href = '/Resume_RitwickKumar.pdf';
                link.download = 'Resume_RitwickKumar.pdf';
                link.click();
                }} text={"Resume"} className="custom-text-button">
            </Button>
        </div>
    
        {/* Title */}
        <div className="flex flex-col gap-2 mt-16">
            <h6 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Project <span className="text-purple-400">List</span>
            </h6>
        </div>
    
        {/* Description */}
        <p className="text-sm md:text-base font-light">
        Here is a short list of <span className="text-purple-400">projects</span> that I have done over some time:
        </p>
    
        {/* Accordion for Projects */}
        <div className="w-full mt-4">
        {[
            { title: 'Gym Application', description: 'A fitness tracking app.' },
            { title: 'Context Aware Music Application', description: 'An app for music recommendations based on context.' },
            { title: 'Python City Map Plot', description: 'A map visualization tool using Python.' },
            { title: 'MyFlix', description: 'A movie streaming platform clone.' },
            { title: 'NASA API Pull', description: 'Fetches and displays NASA data.' },
            { title: 'ToDo List', description: 'A task management app.' },
            { title: 'Sudoku Solver', description: 'A C based Sudoku solver.' },
        ].map((project, index) => (
            <details key={index} className="border rounded-md p-3 mb-2 accordion-bg text-left">
                <summary className="font-medium cursor-pointer">
                    {project.title}
                </summary>
                <p className="mt-2 text-sm text-white-700">{project.description}</p>
            </details>
        ))}
        </div>
    </div>
  )
}
