import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Formulario from "./components/pages/register-form/Register-form"
import Login from "./components/pages/login/Login"
import Pruebas from "./components/pages/pruebas/Pruebas"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      {/* <Pruebas/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="/pruebas" element={<Pruebas/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
