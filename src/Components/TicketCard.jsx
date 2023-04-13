import React from 'react'

export default function TicketCard({event}) {
  const {name, price, when:{date, from, to}, where} = event

  return (
    <div>
      <h1>{name}</h1>
      <h4>{where}</h4>
      
      <h4>{date}</h4>
      <h4>{from}</h4>
      <h4>{to}</h4>
      <p>Section C - seat 233, bring umbrella</p>

    </div>
  )
}
