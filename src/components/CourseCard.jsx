import './CourseCard.css' // <-- Agregamos esta línea para que sepa cómo vestirse

function CourseCard({ title, level }) {
  return (
    <div className="course-card">
      <div className="badge">{level}</div>
      <h3>{title}</h3>
      <p>Domina el idioma con nuestro método garantizado.</p>
      <a href="#" className="course-link">Explorar programa →</a>
    </div>
  );
}

export default CourseCard;