import {  Routes, Route, } from "react-router-dom";
import { Create_user } from './pages/create_user';


function App() {
  return (
    <>
    <Routes>
        <Route path="/CargarUsuarios" element={<Create_user />} /> {/* Ruta para crear usuarios */}
    </Routes>

    </>
  );
}

export default App;