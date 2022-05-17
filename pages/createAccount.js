import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input';
import {useForm} from 'react-hook-form'
import Box from '@mui/material/Box';
import styles from '../styles/pages/createAccount.module.scss';


const InputLogin = () =>{

  const {register, handleSubmit, formState: {errors}} = useForm(); 

  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <Box
    className={styles.box}
    component="form"
    autoComplete='off'
    onSubmit={handleSubmit(onSubmit)}
    >
     
     <TextField
        required
        id="outlined-required"
        label='Nombre Compañia'
        error={errors?.name ? true : false}
        inputProps={{ pattern: "^[a-zA-ZñÑáÁÉéÍíÓóÚú ]*$" }}
        {...register('name', {required: 'error text'})}
      />
  
      <Input
      type='submit'
      
      />
   

    </Box>
  )
}

export default function createAccount() {
  
  return (
    <div className={styles.container}>
      <InputLogin/>
    </div>
  )
}
