import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFoundContainer">
      <h1>404</h1>
      <p>Página No Encontrada</p>
      <Link to="/" className="HomeLink">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;