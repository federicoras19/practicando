import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Formulario from "./components/pages/register-form/Register-form"
import Login from "./components/pages/login/Login"
import Pruebas from "./components/pages/pruebas/Pruebas"
import Navbar from "./components/common/navbar/Navbar"
import Footer from "./components/common/footer/Footer"
import ProtectedRouter from "./components/router/ProtectedRouter"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRouter/>}>
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/formulario" element={<Formulario />} />
          <Route path="/pruebas" element={<Pruebas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
