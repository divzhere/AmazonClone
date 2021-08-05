import React from "react";
import "./product.scss";
import { useStateValue } from "../../contexts/StateProvider";

function Product({ title, image, rating, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{`${price}.00`}</strong>
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
