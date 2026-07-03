import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaHeart, FaBible, FaQuestionCircle, FaArrowRight } from 'react-icons/fa'
import gsap from 'gsap'

const secciones = [
  { to: '/diferencias', Icon: FaBalanceScale, title: 'Diferencias', color: '#B8945A', desc: 'Compara el noviazgo según el mundo frente al noviazgo bíblico. Descubre las diferencias fundamentales en propósito, enfoque y valores.' },
  { to: '/etapas', Icon: FaHeart, title: 'Etapas', color: '#C25A4A', desc: 'Explora las etapas de una relación de pareja: cómo avanza el mundo y cómo lo plantea la Biblia.' },
  { to: '/modelo-biblico', Icon: FaBible, title: 'Modelo Bíblico', color: '#8B6E4A', desc: 'Cronograma del plan bíblico para una relación: amistad, amistad especial, noviazgo y matrimonio.' },
  { to: '/preguntas', Icon: FaQuestionCircle, title: 'Preguntas', color: '#6A8D73', desc: 'Espacio para plantear tus dudas sobre el noviazgo cristiano y recibir respuestas basadas en la Palabra.' },
]

function Home() {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const verseRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    if (heroRef.current) {
      tl.fromTo(heroRef.current.querySelector('.hero-title'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(heroRef.current.querySelector('.subtitle'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(heroRef.current.querySelector('.divider'),
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
    }

    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.6,
        }
      )
    }

    if (verseRef.current) {
      gsap.fromTo(verseRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: verseRef.current,
            start: 'top 85%',
          },
        }
      )
    }
  }, [])

  return (
    <div>
      <div className="hero-section" ref={heroRef}>
        <h1 className="hero-title">
          <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif" }}>
            Una guía para el corazón
          </span>
          <span className="accent">Noviazgo</span>
        </h1>
        <div className="divider" />
        <p className="subtitle">
          Descubre el diseño de Dios para las relaciones de pareja. Un recorrido desde la amistad hasta el matrimonio, fundamentado en principios bíblicos eternos.
        </p>
      </div>

      <div className="page-wrapper" style={{ paddingTop: 0 }}>
        <div ref={cardsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {secciones.map(({ to, Icon, title, desc, color }) => (
            <Link to={to} key={to} style={{ textDecoration: 'none' }}>
              <div className="card" style={{
                cursor: 'pointer',
                borderTop: `3px solid ${color}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.75rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <Icon style={{ fontSize: '1.3rem', color }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
                <p className="card-text" style={{ fontSize: '0.88rem', flex: 1 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color, fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>
                  Explorar <FaArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div ref={verseRef}>
          <div className="verse-block">
            <p>
              "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.
              No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor."
            </p>
            <footer>— 1 Corintios 13:4-5</footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
