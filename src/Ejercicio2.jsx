import { Link } from 'react-router-dom';
import './ejercicio2.css';

// Componente 4 (Hijo final que recibe los datos)
const Componente4 = ({ datos }) => (
    <div className="comp4">
        <div className="label">Componente4</div>
        <div className="data-card">
            <h3>Datos del Objeto</h3>
            <p><strong>Nombre:</strong> {datos.nombre}</p>
            <p><strong>Dirección:</strong> {datos.dirección}</p>
            <p><strong>Ciudad:</strong> {datos.ciudad}</p>
        </div>
    </div>
);

// Componente 3
const Componente3 = ({ datos }) => (
    <div className="comp3">
        <div className="label">Componente3</div>
        <Componente4 datos={datos} />
    </div>
);

// Componente 2
const Componente2 = ({ datos }) => (
    <div className="comp2">
        <div className="label">Componente2</div>
        <Componente3 datos={datos} />
    </div>
);

// Componente 1 (Padre inicial)
const Componente1 = () => {
    const objetoDatos = {
        nombre: "Jaime",
        dirección: "Jr. Junin 450",
        ciudad: "Huancayo"
    };

    return (
        <div className="comp1">
            <div className="label">Componente1</div>
            <Componente2 datos={objetoDatos} />
        </div>
    );
};

const Ejercicio2 = () => {
    return (
        <div className="ejercicio2-container">
            <div className="back-link">
                <Link to="/">&larr; Volver al Inicio</Link>
            </div>
            <div className="nested-components-wrapper">
                <Componente1 />
            </div>
        </div>
    );
};

export default Ejercicio2;
