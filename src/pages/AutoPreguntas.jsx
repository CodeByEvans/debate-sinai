import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NavButtons from "../components/NavButtons";

export const AutoPreguntas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768) ;
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="noviazgo-page">
      <div className="noviazgo-bg-circle" />
      <div className="noviazgo-bg-circle-right" />
      <div className="noviazgo-bg-circle-bottom" />
      <div className="noviazgo-hero">
        <h1>Preparandome para el noviazgo</h1>
        <div className="noviazgo-divider" />
        <p className="noviazgo-subtitle">
          Describiendo conceptos con más profundiad & preguntas que sería bueno
          hacerse
        </p>
      </div>
      <div className="noviazgo-content">
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div className="card" style={{ padding: "2rem" }}>
          <h3
            style={{
              fontSize: "1.15rem",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Esquema general de etapas
          </h3>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              flexDirection: isMobile == true ? "column" : "row",
            }}
          >
            <div
              style={{
                flex: 1,
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius)",
                padding: "1.5rem 1.25rem",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#546484",
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Enfoque: Conocerse
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem 1rem",
                    background: "#546484",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Amistad
                </div>
                <span
                  style={{
                    color: "#546484",
                    fontSize: "1.2rem",
                    fontWeight: 300,
                  }}
                >
                  →
                </span>
                <div
                  style={{
                    padding: "0.65rem 1rem",
                    background: "#70809E",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Amistad Especial
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                }}
              >
                Pocos Compromisos
                <br />
                Pocos Privilegios
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
              }}
            >
              <FaArrowRight
                style={{
                  fontSize: "1.6rem",
                  color: "var(--text-muted)",
                  transform: isMobile ? "rotate(90deg)" : "",
                  opacity: 0.5,
                }}
              />
            </div>

            <div
              style={{
                flex: 1,
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius)",
                padding: "1.5rem 1.25rem",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#3E4C6C",
                  fontSize: "0.85rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Enfoque: Construir Fundamentos
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "0.65rem 1rem",
                    background: "#3E4C6C",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Noviazgo
                </div>
                <span
                  style={{
                    color: "#3E4C6C",
                    fontSize: "1.2rem",
                    fontWeight: 300,
                  }}
                >
                  →
                </span>
                <div
                  style={{
                    padding: "0.65rem 1rem",
                    background: "#4A5A7A",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Matrimonio
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                }}
              >
                Muchos Compromisos
                <br />
                Muchos Privilegios
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div
          className="card"
          style={{
            borderLeft: "4px solid #3E4C6C",
            padding: "1.5rem 1.75rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              color: "#3E4C6C",
              marginBottom: "1rem",
            }}
          >
            La amistad especial — ¿en qué consiste?
          </h3>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              color: "var(--text-secondary)",
              fontSize: "0.92rem",
              lineHeight: 1.6,
              paddingLeft: "1.25rem",
            }}
          >
            <li>
              Cuando entre dos personas hay atracción y deseo de conocerse más,
              se empieza una amistad especial.
            </li>
            <li>
              Consiste en conocer a la persona y pasar mucho tiempo con ella.
              Llegar a conocer casi todo de esa persona para tomar una decisión
              sensata: si seguir adelante o dejarlo como amigos.
            </li>
            <li>
              Se acuerda exclusividad. Solo puedes tener una amistad especial.
            </li>
            <li>
              Pocos privilegios y pocos compromisos. El objetivo es un espacio
              seguro para conocerse profundamente, sin caretas y sin miedo a
              decepcionar.
            </li>
            <li>
              En esta etapa es recomendable presentar a la familia y a los
              líderes, para que puedan conocer a los dos. Así podremos recibir
              buenos consejos de nuestros líderes y padres, porque habrán
              conocido bien a los dos.
            </li>
            <li>
              La amistad especial tiene que ser larga, para conocer bien a esa
              persona.
            </li>
          </ul>
        </div>

        <div
          className="card"
          style={{
            borderLeft: "4px solid var(--accent)",
            padding: "1.5rem 1.75rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            Preguntas antes de dar el paso al noviazgo
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem",
            }}
          >
            {[
              [
                "Motivación",
                "¿Por qué quiero una novia? ¿Es por amor o urgencia de satisfacer mi lujuria?",
              ],
              [
                "Edad",
                "Si a los 18 recien estoy entiendiendo la responsabilidad de lo que es beber, votar y conducir, ¿cómo voy a poder planear casarme antes de eso?",
              ],
              [
                "Tiempo",
                "¿Cuánto debe durar un noviazgo? ¿Mi situación actual por estudios o trabajo haría que durara más de la cuenta? ¿Puedo proveer una independencia económica para el matrimonio?",
              ],
              [
                "Familia",
                "La opinión de mi familia es muy importante porque son los que mejor me conocen. ¿Piensan que soy lo suficientemente maduro para un noviazgo y luego un matrimonio? ¿Creen que será bueno que de ese paso?",
              ],
              [
                "Consejo",
                "Tomar en cuenta el consejo de padres y líderes, si ellos conocen a la pareja. Su madurez y experiencia nos va a ayudar mucho, aunque al final de todo, la decisión final sea nuestra.",
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
              marginTop: "1.25rem",
              padding: "1.25rem",
              background: "var(--accent-light)",
              borderRadius: "var(--radius-sm)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--accent)",
                lineHeight: 1.6,
              }}
            >
              "Por tanto, dejará el hombre a su padre y a su madre, y se unirá a
              su mujer, y serán una sola carne."
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                marginTop: "0.3rem",
              }}
            >
              — Génesis 2:24
            </p>
          </div>
        </div>
      </div>
        <NavButtons current="/autopreguntas" />
      </div>
    </div>
  );
};

export default AutoPreguntas;
