import all_product from "@/components/Assets/all_product";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCard = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCard());

  const addToCart = (itemId) => {
    setCartItems((cartItems) => {
      return {
        ...cartItems,
        [itemId]: cartItems[itemId] + 1,
      };
    });
    // console.log(cartItems[itemId] + 1); //this line logs 1
    // console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((cartItems) => ({
      ...cartItems,
      [itemId]: 0,
    }));
  };

  const subtractFromCart = (itemId) => {
    setCartItems((cartItems) => ({
      ...cartItems,
      [itemId]: cartItems[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    subtractFromCart,
    getTotalCartItems,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
