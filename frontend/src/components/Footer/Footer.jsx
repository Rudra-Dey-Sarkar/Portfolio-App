import React from 'react'
import "./Footer.css"
import { color } from 'framer-motion'
function Footer() {
  return (
    <div className='footer'>
      <div className="social-icons">
      <a target='_blank' href="https://www.facebook.com/profile.php?id=100067812303592"><ion-icon name="logo-facebook" id="fb"></ion-icon></a>
      <a target='_blank' href="https://www.instagram.com/rudra_dey_sarkar/?hl=en"><ion-icon name="logo-instagram" id="ig"></ion-icon></a>
      <a target='_blank' href="https://www.linkedin.com/in/rudra-dey-sarkar-5625331ba/"><ion-icon name="logo-linkedin" id="li"></ion-icon></a>
      <a target='_blank' href="https://github.com/Rudra-Dey-Sarkar"><ion-icon name="logo-github" id="gb"></ion-icon></a>
      <a target='_blank' href="mailto:rudradeysarkar5@gmail.com"><ion-icon name="mail-outline" id="em"></ion-icon></a>
      </div>
      <p> &copy; 2024 Rudra Dey Sarkar</p>
    </div>
  )
}

export default Footer
