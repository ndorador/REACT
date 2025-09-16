import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Mi Tienda</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/Autos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          Autos
        </NavLink>
        <NavLink to={`/category/Camionetas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          Camionetas
        </NavLink>
        <NavLink to={`/category/Motos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          Motos
        </NavLink>
        <NavLink to={`/category/Bicicletas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>
          Bicicletas
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;