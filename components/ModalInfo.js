import React from 'react'
import {Modal, Box, Typography, Button} from '@mui/material'

export default function ModalInfo({open, handleClose, state, error}) {

  
    let success = '',
     title = '',
     paragraph = ''; 
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
      console.log('state',state);
      if(state){
        let name = state.office.office.name
        title = state.message;
        paragraph = `Felicidades ${name}, tu registro fue exitoso, Bienvenido a Arquitech.`;
             
      }
      if(error){
        
           title = error.message;
           paragraph = error.error; 
      }
      
      const login = async () =>{
        
        handleClose()
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
        {!state ? null : !success?<Button onClick={handleClose}>Cerrar</Button>
        : <Button onClick={login}>Aceptar</Button>
        }
        
      </Box>
    </Modal>
  )
}
