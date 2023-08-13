import React from 'react'

export default function Header() {
  return (
    <header className='max-w'>
      <img src='../assets/Logo.svg' alt='Little Lemon' />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}
