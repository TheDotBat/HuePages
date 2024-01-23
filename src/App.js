import logo from './logo.png';
import './styles/Main.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home'
import Docs from './pages/Docs';

export default function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={logo} className="Hue-Logo" alt="logo" />
        <h1> Hue Engine ©️ </h1>
      </header>
      <NavBar className="Nav" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/docs' element={<Docs />} />
      </Routes>
    </div>
  )
}