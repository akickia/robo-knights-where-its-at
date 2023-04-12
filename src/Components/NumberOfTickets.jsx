import React from 'react'
import { useState } from 'react'

export default function NumberOfTickets({price}) {
  const [totalPrice, setTotalPrice] = useState(price)
  console.log(totalPrice)
  return (
    <section className='event-price'>
      
      {totalPrice}
      
      </section>
  )
}
