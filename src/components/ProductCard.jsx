import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* placeholder if no image */}
        <div className="placeholder-img">{product.name[0]}</div>
      </div>
      <div className="product-body">
        <h4>{product.name}</h4>
        <p className="muted">
          {product.category} • {product.unit}
        </p>
        <p className="price">
          ${product.price} / {product.unit}
        </p>
        <p className="muted small">{product.description}</p>
        <div className="card-actions">
          <Link to="/buy" state={{ product }} className="btn small">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
