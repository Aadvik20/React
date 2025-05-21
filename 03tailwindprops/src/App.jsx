import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Raj Yadav",
    age: 31,
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 text-black mb-2'>Tailwind Test</h1>

      <Card username="raj aur React" btnText="Click Me" />
      <Card username="Raj React" btnText="Visit Me" />
      
    </>
  )
}

export default App
