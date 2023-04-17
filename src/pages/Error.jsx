import { Link } from "react-router-dom";

function Error() {
  return ( 
    <section className="center-start">
      <h1>Något gick fel!</h1>
      <Link to="/events" style={{color: "white"}}><h5>Tillbaka till evenemang</h5></Link>
    </section>
   );
}

export default Error;