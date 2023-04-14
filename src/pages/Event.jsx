import NumberOfTickets from "../Components/NumberOfTickets";
import PrimaryButton from "../Components/PrimaryButton";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import Confirmation from "../Components/Confirmation";

function Event() {
  //Using context hook
  const {cart, setCart} = useContext(CartContext)
  //Using navigate hook
  const navigate = useNavigate()
  //Get event from local storage
  const eventValue= JSON.parse(localStorage.getItem("event"))
  //Deconstructing eventValue
  const {name, price, when:{date, from, to}, where} = eventValue
  //Declaring states
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
  const [addedToCart, setAddedToCart] = useState(false)
 
  function handleNavigation() {
    navigate("/events")
  }
  function handleNavigationToCart() {
    navigate("/order")
  }

  //Handle count
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
  
  useEffect(() => {
    setTotalPrice(price*count)
    setTickets(prevTickets => {
      return {
        ...prevTickets, count: count
      }
    })
  }, [count])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    setAddedToCart(prevState => !prevState)
  }, [cart])

 

  return ( 
    <article>
      <h3 onClick={handleNavigation}>X</h3>
          <h1>{name}</h1>
          <h3>{date} kl. {from} - {to}</h3>
          <p>@ {where}</p>
          <NumberOfTickets count={count} totalPrice={totalPrice} decreaseCount={decreaseCount} increaseCount={increaseCount} />
          <PrimaryButton action={handleAddToCart} title="Lägg i varukorg" />
          <br /> <br />
          <PrimaryButton action={handleNavigationToCart} title="Gå till varukorg" />
          {addedToCart && <Confirmation />}
    </article>
   );
}

export default Event;