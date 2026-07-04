import { useState, useRef, useEffect } from "react";
import { FaQuestionCircle, FaReply, FaTrash, FaPlus, FaSync } from "react-icons/fa";
import gsap from "gsap";

function Preguntas() {
  const [preguntas, setPreguntas] = useState([]);
  const [nuevaPregunta, setNuevaPregunta] = useState("");
  const [cargando, setCargando] = useState(true);
  const heroRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const cargarPreguntas = () => {
    setCargando(true);
    fetch("/api/preguntas")
      .then((res) => res.json())
      .then((data) => {
        setPreguntas(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar preguntas:", err);
        setCargando(false);
      });
  };

  useEffect(() => {
    cargarPreguntas();
  }, []);

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

    if (inputRef.current) {
      gsap.fromTo(
        inputRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.5 },
      );
    }
  }, []);

  const agregarPregunta = () => {
    const texto = nuevaPregunta.trim();
    if (!texto) return;

    fetch("/api/preguntas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta: texto }),
    })
      .then((res) => res.json())
      .then((nueva) => {
        setPreguntas((prev) => [nueva, ...prev]);
        setNuevaPregunta("");
      })
      .catch((err) => console.error("Error al crear pregunta:", err));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") agregarPregunta();
  };

  const actualizarRespuesta = (id, respuesta) => {
    fetch(`/api/preguntas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuesta }),
    }).catch((err) => console.error("Error al actualizar:", err));

    setPreguntas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, respuesta } : p)),
    );
  };

  const eliminarPregunta = (id) => {
    const card = document.getElementById(`pregunta-${id}`);
    if (card) {
      gsap.to(card, {
        x: 100,
        opacity: 0,
        height: 0,
        marginBottom: 0,
        padding: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          fetch(`/api/preguntas/${id}`, { method: "DELETE" }).catch((err) =>
            console.error("Error al eliminar:", err),
          );
          setPreguntas((prev) => prev.filter((p) => p.id !== id));
        },
      });
    } else {
      fetch(`/api/preguntas/${id}`, { method: "DELETE" }).catch((err) =>
        console.error("Error al eliminar:", err),
      );
      setPreguntas((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div>
      <div
        className="hero-section"
        ref={heroRef}
        style={{ padding: "3.5rem 2rem 3rem" }}
      >
        <h1 style={{ fontSize: "2.8rem" }}>
          <span className="accent">Preguntas</span>
        </h1>
        <div className="divider" />
        <p className="subtitle">
          Escribe tus dudas sobre el noviazgo cristiano y anota la respuesta
          basada en principios bíblicos.
        </p>
      </div>

      <div className="page-wrapper" style={{ paddingTop: 0 }}>
        <div
          ref={inputRef}
          className="card"
          style={{
            marginBottom: "2rem",
            background:
              "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <input
              type="text"
              value={nuevaPregunta}
              onChange={(e) => setNuevaPregunta(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="¿Qué duda tienes sobre el noviazgo cristiano?"
              style={{
                flex: 1,
                padding: "0.8rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border)",
                background: "var(--bg-primary)",
                fontSize: "0.95rem",
                fontFamily: "'Inter', sans-serif",
                color: "var(--text-primary)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            <button className="btn btn-primary" onClick={agregarPregunta}>
              <FaPlus size={12} /> Agregar
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1.5rem",
          }}
        >
          <button
            onClick={cargarPreguntas}
            className="btn"
            style={{
              background: "var(--bg-card)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              fontSize: "0.82rem",
              padding: "0.45rem 1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <FaSync size={11} /> Recargar
          </button>
        </div>

        {cargando ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 1.5rem",
              color: "var(--text-muted)",
            }}
          >
            <p style={{ fontSize: "1.05rem" }}>Cargando preguntas…</p>
          </div>
        ) : preguntas.length === 0 ? (
          <div
            ref={listRef}
            style={{
              textAlign: "center",
              padding: "4rem 1.5rem",
              color: "var(--text-muted)",
            }}
          >
            <FaQuestionCircle
              style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.3 }}
            />
            <p style={{ fontSize: "1.05rem" }}>No hay preguntas todavía.</p>
            <p style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
              Escribe tu primera duda en el campo de arriba.
            </p>
          </div>
        ) : (
          <div
            ref={listRef}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {preguntas.map((item) => (
              <div
                key={item.id}
                id={`pregunta-${item.id}`}
                className="card"
                style={{ overflow: "hidden" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.7rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          background: "var(--accent-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <FaQuestionCircle
                          style={{
                            color: "var(--accent)",
                            fontSize: "0.85rem",
                          }}
                        />
                      </div>
                      <h4
                        style={{
                          fontSize: "1.05rem",
                          color: "var(--text-primary)",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          flex: 1,
                        }}
                      >
                        {item.pregunta}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.7rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          background: "#EDEFF4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <FaReply
                          style={{ color: "#3E4C6C", fontSize: "0.85rem" }}
                        />
                      </div>
                      <h4
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-muted)",
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        Respuesta
                      </h4>
                    </div>
                    <textarea
                      value={item.respuesta}
                      onChange={(e) =>
                        actualizarRespuesta(item.id, e.target.value)
                      }
                      placeholder="Escribe aquí la respuesta basada en principios bíblicos..."
                      rows={3}
                      style={{
                        width: "100%",
                        padding: "0.7rem 0.9rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border)",
                        background: "var(--bg-primary)",
                        fontSize: "0.9rem",
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--text-primary)",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-light)",
                  }}
                >
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarPregunta(item.id)}
                    style={{ fontSize: "0.82rem", padding: "0.4rem 1rem" }}
                  >
                    <FaTrash size={11} /> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {preguntas.length > 0 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
            }}
          >
            <p>
              {preguntas.length}{" "}
              {preguntas.length === 1
                ? "pregunta registrada"
                : "preguntas registradas"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Preguntas;
