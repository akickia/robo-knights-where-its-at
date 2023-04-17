import React from 'react'
import code from '../images/A2ED7.png'

export default function TicketCard({event}) {
  const {name, price, when:{date, from, to}, where} = event

  return (
    <section className='ticket'>
      <section className='ticket-section'>
        <p>What</p>
        <h1>{name}</h1>
      </section>
      <section className='ticket-section'>
        <p>Where</p>
        <h4>{where}</h4>
        <p className='text'>Göteborgs universitet. Pedagogen, hus A</p>
      </section>
      <section className='ticket-when'>
        <section>
          <p>When</p>
          <h4>{date}</h4>
        </section>
        <section>
          <p>From</p>
          <h4>{from}</h4>
        </section>
        <section>
          <p>To</p>
          <h4>{to}</h4>
        </section>
      </section>
      <section className='ticket-section'>
        <p>Info</p>
        <p className='text'>Section C - seat 233, bring umbrella</p>
      </section>
      <section className='img-container'>
        <img src={code}></img>
        <p>#A2ED7</p>  
      </section>

    </section>
  )
}
