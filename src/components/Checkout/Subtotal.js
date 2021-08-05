import React from "react";
import "./subtotal.scss";
import CurrencyFormat from "react-currency-format";
function Subtotal({ basket, total }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :{" "}
              <strong>{` ₹ ${total ? `${total}.00` : "0.00"}  `}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order containes a gift
            </small>
            <button>Proceed to checkout</button>
          </>
        )}
        decimalScale={2}
        value={200}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Subtotal;
