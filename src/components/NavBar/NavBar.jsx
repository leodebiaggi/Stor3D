import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    <nav className="NavBar" >
      <Link to='/'>
        <img src="./img/logoStor3D.png" alt="Logo" className="logoNav"/>
      </Link>
      <div className="Categories">
      <NavLink to={'/category/anime'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Anime</NavLink>
      <NavLink to={'/category/series'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Series</NavLink>
      <NavLink to={'/category/superheroes'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Superheroes</NavLink>
      <NavLink to={'/category/personalizados'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Personalizados</NavLink>
      <NavLink to={'/category/decovarios'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deco/Varios</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;

