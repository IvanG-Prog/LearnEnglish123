import { Routes, Route } from 'react-router-dom' 
import './css/layout.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCard from './components/CourseCard'
import Metodologia from './components/Metodologia' 
import Cursos from './components/Cursos'

function App() {
  return (
    <div className="main-container">
      {/* Fondo y decoraciones */}
      <div className="shape-blob"></div>
      
      <div className="floating-icons-container">
         <span className="floating-icon icon-1">🚀</span>
         <span className="floating-icon icon-2">📖</span>
         <span className="floating-icon icon-3">✏️</span>
         <span className="floating-icon icon-4">💬</span>
      </div>

      <Navbar /> 

      <Routes>
        {/* Usamos exact path="/" para que el Hero SOLO se vea en el inicio */}
        <Route exact path="/" element={
          <>
            <Hero />
            <section className="course-grid">
              <CourseCard title="Inglés desde Cero" level="Básico" />
              <CourseCard title="Business English" level="Intermedio" />
              <CourseCard title="Preparación IELTS" level="Avanzado" />
            </section>
          </>
        } />

        {/* Rutas limpias para las otras páginas */}
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </div>
  )
}

export default App