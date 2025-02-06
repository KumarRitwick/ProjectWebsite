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
            <h6 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl padding-top-class">
                Project <span className="text-purple-400">List</span>
            </h6>
        </div>
    
        {/* Description */}
        <p className="text-sm md:text-base font-light">
        Here is an accordion list of <span className="text-purple-400">projects</span> that I have done over some time:
        </p>
    
        {/* Accordion for Projects */}
        <div className="w-full mt-4">
        {[
            { 
                title: 'Gym Application',
                description: ['A workout creation application based on goal explaining the workout along with set counter. Built using React.'],
                link: 'https://ritwicksgymapp.netlify.app/'
            },
            { 
                title: 'Context Aware Music Application',
                description: ['An app for music recommendations based on context and users listening pattern built on top of Spotify Engine.',
                            'Built in completion of MSc Project.'],
                link: 'https://github.com/KumarRitwick/ContextAwareMusicApp'
            },
            { 
                title: 'Free Transcribe', 
                description: ['A React based transcription tool to convert any audio(pre recorded or active recording) into any language from the dropdown box.'],
                link: 'https://free-transcribe.netlify.app/'
            },
            { 
                title: 'Python City Map Plot', 
                description: ['A map visualization tool using Python to plot the city with maximum population.'],
                link: 'https://github.com/KumarRitwick/PythonCityMapPlot'
            },
            { 
                title: 'MyFlix', 
                description: ['A movie streaming platform clone built using Nginx, Python Flask, Mongo Catalogue.',
                            'Note: This project has multiple mobing parts so I have linked my GitHub, each of these code needs to run in a container individually and linked together to run the application.'],
                link: 'https://github.com/KumarRitwick?tab=repositories'
            },
            { 
                title: 'NASA API Pull', 
                description: ['Fetches and displays NASA picture of the day with description as a slider window. Built using React.'],
                link: 'https://nasaapireactproject.netlify.app/'
            },
            { 
                title: 'ToDo List', 
                description: ['A task management application which can hold history in local storage so data is consistent in a browser. Build using React'],
                link: 'https://todolistritwick.netlify.app/'
            },
            { 
                title: 'Sudoku Solver', 
                description: ['A C based Sudoku solver built with purpose of understanding loops.'],
                link: 'https://github.com/KumarRitwick/Sudoku-Solver'
            },
            { 
                title: 'Towns mapping', 
                description: ['A map visualization tool for drawing circles around towns across UK in ratio of population.'],
                link: 'https://github.com/KumarRitwick/PythonCityMapPlot'
            },
        ].map((project, index) => (
            <details key={index} className="border rounded-md p-3 mb-2 accordion-bg text-left">
                <summary className="font-medium cursor-pointer">
                    {project.title}
                </summary>
                <hr className="my-2 border-gray-300" />
                <p className="mt-2 text-sm text-white-700" >
                    {project.description.map((line, idx) => (
                    <span key={idx}>
                        {line}
                        <br />
                        <br />
                    </span>
                    ))}
                </p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm mt-2 block">View Project
                </a>
            </details>
        ))}
        </div>
    </div>
  )
}
