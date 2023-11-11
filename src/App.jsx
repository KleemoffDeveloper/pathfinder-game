import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Choices from './Choices'

function App() {
  const [count, setCount] = useState(0)

  let choices = [
    "Choice A",
    "Choice B",
    "Choice C"
  ]

  return (
    <>
      <div>
        {choices.map((choice, index)=>(
          <Choices
            key={index}
            choice={choice}
          />
        ))}
      {/* <Choices /> */}
      </div>
      
    </>
  )
}

export default App
