import { useContext } from "react";
import AppContext from "../context/AppContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products} = useContext(AppContext)
  return(
    <section>
      {products.map(({ produto, valor, id }) => {
        return <ProductCard produto={ produto } valor={ valor } key={ id }/>
      })}
    </section>
  );
}

export default ProductList;