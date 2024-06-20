import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  beerCapacity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
