import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { ContextProvider } from "./components/utils/GlobalContexts"
import ProtectedRouter from "./components/router/ProtectedRouter"
import Login from "./components/pages/public/login/Login"
import Formulario from "./components/pages/public/register-form/Register-form"
import Layout from "./components/common/layout/Layout"
import Home from "./components/pages/private/home/Home"
import CardDetail from "./components/pages/private/cardDetail/CardDetail"
import Pruebas from "./components/pages/private/pruebas/Pruebas"


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />              //rutas publicas
            <Route path="/formulario" element={<Formulario />} />

            <Route element={<ProtectedRouter />}>               //rutas privadas
              <Route path="/home" element={<Layout />} >
                <Route path="/home" element={<Home />} />
                <Route path="cardsDetail/:id" element={<CardDetail />} />
                <Route path="pruebas" element={<Pruebas />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  )
}

export default App
