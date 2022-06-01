import React from 'react'
import styles from '../../styles/component/Layouts/Aside.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
export default function Aside() {

    const style = {
        width: '100%',
        maxWidth: 350,
        bgcolor: 'background.paper',
      };
    const button = {
        display: 'flex',
        gap: '20px',
    }
    const icon = {
        fill: '#001F3E', 
        fontSize: '40px',
        
    }
    const text = {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#001F3E',
        '&:hover': { color: 'yellow' },
    }
  return (
    <div className={styles.container_aside}>
        <List sx={style} component="nav" aria-label="mailbox folders">
  <ListItem button sx={button}>
      <HomeIcon sx={icon}/>
    <ListItemText primaryTypographyProps={text} primary="Home" />
  </ListItem>
  <Divider/>
  
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        
        >
            <did style={button}>

        <GroupIcon sx={icon}/>
        <ListItemText primaryTypographyProps={text} primary="Clientes" />
            </did>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  

  
</List>
    </div>
  )
}
