import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import {
  FaHome,
  FaBalanceScale,
  FaHeart,
  FaBible,
  FaQuestionCircle,
  FaBookOpen,
  FaCross,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdFace } from "react-icons/md";
import gsap from "gsap";
import Home from "./pages/Home.jsx";
import Diferencias from "./pages/Diferencias.jsx";
import Etapas from "./pages/Etapas.jsx";
import ModeloBiblico from "./pages/ModeloBiblico.jsx";
import Preguntas from "./pages/Preguntas.jsx";
import Principios from "./pages/Principios.jsx";
import AutoPreguntas from "./pages/AutoPreguntas.jsx";
import "./App.css";

const navItems = [
  { path: "/", label: "Inicio", Icon: FaHome },
  { path: "/diferencias", label: "Diferencias", Icon: FaBalanceScale },
  { path: "/etapas", label: "Etapas", Icon: FaHeart },
  { path: "/autopreguntas", label: "Noviazgo", Icon: MdFace },
  { path: "/principios", label: "Principios", Icon: FaBookOpen },
  { path: "/preguntas", label: "Preguntas", Icon: FaQuestionCircle },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const contentRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );
    }
  }, [location.pathname]);

  return (
    <div
      className={`app-layout ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}
    >
      <button
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <FaTimes size={18} />
        ) : (
          <div className="hamburger">
            <i></i>
            <i></i>
            <i></i>
          </div>
        )}
      </button>

      <aside
        className={`sidebar ${mobileOpen ? "visible" : ""} ${sidebarCollapsed ? "collapsed" : ""}`}
      >
        {!sidebarCollapsed ? (
          <>
            <div className="sidebar-header">
              <Link to="/" className="logo">
                <FaCross className="logo-icon" />
                <span className="logo-text">Noviazgo</span>
              </Link>
              <button
                className="sidebar-collapse-btn"
                onClick={() => setSidebarCollapsed(true)}
                title="Colapsar panel"
              >
                <FaChevronLeft size={14} />
              </button>
            </div>

            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  >
                    <item.Icon className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {location.pathname === item.path && (
                      <span className="nav-indicator" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="sidebar-footer">
              <p className="footer-quote">
                "El amor es paciente, es bondadoso."
              </p>
              <p className="footer-ref">— 1 Corintios 13:4</p>
            </div>
          </>
        ) : (
          <>
            <button
              className="sidebar-expand-inline"
              onClick={() => setSidebarCollapsed(false)}
              title="Expandir panel"
            >
              <FaChevronRight size={14} />
            </button>

            <ul className="nav-list-icon">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-icon-link ${location.pathname === item.path ? "active" : ""}`}
                    title={item.label}
                  >
                    <item.Icon />
                    {location.pathname === item.path && (
                      <span className="nav-icon-dot" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      {mobileOpen && (
        <div className="overlay" onClick={() => setMobileOpen(false)} />
      )}

      <main className="main-content" ref={contentRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diferencias" element={<Diferencias />} />
          <Route path="/etapas" element={<Etapas />} />
          <Route path="/autopreguntas" element={<AutoPreguntas />} />
          <Route path="/modelo-biblico" element={<ModeloBiblico />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/principios" element={<Principios />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
