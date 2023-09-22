import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/private/home/Home"
import Formulario from "./components/pages/public/register-form/Register-form"
import Login from "./components/pages/public/login/Login"
import CardDetail from "./components/pages/private/cardDetail/CardDetail"
import Pruebas from "./components/pages/pruebas/Pruebas"

import ProtectedRouter from "./components/router/ProtectedRouter"
import { ContextProvider } from "./components/utils/GlobalContexts"
import Navbar from "./components/common/navbar/Navbar"
import Footer from "./components/common/footer/Footer"

function App() {

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />              //rutas publicas
            <Route path="/formulario" element={<Formulario />} />
          </Routes>

          <Routes>
            <Route element={<ProtectedRouter />}>               //rutas privadas
              <Route path="/home" element={<Home />} />
              <Route path="/cardsDetail/:id" element={<CardDetail />} />
              <Route path="/pruebas" element={<Pruebas />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
