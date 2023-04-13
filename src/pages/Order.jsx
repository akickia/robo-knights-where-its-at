import { useState } from "react";
import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";

function Order() {
  const [count, setCount] = useState(1)
  function increaseCount() {
    setCount(prevCount => prevCount+1)
  }
  function decreaseCount() {
    if (count > 1) {
      setCount(prevCount => prevCount-1)
    }
  }
  const events = JSON.parse(localStorage.getItem("cart"))
 const eventElements = events.map((event, i) => {

    return (      
      <NumberOfTickets key={i} eventName={event.name} eventTime={event.when.date + " " + event.when.from}  decreaseCount={decreaseCount} increaseCount={increaseCount} count={event.count}/>
  )})

  const totalPrice = events.map(event => {
    return (
      event.price*event.count
    )
  }) 
const reducedPrice = totalPrice.reduce((acc, current) => {
  return acc+current
}, 0)
  
  
  console.log(events[0].name)
  return ( 
    <article>
      <h1>Order</h1>
      {eventElements}
      <p>Totalt värde på order</p>
      <h4>{reducedPrice} sek</h4>
      <PrimaryButton title={"Skicka order"} action={() => {console.log("beställ")}} />
    
    </article>
   );
}

export default Order;