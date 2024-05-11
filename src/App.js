import React from 'react'
import Home from './Components/Home/Home'
import Admin from './Components/Layout/Admin'
import Members from './Components/Members/Members'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Program from './Components/Program/Program'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Home/>
      <Admin/>
      <div className="container">
        <Title subTitle='PRESENT CLUB MEMBER' title='Board Members'/>
      <Members/>
      <About/>
      <Title subTitle='GALLERY' title='Program Photos'/>
      <Program/>
      <Title subTitle='TESTIMONIALS' title='What Member Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Join Us'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
export default App