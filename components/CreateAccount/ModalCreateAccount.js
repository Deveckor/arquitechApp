import React from 'react'
import {Modal, Box, Typography, Button} from '@mui/material';
import {useRouter} from 'next/router';
import {useSelector, useDispatch} from 'react-redux'
import {userAction} from '../../actions/userActions'

export default function ModalCreateAccount({open, handleClose, office, error, password}) {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  

 
    const router = useRouter();

    
  
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
    function loginOffice() {
      let user ={
        userData: office.office,
        from: fromOffice, 
        password: password,
        dispatch: dispatch
      }
      dispatch(userAction(user))
      router.push('/loading')
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
        : <Button sx={{ mt: 2 }} onClick={loginOffice}>Aceptar</Button>
      }
      </Box>
        
      </Box>
    </Modal>
  )
}
