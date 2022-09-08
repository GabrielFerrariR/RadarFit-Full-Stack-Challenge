import './App.css';
import ProductsView from './components/ProductsView';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <main className="App">
      <SearchBar />
      <ProductsView />
    </main>
  );
}

export default App;
