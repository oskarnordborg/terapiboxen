import React, { useRef } from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage";
// import ContactUsForm from "./pages/ContactUsForm";
import ProductModal from "./pages/ProductModal";
import ContactForm from "./pages/ContactForm";
import WhoAreWe from "./pages/WhoAreWe";
import Footer from "./pages/Footer";
import logoImg from "./images/logo.png";
import { useState } from "react";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const whoAreWeRef = useRef<HTMLDivElement>(null);
  const moreInfoRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    setMenuOpen(false)
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCardClick = (product: any) => {
    if (window.innerWidth > 1000) {
      return;
    }
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <nav className="navbar">
        <img
          src={logoImg}
          alt="logo"
          className="navbar-logo"
          onClick={() => scrollToSection(welcomeRef)}
        />

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <button
              className="nav-button"
              onClick={() => scrollToSection(moreInfoRef)}
            >
              Våra Boxar
            </button>
          </li>
          <li>
            <button
              className="nav-button"
              onClick={() => scrollToSection(whoAreWeRef)}
            >
              Vilka Är Vi
            </button>
          </li>
          <li>
            <button
              className="nav-button"
              onClick={() => scrollToSection(contactUsRef)}
            >
              Kontakta Oss
            </button>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div ref={welcomeRef} className="section">
          <img src={logoImg} alt="logo" className="logo" />
          <h1>Välkommen!</h1>
          <p className="welcome-message">
            Terapiboxen är i uppstartsfasen och vi är glada att du är här.
            Eftersom du hittat hit så är du förmodligen intresserad av att veta
            mer om oss och vad vi erbjuder. Om du kan tänka dig avvara några
            minuter för att hjälpa oss i arbetet och utformningen av våra
            produkter finns en enkät här som handlar om vad du tycker är viktigt
            i en terapibox.
          </p>
          <button
            className="submit-button link"
            onClick={() => window.open("https://forms.gle/ELVBqxeDSsqthbXCA")}
          >
            Till enkäten
          </button>
        </div>

        <div ref={moreInfoRef} className="section">
          <h1>Våra Boxar</h1>
          <ProductPage handleCardClick={handleCardClick} />
        </div>

        <div ref={whoAreWeRef} className="section">
          <WhoAreWe />
        </div>

        <div ref={contactUsRef} className="section contact-form">
          <ContactForm />
        </div>

        {isModalOpen && selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
