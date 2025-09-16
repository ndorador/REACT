import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'¡Bienvenidos a la tienda!'} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos filtrados:'} />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        
      
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;