import TextField from '@mui/material/TextField';

function SearchBar() {
  return(
    <header className="App-header">
      <TextField id="filled-basic" label="Buscar por um produto" variant="filled" />
    </header>
  );
}

export default SearchBar;