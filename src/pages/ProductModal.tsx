import React, { ReactElement, useEffect } from "react";
import "./ProductModal.css";

interface ProductModalProps {
  onClose: () => void;
  product: {
    name: string;
    description: ReactElement;
    image: string;
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose, product }) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="modal"
      style={{ display: "block" }}
      onClick={handleBackgroundClick}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{product.name}</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <img src={product.image} alt={product.name} />
        <div className="modal-body">{product.description}</div>
        <div className="modal-footer">
          <button className="submit-button close-action" onClick={onClose}>
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
