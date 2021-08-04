import React from "react";
import "./product.scss";
function Product({ title, image, rating, price }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <img src={image} alt={title} />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}
export default Product;
