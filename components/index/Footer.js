import React from 'react'
import styles from '../../styles/component/footerIndex.module.scss'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import styled from 'styled-components';

export default function Footer({handleOpen, open}) {

  const DivChat = styled.div`
  position:relative;
  top: -35px;
  margin-left: 800px;

  @media (max-width: 1000px) {margin-left: 700px;}
  @media (max-width: 768px) {margin-left: 350px;}
  `

  console.log(open);
  return (
    <div className={styles.container}>
        <div className={styles.mark}>
        <DivChat>
       
        <ChatBubbleIcon sx={{fontSize: '80px', fill: 'rgb(210, 210, 210)', cursor: 'pointer'}} onClick={handleOpen}/>
       
        </DivChat>
        <h3>Powered by <a target='_blank' href='https://github.com/Deveckor' rel="noreferrer" className={styles.powered}>Deveckor</a></h3>
        <p>© Copyright 2022, Arquitech</p>
        </div>
    </div>
  )
}
