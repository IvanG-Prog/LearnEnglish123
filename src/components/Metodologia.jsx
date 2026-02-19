import './Metodologia.css'

function Metodologia() {
  return (
    <section className="metodologia-page">
      <div className="metodologia-container">
        <header className="meto-header">
          <span className="badge">Metodología 360°</span>
          <h1>Aprende inglés de forma <span className="highlight">natural</span></h1>
          <p>Olvídate de memorizar listas de verbos. Nuestro sistema se basa en la práctica constante.</p>
        </header>

        <div className="meto-grid">
          <div className="meto-card">
            <div className="card-icon">🎧</div>
            <h3>Escucha Activa</h3>
            <p>Entrena tu oído con acentos reales desde el primer día.</p>
          </div>
          <div className="meto-card">
            <div className="card-icon">🗣️</div>
            <h3>Habla Fluida</h3>
            <p>Sesiones de conversación 1:1 con inteligencia artificial.</p>
          </div>
          <div className="meto-card">
            <div className="card-icon">📝</div>
            <h3>Escritura Pro</h3>
            <p>Correcciones automáticas con explicaciones gramaticales.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metodologia