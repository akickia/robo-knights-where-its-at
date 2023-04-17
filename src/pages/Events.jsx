import { useEffect, useState, React } from 'react'
import EventCardsContainer from '../Components/EventCardsContainer';
import PrimaryButton from '../Components/PrimaryButton';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/events.css"

function Events() {

  //Handle navigation
  const navigate = useNavigate()
  function handleNavigation(route) {
    navigate(route)
  }
  
  //Fetch events with try and catch on first render
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
        handleNavigation("/error")
      }}
    fetchEvents()
    }, [])

    return ( 
    <article className='center'>
      <header>
        <h2>Events</h2>
      </header>  
        <EventCardsContainer events={events} />
        <PrimaryButton action={() => handleNavigation("/order")} title="Gå till varukorg" />      
    </article>
   );
}

export default Events;