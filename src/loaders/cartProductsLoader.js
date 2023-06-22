import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  // if cartData is in data base you have to use async await
  const storedData = getShoppingCart();
  const ids = Object.keys(storedData);

  const loadedProducts = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const products = await loadedProducts.json();

  console.log(products);
  const savedCart = [];

  // console.log(storedData);
  for (const id in storedData) {
    const addedProduct = products.find((pd) => pd._id === id);
    if (addedProduct) {
      const quantity = storedData[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default cartProductsLoader;
