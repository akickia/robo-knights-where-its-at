import { Link } from "react-router-dom";

function Error() {
  return ( 
    <section>
      <h1>Något gick fel!</h1>
      <Link to="/events"><h5>Tillbaka till start</h5></Link>
    </section>
   );
}

export default Error;