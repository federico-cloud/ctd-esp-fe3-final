import { Link } from "react-router-dom"
import "../css/Navbar.css"
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const Navbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);
  
  console.log(theme)

  return (
    <nav className={`${theme}`}>
      <Link className="nav__logo" to="/" >Centro medico</Link>
      <div className="nav__links-container">
        <Link className="nav__link" to="/home">Home</Link>
        <Link className="nav__link" to="/favourites">Favourites</Link>
        <Link className="nav__link" to="/contact">Contact</Link>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      </div>
    </nav>
  )
}
