import { useContext } from "react";
import AppContext from "../context/AppContext";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Stack from '@mui/material/Stack';
import EditProductModal from "./EditProductModal";


function ProductDetails() {
  const { detailedProduct } = useContext(AppContext);
  return (
    <section>
      <h1>{ detailedProduct.produto }</h1>
      <p>Valor</p>
      <p>{ `R$${ detailedProduct.valor }` }</p>
      <p>{ detailedProduct.descricao }</p>
      <Stack direction="row" spacing={3}>
        <EditProductModal/>
        <LocalOfferIcon />
      </Stack>
    </section>
  );
}

export default ProductDetails;