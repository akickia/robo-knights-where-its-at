import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EventCard({eventDetails}) {
  const {name, price, when:{date, from, to}, where} = eventDetails
  // console.log(eventDetails)
  const navigate = useNavigate()
  function handleLocalStorage (eventDetails) {
    localStorage.setItem("event", JSON.stringify(""))
    localStorage.setItem("event", JSON.stringify(eventDetails))
    console.log(eventDetails)
    navigate("/event")
}
  
  return (
    <article className="event-card-details" onClick={(e) => handleLocalStorage(eventDetails)}>
      <section className="event-card-wrapper">
        <h5 className="date-box">{date}</h5>
          <section className="event-box">
            <h6>{name}</h6>
            <p className='location-text'>{where}</p>
            <h4>{from} - {to}</h4>
          </section>
        <h3 className="price-box">{price} sek</h3>
        <hr style={{
            color: "#fff",
            height: "2px",
            border: "none",
          }}/>
      </section>
    </article>
  )
}
