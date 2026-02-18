import './css/layout.css'
import './css/components.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCard from './components/CourseCard'

function App() {
  return (
    <div className="main-container">
      {/* Elementos decorativos de fondo */}
      <div className="shape-blob"></div>
      
      <div className="floating-icons-container">
         <span className="floating-icon icon-1">🚀</span>
         <span className="floating-icon icon-2">📖</span>
         <span className="floating-icon icon-3">✏️</span>
         <span className="floating-icon icon-4">💬</span>
      </div>

      {/* Contenido de la página */}
      <Navbar /> 
      <Hero />
      
      <section className="course-grid">
        <CourseCard title="Inglés desde Cero" level="Básico" />
        <CourseCard title="Business English" level="Intermedio" />
        <CourseCard title="Preparación IELTS" level="Avanzado" />
      </section>
    </div>
  )
}

export default App