import { Routes, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import Ejercicio1 from './Ejercicio1';
import Ejercicio2 from './Ejercicio2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/ejercicio1" element={<Ejercicio1 />} />
      <Route path="/ejercicio2" element={<Ejercicio2 />} />
    </Routes>
  );
}

export default App;
