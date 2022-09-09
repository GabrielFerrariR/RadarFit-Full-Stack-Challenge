import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import NewProductModal from './NewProductModal';
import '../styles/products.css'

function ProductsView() {
  return (
    <section className='products-container'>
      <section className='new-product-bar'>
        <h1>Produtos</h1>
        <NewProductModal />
      </section>
      <section style={ { display: 'flex', width:'900px', justifyContent:'space-between' } }>
        <section className='product-list-container'>
          <h3>Lista de Produtos</h3>
          <ProductList />
        </section>
        <section className='details-container'>
          <h3>Detalhes</h3>
          <ProductDetails />
        </section>
      </section>
    </section>
  );
}

export default ProductsView;