import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Conatct = () => (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Conatct Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <a href="mailto:mukhammadrizoabdunazarov@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon" />
          <h4>Messenger</h4>
          <a href="https://m.me/mukhammadrizo.abdunazarov" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <a href="https://api.whatsapp.com/send?phone=+998970608900" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form action="https://formspree.io/f/xjvlbplk" method="POST">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea type="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Conatct;
