import './Metodologia.css'

function Metodologia() {
  return (
    <div className="meto-page">
      {/* SECCIÓN 1: INTRODUCCIÓN IMPACTANTE */}
      <section className="meto-hero">
        <span className="badge-meto">METODOLOGÍA FLOW MASTERY</span>
        <h1>Más que un curso, un <span className="highlight">entrenamiento de alto rendimiento</span></h1>
        <p className="intro-text">
          La mayoría de los cursos enseñan piezas sueltas. Aquí, el error es bienvenido, 
          pero el silencio es el enemigo. No buscamos perfección, buscamos <strong>fluidez</strong>.
        </p>
      </section>

      {/* SECCIÓN 2: LOS 3 PILARES (Tarjetas con Iconos) */}
      <section className="meto-pilares">
        <div className="pilar-card">
          <div className="pilar-num">01</div>
          <h3>The Chunks</h3>
          <p>Bloques de sonido pre-armados para que tu cerebro deje de traducir palabra por palabra.</p>
        </div>
        <div className="pilar-card">
          <div className="pilar-num">02</div>
          <h3>The Acting</h3>
          <p>El 70% de la comunicación es no verbal. Entrenamos tu postura para hablar con seguridad.</p>
        </div>
        <div className="pilar-card">
          <div className="pilar-num">03</div>
          <h3>The Rescue Kit</h3>
          <p>Herramientas para salir de cualquier bache conversacional con elegancia y humor.</p>
        </div>
      </section>

      {/* SECCIÓN 3: LAS 3 NORMAS (Diseño tipo 'Dark Mode' resaltado) */}
      <section className="meto-rules">
        <h2>Normas del Flow Master</h2>
        <div className="rules-container">
          <div className="rule-item">
            <h4>Prohibido el "I don't speak English"</h4>
            <p>Usa estrategias de transición: <em>"Let me see... how can I put this?"</em></p>
          </div>
          <div className="rule-item">
            <h4>Embrace the "Flinch"</h4>
            <p>El inglés es contacto social. Usa tu cuerpo para mantener la conexión.</p>
          </div>
          <div className="rule-item">
            <h4>The 3-Second Rule</h4>
            <p>Nunca permitas más de 3 segundos de silencio. Usa fillers estratégicos.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ÍNDICE DE MÓDULOS (Lista elegante) */}
      <section className="meto-modules">
        <h2>Hoja de Ruta hacia la Maestría</h2>
        <div className="modules-list">
          <div className="mod-row"><span>Módulo 1</span><p>Supervivencia Básica (Fillers y aclaraciones)</p></div>
          <div className="mod-row"><span>Módulo 2</span><p>Flujo y Conexión (Conectores e interrupciones)</p></div>
          <div className="mod-row"><span>Módulo 3</span><p>Storytelling y Futuro (Sueños y logros)</p></div>
          <div className="mod-row"><span>Módulo 4</span><p>Relaciones y Conflictos (Networking y Feedback)</p></div>
          <div className="mod-row"><span>Módulo 5</span><p>Negociación y Maestría (Agilidad y Humor)</p></div>
        </div>
      </section>

      <footer className="meto-footer">
        <blockquote>"Language is not a barrier; it's a bridge. Welcome to the bridge."</blockquote>
        <p>Lic. José Gregorio Parra</p>
      </footer>
    </div>
  );
}

export default Metodologia;