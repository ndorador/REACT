import { useState, useEffect } from 'react';
import { getProductById } from '../../api/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <h2>Cargando detalle... ⏳</h2>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;