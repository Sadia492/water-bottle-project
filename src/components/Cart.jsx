import React from "react";

export default function Cart({ cart, handleDeleteCart }) {
  console.log(cart);
  return (
    <div className="flex gap-4">
      {cart.map((single) => (
        <div>
          <img className="w-32" src={single.img}></img>
          <button onClick={() => handleDeleteCart(single)} className="btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
