import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter = () => {
    let isLogged = localStorage.getItem("token")

    if (!isLogged) {
        return <Navigate to="/" />
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRouter
