import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function ProductCard(props) {
  const { products, setProducts } = useContext(AppContext)
  return (
    <section key={ props.key }>
      <p>{ props.produto }</p>
      <p>{ props.valor }</p>
      <LocalOfferIcon/>
    </section>
  );
}

export default ProductCard;
