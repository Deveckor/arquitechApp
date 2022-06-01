import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import {useForm} from 'react-hook-form'
import Box from '@mui/material/Box';
import styles from '../styles/pages/createAccount.module.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {URL_BASE} from '../services/config';
import ModalCreateAccount from '../components/CreateAccount/ModalCreateAccount'
import Head from 'next/head';
import {createAction, loginAction, noAction} from '../actions/crudOfficeActions'
import {useSelector, useDispatch} from 'react-redux'
import { helpHttp } from "../helpers/helpHttp";

const InputCreateAccount = () =>{

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {office} = state.office;

  const [error, setError] = useState(null)
  const [password, setPassword] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {register, handleSubmit, formState} = useForm({mode: 'onChange'}); 
  console.log(state);
  let api = helpHttp()
  const createOfficeAccount = async (data) =>{
    
    let options = {
      body: data,
      headers: { 
        "content-type": "application/json"
      }
    };
    try {
      let res = await api.post(`${URL_BASE}/offices/createAccount`, options);

      if(res.err) throw {res}
      handleOpen()
      dispatch(createAction(res));
      
    } catch (error) {
      noAction()
      handleOpen()
      setError(error.res)
    }
  }

  const onSubmit = async (data) => {
    
    data = {
      ...data,
      "bucket": data.email,
    }
    setPassword(data.password)
    createOfficeAccount(data)
    
   
  }
  if(state.office.office){
    console.log(state.office.office.name);
  }
 
  
  return (
    <>
    <Head>
        <title>Crear Cuenta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container_box}>

    <Box
    className={styles.box}
    component="form"
    autoComplete='on'
    onSubmit={handleSubmit(onSubmit)}
    >
     <Typography
            noWrap           
            sx={{
              fontFamily: 'Montserrat',
              fontWeight:  700,
              letterSpacing:{ xs: '.1rem', md: '.3rem'},
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'18px'
            }}
            >
            Bienvenido a Arquitech
          </Typography>
          <Typography
                    
                    sx={{
                      
                      fontFamily: 'Montserrat',
                      fontWeight:  700,
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize:'12px'
                    }}
                    >
            Crea tu cuenta:
          </Typography>
     <TextField
        required
        
        label='Nombre Compañia:'
        
        inputProps={{ pattern: "^[a-zA-ZñÑáÁÉéÍíÓóÚú. ]*$" }}
        {...register('name', {required: 'error text'})}
        />
      <TextField
        required
        
        label='Email:'
        
        inputProps={{ pattern: "^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$" }}
        {...register('email', {required: 'error text'})}
        />
      <TextField
        
        label='Dirección:'
        {...register('address')}
        />
      <TextField
        required
        id="outlined-required"
        label='RFC:'
        
        
        {...register('rfc', {required: 'error text'})}
        />
      <TextField
        required
        type="password"
        
        label='Password:'
        {...register('password', {required: 'error text'})}
        />
      <Button
      type="submit"
      value="Submit"
      variant="outlined"
      disabled={!formState.isValid}  
      >Enviar</Button>
   
      <ModalCreateAccount
      handleClose={handleClose}
      open={open}
      handleOpen={handleOpen}
      state={state}
      error={error}
      />
    </Box>
</div>
      </>
  )
}

export default function createAccount() {
  
  return (
    <div className={styles.container}>
      <InputCreateAccount/>
    </div>
  )
}
