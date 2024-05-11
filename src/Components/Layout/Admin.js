import React from 'react'
import './Admin.css'
import arrow from '../../image/Arrow-right-512.png'

const Admin = () => {
  return (
    <div className='admin container'>
      <div className='admin-text'>
        <h1>"Leadership, Experience, Opportunity."</h1>
        <p>
         That’s what makes a LEO.
        </p>
        <button className='btn'>Explore more <img src={arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Admin
