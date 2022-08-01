import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaAngellist} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mukhammadrizooff/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://angel.co/u/mukhammadrizooff" target="_blank" rel="noopener noreferrer"><FaAngellist/></a>
      <a href="https://github.com/mukhammadrizooff" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      <a href="https://www.instagram.com/mukhammadrizooff/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
