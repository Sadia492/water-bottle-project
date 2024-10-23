import React from "react";

export default function Bottle({ bottle, handleAddToCart }) {
  const { name, price, img } = bottle;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold text-xl">{price} $</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(bottle, bottle.id)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
