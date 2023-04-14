import { useEffect, useState, React } from 'react'
import EventCardsContainer from '../Components/EventCardsContainer';
import PrimaryButton from '../Components/PrimaryButton';
import { Link, useNavigate } from 'react-router-dom';

function Events() {
  const navigate = useNavigate()
  function handleNavigation() {
    navigate("/order")
  }
  
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
      <h1>Evenemang</h1>
      <EventCardsContainer events={events} />
      <PrimaryButton action={handleNavigation} title="Gå till varukorg" />
    </article>
   );
}

export default Events;