import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import logo from "../images/logo.png"

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('../events')
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return ( 
    <article>
    <img src={logo} style={{width:"80%"}}/>
    <h1>Where It's @</h1>
    <h4>Ticketing made easy</h4>
    </article>
   );
}

export default Home;