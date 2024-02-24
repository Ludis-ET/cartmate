import { Route, Routes } from "react-router-dom";
import { ProductList } from "../pages/ProductList";
import { Cart } from "../pages/Cart";

export const ALLRoutes = () => {
  return (
    <section className="mt-12 p-12 pt-16 bg-white dark:bg-gray-800">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="cart/" element={<Cart />} />
      </Routes>
    </section>
  );
};
