import { Route, Routes } from "react-router-dom";
import { ProductList } from "../pages/ProductList";
import { Cart } from "../pages/Cart";

export const ALLRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="cart/" element={<Cart />} />
    </Routes>
  );
};
