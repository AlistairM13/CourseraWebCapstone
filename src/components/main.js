import React from 'react'

const specials = [
  {
    name:"Green Salad",
    price:"$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olvies and our Chicago style feta cheese, garnished with crunchy garlic and rosemary criytibs",
    image:"/assets/images/greek-salad.jpg"
  },
  {
    name:"Bruchetta",
    price:"$ 5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:"/assets/bruchetta.svg"
  },
  {
    name:"Lemon Dessert",
    price:"$ 5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:"/assets/images/lemon-dessert.jpg"
  },
]

export default function Main() {
  return (
    <main>
      <Hero />
      <section className='special max-w'>
        <div className='special-title'>
          <h2>This Week's Specials!</h2>
          <button className='btn-yellow'>Online Menu</button>
        </div>
        <div className='dish-container'>
        {specials.map(item =><Dish key={item.name} {...item} />)}
        </div>
      </section>
    </main>
  )
}

function Dish(props){
  return(
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

function Hero() {
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