import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PrimaryButton from './PrimaryButton'

export default function NumberOfTickets({count, eventName, eventTime, totalPrice, decreaseCount, increaseCount}) {



  
  return (
    <>
    <section className='event-price'>
      {totalPrice && <h3>{totalPrice} sek</h3>}
      {eventName && <h3>{eventName}</h3>}
      {eventTime && <h3>{eventTime}</h3>}
      <p onClick={() => decreaseCount()}>-</p>
      <p>{count}</p>
      <p onClick={() => increaseCount()}>+</p>
    </section>      
    

    </>
  )
}
