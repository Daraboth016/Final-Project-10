import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <nav>
      <Navbar />
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      </main>
    </div>
  )
}

export default App
