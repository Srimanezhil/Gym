import React from 'react'
import './Footer.css'
import Logo from '../../assests/logo.png'
import Github from '../../assests/git.png'
import Instagram from '../../assests/insta.png'
import Linkedin from '../../assests/link.png'

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={Github} alt='' />
          <img src={Instagram} alt='' />
          <img src={Linkedin} alt='' />
        </div>
      </div>
      <div className='logo-f'>
       <img src={Logo} alt='' />
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer
