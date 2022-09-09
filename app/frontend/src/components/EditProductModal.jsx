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
  width: 500,
  height: 400,
  bgcolor: '#f1f2f0',
  border: '0.5px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditProductModal( props ) {
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
    await requestUpdate(`/produtos/${ props.id }`, form);
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
        <Box sx={style} component="form">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Produto
          </Typography>
          <TextField
            sx={{m: 1, paddingBlock: 3}}
            id="standard-basic"
            label="Produto"
            variant="standard"
            name="produto"
            onChange={ onFormChange } 
          />
          <TextField
            sx={{m: 1, paddingBlock: 3}}
            id="standard-basic"
            label="Valor"
            variant="standard"
            name="valor"
            onChange={ onFormChange } 
          />
          <TextField
            sx={{m: 1, paddingBlock:2}}
            id="standard-multiline-basic"
            label="Descrição"
            variant="standard"
            name="descricao"
            fullWidth
            multiline
            minRows={3}
            onChange={ onFormChange } 
          />
          <section>
            <Button
              variant="contained"
              color="success"
              onClick={ editProduct }
              size="large"
              sx={{ borderRadius: 0, bgcolor: "#2d3f46", m: 2 }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleClose}
              size="large"
              sx={{ borderRadius: 0, bgcolor: "#2d3f46", m: 2}}
            >Fechar</Button>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
