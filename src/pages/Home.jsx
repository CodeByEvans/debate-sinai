import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import heroImage from "../assets/portada.jpeg";

function Home() {
  const heroCardRef = useRef(null);
  const verseRef = useRef(null);

  useEffect(() => {
    if (heroCardRef.current) {
      gsap.fromTo(
        heroCardRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );
    }

    if (verseRef.current) {
      gsap.fromTo(
        verseRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: verseRef.current,
            start: "top 85%",
          },
        },
      );
    }
  }, []);

  return (
    <div className="home-page">
      <div className="home-bg-circle" />

      <section className="home-hero-section">
        <Link to="/contenidos" className="home-hero-card" ref={heroCardRef}>
          <div className="home-hero-content">
            <div className="home-hero-divider" />
            <h1 className="home-hero-title">Noviazgo</h1>

            <p className="home-hero-subtitle">
              "El amor es paciente, es bondadoso. El amor no es envidioso ni
              jactancioso ni orgulloso. No se comporta con rudeza, no es
              egoísta, no se enoja fácilmente, no guarda rencor."
              <footer>— 1 Corintios 13:4-5</footer>
            </p>
          </div>
          <div className="home-hero-image">
            <img src={heroImage} alt="Noviazgo" />
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Home;
