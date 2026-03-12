import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">Social Agility Training</span>
        <h2>Stop studying English. <br /> 
        <span className="highlight">Start building bridges.</span></h2>
        <p>
          Deja atrás los rompecabezas gramaticales. Entrena tu fluidez con el método 
          <strong> Flow Mastery</strong> y domina el arte de la comunicación real.
        </p>
        <div className="hero-btns">
          {/* Botón 1: Ahora apunta a /cursos */}
          <button 
            className="btn-primary" 
            onClick={() => navigate('/cursos')}
          >
            Explorar Módulos
          </button>

          {/* Botón 2: Ahora apunta a /metodologia */}
          <button 
            className="btn-secondary" 
            onClick={() => navigate('/metodologia')}
          >
            Ver Metodología
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="sphere"></div>
        <div className="experience-card">
          <span>70% Non-verbal</span>
          <p>Body Language Focus</p>
        </div>
      </div>
    </section>
  ); 
}

export default Hero;