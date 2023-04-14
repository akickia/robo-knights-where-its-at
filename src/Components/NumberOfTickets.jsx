import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PrimaryButton from './PrimaryButton'

export default function NumberOfTickets({count, eventName, eventTime, totalPrice, decreaseCount, increaseCount}) {

  return (
    <>
    <section className='event-price'>
      {totalPrice && <h3 className='total-price'>{totalPrice} sek</h3>}
      {eventName && <h3>{eventName}</h3>}
      {eventTime && <h3>{eventTime}</h3>}
      <p className='decrease-ticket' onClick={() => decreaseCount()}>-</p>
      <p className='ticket-count'>{count}</p>
      <p className='increase-ticket' onClick={() => increaseCount()}>+</p>
    </section>      
    </>
  )
}
