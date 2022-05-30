import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Aside from "./Aside";
import Image from "next/image";
import logo from "../../public/logo-sl.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/component/Layouts/NavBar.module.scss";
import { useSelector, useDispatch } from "react-redux";
const pages = ["Crear Cuenta", "Precio", "Aprende mas..", "Sing In"];
const pagesTwo = ["Crear Cuenta", "Precio", "Aprende mas.."];
const links = ["createAccount", "Prices", "helper", "singIn"];

export default function NavBar() {
  const state = useSelector((state) => state);
  const {token} = state
  const [anchorElNav, setAnchorElNav] = useState(false);
  const handleOpen = () => {
    setAnchorElNav(true);
  };

  const handleClose = () => {
    setAnchorElNav(false);
  };
  const signOut = ()=>{
    
  }
  return (
    <AppBar
      stickyHeader
      sx={{
        overflowX: "initial",
        top: "0",
        padding: "none",
        width: "100vw",
        backgroundColor: "#001F3E",
        display: { xs: "flex", md: "none" },
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
            {!anchorElNav ? null : (
              <div className={styles.aside}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  
                >
                  <ArrowBackIcon
                   onClick={handleClose}
                   color="primary" 
                   />
                </IconButton>
                <Aside />
              </div>
            )}
          </Box>
          <Box padding={2} sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image src={logo} alt="logo" width={60} height={60} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Montserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: { xs: "14px" },
            }}
          >
            Arquitech
          </Typography>
          <Button
          onClick={signOut}
                    sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Montserrat', display: { xs: 'flex', md: 'none' }}}
                    >
                Sign out
            </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
