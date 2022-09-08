import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

function ProductsView() {
  return (
    <section>
      <section>
        <h1>Produtos</h1>
        <AddCircleOutlineIcon />
      </section>
      <section>
        <h3>Lista de Produtos</h3>
        <ProductList />
      </section>
      <section>
        <h3>Detalhes</h3>
        <ProductDetails />
      </section>
    </section>
  );
}

export default ProductsView;