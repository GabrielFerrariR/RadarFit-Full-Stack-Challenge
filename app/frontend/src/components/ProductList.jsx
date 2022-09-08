import { useContext } from "react";
import AppContext from "../context/AppContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products } = useContext(AppContext);
  return(
    <section className="product-list">
      {products.map(({ produto, valor, id, descricao }) => {
        return <ProductCard produto={ produto } valor={ valor } key={ id } descricao={ descricao } />
      }).slice(0,5)}
    </section>
  );
}

export default ProductList;
