import React from 'react'
import Booking from './component/Booking'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './component/About'

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>

      <Route exact path="/" element={<Section1 />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/service" element={<Section2  />}/>
      <Route exact path="/whychooseus" element={<Section3 />}/>

      {/* <Route exact path="/" element={<Section2 />}/>
      <Route exact path="/" element={<Section3 />}/>
    <Route exact path="/" element={<Booking />}/> */}
      </Routes>
    <Booking />
      <Footer />
      </Router>
    </div>
  )
}
