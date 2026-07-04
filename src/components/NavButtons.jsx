import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const secciones = [
  { path: "/", label: "Inicio" },
  { path: "/contenidos", label: "Contenidos" },
  { path: "/diferencias", label: "Diferencias" },
  { path: "/etapas", label: "Etapas" },
  { path: "/autopreguntas", label: "Noviazgo" },
  { path: "/principios", label: "Principios" },
  { path: "/preguntas", label: "Preguntas" },
];

function NavButtons({ current }) {
  const index = secciones.findIndex((s) => s.path === current);
  if (index === -1) return null;

  const prev = index > 0 ? secciones[index - 1] : null;
  const next = index < secciones.length - 1 ? secciones[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: prev && next ? "space-between" : prev ? "flex-start" : "flex-end",
        marginTop: "2.5rem",
        gap: "1rem",
      }}
    >
      {prev && (
        <Link
          to={prev.path}
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.7rem 1.4rem",
            fontSize: "0.9rem",
          }}
        >
          <FaArrowLeft size={12} /> {prev.label}
        </Link>
      )}
      {next && (
        <Link
          to={next.path}
          className="btn btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.7rem 1.4rem",
            fontSize: "0.9rem",
          }}
        >
          {next.label} <FaArrowRight size={12} />
        </Link>
      )}
    </div>
  );
}

export default NavButtons;
