import React, {useEffect, useState} from 'react'
import './Home.css'
import logo from '../../image/lckhplogo.jpg'
import { Link } from 'react-scroll';
import menu_icon from '../../image/menu-icon.png'
const Home = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu=()=>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="slide" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='member' smooth={true} offset={-260} duration={500}>Members</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Home
