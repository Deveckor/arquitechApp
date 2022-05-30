import React from 'react'
import {Modal, Box, Typography, Button} from '@mui/material';
import {uploadFile} from '../../services/uploadFiles'
import {updateOffice} from '../../services/updateUser'
import styles from '../../styles/component/upload.module.scss'
import {useSelector} from 'react-redux'

const style = {
    position: 'relative',
    top: '50%',
    left: {xs:'50%', md:'62%'},
    transform: 'translate(-50%, -50%)',
    width:  { xs:'80%', md: '50%'},
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
   
  };

  export default function ModalAddPhoto({open, handleClose, from, setAvatar}) {
    const state = useSelector((state) => state);
    const {user} = state;
    const {token} = state;
   
    const bucket = user.user.bucket
    const id = user.user._id
    const handleSubmit = async (e) => {
          e.preventDefault();
          let file = e.target[0].files[0]
          if (from === 'office') {

            const avatar = async () => {
                let url = await uploadFile(file ,bucket)

                return {"avatar": url}
            }
              
              let addPhoto = await updateOffice(avatar(), id, token);
              if (addPhoto.success) {
                console.log(addPhoto.data.offices.avatar);
                setAvatar(addPhoto.data.offices.avatar)
                handleClose();
              }
              console.log(addPhoto);
          }
          
          
    }
    
  return (
    <Modal
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    open={open}
    onClose={handleClose}
    >
        <Box 
        sx={style}
        >
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}} onSubmit={handleSubmit}>
            <input className={styles.upload} type='file'/>
            <Button type="submit">Enviar</Button>
            </form>
        </Box>

    </Modal>
  )
}
