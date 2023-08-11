import React from 'react'

export default function Main() {
  return (
    <main>
      <div className='hero-wrapper'>
        <section className='hero max-w'>
          <div className='hero-text'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned <br /> Mediterranean restaurant,<br />focused on traditional <br />recipes served with a modern <br />twist.</p>
            <button className='btn-yellow'>Reserve a table</button>
          </div>
          <img src='./assets/images/restaurant-food.jpg' alt='Image of a chef holding food' />
        </section>
      </div>
    </main>
  )
}
