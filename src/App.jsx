import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Perfil from './pages/Perfil'
// import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
// import Aside from './components/Aside'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/dashboard" element={<Dashboard/>} />
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