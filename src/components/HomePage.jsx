import React from 'react'
import Button from './Button'

export default function HomePage() {
  return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>Hi, before we start let me introduce myself, I am</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Ritwick <span className='text-purple-400'>Kumar</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that these projects have come out of pure <span className='text-purple-400 font-medium'>love for coding, learning new technology & sheer boredom.</span> The projects in here are something that I did while learning <span className='text-purple-400 font-medium'>a specific technology.</span> Please feel free to browse and have a look, if you have any suggestion, do drop me an email.</p>
            <div className='flex flex-row gap-4'>
                <Button func={() => {
                    window.location.href = '#projects'
                }} text={"Projects"} className='custom-text'></Button>
                <Button func={() => {
                    const link = document.createElement('a');
                    link.href = '/public/Resume_RitwickKumar.pdf'
                    link.download = 'Resume_RitwickKumar.pdf';
                    link.click();
                }} text={"Resume"}>
                </Button>
            </div>
        </div>
  )
}
