import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Movie from './Pages/Movies'
import Movie_inside from './Pages/Movie_inside'
import Subscriptions from './Pages/Subscription'
import Support from './Pages/Support'
import Actor from './Pages/Actor'
import Search from './Pages/Search'
import Navbar from './Components/Main/Navbar'
import Footer from './Components/Main/Footer'
import Register from './Pages/Register'

import './App.css'

function App() {

    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movie/:id" element={<Movie_inside />} />
          <Route path="/actor/:id" element={<Actor />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Register />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path='/search' element={<Search/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

  export default App
