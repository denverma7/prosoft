import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Strength from './pages/Strength'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import '@fontsource-variable/nunito';



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/strength' element={<Strength />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App