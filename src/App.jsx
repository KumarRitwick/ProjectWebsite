import { useState } from 'react'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bgColour'>
      <HomePage />
    </div>
  )
}

export default App
