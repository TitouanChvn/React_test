import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


const Footer = () => {
const location = useLocation()
  return (
    <footer>
      <p> Voila le Footer</p>
      <p> on est dans {location.pathname} </p>
      <Link to="/about" >A propos</Link>
    </footer>
  )
}

export default Footer
