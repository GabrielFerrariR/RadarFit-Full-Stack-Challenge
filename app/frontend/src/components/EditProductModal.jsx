import {useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField  from '@mui/material/TextField';
import { requestData, requestUpdate } from '../service/requests';
import AppContext from '../context/AppContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: '#f1f2f0',
  border: '0.5px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditProductModal({ prodId }) {
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

  const editProduct = async () => {
    await requestUpdate(`/produtos/${ prodId }`, form);
    const data = await requestData('/produtos');
    setProducts(data);
  }

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={handleOpen}
        sx={{ borderRadius: 0, bgcolor: "#2d3f46", }}
        startIcon={ <EditIcon/> }
      >
        Editar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Produto
          </Typography>
          <TextField
            id="standard-basic"
            label="Produto"
            variant="standard"
            name="produto"
            onChange={ onFormChange } 
          />
          <TextField
            id="standard-basic"
            label="Valor"
            variant="standard"
            name="valor"
            onChange={ onFormChange } 
          />
          <TextField
            id="standard-multiline-basic"
            label="Descrição"
            variant="standard"
            name="descricao"
            multiline
            maxRows={4}
            onChange={ onFormChange } 
          />
          <section>
            <Button
              variant="contained"
              color="success"
              onClick={ editProduct }
              sx={{ borderRadius: 0, bgcolor: "#2d3f46", }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleClose}
              sx={{ borderRadius: 0, bgcolor: "#2d3f46", }}
            >Fechar</Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
