import CourseCard from "../components/CourseCard/CourseCard";
import Footer from "../components/Footer/Footer";
import "./Cursos.css";

const courses = [
  {
    id: 1,
    icon: "⚛️",
    title: "React Básico",
    description:
      "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
    badge: "Principiante",
  },
  {
    id: 2,
    icon: "🔄",
    title: "React Hooks",
    description:
      "Profundiza en useState, useEffect y crea tus propios custom hooks.",
    badge: "Intermedio",
  },
  {
    id: 3,
    icon: "🗂️",
    title: "Estado Global",
    description:
      "Gestiona el estado con Context API y aprende cuándo usarlo.",
    badge: "Intermedio",
  },
  {
    id: 4,
    icon: "🚀",
    title: "React Avanzado",
    description:
      "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
    badge: "Avanzado",
  },
];

function Cursos() {
  return (
    <>
      <main className="cursos-page">
        <section className="courses-section" id="cursos">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Nuestros Cursos</h2>
              <p className="section-subtitle">
                Elige el camino que mejor se adapte a ti
              </p>
            </div>

            <div className="courses-grid" id="courses-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  icon={course.icon}
                  title={course.title}
                  description={course.description}
                  badge={course.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cursos;
