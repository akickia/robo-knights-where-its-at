import React from 'react'
import TicketCard from '../Components/TicketCard'
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'
import "../styles/tickets.css"

export default function Tickets() {
  const navigate = useNavigate()
  function handleNavigationGoBack() {
    navigate("/events")
  }

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
      <h5 onClick={handleNavigationGoBack}>Tillbaka</h5>
      <h1>Dina biljetter</h1>
      {eventElements}
      </article>
  )
}

