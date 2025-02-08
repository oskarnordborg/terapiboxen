import React, { ReactElement } from "react";
import "./ProductCard.css"; // Custom styling for the card

interface Product {
  id: number;
  name: string;
  image: string;
  description: ReactElement; // New property for description
  onClick: () => void;
}

const ProductCard: React.FC<Product> = ({
  id,
  name,
  image,
  description,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-description">{description}</div>
      <h2>{name}</h2>
    </div>
  );
};

export default ProductCard;
