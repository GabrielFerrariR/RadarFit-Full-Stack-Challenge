import { useContext } from "react";
import AppContext from "../context/AppContext";
function ProductDetails() {
  const { detailedProduct } = useContext(AppContext);
  return (
    <section>
      <h1>{ detailedProduct.produto }</h1>
      <p>Valor</p>
      <p>{ `R$${ detailedProduct.valor }` }</p>
      <p>{ detailedProduct.descricao }</p>
    </section>
  );
}

export default ProductDetails;