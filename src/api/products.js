
const products = [
  { 
    id: '1', 
    name: 'Kia Río 2025', 
    category: 'Autos', 
    price: 1500, 
    stock: 10,
    description: 'Excelente vehículo Familiar y económico.' 
  },
  { 
    id: '2', 
    name: 'Ford 150 2025', 
    category: 'Camionetas', 
    price: 800, 
    stock: 15,
    description: 'Camioneta Premium full.' 
  },
  { 
    id: '3', 
    name: 'Yamaha 300cc', 
    category: 'Motos', 
    price: 150, 
    stock: 30,
    description: 'Potencia y maniobrabilidad.' 
  },
  { 
    id: '4', 
    name: 'Trek aro 26', 
    category: 'Bicicletas', 
    price: 600, 
    stock: 8,
    description: 'Para disfruta cada salida.' 
  }
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); 
  });
};


export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 500);
  });
};


export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === itemId));
    }, 500);
  });
};