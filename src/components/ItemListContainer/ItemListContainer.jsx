import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../api/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true); 

    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); 
      });

  }, [categoryId]);

  return (
    <div>
    
      <h1 className="Greeting" style={{ textAlign: 'center' }}>
        {greeting}
      </h1> 
      
      {loading ? (
        <h2>Cargando detalle... ⏳</h2>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;