import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import './index.css'
import Sale from './pages/Sale'

function App() {
  

  return (
    
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sale" element={<Sale/>}/>
      </Routes>
      

   
      
    
  )
}

export default App
