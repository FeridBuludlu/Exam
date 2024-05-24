import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header_main'>
      <div className="Header_left">
        <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
      </div>
      <div className="Header_right">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/admin">ADD</Link></li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>LATEST</li>
          <li>PAGES</li>
        </ul>
      </div>
    </div>
  )
}

export default Header