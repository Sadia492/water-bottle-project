import React, { useEffect, useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import {
  addToLS,
  getStoredItem,
  removeItemFromLS,
} from "../Utilities/LocalStorage";
export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const cart = getStoredItem();
      const savedCart = [];
      for (const id of cart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        savedCart.push(bottle);
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleDeleteCart = (singleCart) => {
    const remaining = cart.filter((bottle) => bottle.id !== singleCart.id);
    setCart(remaining);
    removeItemFromLS(singleCart.id);
  };

  const handleAddToCart = (bottle, id) => {
    const isExist = cart.find((bottle) => bottle.id === id);
    if (isExist) {
      alert("Already exists");
    } else {
      setCart([...cart, bottle]);
      addToLS(id);
    }
  };
  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-center font-bold text-2xl">
        Bottles here: {bottles.length}
      </h2>
      <h3 className="text-center font-bold text-xl">
        Added to cart: {cart.length}
      </h3>
      <Cart handleDeleteCart={handleDeleteCart} cart={cart}></Cart>
      <div className="grid grid-cols-3 gap-6">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}
