import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function ProductCard(props) {
  const [isSelected, setIsSelected] = useState(false)
  const { setDetailedProduct } = useContext(AppContext);
  const showDetails = () => {
    setDetailedProduct(props)
    setIsSelected(!isSelected)
  }
  const classType = (isSelected) ? 'product-card selected-card' : 'product-card';
  return (
    <section key={ props.id } className={ classType } onClick={ showDetails }>
      <h4>{ props.produto }</h4>
      <p>{ props.valor }</p>
      <LocalOfferIcon className='local-offer-icon' sx={{ color: isSelected ? "#60aa95" :"#2d3f46" }} />
    </section>
  );
}

export default ProductCard;
