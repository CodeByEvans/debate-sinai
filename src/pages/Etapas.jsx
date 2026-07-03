import { useRef, useLayoutEffect, useState } from "react";
import { FaGlobeAmericas, FaCross, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

const etapasMundo = [
  {
    num: "01",
    title: "Amistad",
    desc: "Dos personas se conocen, comparten intereses y desarrollan un vínculo de confianza. No hay necesariamente una intención romántica definida.",
  },
  {
    num: "02",
    title: "Noviazgo",
    desc: "Se establece una relación sentimental exclusiva. Suele centrarse en la experiencia emocional y el disfrute mutuo, a menudo sin una meta clara.",
  },
  {
    num: "03",
    title: "Convivencia",
    desc: 'La pareja decide vivir junta antes del matrimonio para "probar" la relación. Se comparte techo, economía e intimidad sin el compromiso del pacto matrimonial.',
  },
  {
    num: "04",
    title: "Matrimonio",
    desc: "Unión legal y social que puede o no ocurrir. A veces es visto como una formalidad opcional después de años de convivencia.",
  },
];

const etapasBiblicas = [
  {
    num: "01",
    title: "Amistad",
    desc: "La relación comienza con un fundamento de hermandad en Cristo. Se busca conocer el carácter, los valores y la fe del otro sin presión romántica.",
  },
  {
    num: "02",
    title: "Amistad Especial",
    desc: "Cuando hay atracción y deseo de conocerse más, se acuerda exclusividad para conocer profundamente a la persona. Pocos privilegios y pocos compromisos. Es recomendable presentarse a la familia y líderes para recibir consejo.",
  },
  {
    num: "03",
    title: "Noviazgo",
    desc: "Un tiempo intencional de discernimiento mutuo con propósito de matrimonio. Es un tiempo para aprender a encajar, planear y construir las bases de cara al matrimonio. Se busca la voluntad de Dios, con pureza y bajo cobertura espiritual.",
  },
  {
    num: "04",
    title: "Matrimonio",
    desc: "El pacto sagrado ante Dios. Un hombre y una mujer se convierten en una sola carne, reflejando la relación de Cristo con Su iglesia.",
  },
];

function Etapas() {
  const heroRef = useRef(null);
  const mundoRef = useRef(null);
  const biblicoRef = useRef(null);
  const verseRef = useRef(null);
  const detalleRef = useRef(null);
  const [slide, setSlide] = useState(0);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    if (heroRef.current) {
      tl.fromTo(
        heroRef.current.querySelector("h1"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      )
        .fromTo(
          heroRef.current.querySelector(".subtitle"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.35",
        )
        .fromTo(
          heroRef.current.querySelector(".divider"),
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.3",
        );
    }

    if (mundoRef.current && biblicoRef.current) {
      tl.fromTo(
        mundoRef.current.querySelectorAll(".title-section"),
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        "-=0.15",
      )
        .fromTo(
          biblicoRef.current.querySelectorAll(".title-section"),
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          mundoRef.current.querySelectorAll(".subtitle-section"),
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          biblicoRef.current.querySelectorAll(".subtitle-section"),
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          mundoRef.current.querySelectorAll(".decorator-line"),
          { height: "0%" },
          { height: "100%", duration: 0.7, ease: "power2.in" },
          "-=0.2",
        )
        .fromTo(
          biblicoRef.current.querySelectorAll(".decorator-line"),
          { height: "0%" },
          { height: "100%", duration: 0.7, ease: "power2.in" },
          "-=0.6",
        )
        .fromTo(
          mundoRef.current.querySelectorAll(".stage-card"),
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.65",
        )
        .fromTo(
          biblicoRef.current.querySelectorAll(".stage-card"),
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }

    if (verseRef.current) {
      tl.fromTo(
        verseRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.45",
      );
    }
  }, []);

  useLayoutEffect(() => {
    if (slide === 1 && detalleRef.current) {
      gsap.fromTo(
        detalleRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      );
    }
  }, [slide]);

  return (
    <div>
      <div
        className="hero-section"
        ref={heroRef}
        style={{ padding: "3.5rem 2rem 3rem" }}
      >
        <h1 style={{ fontSize: "2.8rem" }}>
          <span className="accent">Las Etapas de una Relación</span>
        </h1>
        <div className="divider" />
        <p className="subtitle">
          <span
            style={{
              color: "#4f6a8f",
            }}
          >
            Las etapas que siguen las personas que no conocen a Cristo{" "}
          </span>
          y{" "}
          <span
            style={{
              color: "#d99477",
            }}
          >
            las etapas que deberiamos seguir los cristianos
          </span>
        </p>
      </div>

      <div className="page-wrapper" style={{ paddingTop: 0 }}>
        {slide === 0 && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div ref={mundoRef}>
                <div
                  className="title-section"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <FaGlobeAmericas
                    style={{ color: "#C25A4A", fontSize: "1.2rem" }}
                  />
                  <span className="tag tag-mundo">Visión del Mundo</span>
                </div>
                <h2
                  className="subtitle-section"
                  style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
                >
                  Etapas en el mundo
                </h2>

                <div style={{ position: "relative" }}>
                  <div
                    className="decorator-line"
                    style={{
                      position: "absolute",
                      left: "25px",
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background:
                        "linear-gradient(to bottom, #C25A4A44, #C25A4A22)",
                    }}
                  />
                  {etapasMundo.map((stage) => (
                    <div
                      key={stage.num}
                      className="card stage-card"
                      style={{
                        marginBottom: "1rem",
                        padding: "1.25rem 1.5rem",
                        position: "relative",
                        marginLeft: "10px",
                        borderLeft: "none",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "-21px",
                          top: "1.5rem",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#C25A4A",
                          border: "3px solid white",
                          boxShadow: "0 0 0 2px #C25A4A44",
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.6rem",
                          marginBottom: "0.35rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "2rem",
                            fontWeight: 700,
                            color: "#C25A4A",
                            opacity: 0.3,
                            lineHeight: 1,
                          }}
                        >
                          {stage.num}
                        </span>
                        <h3 style={{ fontSize: "1.15rem" }}>{stage.title}</h3>
                      </div>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.88rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {stage.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div ref={biblicoRef}>
                <div
                  className="title-section"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <FaCross
                    style={{ color: "var(--accent)", fontSize: "1.2rem" }}
                  />
                  <span className="tag tag-biblico">Visión Bíblica</span>
                </div>
                <h2
                  className="subtitle-section"
                  style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
                >
                  Etapas en la Biblia
                </h2>

                <div style={{ position: "relative" }}>
                  <div
                    className="decorator-line"
                    style={{
                      position: "absolute",
                      left: "25px",
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background:
                        "linear-gradient(to bottom, var(--accent), var(--accent-light))",
                    }}
                  />
                  {etapasBiblicas.map((stage) => (
                    <div
                      key={stage.num}
                      className="card stage-card"
                      style={{
                        marginBottom: "1rem",
                        padding: "1.25rem 1.5rem",
                        position: "relative",
                        marginLeft: "10px",
                        borderLeft: "none",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "-21px",
                          top: "1.5rem",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                          border: "3px solid white",
                          boxShadow: "0 0 0 2px var(--accent-light)",
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.6rem",
                          marginBottom: "0.35rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "2rem",
                            fontWeight: 700,
                            color: "var(--accent)",
                            opacity: 0.3,
                            lineHeight: 1,
                          }}
                        >
                          {stage.num}
                        </span>
                        <h3 style={{ fontSize: "1.15rem" }}>{stage.title}</h3>
                      </div>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.88rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {stage.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div ref={verseRef} style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--accent-light)",
                  borderRadius: "var(--radius)",
                  textAlign: "center",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <p
                  style={{
                    color: "var(--accent)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  "Honroso sea en todos el matrimonio, y el lecho sin mancilla."
                </p>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.8rem",
                    marginTop: "0.25rem",
                  }}
                >
                  — Hebreos 13:4
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Etapas;
