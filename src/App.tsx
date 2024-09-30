import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/InicioPage";
import AcercaDe from "./Pages/AcercaDePage";
import Productos from "./Pages/ProductosPage";
import Contacto from "./Pages/ContactoPage";
// import Navbar from "./components/Navbar";
// import { TextRevealCard } from "./components/TextRevealCard";
import WelcomePage from "./Pages/WelcomePage";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/InicioPage" element={<Inicio />}></Route>
        <Route path="/AcercaDePage" element={<AcercaDe />}></Route>
        <Route path="/ProductosPage" element={<Productos />}></Route>
        <Route path="/ContactoPage" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
