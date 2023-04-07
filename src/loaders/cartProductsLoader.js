import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  // if cartData is in data base you have to use async await

  const storedData = getShoppingCart();
  const savedCart = [];

  // console.log(storedData);
  for (const id in storedData) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedData[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default cartProductsLoader;
