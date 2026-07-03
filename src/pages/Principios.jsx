import { useRef, useEffect } from "react";
import {
  FaHandHoldingHeart,
  FaPray,
  FaPrayingHands,
  FaHeart,
  FaLink,
  FaClock,
} from "react-icons/fa";
import gsap from "gsap";

const principios = [
  {
    Icon: FaHandHoldingHeart,
    color: "#C25A4A",
    title: "Pureza y propiedad del cuerpo",
    desc: "No tienes ninguna propiedad del cuerpo de otra persona hasta que te cases; hasta ese momento es única y exclusivamente de Dios, y donde vayan nuestras manos es terreno santo.",
  },
  {
    Icon: FaPray,
    color: "#8B6E4A",
    title: "Relación con Dios en pareja",
    desc: "Muy importante cultivar una relación con Dios juntos, pero también una relación íntima y personal con Dios. Si buscamos esto tendremos la ayuda y corrección del mejor. También escuchar el consejo de nuestros líderes y de nuestros padres, porque como Dios, solo quieren lo mejor para nosotros.",
    versiculo:
      "«El que ama la instrucción ama la sabiduría; mas el que aborrece la corrección es ignorante.»",
    ref: "Proverbios 12:1",
  },
  {
    Icon: FaPrayingHands,
    color: "#6A8D73",
    title: "Oración mutua",
    desc: "Orar el uno por el otro. Cobertura espiritual, dirección, ayuda en la prueba, etc.",
    versiculo:
      "«Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho.»",
    ref: "Santiago 5:16",
  },
  {
    Icon: FaHeart,
    color: "#B8945A",
    title: "Los sentimientos: importantes, no determinantes",
    desc: "El corazón engaña y se necesita siempre el consejo externo de líderes y padres.",
    versiculo:
      "«Engañoso es el corazón más que todas las cosas, y perverso; ¿quién lo conocerá?»",
    ref: "Jeremías 17:9",
  },
  {
    Icon: FaLink,
    color: "#7A5A4A",
    title: "No unirse en yugo desigual",
    desc: "Dios lo prohibe. Es bueno juntarse con gente que alimente tu fe, quien hace lo contrario más que ayudarte, está haciendote un mal. Y aceptar una relación con el proposito de convertir es un experimento de gran riesgo, podría salir mal y que la persona se convierta, podría salir mal y que la persona se llegue a enemistar con Dios, que también te apartes... muchos escenarios malos contra un unico escenario bueno, el cual es que se convierta genuinamente.",
    versiculo:
      "«No os unáis en yugo desigual con los incrédulos; porque ¿qué compañerismo tiene la justicia con la injusticia? ¿Y qué comunión la luz con las tinieblas?»",
    ref: "2ª Corintios 6:14",
  },
  {
    Icon: FaClock,
    color: "#8B9D6B",
    title: "El tiempo de conocerse",
    desc: "Es muy importante dedicar mucho tiempo para conocerse y ponerse en manos de Dios.",
    extra: "Amistades Especiales largas — Noviazgos cortos — Matrimonio feliz",
  },
];

function Principios() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

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

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        },
      );
    }
  }, []);

  return (
    <div>
      <div
        className="hero-section"
        ref={heroRef}
        style={{ padding: "3.5rem 2rem 3rem" }}
      >
        <h1 style={{ fontSize: "2.8rem" }}>
          <span className="accent">Principios</span>
        </h1>
        <div className="divider" />
        <p className="subtitle">
          Principios adicionales para una relación cristiana.
        </p>
      </div>

      <div className="page-wrapper" style={{ paddingTop: 0 }}>
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {principios.map(
            ({ Icon, color, title, desc, versiculo, ref, extra }) => (
              <div
                key={title}
                className="card"
                style={{ borderTop: `4px solid ${color}` }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ fontSize: "1.2rem", color }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                      flex: 1,
                    }}
                  >
                    {title}
                  </h3>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    marginBottom: versiculo || extra ? "1rem" : 0,
                  }}
                >
                  {desc}
                </p>

                {versiculo && (
                  <div
                    style={{
                      background: "var(--bg-secondary)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1rem 1.25rem",
                      borderLeft: `3px solid ${color}`,
                      marginBottom: extra ? "0.75rem" : 0,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1rem",
                        fontStyle: "italic",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: "0.3rem",
                      }}
                    >
                      {versiculo}
                    </p>
                    <span
                      style={{ fontSize: "0.8rem", color, fontWeight: 600 }}
                    >
                      — {ref}
                    </span>
                  </div>
                )}

                {extra && (
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      background: `${color}10`,
                      borderRadius: "var(--radius-sm)",
                      textAlign: "center",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color,
                    }}
                  >
                    {extra}
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Principios;
