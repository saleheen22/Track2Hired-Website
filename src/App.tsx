import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      check Dashboard
      <Outlet />

    </>
  )
}

export default App
