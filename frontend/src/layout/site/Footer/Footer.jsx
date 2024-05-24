import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer_main'>
      <div className="first_footer">
      <div className='footer_about'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor incididun<br /> labore dolore magna aliqua.</p>
      </div>
      <div className='footer_news'>
        <h3>Newsletter</h3>
        <p>
          Stay update with our latest
        </p>
        <div className='input'>
          <label for="mail"></label>
          <input type="text" placeholder='Enter Email' className='input_mail' />
          <button type='submit' className='input_button'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div className='feed'>
        <h3>Instragram Feed</h3>
        <div>
          <div className='images'>
            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" />
          </div>
          <div className='images'>
            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='follow'>
        <h3>Follow Us</h3>
        <p>Let us be social</p>
        <div className='follow_icon'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-solid fa-earth-americas"></i>
          <i class="fa-brands fa-behance"></i>
        </div>
      </div>
      </div>
      <div className='conclusion'>
        <p>
        Copyright ©2024 All rights reserved | This template is made with  by Colorlib
        </p>
      </div>
    </div>
  )
}

export default Footer