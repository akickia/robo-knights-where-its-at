import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";


function Order() {
  const navigate = useNavigate()
  function handleNavigation() {
    navigate("/tickets")
  }
  function handleNavigationGoBack() {
    navigate("/events")
  }

  const events = JSON.parse(localStorage.getItem("cart"))
  const [count, setCount] = useState(events.map(event => event.count))
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(events.map((event, i) => {
      return {
        ...event, count: count[i]
      }
    })))
  }, [count])
 

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
 const eventElements = events.map((event, i) => {
    return (      
      <NumberOfTickets key={i} eventName={event.name} eventTime={event.when.date + " " + event.when.from}  
      decreaseCount={() => decreaseCount(i)} increaseCount={() => increaseCount(i)} count={count[i]}/>
  )})

  const totalPrice = events.map(event => {
    return (
      event.price*event.count
    )
  }) 
const reducedPrice = totalPrice.reduce((acc, current) => {
  return acc+current
}, 0)
  
  
  return ( 
    <article>
      <h5 onClick={handleNavigationGoBack}>Tillbaka</h5>
      <h1>Varukorg</h1>
      {eventElements}
      <p>Totalt värde på order</p>
      <h4>{reducedPrice} sek</h4>
      <PrimaryButton title={"Skicka order"} action={() => {handleNavigation()}} />
    </article>
   );
}

export default Order;