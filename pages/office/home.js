import React from 'react'
import Layout from '../../components/Layout/Layout'
import {useSelector, useDispatch} from 'react-redux'
import Image from 'next/image'
import loader from '../../public/loader.svg'
import User from '../../components/Offices/User'

export default function Home() {
  const state = useSelector((state) => state);
  const {user} = state;
  


  return (
    <Layout>
      {!user.user ?
      <div style={{ height: '100%', width: '68vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image
      src={loader}
      alt='Loader...'
      />
      </div> 
      :
      <User/>
      }
      <div>

      </div>
    </Layout>
  )
}
