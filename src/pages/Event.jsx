import NumberOfTickets from "../Components/NumberOfTickets";

function Event() {
  const eventValue= JSON.parse(localStorage.getItem("event"))
  console.log(eventValue)

  const {name, price, when:{date, from, to}, where} = eventValue

  
  return ( 
    <article>
          <h2>Event</h2>
          <p>You are about to score some tickets to</p>
          <h1>{name}</h1>
          <h3>{date} kl. {from} - {to}</h3>
          <p>@ {where}</p>
          <NumberOfTickets price={price} />
          
    </article>

   );
}

export default Event;