import React from 'react'
import './Program.css'
import gallery_1 from '../../image/pro1.jpg'
import gallery_2 from '../../image/pro2.jpg'
import gallery_3 from '../../image/pro3.jpg'
import gallery_4 from '../../image/pro4.jpg'
import white_arrow from '../../image/Arrow-right-512.png'

const Program = () => {
  return (
    <div className='program'>
        <div className="gallery">
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt=""/></button>
    </div>
  )
}

export default Program
