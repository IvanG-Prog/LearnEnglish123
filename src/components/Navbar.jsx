import { Link } from 'react-router-dom'; // Importamos el componente de navegación
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Al hacer clic en el logo, volvemos al inicio */}
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          LearnEnglish<span>123</span>
        </Link>
      </div>

      <ul className="nav-links">
        {/* CORREGIDO: "Cursos" ahora te lleva a la ruta /cursos */}
        <li><Link to="/cursos">Cursos</Link></li>
        
        {/* "Metodología" nos lleva a la nueva ruta que creamos en App.jsx */}
        <li><Link to="/metodologia">Metodología</Link></li>
        
        <li className="nav-btn">Iniciar Sesión</li>
      </ul>
    </nav>
  );
}

export default Navbar;