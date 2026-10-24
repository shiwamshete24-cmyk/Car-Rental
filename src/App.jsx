// https://preview.colorlib.com/theme/carrental/index.html
import react from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Car from './Components/Car.jsx'
import Team from './Components/Team.jsx'
import Blog from './Components/Blog.jsx'
import Contact from './Components/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import Service from './Components/Service.jsx'
import Blog_single from './Components/Blog_single.jsx'
import Elements from './Components/Elements.jsx'
import Footer from './Components/Footer.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
     
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/car' element={<Car/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path="/pages" element={<Pages/>} /> */}
          <Route path="/blog_single" element={<Blog_single/>} />
          <Route path="/elements" element={<Elements/>} />
        </Routes>
        <Footer/>

      </BrowserRouter>

    </>
  )
}

export default App
