import React from 'react'
import TicketCard from '../Components/TicketCard'

export default function Tickets() {
  const events = JSON.parse(localStorage.getItem("cart"))
  const eventElements = events.map((event, i) => {
    const resultEl = () => {
      for (let j=0; j <= event.count; j++) {
        return (      
          <TicketCard event={event}/>
      )}
        }
  return  resultEl()
})
  return (
    <div>{eventElements}</div>
  )
}
