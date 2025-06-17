import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Routes>
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App