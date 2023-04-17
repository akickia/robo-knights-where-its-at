import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";
import "../styles/order.css"

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
  const [cart, setCart] = useState(events)
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
    if (count[index]) {
      setCount(prevCount => {
        const newCount = [...prevCount];
        newCount[index] = newCount[index] - 1;
        return newCount;
      });
    }
    else if (count === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id))
    }
  }
  
 const eventElements = cart.map((event, i) => {
    return (      
      <NumberOfTickets key={i} eventName={event.name} eventTime={event.when.date + " " + event.when.from}  
      decreaseCount={() => decreaseCount(i)} increaseCount={() => increaseCount(i)} count={count[i]}/>
  )})

  
  function totalPrice(count) {
    return events.map((event, i) => event.price * count[i]).reduce((acc, current) => acc + current, 0);
  }

  const reducedPrice = totalPrice(count);

  
  return ( 
    <article className="cart center">
      <h5 onClick={handleNavigationGoBack} className="closeBtn">Tillbaka</h5>
      <h1>Varukorg</h1>
      {eventElements}
      <section className="total">
        <p>Totalt värde på order</p>
        <h4>{reducedPrice} sek</h4>
        </section>
      <PrimaryButton title={"Skicka order"} action={() => {handleNavigation()}} />
    </article>
   );
}

export default Order;