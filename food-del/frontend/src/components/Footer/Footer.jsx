import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.footlogo} alt="Logo" className="footerlogo-image" />

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            {/* <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div> */}
            <div className="footer-social-icons">
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>
  <a
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.twitter_icon} alt="Twitter" />
  </a>
  <a
    href="https://linkedin.com/in/pallukuru-mohan-kumar-669947223"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
  <a
    href="https://github.com/Mohan6040"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.github_icon} alt="GitHub" />
  </a>
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={assets.instagram_icon} alt="Instagram" />
  </a>
</div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-212-456-7890</li>
                <li>contact@foodie.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Foodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
