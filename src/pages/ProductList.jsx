import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const ProductList = () => {
  const [products, setProduct] = useState([]);
  // Fetch data from API
  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      console.log(data);
    }
    handleFetch();
  }, []);

  return (
    <section className="flex flex-wrap self-center gap-5 w-full justify-center">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};
