import React,{useEffect} from 'react'
import Image from 'next/image'
import styles from '../../styles/component/Layouts/Layout.module.scss'
import Container from '@mui/material/Container'
import NavBar from './NavBar'
import Aside from './Aside'
import logo from '../../public/logo.svg'
import {useSelector, useDispatch} from 'react-redux'
import {helpHttp} from '../../helpers/helpHttp'
import { URL_BASE } from '../../services/config'
import {userAction} from '../../actions/userActions'


export default function Layout({children}) {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {token} = state;
    const api = helpHttp();
    
    useEffect(() =>{

        const getUserData = async(id) =>{
            let options = {
                headers: {
                    "authorization": token
                }
            }
            try {
                let res = await api.get(`${URL_BASE}/offices/${id}`, options)
                if(res.err) throw {error}
                let user = res.data.offices;
                dispatch(userAction(user))
                
            } catch (error) {
                console.log(error);
            }
        }
        const getIdUser = async () => {

            try {
                let res = await api.get(`${URL_BASE}/offices/getID/${token}`)
                if (res.err) throw {error}
                let id = res.data.id;
    
                getUserData(id)
                
            } catch (error) {
                console.log(error);
            }
        }
        getIdUser()
    },[])

  return (
    <div className={styles.container_layout}>
        <NavBar/>
        <div className={styles.aside}>
            <div className={styles.container_logo}>
                <Image
                src={logo}
                alt='logo'
                width={100}
                />
            </div>
        <Aside/>
        </div>
        <main className={styles.main}>
            {
            children
            }
        </main>
    </div>
  )
}
