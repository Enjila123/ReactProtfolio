import React from 'react'
import './Members.css'
import president from '../../image/president.jpg'
import vice from '../../image/vp.jpg'
import secretary from '../../image/Secretary.jpg'
import treasurer from '../../image/treasurer.jpg'
import member_icon from '../../image/leo.jpg'

const Members = () => {
  return (
    <div className='members'>
        <div className="member">
            <img src={president} alt=""/>
            <div className="caption">
                <img src={member_icon} alt=""/>
                <p>President</p>
            </div>
        </div>
        <div className="member">
            <img src={vice} alt=""/>
            <div className="caption">
                <img src={member_icon} alt=""/>
                <p>Vice President</p>
            </div>
        </div>
        <div className="member">
            <img src={secretary} alt=""/>
            <div className="caption">
                <img src={member_icon} alt=""/>
                <p>Secretary</p>
            </div>
        </div>
        <div className="member">
            <img src={treasurer} alt=""/>
            <div className="caption">
                <img src={member_icon} alt=""/>
                <p>Treasurer</p>
            </div>
        </div>
    </div>
  )
}

export default Members
