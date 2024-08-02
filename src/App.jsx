import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Model from './Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <Model/>
      </Canvas>
    </>
  )
}

export default App
