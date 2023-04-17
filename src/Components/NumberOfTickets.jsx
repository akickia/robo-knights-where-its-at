import React from 'react'

export default function NumberOfTickets({count, eventName, eventTime, totalPrice, decreaseCount, increaseCount}) {

  return (
    <>
    <section className='event-price' >
      <section className='total-price'>
        {totalPrice && <h3 >{totalPrice} sek</h3>}
        {eventName && <div className="cart-title"><h1>{eventName}</h1></div>}
        {eventTime && <p>{eventTime}</p>}
        </section>
      <p className='decrease-ticket' onClick={() => decreaseCount()}>-</p>
      <p className='ticket-count'>{count}</p>
      <p className='increase-ticket' onClick={() => increaseCount()}>+</p>
    </section>      
    </>
  )
}
