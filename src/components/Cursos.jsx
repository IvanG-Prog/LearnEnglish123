import './Cursos.css'

function Cursos() {
  const niveles = [
    {
      id: 1,
      title: "Supervivencia Básica",
      modules: "Módulo 1 (L1 - L4)",
      desc: "Control de la velocidad, pedir aclaraciones y fillers estratégicos para pensar sin presión.",
      tag: "The Beginning"
    },
    {
      id: 2,
      title: "Flujo y Conexión",
      modules: "Módulo 2 (L5 - L8)",
      desc: "Conectores potentes, interrupciones elegantes y cómo dar opiniones firmes sin trabarte.",
      tag: "Social Flow"
    },
    {
      id: 3,
      title: "Storytelling y Futuro",
      modules: "Módulo 3 (L9 - L10)",
      desc: "Aprende a contar tus metas, grandes logros y sueños usando el pasado y futuro con fluidez.",
      tag: "Expert Voice"
    },
    {
      id: 4,
      title: "Negociación y Maestría",
      modules: "Módulo 4 y 5 (L11 - L16)",
      desc: "Pequeñas charlas (Small talk), resolución de conflictos y agilidad mental con humor.",
      tag: "Flow Master"
    }
  ];

  return (
    <div className="cursos-container">
      <header className="cursos-header">
        <span className="badge">Niveles de Entrenamiento</span>
        <h1>Tu ruta hacia el <span className="highlight">Flow Mastery</span></h1>
        <p>No enseñamos gramática suelta, entrenamos tu agilidad social en 4 etapas.</p>
      </header>

      <div className="cursos-grid-modern">
        {niveles.map((nivel) => (
          <div key={nivel.id} className="curso-card-premium">
            <div className="card-tag">{nivel.tag}</div>
            <div className="card-number">0{nivel.id}</div>
            <h3>{nivel.title}</h3>
            <span className="modules-badge">{nivel.modules}</span>
            <p>{nivel.desc}</p>
            <button className="btn-details">Ver contenido del nivel</button>
          </div>
        ))}
      </div>
    </div>
  );
} // <--- ESTA LLAVE CIERRA LA FUNCIÓN CURSOS

export default Cursos; // <--- ESTO AHORA ESTÁ FUERA (TOP LEVEL)