import React from 'react'
import {Modal, Box, Typography, Button} from '@mui/material'

export default function ModalInfo({open, handleClose, data}) {

  
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
      if(data){
           success = data.success;            
          if(!data.success){
               title = data.message;
               paragraph = data.error; 
          } else {
             title = data.message;
             paragraph = `Felicidades ${data.office.name}, tu registro fue exitoso, Bienvenido a Arquitech.`;
             
          }
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
        {!data ? null : !success?<Button onClick={handleClose}>Cerrar</Button>
        : <Button onClick={login}>Aceptar</Button>
        }
        
      </Box>
    </Modal>
  )
}
