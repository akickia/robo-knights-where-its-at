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
  console.log(events[0].name)
  return ( 
    <article>
      <h1>Order</h1>
      <NumberOfTickets eventName={events[0].name} eventTime={events[0].when.date + " " + events[0].when.from}  decreaseCount={decreaseCount} increaseCount={increaseCount} count={count}/>
      <p>Totalt värde på order</p>
      <h4>Summan</h4>
      <PrimaryButton title={"Skicka order"} action={() => {console.log("beställ")}} />
    
    </article>
   );
}

export default Order;