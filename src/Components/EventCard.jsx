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
    <article onClick={(e) => handleLocalStorage(eventDetails)}>
      <h5>{date}</h5>
      <h2>{name}</h2>
      <p>{where}</p>
      <h4>{from}-{to}</h4>
      <h3>{price} sek</h3>
    </article>
  )
}
