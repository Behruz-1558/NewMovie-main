import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Movie from './Pages/Movies'
import support from './Pages/Support'
import Subsc from './Pages/Subscription'
import Footer from './Components/Main/Footer'

import './App.css'
import Navbar from './Components/Main/Navbar'
import Support from './Pages/Support'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subsc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
