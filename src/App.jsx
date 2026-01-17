import './css/layout.css'
import Navbar from './components/Navbar' // Importamos la nueva barra
import Hero from './components/Hero'
import CourseCard from './components/CourseCard'

function App() {
  return (
    <div className="main-container">
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