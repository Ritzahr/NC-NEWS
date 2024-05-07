import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import { Routes, Route} from 'react-router-dom';
import Articles from './Components/Articles';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/articles" element={<Articles/>}/>
    </Routes>
    
    </>

  ) 
}

export default App
