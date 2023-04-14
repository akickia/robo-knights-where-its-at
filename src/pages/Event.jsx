import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import Confirmation from "../Components/Confirmation";

function Event() {
  //Get content of context
  const {cart, setCart} = useContext(CartContext)
  
  
  //Get current event from local storage
  const eventValue= JSON.parse(localStorage.getItem("event"))
  //Deconstructing eventValue
  const {name, price, when:{date, from, to}, where} = eventValue
  
  //Declaring states for count, total price and when to show confirmation
  const [totalPrice, setTotalPrice] = useState(price)
  const [count, setCount] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  //Declare state for what each ticket will include
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

  
  //Use navigate hook and create function for using them
  const navigate = useNavigate()
  function handleNavigation(route) {
    navigate(route)
  }


  //Handle count of tickets
  function increaseCount() {
    setCount(prevCount => prevCount+1)
    setAddedToCart(false)
  }
  function decreaseCount() {
    if (count > 1) {
      setCount(prevCount => prevCount-1)
      setAddedToCart(false)
    }
  }

  //If name is already in cart update count - else add tickets to cart
  function handleAddToCart() {
    const cartItemIndex = cart.findIndex(event => event.name === tickets.name)
      if (cartItemIndex !== -1) {
        const updatedCart = [...cart]
        updatedCart[cartItemIndex].count = tickets.count
        setCart(updatedCart)
      }
      else {
        setCart([...cart, tickets])
      }
    }
  
    //update totalPrice and ticket with current number of tickets everytime count updates
  useEffect(() => {
    setTotalPrice(price*count)
    setTickets(prevTickets => {
      return {
        ...prevTickets, count: count
      }
    })
  }, [count])

  //Set cart to localstorage when updated, and show confirmation
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    setAddedToCart(prevState => !prevState)
  }, [cart])

 

  return ( 
    <article>
      <h3 onClick={() => handleNavigation("/events")}>X</h3>
          <h1>{name}</h1>
          <h3>{date} kl. {from} - {to}</h3>
          <p>@ {where}</p>
          <NumberOfTickets count={count} totalPrice={totalPrice} decreaseCount={decreaseCount} increaseCount={increaseCount} />
          <PrimaryButton action={handleAddToCart} title="Lägg i varukorg" />
          <br /> <br />
          <PrimaryButton action={() => handleNavigation("/order")} title="Gå till varukorg" />
          {addedToCart && <Confirmation />}
    </article>
   );
}

export default Event;