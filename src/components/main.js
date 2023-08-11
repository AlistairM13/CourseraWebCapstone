import React from 'react'

const specials = [
  {
    name: "Green Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olvies and our Chicago style feta cheese, garnished with crunchy garlic and rosemary criytibs",
    image: "/assets/images/greek-salad.jpg"
  },
  {
    name: "Bruchetta",
    price: "$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/assets/bruchetta.svg"
  },
  {
    name: "Lemon Dessert",
    price: "$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/assets/images/lemon-dessert.jpg"
  },
]

const testimonials =[
  {
    name:"Alex",
    rating: 10,
    image: '/assets/images/pfp1.png'
  },
  {
    name:"Lisa",
    rating: 10,
    image: '/assets/images/pfp2.png'
  },
  {
    name:"Vin Diesel",
    rating: 10,
    image: '/assets/images/pfp4.jpg'
  },
  {
    name:"Sharon",
    rating: 10,
    image: '/assets/images/pfp3.png'
  },
]

export default function Main() {
  return (
    <main>
      <HeroSection />
      <SpecialsSection />
      <Testimonials />
    </main>
  )
}
function Testimonials() {
  return (
    <div className='testimonials-container'>
      <section className='testimonials max-w'>
        <h2>Testimonials</h2>
        <div className='test-box-container'>
          {testimonials.map(item => <Testimonial key={item.name} {...item} />)}
        </div>
      </section>
    </div>
  )
}
function Testimonial(props) {
  return (
    <article className='testimonial'>
      <div className='test-image'>
        <img src={props.image} alt={`${props.name}'s profile picture`} />
        <p>{props.name}</p>
      </div>
      <p className='test-rating'>Rating: {props.rating}⭐</p>
      <p className='test-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque. Integer in orci urna</p>
    </article>
  )
}

function HeroSection() {
  return (
    <div className='hero-container'>
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
  )
}

function SpecialsSection() {
  return (
    <section className='special max-w'>
      <div className='special-title'>
        <h2>This Week's Specials!</h2>
        <button className='btn-yellow'>Online Menu</button>
      </div>
      <div className='dish-container'>
        {specials.map(item => <Dish key={item.name} {...item} />)}
      </div>
    </section>
  )
}

function Dish(props) {
  return (
    <article className='dish'>
      <img src={props.image} alt={`A ${props.name} image`} />
      <div className='dish-title'>
        <h3>{props.name}</h3>
        <span>{props.price}</span>
      </div>
      <p>
        {props.description}
      </p>
      <a>Order a delivery<span>
        <img src='/assets/icon_delivery_.svg' alt={null} />
      </span> </a>
    </article>
  )
}