import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField  from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { requestData, requestPost } from '../service/requests';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 400,
  bgcolor: '#f1f2f0',
  border: '0.5px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewProductModal() {
  const { setProducts } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({})
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onFormChange = ({target}) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  };
  const addProduct = async () => {
    await requestPost('/produtos', form);
    const data = await requestData('/produtos');
    setProducts(data);
  }

  return (
    <div>
      <AddCircleOutlineIcon
        onClick={handleOpen}
        fontSize='large'
        color="success"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar Produto
          </Typography>
          <TextField
            sx={{m: 1, paddingBlock:2}}
            id="standard-basic"
            label="Produto"
            variant="standard"
            name='produto'
            onChange={ onFormChange }
          />
          <TextField
            sx={{m: 1, paddingBlock:2}}
            id="standard-basic"
            label="Valor"
            variant="standard"
            name='valor'
            onChange={ onFormChange }
          />
          <TextField
            sx={{m: 1, paddingBlock:2}}
            id="standard-basic"
            label="Descrição"
            fullWidth
            multiline
            minRows={3}
            variant="standard"
            name='descricao' 
            onChange={ onFormChange }
          />
          <section>
            <Button
              onClick={ addProduct }
              size="large"
              sx={{ borderRadius: 0, bgcolor: "#2d3f46", m: 3 }}
              variant="contained"
              color="success"
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={ handleClose }
              size="large"
              sx={{ borderRadius: 0, bgcolor: "#2d3f46", m: 2 }}
            >
              Fechar
            </Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
