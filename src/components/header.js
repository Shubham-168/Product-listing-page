import React from 'react'

import './header.css'

export default function Header() {
  return (
    <nav>
      <div className="logo">TANN TRIM</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="search">
        <i className="fa fa-search icon"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  )
}
