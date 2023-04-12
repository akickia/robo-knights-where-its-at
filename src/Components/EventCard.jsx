import React from 'react'

export default function EventCard({event:{name, price, when:{date, from, to}, where}}) {
  return (
    <article>
      <h5>{date}</h5>
      <h2>{name}</h2>
      <p>{where}</p>
      <h4>{from}-{to}</h4>
      <h3>{price} sek</h3>
    </article>
  )
}
