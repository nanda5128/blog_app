import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Blogs from './Components/Blogs'
import Main from './Components/Main'

import { Route, Routes } from 'react-router-dom'
import AddBlogs from './Components/AddBlogs'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/blogs' element={<Main child={<Blogs/>}/>}></Route>
      <Route path='/addblogs' element={<AddBlogs/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
