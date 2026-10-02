import "./CourseCard.css";

function CourseCard({ icon, title, description, badge }) {
  return (
    <article className="course-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <span className={`badge badge--${badge.toLowerCase()}`}>{badge}</span>
    </article>
  );
}

export default CourseCard;
