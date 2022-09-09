import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { requestQueriedData } from '../service/requests';




function SearchBar() {
  const { setProducts } = useContext(AppContext)
  const [query, setQuery] = useState('')
  useEffect(() => {
    requestQueriedData('/produtos/find', { params: { q: query } })
    .then((response) => setProducts(response))
  }, [query, setProducts])
  return(
    <header>
      <section className='search-container'>
      <TextField
        id="filled-basic"
        label="Buscar por um produto"
        variant="filled"
        onChange={ (event) => setQuery( event.target.value)}
        sx={{ width: '50%' }}
        className="search-input"
      />
      </section>
    </header>
  );
}

export default SearchBar;