import { useState, useRef, useEffect } from "react";
import { FaGlobeAmericas, FaCross } from "react-icons/fa";
import gsap from "gsap";
import mundoImg from "../assets/Noviazgo_mundo.jpg";
import bibliaImg from "../assets/noviazgo_biblia.jpg";
import NavButtons from "../components/NavButtons";

function Diferencias() {
  const [flipped, setFlipped] = useState(false);
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (heroRef.current) {
      tl.fromTo(
        heroRef.current.querySelector("h1"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      )
        .fromTo(
          heroRef.current.querySelector(".subtitle"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          heroRef.current.querySelector(".divider"),
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.2",
        );
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 },
      );
    }
  }, []);

  return (
    <div className="diferencias-page">
      <div className="diferencias-bg-circle" />
      <div
        className="hero-section"
        ref={heroRef}
        style={{ padding: "3.5rem 2rem 3rem" }}
      >
        <h1 style={{ fontSize: "2.8rem" }}>
          <span className="accent">Diferencias en el noviazgo</span>
        </h1>
        <div className="divider" />
        <p className="subtitle">
          Podemos ver dos visiones del noviazgo, una que es la que propone el
          mundo y otra que es la que nos enseña la biblia.
        </p>
      </div>

      <div
        className="page-wrapper"
        style={{ paddingTop: 0, display: "flex", justifyContent: "center" }}
      >
        <div
          ref={cardRef}
          style={{
            perspective: "1200px",
            width: "100%",
            maxWidth: "1050px",
          }}
        >
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* FRONT — Visión del Mundo */}
            <div
              className="card"
              style={{
                backfaceVisibility: "hidden",
                borderTop: "4px solid #3E4C6C",
                padding: 0,
                display: "flex",
                overflow: "hidden",
                minHeight: "500px",
              }}
            >
              <div style={{ flex: 1, padding: "2rem 2.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <FaGlobeAmericas
                    style={{ color: "#3E4C6C", fontSize: "1.3rem" }}
                  />
                  <span className="tag tag-mundo">Visión del Mundo</span>
                </div>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.6rem" }}>
                  Noviazgo en el mundo
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {[
                    [
                      "Propósito",
                      "No es necesario ir con un plan en mente, ni siquiera el de casarse. No se tiene en cuenta a Dios, lo que se tiene en cuenta es la satisfacción de los deseos de la carne.",
                    ],
                    [
                      "Base",
                      "Se inicia porque hay sentimientos afectivos y deseo romántico y sexual por la otra persona.",
                    ],
                    [
                      "Intimidad",
                      "Pueden quedar en vivir juntos y tener relaciones sexuales. Es como si estuvieran casados, pero en cualquier momento pueden irse cada uno por su lado. Matrimonio con salida rápida.",
                    ],
                    [
                      "Compromiso",
                      "No hay grandes compromisos, ni siquiera el matrimonio se considera un pacto duradero delante de Dios. Viven todos los privilegios con pocos o ningún compromiso.",
                    ],
                    [
                      "Enfoque",
                      '"Lo que yo puedo recibir". Mi pareja debe hacerme feliz y satisfacerme.',
                    ],
                    [
                      "Duración",
                      "Indefinida, no hay urgencia por casarse porque solo es un acto legal.",
                    ],
                    [
                      "Pureza",
                      "Relativa, cada uno pone sus propios límites según su conocimiento y convicciones.",
                    ],
                  ].map(([label, text]) => (
                    <div
                      key={label}
                      style={{
                        paddingLeft: "0.5rem",
                        borderLeft: "2px solid #EDEFF4",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "#3E4C6C",
                        }}
                      >
                        {label}
                      </span>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.88rem",
                          marginTop: "0.15rem",
                          lineHeight: 1.55,
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    padding: "1.25rem 1.5rem",
                    background: "#EDEFF4",
                    borderRadius: "var(--radius-sm)",
                    borderLeft: "3px solid #3E4C6C",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "0.3rem",
                    }}
                  >
                    Cambiaron a Dios por sus propios ideales y pensamientos
                    pensando que eran buenos, sin saber que se estaban haciendo
                    necios y que por esto Dios se "desentendió" de ellos y los
                    entregó a que hicieran lo que quieran en desorden,
                    deshonrando lo que Dios había hecho a su imagen y semejanza.
                  </p>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "#3E4C6C",
                      fontWeight: 600,
                    }}
                  >
                    — Romanos 1:22-24
                  </span>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginTop: "0.4rem",
                      fontStyle: "italic",
                    }}
                  >
                    (concupiscencias significa amor por lo prohibido)
                  </p>
                </div>
              </div>

              <div className="diferencias-img-col" style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={mundoImg}
                  alt="Noviazgo en el mundo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* BACK — Visión Bíblica */}
            <div
              className="card"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderTop: "4px solid var(--accent)",
                padding: 0,
                display: "flex",
                overflow: "hidden",
                minHeight: "500px",
                position: "absolute",
                inset: 0,
              }}
            >
              <div className="diferencias-img-col" style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src={bibliaImg}
                  alt="Noviazgo bíblico"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ flex: 1, padding: "2rem 2.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <FaCross
                    style={{ color: "var(--accent)", fontSize: "1.3rem" }}
                  />
                  <span className="tag tag-biblico">Visión Bíblica</span>
                </div>
                <h2 style={{ marginBottom: "1.25rem", fontSize: "1.6rem" }}>
                  Noviazgo bíblico
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {[
                    [
                      "Propósito",
                      "Conocer la voluntad de Dios para el matrimonio, sentar las bases y los fundamentos para casarnos.",
                    ],
                    [
                      "Base",
                      "Somos hijos e hijas de Dios, y nos dejamos guiar por los principios bíblicos, bajo una misma Fe en Cristo.",
                    ],
                    [
                      "Intimidad",
                      "Se reserva la intimidad sexual para el matrimonio (y también sería conveniente evitar la intimidad de convivir, para evitar tentaciones).",
                    ],
                    [
                      "Compromiso",
                      "Es algo serio y deliberado, apuntando a un pacto ante Dios.",
                    ],
                    [
                      "Enfoque",
                      "Lo que puedo dar. Amar como Cristo ama a la iglesia. Ya no se centra el recibir.",
                    ],
                    [
                      "Duración",
                      "Con propósito claro, prepararse y llegar al matrimonio.",
                    ],
                    [
                      "Pureza",
                      "Preservarnos para el matrimonio en cuerpo y mente.",
                    ],
                  ].map(([label, text]) => (
                    <div
                      key={label}
                      style={{
                        paddingLeft: "0.5rem",
                        borderLeft: "2px solid var(--accent-light)",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "var(--accent)",
                        }}
                      >
                        {label}
                      </span>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.88rem",
                          marginTop: "0.15rem",
                          lineHeight: 1.55,
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    padding: "1.25rem 1.5rem",
                    background: "var(--accent-light)",
                    borderRadius: "var(--radius-sm)",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "0.3rem",
                    }}
                  >
                    "No os conforméis a este siglo, sino transformaos por medio
                    de la renovación de vuestro entendimiento, para que
                    comprobéis cuál sea la buena voluntad de Dios, agradable y
                    perfecta."
                  </p>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    — Romanos 12:2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <NavButtons current="/diferencias" />
        </div>
      </div>
    </div>
  );
}

export default Diferencias;
