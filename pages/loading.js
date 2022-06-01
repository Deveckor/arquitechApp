import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Image from 'next/image';
import loader from '../public/loader.svg';
import {useRouter} from 'next/router';
import login from '../services/login'

export default function Loading() {
  const [tokenUser, setTokenUser] = useState(null)
  const router = useRouter();
  const state = useSelector((state)=> state);
  const {user} = state.user;
  const data = user.userData;
  const dispatch = user.dispatch;
  const password = user.password;
  const from = user.from;
  console.log(tokenUser);
  useEffect(()=>{
    login(data, dispatch, from, password,setTokenUser);
  },[])
  const style = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100vh'
  }
  function redirect() {
    router.push('office/home')
  }

  return (
    <div style={style}>
      
      {!tokenUser 
      ? <Image
      src={loader}
      alt='Loader...'
      />
      : <div onLoad={redirect()}></div>
    }
    </div>
  )
}
