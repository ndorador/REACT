import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({ id, name, price, category, stock }) => {
  return (
    <article className="ItemCard">
      <header>
        <h2>{name}</h2>
      </header>
      <section>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
      </section>
      <footer>
        <Link to={`/item/${id}`} className="ItemFooterLink">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;