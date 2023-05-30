import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

import { FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/mukhammadrizooff/" target="_blank" rel="noopener noreferrer" aria-label="LinkIdin link"><BsLinkedin /></a>
    <a href="https://angel.co/u/mukhammadrizooff" target="_blank" rel="noopener noreferrer" aria-label="Angelist link"><FaAngellist /></a>
    <a href="https://github.com/mukhammadrizooff" target="_blank" rel="noopener noreferrer" aria-label="Github link"><BsGithub /></a>
    <a href="https://www.instagram.com/mukhammadrizooff/" target="_blank" rel="noopener noreferrer" aria-label="Instagram link"><BsInstagram /></a>
  </div>
);

export default HeaderSocials;
