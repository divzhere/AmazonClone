import React from "react";
import "./checkout.scss";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../contexts/StateProvider";
import { getBasketValue } from "./getBasketValue";
function Checkout() {
  const [state] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/updated/Header_PC.jpg"
          alt="banner_image"
          className="checkout_ad"
        />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/**basket component */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal basket={state.basket} total={getBasketValue(state.basket)} />
      </div>
    </div>
  );
}

export default Checkout;
