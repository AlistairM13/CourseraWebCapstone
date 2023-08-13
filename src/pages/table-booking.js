import React, { useState } from 'react'

export default function TableBookingPage() {

  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: ""
  })

  function bookingDetailHandler(e) {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value })
  }


  return (
    <main>
      <section className='booking max-w'>
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <label htmlFor="res-date">Choose date</label>
          <input name='date' type="date" id="res-date" value={bookingDetails.date} onChange={bookingDetailHandler} />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" name='time' value={bookingDetails.time} onChange={bookingDetailHandler} >
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input name='guests' type="number" placeholder="1" min="1" max="10" id="guests" value={bookingDetails.guests} onChange={bookingDetailHandler} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name='occasion' value={bookingDetails.occasion} onChange={bookingDetailHandler} >
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagment</option>
            <option value="anniversary">Anniversary</option>
          </select>
          <input className='btn-yellow' type="submit" value="Make Your reservation" />
        </form>
      </section>
    </main>
  )
}
