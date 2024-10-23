const getStoredItem = () => {
  const storedItem = localStorage.getItem("cart");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};

const addToLS = (id) => {
  const cart = getStoredItem();
  cart.push(id);

  saveToLS(cart);
};

const saveToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const removeItemFromLS = (id) => {
  const cart = getStoredItem();
  const remaining = cart.filter((single) => single !== id);
  saveToLS(remaining);
};

export { addToLS, getStoredItem, removeItemFromLS };
