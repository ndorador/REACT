// src/components/ItemListContainer.jsx

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      <p>Próximamente, aquí verás nuestro catálogo de productos.</p>
    </div>
  );
};

export default ItemListContainer;