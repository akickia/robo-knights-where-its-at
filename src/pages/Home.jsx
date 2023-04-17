import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import logo from "../images/logo.png"

function Home() {
  const navigate = useNavigate()

  //When time has passed => navigate to events. 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('../events')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return ( 
    <article className="center-start">
      <img src={logo}/>
      <h1>Where It's @</h1>
      <h4>Ticketing made easy</h4>
    </article>
   );
}

export default Home;