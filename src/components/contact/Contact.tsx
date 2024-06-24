import React from 'react';
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className='container'>
      <div>
        {/* <h2>Contact</h2> */}
        <p className='subheading'>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
        <a className='contact-icon'><FaLinkedin /></a>
        <a className='contact-icon'><FaFacebookSquare /></a>
        <a className='contact-icon'><MdEmail /></a>
      </div>
    </section>
  );
}

export default Contact;