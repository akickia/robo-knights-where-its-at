import React from 'react'
import EventCard from './EventCard'
import { useState } from 'react'

export default function EventCardsContainer({events}) {
  const [search, setSearch] = useState("")
    const filteredEvents = events.filter(event => {
    return (event.name.toLowerCase().includes(search.toLowerCase()))
  })
  const eventCardElement = filteredEvents.map((event, i) => {
    return (
      <EventCard key={i} eventDetails={event}/>
    )
  })
  function handleChange(e) {
    setSearch(e.target.value)
  }


  
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      {eventCardElement}
    </div>
  )
}
