import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'
import Dashboard from './pages/Dashboard'
import Roles from './pages/Roles'
import Bitacora from './pages/Bitacora'
import Usuarios from './pages/Usuarios'
import Paginas from './pages/Paginas'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/roles" element={<Roles/>} />
          <Route path="/bitacora" element={<Bitacora/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/paginas" element={<Paginas/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


 {/* <Route
            path="/perfil"
            element={
                <Perfil />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}