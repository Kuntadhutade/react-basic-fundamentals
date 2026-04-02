import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
  return(
    <nav>

      <div className="logodiv">
        NavbarLogo
      </div>  

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar;