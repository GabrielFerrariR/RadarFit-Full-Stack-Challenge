import { useContext } from "react";
import AppContext from "../context/AppContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products } = useContext(AppContext);
  return(
    <section className="product-list">
      {products.map((product) => {
        return <ProductCard {...product} />
      })}
    </section>
  );
}

export default ProductList;
