import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import { Routes, Route} from 'react-router-dom';
import Articles from './Components/Articles';
import TargetArticle from './Components/TargetArticle';
import ErrorPage from "./Components/ErrorPage"



function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:article_id" element={<TargetArticle/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </>

  ) 
}

export default App
