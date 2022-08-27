import React, {useState, useRef} from 'react';
import {MdLens} from 'react-icons/fa'

import emailjs from '@emailjs/browser'

import './ContactUs.css'



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
const Form = useRef();


const handleSubmit = (e) => {


e.preventDefault();
console.log(Form.current.value)
emailjs.sendForm('service_77txuab', 'template_2kqc7wl', Form.current , '037Rw9BI_OFiP2Zs0').then((result) => {
    console.log("success")
}, (error) => {
    console.log(error.text)
})
}

    return (
        <div className="container-contact">
<div className="header">
<div className="line">
</div>
   <div className="header-text">Contact Me
       </div> 
    <div className="line-1">
</div>
    </div>

<div className="content">
   <p>Feel free to reach out to me on the following platforms</p> 
   <div className="icons"> 
   <a href="https://www.linkedin.com/in/joshua-oluwatobi-a21ab4158">
                    <i className="fa fa-facebook-square"> <FaLinkedin /> </i>
                </a>
                <a href="https://www.github.com/oluwatobi2001">
                    <i className="fa fa-facebook-square"> <FaGithubSquare /></i>
                </a>
                <a href="https://twitter.com/Oluwato25390240?t=daN0mOIbjs_XCx2mhPEpww&s=08">
                    <i className="fa fa-facebook-square"> <FaTwitter /></i>
                </a>
                <a href="https://wa.me/2347015878080">
                    <i className="fa fa-facebook-square"> <FaWhatsappSquare /></i>
                </a>
                <a href="https://www.instagram.com/tobilyn7/">
                    <i className="fa fa-facebook-square"> <FaInstagram /></i>
                </a>

   </div>
   <div className="form-section">
       <p>Alternatively, you can  also send me a direct mail via the form below</p>
       <form className="contact-form" onSubmit={handleSubmit} ref={Form}>
           <div className="name-section">
             <label htmlFor="Name">Name</label>
<input type="text" className="name" placeholder="" name="user_name"  value={name} onChange={e => setName(e.target.value)}/>  
           </div>
           <div className="email-section">
           <label htmlFor="Email">Email</label>
<input type="email" className="email" placeholder="Email Address"  name="user_email" value={email} onChange={e => setEmail(e.target.value)} />
           </div>

           <div className="message-section">
           <label htmlFor="Message">Message</label>
<textarea  className="message" value={message} name="message" onChange={e => setMessage(e.target.value)}/>
           </div>

<button type="submit" className="submit-button" >Send  <span className="tele"><FaTelegramPlane /></span> </button>
       </form>
   </div>
</div>

        </div>
    )
}

export default Contact;
