import { useContext } from "react";
import AppContext from "../context/AppContext";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EditProductModal from "./EditProductModal";


function ProductDetails() {
  const { detailedProduct } = useContext(AppContext);
  return (
    <section className="product-details-container">
      <h2>{ detailedProduct.produto }</h2>
      <p>Valor</p>
      <p id='detail-valor' >{ `R$${ detailedProduct.valor }` }</p>
      <p>{ detailedProduct.descricao }</p>
      <section className="detail-btn-container">
        <EditProductModal prodId={ detailedProduct.id }/>
        <LocalOfferIcon sx={{color: "#2d3f46"}} />
      </section>
    </section>
  );
}

export default ProductDetails;