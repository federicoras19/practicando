import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/private/home/Home"
import Formulario from "./components/pages/public/register-form/Register-form"
import Login from "./components/pages/public/login/Login"
import Pruebas from "./components/pages/pruebas/Pruebas"

import ProtectedRouter from "./components/router/ProtectedRouter"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
            
        <Routes>
          <Route path="/" element={<Login />} />                  //rutas publicas

          <Route path="/formulario" element={<Formulario />} />
          <Route path="/pruebas" element={<Pruebas />} />

          <Route element={<ProtectedRouter />}>                   //rutas privadas
            <Route path="/home" element={<Home />} />
          </Route>

        </Routes>
            
      </BrowserRouter>
    </div>
  )
}

export default App
