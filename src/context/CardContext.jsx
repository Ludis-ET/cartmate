import { createContext, useContext } from "react";

const initialState = {
  cardList: [],
  total: 0,
};

const cartContext = createContext(initialState);

export const cardProvider = ({ children }) => {
  value = {};
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
