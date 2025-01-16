import { useState } from 'react'
import HomePage from './components/HomePage'
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bgColour'>
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
        <Footer></Footer>
    </div>
  )
}

export default App
