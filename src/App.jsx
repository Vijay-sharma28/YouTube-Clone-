import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlayVideo from './pages/PlayVideo'

const App = () => {

  const [sidebar,setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/PlayVideo' element={<PlayVideo />} />
      </Routes>
    </div>
  )
}

export default App
