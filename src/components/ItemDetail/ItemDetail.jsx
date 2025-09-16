import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({ id, name, price, category, description, stock }) => {
  
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} unidades de ${name}`);
   
  };

  return (
    <article className="ItemDetail"> 
      <header>
        <h2>{name}</h2>
      </header>
      <section>
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <h3 className="ItemPrice">Precio: ${price}</h3>
      </section>
      <footer>
        <p>Stock disponible: {stock}</p>
        <ItemCount 
          initial={1}
          stock={stock}
          onAdd={handleOnAdd}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;