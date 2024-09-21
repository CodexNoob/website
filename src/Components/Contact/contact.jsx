import { useState } from 'react';
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "02c62ad4-909f-49ce-a16e-3449454575fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt=""/>Contact@charlesjohnduot.gmail.com</li>
                <li><img src={phone_icon} alt=""/>090120941-08-283</li>
                <li><img src={loc_icon} alt=""/>Sanjose Rodriguez Rizal</li>
            </ul>
       </div>
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message Here' required></textarea>
            <button type='submit' className='btn dark_btn'>Submit<img src={white_arrow} alt=""/></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  );
};

export default Contact;