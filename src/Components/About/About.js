import React from 'react'
import './About.css'
import about_img from '../../image/team2.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>About LEO & LCKHP</h3>
        <h2>Leo Club of Kathmandu Himalayas Patan</h2>
        <p>
        Leo clubs are a youth organization of Lions Clubs International. Every Leo club requires a Lions club to sponsor and initiate it, however the clubs themselves are youth-led. Leo club members are addressed as "Leos", however Leos between 18 and 30 can be addressed as Leo-Lions.
        </p>
<p>
Leo Club of Kathmandu Himalayas Patan is the oldest Leo Club of Nepal founded in 1974 AD. Our mission is to empower young leaders, promote social responsibility, and drive meaningful change. Join us in our journey of service, leadership, and collaboration.
</p>
      </div>
    </div>
  )
}

export default About
