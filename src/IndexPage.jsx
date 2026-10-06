import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <div className="index-container">
      <h1 className="title">Ejercicios de Laboratorio React</h1>
      <div className="cards-container">
        <Link to="/ejercicio1" className="card">
          <h2>Ejercicio 1</h2>
          <p>Diseño Responsivo con 7 Componentes</p>
        </Link>
        <Link to="/ejercicio2" className="card">
          <h2>Ejercicio 2</h2>
          <p>Componentes Anidados y Paso de Props</p>
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
