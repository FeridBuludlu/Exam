import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className='Header_main'>
      <div className="Header_left">
        <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
      </div>
      <div className="Header_right">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Admin">ADD</Link></li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>LATEST</li>
          <li>PAGES</li>
          <li><Link to="/basket"><i class="fa-solid fa-basket-shopping"></i></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header