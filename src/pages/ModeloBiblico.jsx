import { useState, useRef, useEffect } from 'react'
import { FaUserFriends, FaSeedling, FaRing, FaChurch } from 'react-icons/fa'
import gsap from 'gsap'

const etapas = [
  {
    id: 'amistad',
    title: 'Amistad',
    Icon: FaUserFriends,
    color: '#70809E',
    desc: 'La relación comienza con un fundamento de hermandad en Cristo. Se busca conocer el carácter, los valores y la fe del otro sin presión romántica. Es la base de toda relación sana.',
    versiculo: '«El hombre que tiene amigos ha de mostrarse amigo; y amigo hay más unido que un hermano.»',
    ref: 'Proverbios 18:24',
  },
  {
    id: 'amistad-especial',
    title: 'Amistad Especial',
    Icon: FaSeedling,
    color: '#546484',
    desc: 'Cuando entre dos personas hay atracción y deseo de conocerse más, se inicia una amistad especial con exclusividad. El objetivo es conocer profundamente a la persona —sin caretas y sin miedo a decepcionar— para tomar una decisión sensata: seguir adelante o dejarlo como amigos. Pocos privilegios y pocos compromisos. En esta etapa es recomendable presentar a la familia y a los líderes para que puedan conocer a los dos y así recibir buenos consejos. La amistad especial debe ser larga, para conocer bien a esa persona.',
    versiculo: '«Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.»',
    ref: 'Proverbios 4:23',
  },
  {
    id: 'noviazgo',
    title: 'Noviazgo',
    Icon: FaRing,
    color: '#3E4C6C',
    desc: 'Un tiempo intencional de discernimiento mutuo con propósito de matrimonio. Se busca la voluntad de Dios, con pureza y bajo cobertura espiritual. Antes de dar este paso conviene hacerse preguntas importantes: ¿Por qué quiero una pareja? ¿Tengo la edad y madurez suficientes? ¿Cuánto debe durar? ¿Mi situación actual lo permite? ¿Qué opinan mi familia y mis líderes?',
    versiculo: '«Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.»',
    ref: 'Génesis 2:24',
  },
  {
    id: 'matrimonio',
    title: 'Matrimonio',
    Icon: FaChurch,
    color: '#2E3A54',
    desc: 'El pacto sagrado ante Dios. Un hombre y una mujer se convierten en una sola carne, reflejando la relación de Cristo con Su iglesia.',
    versiculo: '«Honroso sea en todos el matrimonio, y el lecho sin mancilla.»',
    ref: 'Hebreos 13:4',
  },
]

function ModeloBiblico() {
  const [activa, setActiva] = useState('amistad')
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const detailRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    if (heroRef.current) {
      tl.fromTo(heroRef.current.querySelector('h1'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      )
      .fromTo(heroRef.current.querySelector('.subtitle'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(heroRef.current.querySelector('.divider'),
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.1'
      )
    }

    if (timelineRef.current) {
      tl.fromTo(timelineRef.current.querySelectorAll('button'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' },
        '+=0.3'
      )
    }

    if (detailRef.current) {
      tl.fromTo(detailRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      )
    }
  }, [])

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(detailRef.current,
        { y: 20, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      )
    }
  }, [activa])

  const etapaActual = etapas.find(e => e.id === activa)

  return (
    <div>
      <div className="hero-section" ref={heroRef} style={{ padding: '3.5rem 2rem 3rem' }}>
        <h1 style={{ fontSize: '2.8rem' }}>
          <span className="accent">Modelo Bíblico</span>
        </h1>
        <div className="divider" />
        <p className="subtitle">Cronograma del plan de Dios para una relación de pareja.</p>
      </div>

      <div className="page-wrapper" style={{ paddingTop: 0 }}>
        <div ref={timelineRef} style={{
          display: 'flex',
          alignItems: 'stretch',
          marginBottom: '2rem',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          background: 'var(--bg-card)',
          boxShadow: 'var(--shadow)',
          flexWrap: 'wrap',
        }}>
          {etapas.map((etapa, i) => (
            <button
              key={etapa.id}
              onClick={() => setActiva(etapa.id)}
              style={{
                flex: '1 1 140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '1.5rem 0.75rem',
                background: activa === etapa.id ? `${etapa.color}12` : 'transparent',
                border: 'none',
                borderRight: i < etapas.length - 1 ? '1px solid var(--border-light)' : 'none',
                cursor: 'pointer',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1rem',
                fontWeight: activa === etapa.id ? 700 : 500,
                color: activa === etapa.id ? etapa.color : 'var(--text-secondary)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: activa === etapa.id ? `${etapa.color}18` : 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}>
                <etapa.Icon style={{
                  fontSize: '1.2rem',
                  color: activa === etapa.id ? etapa.color : 'var(--text-muted)',
                  transition: 'color 0.3s ease',
                }} />
              </div>
              <span>{etapa.title}</span>
              {activa === etapa.id && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '20%',
                  right: '20%',
                  height: '3px',
                  background: etapa.color,
                  borderRadius: '3px 3px 0 0',
                }} />
              )}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.2rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            background: 'var(--bg-card)',
            padding: '0.6rem 1.5rem',
            borderRadius: '100px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow)',
          }}>
            {etapas.map((etapa, i) => (
              <span key={etapa.id} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: activa === etapa.id ? etapa.color : 'var(--border)',
                  display: 'inline-block',
                  transition: 'background 0.3s',
                }} />
                {etapa.title}
                {i < etapas.length - 1 && (
                  <span style={{ margin: '0 0.2rem', color: 'var(--border)', fontWeight: 300 }}>→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div ref={detailRef} key={activa} style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="card" style={{ borderTop: `4px solid ${etapaActual.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `${etapaActual.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <etapaActual.Icon style={{ fontSize: '1.8rem', color: etapaActual.color }} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.7rem', margin: 0 }}>{etapaActual.title}</h2>
                <span style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.8rem',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  background: `${etapaActual.color}15`,
                  color: etapaActual.color,
                  marginTop: '0.3rem',
                }}>
                  Etapa {etapas.findIndex(e => e.id === activa) + 1} de {etapas.length}
                </span>
              </div>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              fontSize: '1.02rem',
              marginBottom: '1.5rem',
            }}>
              {etapaActual.desc}
            </p>

            <div style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.5rem 1.75rem',
              borderLeft: `4px solid ${etapaActual.color}`,
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '0.5rem',
              }}>
                {etapaActual.versiculo}
              </p>
              <span style={{
                fontSize: '0.85rem',
                color: etapaActual.color,
                fontWeight: 600,
              }}>
                — {etapaActual.ref}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModeloBiblico
