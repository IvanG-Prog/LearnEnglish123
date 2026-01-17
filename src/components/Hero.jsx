import '../css/components.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Master English. <br/> Change your life.</h2>
        <p>La plataforma interactiva para aprender inglés con profesores nativos y tecnología de punta.</p>
        <button className="btn-primary">Empieza Gratis</button>
      </div>
      {/* Círculo decorativo para dar profundidad (Efecto IA/Moderno) */}
      <div className="hero-visual">
        <div className="sphere"></div>
      </div>
    </section>
  );
}

export default Hero;