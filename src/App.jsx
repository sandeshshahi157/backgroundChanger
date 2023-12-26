import { useState } from 'react'

import './App.css'
import BgChanger from './BackgroundChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BgChanger/>
    </>
  )
}

export default App
