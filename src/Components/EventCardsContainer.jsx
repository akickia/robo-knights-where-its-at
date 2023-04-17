import React from 'react'
import EventCard from './EventCard'
import { useState } from 'react'

export default function EventCardsContainer({events}) {
  //set state for search
  const [search, setSearch] = useState("")
    const filteredEvents = events.filter(event => {
    return (event.name.toLowerCase().includes(search.toLowerCase()))
  })

  //return card for each filtered event
  const eventCardElement = filteredEvents.map((event, i) => {
    return (
      <EventCard key={i} eventDetails={event}/>
    )
  })

  //handle input change
  function handleChange(e) {
    setSearch(e.target.value)
  }
  
  return (
    <section className='event-cards-container'>
      <input type="text" onChange={handleChange}></input>
      {eventCardElement}
    </section>
  )
}
