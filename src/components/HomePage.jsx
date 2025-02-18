import React, { useEffect } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HomePage() {
  const navigate = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Full Stack Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
        <div className='flex flex-col gap-4'>
            <p>Hi, before we start, let me introduce myself, I am</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Ritwick <span className='text-purple-400'>Kumar</span></h1>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-4xl'>{`And I am a`} <span className="txt-rotate text-purple-400" dataPeriod="1000" data-rotate='[ "Web Developer", "Full Stack Engineer"]'><span className="wrap">{text}</span></span></h1>
        </div>
        <div className='flex flex-row gap-4'>
            <Button func={() => {
                navigate('/projects')
            }} text={"Projects"} className='custom-text'></Button>
            <Button func={() => {
                const link = document.createElement('a');
                link.href = '/Resume_RitwickKumar.pdf';
                link.download = 'Resume_RitwickKumar.pdf';
                link.click();
            }} text={"Resume"}>
            </Button>
        </div>
        <p className='text-sm md:text-base font-light'>I hereby acknowledgement that these projects have come out of pure <span className='text-purple-400 font-medium'>love for coding, learning new technology & sheer boredom.</span> The projects in here are something that I did while learning <span className='text-purple-400 font-medium'>a specific technology.</span> Please feel free to browse and have a look, if you have any suggestion, do drop me an email.</p>
        <footer>
            <div className="social-icon flex flex-row gap-4">
                <a href="https://www.linkedin.com/in/ritwick-kumar/">
                    <i className="fa-brands fa-linkedin icon-size"></i>
                </a>
                <a href="https://github.com/KumarRitwick">
                    <i className="fa-brands fa-square-github icon-size"></i>
                </a>
                <a href='mailto:kumarritwick13@gmail.com'>
                  <i class="fa-solid fa-envelope icon-size"></i>
                </a>
            </div>
        </footer>
    </div>
  )
}
