import { Header } from "./components/Header";
import { ProductList } from "./pages/ProductList";
import { ALLRoutes } from "./routes/ALLRoutes";

function App() {
  return (
    <>
      <Header />
      <ALLRoutes />
      <ProductList />
    </>
  );
}

export default App;
