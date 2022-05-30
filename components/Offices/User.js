/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../styles/component/Offices/User.module.scss";
import avatarDefault from "../../public/abstract-user-flat-4.svg";
import Image from "next/image";
import ModalAddPhoto from "./ModalAddPhoto";
import { useSelector } from "react-redux";
import loader from "../../public/loader.svg";

export default function User() {
  const state = useSelector((state) => state);
  const { user } = state;
  const [userOffice, setUserOffice] = useState();
  const [avatar, setAvatar] = useState(avatarDefault);
  const [from, setFrom] = useState("office");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setUserOffice(user.user);
    
    
  },[user]);

  console.log(avatar);

  const addAvatar = () => {
    handleOpen();
  };
  return (
    <>
      {!userOffice ? 
        <div
          style={{
            height: "100%",
            width: "68vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={loader} alt="Loader..." />
        </div>
       : 
        <div className={styles.containerUser}>
          <h1>
            Bienvenido <span>{userOffice.name}</span>
          </h1>
          <div className={styles.container_avatar}>
        
            <Image
                className={styles.avatar}
                src={avatar}
                alt={userOffice.name}
                width={200}
                height={200}
                onClick={addAvatar}
              />
            
            
          </div>
          <ModalAddPhoto
            open={open}
            handleClose={handleClose}
            from={from}
            setAvatar={setAvatar}
          />
        </div>
      }
    </>
  );
}
