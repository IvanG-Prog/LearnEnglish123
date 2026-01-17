import '../css/components.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LearnEnglish<span>123</span></div>
      <ul className="nav-links">
        <li>Cursos</li>
        <li>Metodología</li>
        <li className="nav-btn">Iniciar Sesión</li>
      </ul>
    </nav>
  )
}

export default Navbar