import React from "react";
import ProductCard from "./ProductCard";
import box1img from "../images/box1positive.png";
import box2img from "../images/box2calm.png";
import "./ProductPage.css";

const products = [
  {
    id: 1,
    name: "Harmoniboxen",
    image: box1img,
    description: (
      <div>
        <h3>Din väg till lycka!</h3>
        <p>
          I en stressig vardag kan det vara svårt att hitta tid för sig själv.
          Harmoniboxen är en praktisk lösning för dig som vill förbättra ditt
          välmående och hitta inre harmoni.
        </p>
        <h3>Vad ingår i Harmoniboxen?</h3>
        <strong>Mindfulness-övningar</strong> för att minska stress och öka
        närvaro.
        <br />
        <strong>Gratitude Journal</strong> för att fokusera på det positiva i
        livet.
        <br />
        <strong>Reflektionsfrågor</strong> för personlig utveckling och insikt.
        <br />
        <strong>Doftljus & Te</strong> för en avkopplande atmosfär.
        <br />
        <strong>Affirmationer</strong> som påminner dig om dina styrkor och mål.
        <br />
        <br />
        <p>
          Beställ din Harmonibox idag och ta det första steget mot ett
          lyckligare liv!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Hitta Lugnet-boxen",
    image: box2img,
    description: (
      <div>
        <h3>Din väg till lycka!</h3>
        <p>
          I en stressig vardag kan det vara svårt att hitta tid för sig själv.
          Hitta Lugnet-boxen är en praktisk lösning för dig som vill förbättra
          ditt välmående och hitta inre hitta Lugnet-.
        </p>
        <h3>Vad ingår i Hitta Lugnet-boxen?</h3>
        <strong>Mindfulness-övningar</strong> för att minska stress och öka
        närvaro.
        <br />
        <strong>Gratitude Journal</strong> för att fokusera på det positiva i
        livet.
        <br />
        <strong>Reflektionsfrågor</strong> för personlig utveckling och insikt.
        <br />
        <strong>Doftljus & Te</strong> för en avkopplande atmosfär.
        <br />
        <strong>Affirmationer</strong> som påminner dig om dina styrkor och mål.
        <br />
        <br />
        <p>
          Beställ din Hitta Lugnet-box idag och ta det första steget mot ett
          lyckligare liv!
        </p>
      </div>
    ),
  },
];

interface ProductPageProps {
  handleCardClick: (product: any) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ handleCardClick }) => {
  return (
    <div>
      <div className="product-page">
        <div className="product-cards-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
