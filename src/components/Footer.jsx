import React from 'react'

export default function footer() {
  return (
    <footer className=' flex-col items-center justify-center text-center max-w-[800px] w-full mx-auto'>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ritwick-kumar/">
                    <i className="fa-brands fa-linkedin icon-size"></i>
                </a>
                <a href="https://github.com/KumarRitwick">
                    <i className="fa-brands fa-square-github icon-size"></i>
                </a>
            </div>
        </span>
    </footer>
  )
}
