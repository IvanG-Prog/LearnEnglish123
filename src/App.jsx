import { Routes, Route } from 'react-router-dom' // Importamos las herramientas de rutas
import './css/layout.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCard from './components/CourseCard'
import Metodologia from './components/Metodologia' 

function App() {
  return (
    <div className="main-container">
      {/* Elementos decorativos de fondo (Se mantienen en todas las rutas) */}
      <div className="shape-blob"></div>
      
      <div className="floating-icons-container">
         <span className="floating-icon icon-1">🚀</span>
         <span className="floating-icon icon-2">📖</span>
         <span className="floating-icon icon-3">✏️</span>
         <span className="floating-icon icon-4">💬</span>
      </div>

      {/* La Navbar siempre se ve */}
      <Navbar /> 

      {/* Definimos qué se ve en cada ruta */}
      <Routes>
        {/* RUTA PRINCIPAL: Hero + Cursos */}
        <Route path="/" element={
          <>
            <Hero />
            <section className="course-grid">
              <CourseCard title="Inglés desde Cero" level="Básico" />
              <CourseCard title="Business English" level="Intermedio" />
              <CourseCard title="Preparación IELTS" level="Avanzado" />
            </section>
          </>
        } />

        {/* RUTA DE METODOLOGÍA: Solo muestra el componente Metodologia */}
        <Route path="/metodologia" element={<Metodologia />} />
      </Routes>
    </div>
  )
}

export default App