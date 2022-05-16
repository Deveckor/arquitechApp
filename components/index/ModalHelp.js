import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import suport from '../../public/customer.svg'
import Image from 'next/image'
import styled from 'styled-components'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};
const DivImg = styled.div`
  position:absolute;
  top: -20px;
  margin-left: 280px;

  `

export default function ModalHelp({open, handleClose}) {
  return (
    
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <DivImg>

      <Image src={suport} alt='suport' width={50} height={50}/>
            </DivImg>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Soporte Técnico
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Para resolver sus dudas, o soporte sobre la aplicación, contactenos al siguiente correo: <Typography sx={{ textDecoration: 'underline', color: 'rgb(120, 17, 254)'}}>suport@arquitech.com</Typography>
          </Typography>
        </Box>
      </Modal>
  )
}
