import { useEffect, useState, React } from 'react'
import EventCardsContainer from '../Components/EventCardsContainer';

function Events() {
  
  const [events, setEvents] = useState([])
    useEffect(() => {
      async function fetchEvents() {
        try {
          let eventsList = await fetch('https://majazocom.github.io/Data/events.json');
          eventsList = await eventsList.json()
          setEvents(eventsList.events)
        }
      catch(error) {
        console.log(error)
      }}
    fetchEvents()
    }, [])


    return ( 
    <article>
      <h1>Events</h1>
      
      <EventCardsContainer events={events} />
    </article>
   );
}

export default Events;