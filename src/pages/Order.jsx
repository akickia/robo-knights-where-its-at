import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";


function Order() {

  //handle navigation
  const navigate = useNavigate()
  function handleNavigation(route) {
    navigate(route)
  }

  //get events from cart in localstorage and set count
  const events = JSON.parse(localStorage.getItem("cart"))
  const [count, setCount] = useState(events.map(event => event.count))
  
  //When count changes, update count in cart at localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(events.map((event, i) => {
      return {
        ...event, count: count[i]
      }
    })))
  }, [count])
 
  //Change count of correct event
  function increaseCount(index) {
    setCount(prevCount => {
      const newCount = [...prevCount];
      newCount[index] = newCount[index] + 1;
      return newCount;
    });
  }
  function decreaseCount(index) {
    if (count[index] > 1) {
      setCount(prevCount => {
        const newCount = [...prevCount];
        newCount[index] = newCount[index] - 1;
        return newCount;
      });
    }
  }

  //Return one numberOfTickets-component for each event
 const eventElements = events.map((event, i) => {
    return (      
      <NumberOfTickets key={i} eventName={event.name} eventTime={event.when.date + " " + event.when.from}  
      decreaseCount={() => decreaseCount(i)} increaseCount={() => increaseCount(i)} count={count[i]}/>
  )})

  //Calculate sum of tickets * cost per ticket for each event
  const totalPrice = events.map(event => {
    return (
      event.price*event.count
    )
  }) 

  //Calculate sum of all tickets
  const reducedPrice = totalPrice.reduce((acc, current) => {
    return acc+current
  }, 0)
  
  
  return ( 
    <article>
      <h5 onClick={() => handleNavigation("/events")}>Tillbaka</h5>
      <h1>Varukorg</h1>
      {eventElements}
      <p>Totalt värde på order</p>
      <h4>{reducedPrice} sek</h4>
      <PrimaryButton title={"Skicka order"} action={() => handleNavigation("/tickets")} />
    </article>
   );
}

export default Order;