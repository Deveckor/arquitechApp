import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '../../public/logo-sl.png'
import Link from 'next/link';

const pages = ['Crear Cuenta', 'Precio', 'Aprende mas..', 'Sing In'];
const pagesTwo = ['Crear Cuenta', 'Precio', 'Aprende mas..'];
const links = ['createAccount', 'Prices', 'helper', 'singIn']


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = () => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar stickyHeader  sx={{
      overflowX: "initial",
        top: '0',
        padding: 'none',
        width: '100vw',
        backgroundColor: '#001F3E',
    }}>
      <Container>
        <Toolbar  disableGutters>
            <Box padding={2} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <Image src={logo} alt='logo' width={60} height={60} />

            </Box>
          <Typography
            variant="h6"
            noWrap
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight:  700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'22px'
            }}
          >
            Arquitech
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              anchorPosition={{
                top: '-50',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesTwo.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={links[index]}>
                  <Typography fontFamily= 'Montserrat' textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box padding={2} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <Image src={logo}  alt='logo' width={60} height={60}/>

          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: {xs: '12px'}
            }}
          >
            Arquitech
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, marginLeft: '20vw' }}>
            {pages.map((page, index) => (
                
                <Link key={index} href={links[index]}>
                    <Button
                    key={page}
                    
                    sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Montserrat', '&:hover':{color: '#276dfa'}}}
                    >
                {page}
              </Button>
                </Link>
                
            ))}
          </Box>
            <Link href='singIn' >
            <Button
                    sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Montserrat', display: { xs: 'flex', md: 'none' }}}
                    >
                Sing In
              </Button>
            </Link>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;