/* eslint linebreak-style:["error","windows"] */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  BsLinkedin, BsGithub, BsInstagram,
} from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './footer.css';

const Footer = () => (
  <footer>
    <a className="footer__logo" href="#home">
      Muhammad Rizo
    </a>
    <ul className="permalinks">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#recomendations">Recomendations</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="footer__socials">
      <a
        href="https://www.linkedin.com/in/mukhammadrizooff/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://angel.co/u/mukhammadrizooff"
        target="_blank"
        rel="noreferrer"
      >
        <FaAngellist />
      </a>
      <a
        href="https://github.com/mukhammadrizooff"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/mukhammadrizooff/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Muhammad Rizo portfolio. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
