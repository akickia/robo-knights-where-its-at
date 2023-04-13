import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";

function Event() {

  const {cart, setCart} = useContext(CartContext)
  
  const navigate = useNavigate()
  
  const eventValue= JSON.parse(localStorage.getItem("event"))
 const {name, price, when:{date, from, to}, where} = eventValue
  
  const [totalPrice, setTotalPrice] = useState(price)
  const [count, setCount] = useState(1)
  const [tickets, setTickets] = useState({
    name: name,
    price: price,
    when: {
      date: date, 
      from: from, 
      to: to },
    where: where,
    count: count,
  })
 

  function handleNavigation() {
    navigate("/events")
  }
  

  useEffect(() => {
    setTotalPrice(price*count)
    setTickets(prevTickets => {
      return {
        ...prevTickets, count: count
      }
    })
  }, [count])
  
  function increaseCount() {
    setCount(prevCount => prevCount+1)
  }
  function decreaseCount() {
    if (count > 1) {
      setCount(prevCount => prevCount-1)
    }
  }

  function handleAddToCart() {
      setCart([...cart, tickets])
    }

  useEffect(() => {
    
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log("reset?")
  }, [cart])



  
  return ( 
    <article>
      <h3 onClick={handleNavigation}>X</h3>
          <h2>Event</h2>
          <p>You are about to score some tickets to</p>
          <h1>{name}</h1>
          <h3>{date} kl. {from} - {to}</h3>
          <p>@ {where}</p>
          <NumberOfTickets count={count} totalPrice={totalPrice} decreaseCount={decreaseCount} increaseCount={increaseCount} />
          <PrimaryButton action={handleAddToCart} title="Lägg i varukorg" />
    </article>
   );
}

export default Event;