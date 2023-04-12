import React from 'react'
import EventCard from './EventCard'

export default function EventCardsContainer({events}) {
  const eventCardElement = events.map((event, i) => {
    return (
     
      <EventCard key={i} event={event}/>
    )
  })
  return (
    <div>{eventCardElement}</div>
  )
}
