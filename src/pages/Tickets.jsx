import React from 'react'
import TicketCard from '../Components/TicketCard'
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'
import "../styles/tickets.css"

export default function Tickets() {
  //Handle navigation
  const navigate = useNavigate()
  function handleNavigation(route) {
    navigate(route)
  }

  //Render ticket for each ticket in cart
  const events = JSON.parse(localStorage.getItem("cart"))
  const eventElements = events.map((event, i) => {
    return Array.from(
      { length: event.count }, () => {
        return (
        <TicketCard key={`${event.name}_${nanoid()}`} event={event} />
        )
    })
  })
  return (
    <article className="tickets-container">
      <h5 onClick={() => handleNavigation("/events")} className='closeBtn'>Tillbaka</h5>
      <h1>Dina biljetter</h1>
      {eventElements}
      </article>
  )
}

