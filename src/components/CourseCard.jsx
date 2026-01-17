import '../css/components.css'

function CourseCard({ title, level }) {
  return (
    <div className="course-card">
      <div className="badge">{level}</div>
      <h3>{title}</h3>
      <p>Domina el idioma con nuestro método garantizado.</p>
      <a href="#">Explorar programa →</a>
    </div>
  );
}

export default CourseCard;