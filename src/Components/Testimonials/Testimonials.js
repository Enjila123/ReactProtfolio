import React from 'react'
import './Testimonials.css'
import next_icon from '../../image/next-icon.png'
import back_icon from '../../image/back-icon.png'
import user_1 from '../../image/user1.jpg'
import user_2 from '../../image/user2.jpg'
import user_3 from '../../image/user3.jpg'
import user_4 from '../../image/user4.jpg'
import { useRef } from 'react'

const Testimonials = () => {
     const slider = useRef();
     let tx= 0;
const slideForward=()=>{
if(tx>-50){
    tx-=25;
}
slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward=()=>{
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_1} alt=""/>
                        <div>
                            <h3>Ayusha Dongol</h3>
                            <span>Dulikhel, KTM</span>
                        </div>
                        </div>
                        <p>I have been a member with By The LCKHP for more than a year and a half. I think the organization is doing incredible work and I’m so happy to be a part of the club.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt=""/>
                        <div>
                            <h3>Diwash Khatri</h3>
                            <span>Putalisadak, KTM</span>
                        </div>
                        </div>
                        <p>I have been a member with By The LCKHP for more than a year and a half. I think the organization is doing incredible work and I’m so happy to be a part of the club.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt=""/>
                        <div>
                            <h3>Srijata Shrestha</h3>
                            <span>Lalitpur, KTM</span>
                        </div>
                        </div>
                        <p>I have been a member with By The LCKHP for more than a year and a half. I think the organization is doing incredible work and I’m so happy to be a part of the club.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt=""/>
                        <div>
                            <h3>Prayush Oli</h3>
                            <span>Baneshwor, KTM</span>
                        </div>
                        </div>
                        <p>I have been a member with By The LCKHP for more than a year and a half. I think the organization is doing incredible work and I’m so happy to be a part of the club.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
