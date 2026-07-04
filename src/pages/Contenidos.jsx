import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaHeart,
  FaBible,
  FaQuestionCircle,
  FaArrowRight,
  FaBookOpen,
} from "react-icons/fa";
import { MdFace } from "react-icons/md";
import gsap from "gsap";
import NavButtons from "../components/NavButtons";

const secciones = [
  {
    to: "/diferencias",
    Icon: FaBalanceScale,
    title: "Diferencias",
    color: "#5B7DB1",
    desc: "Analizaremos las diferencias que podemos ver entre una relación del mundo y una relación cristiana.",
  },
  {
    to: "/etapas",
    Icon: FaHeart,
    title: "Etapas",
    color: "#C5897A",
    desc: "Exploraremos las etapas de una relación: como evoluciona en el mundo y como evoluciona en la biblia.",
  },
  {
    to: "/autopreguntas",
    Icon: MdFace,
    title: "Noviazgo",
    color: "#8E9FB5",
    desc: "Veremos algunos planteamientos importantes que hacerse si estamos pensando en iniciar una relación",
  },
  {
    to: "/principios",
    Icon: FaBookOpen,
    title: "Principios",
    color: "#6A8EAE",
    desc: "Examinaremos unos principios adicionales para una relación cristiana: pureza, oración, yugo desigual y más.",
  },
];

function Contenidos() {
  const contenidosRef = useRef(null);

  useEffect(() => {
    if (contenidosRef.current) {
      gsap.fromTo(
        contenidosRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );
    }
  }, []);

  return (
    <div className="home-page">
      <div className="home-bg-circle" style={{ right: "auto", left: "-500px" }} />

      <section className="home-contenidos-section" ref={contenidosRef}>
        <div className="home-contenidos-card">
          <h2 className="home-contenidos-title">Contenidos</h2>
          <div className="home-contenidos-grid">
            {secciones.map(({ to, Icon, title, desc, color }) => (
              <Link to={to} key={to} className="home-contenidos-item">
                <div
                  className="home-contenidos-icon"
                  style={{ background: `${color}18`, color }}
                >
                  <Icon />
                </div>
                <div className="home-contenidos-info">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <FaArrowRight className="home-contenidos-arrow" />
              </Link>
            ))}
          </div>
          <NavButtons current="/contenidos" />
        </div>
      </section>
    </div>
  );
}

export default Contenidos;
