import React from 'react'
import './Contact.css'
import msg_icon from '../../image/msg-icon.png'
import mail_icon from '../../image/mail-icon.png'
import phone_icon from '../../image/phone-icon.png'
import location_icon from '../../image/location-icon.png'
import arrow from '../../image/Arrow-right-512.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f12ece6-12d7-4122-adbb-6dece7cfecbb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt=""/></h3>
          <p> Feel free to reach out through contact form oror find our contact information below. Your feeback, questions, and suggestions are important to us as we strive to provide exceptional community services. </p>
          <ul>
            <li> <img src={mail_icon} alt=""/>lckhimalayaspatan@gmail.com</li>
            <li> <img src={phone_icon} alt=""/>+977 986-4838537</li>
            <li> <img src={location_icon} alt=""/>Pulchowk , Lalitpur, Nepal</li>
          </ul>
        </div>
        
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
          <label>Write Your Messages Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now<img src={arrow} alt=""/></button>
        </form>
        <span>{result}</span>
    </div>
  )
}

export default Contact
