import React from 'react'
import {Modal, Box, Typography, Button} from '@mui/material';
import login from '../../services/login'

export default function ModalCreateAccount({open, handleClose, office, error, dispatch, password}) {

  
    let success = '',
     title = '',
     paragraph = '',
     fromOffice = true;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {md: 400},
        bgcolor: 'background.paper',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
      };
      if (office) {
        success = office.success
        title = office.message
        if (success) {
          paragraph = `Felicidades ${office.office.name}, creaste tu cuenta exitosamente.`
        } else {
          if (error) {
            
            title = error.statusText;
            paragraph = error.error;
          }
          
        }
      }
     
      
      
  return (
    <Modal
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    open={open}
    >
      <Box sx={style}>
      
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {paragraph}
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        
        {!office ? null : !success?<Button sx={{ mt: 4}} onClick={handleClose}>Cerrar</Button>
        : <Button sx={{ mt: 2 }} onClick={()=>{login(office.office, handleClose, dispatch, fromOffice, password)}}>Aceptar</Button>
      }
      </Box>
        
      </Box>
    </Modal>
  )
}
