import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Recommended from './pages/Recommended'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cartpage from './new/Cartpage'

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/menu"element={<Menu/>}/>
      <Route path="/offers"element={<Offers/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/recommended"element={<Recommended/>}/>
      <Route path="/cartpage"element={<Cartpage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App;
