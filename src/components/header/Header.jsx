/* eslint linebreak-style:["error","windows"] */
import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/user.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello I&apos;m</h5>
      <h1>Muhammad Rizo</h1>
      <h5 className="text-light">Full-stack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" className="image-me" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
