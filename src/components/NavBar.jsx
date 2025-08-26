// src/components/NavBar.jsx

import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h3>Mi Tienda</h3>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;