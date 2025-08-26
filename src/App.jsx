import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenid@ a nuestra tienda!" />
    </div>
  );
}

export default App;