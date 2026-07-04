import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaHeart, FaBible, FaQuestionCircle, FaArrowRight, FaBookOpen } from 'react-icons/fa'
import { MdFace } from 'react-icons/md'
import gsap from 'gsap'

const secciones = [
  { to: '/diferencias', Icon: FaBalanceScale, title: 'Diferencias', color: '#5B7DB1', desc: 'Compara el noviazgo según el mundo frente al noviazgo bíblico. Descubre las diferencias fundamentales.' },
  { to: '/etapas', Icon: FaHeart, title: 'Etapas', color: '#C5897A', desc: 'Explora las etapas de una relación: cómo avanza el mundo y cómo lo plantea la Biblia.' },
  { to: '/autopreguntas', Icon: MdFace, title: 'Noviazgo', color: '#8E9FB5', desc: 'Prepárate para el noviazgo con preguntas de reflexión y el concepto de amistad especial.' },
  { to: '/modelo-biblico', Icon: FaBible, title: 'Modelo Bíblico', color: '#7B8FAA', desc: 'Cronograma del plan bíblico para una relación: amistad, amistad especial, noviazgo y matrimonio.' },
  { to: '/principios', Icon: FaBookOpen, title: 'Principios', color: '#6A8EAE', desc: 'Principios adicionales para una relación cristiana: pureza, oración, yugo desigual y más.' },
  { to: '/preguntas', Icon: FaQuestionCircle, title: 'Preguntas', color: '#70809E', desc: 'Plantea tus dudas sobre el noviazgo cristiano y recibe respuestas basadas en la Palabra.' },
]

function Contenidos() {
  const contenidosRef = useRef(null)

  useEffect(() => {
    if (contenidosRef.current) {
      gsap.fromTo(contenidosRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <div className="home-page">
      <div className="home-bg-circle" />

      <section className="home-contenidos-section" ref={contenidosRef}>
        <div className="home-contenidos-card">
          <h2 className="home-contenidos-title">Contenidos</h2>
          <p className="home-contenidos-subtitle">Cada sección está diseñada para guiarte en el camino del noviazgo cristiano</p>
          <div className="home-contenidos-grid">
            {secciones.map(({ to, Icon, title, desc, color }) => (
              <Link to={to} key={to} className="home-contenidos-item">
                <div className="home-contenidos-icon" style={{ background: `${color}18`, color }}>
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
        </div>
      </section>
    </div>
  )
}

export default Contenidos