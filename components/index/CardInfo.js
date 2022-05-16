import PaidIcon from '@mui/icons-material/Paid';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "../../styles/component/cardInfo.module.scss"
import { style } from '@mui/system';
import {useState, useEffect} from 'react'



export default function CardInfo(props) {
    const {view} = props;
    const [iconColor, setIconColor] = useState([null, null, null])
    
    useEffect(() => {

        let i = 0;
        if (view === true) {
          setIconColor([{fill: '#8d942c'},null,null])
          const interval = setInterval(() => {
              if (i === 3) {i = 0}
              
              setIconColor((iconColor)=>{
                if(iconColor[0] === null)return [{fill: '#8d942c'},null,null]
                if(iconColor[1] === null)return [undefined,{fill: '#8d942c'},null]
                if(iconColor[2] === null)return [null,null,{fill: '#8d942c'}]
              })
          }, 2000);
          return () => clearInterval(interval)
        }
        if(view === false) {
          setIconColor([null,null,null])
        }
    },[view])
  return (
   
      <Card className={styles.container_card} >

        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className={styles.icon} sx={{cursor: 'default'}}>
        <Box sx={{textAlign: 'center', margin: '10px'}}>

        <PaidIcon style={iconColor[0]}
        sx={{fontSize: '100px'}}
        />
        </Box>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            Costos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Permite al cliente y constructor reducir costos al llevar un mejor control de ambas partes, permitiendo una mejor comunicación.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className={styles.icon} sx={{cursor: 'default'}}>
        <Box sx={{textAlign: 'center', margin: '10px'}}>

        <PostAddIcon style={iconColor[1]}
        sx={{fontSize: '100px'}}
        />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            Documentación
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Permite llevar un mejor control ya que permite al cliente mantenerse en constante comunicación, y poder ver documentos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className={styles.icon} sx={{cursor: 'default'}}>
        <Box sx={{textAlign: 'center', margin: '10px'}}>

        <PhoneAndroidIcon style={iconColor[2]}
        sx={{fontSize: '100px'}}
        />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            Accesibilidad
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Permite estar cominicado desde cualquier lugar, ya sea desde tu computadora, o smartphone, toda tu información esta respaldada en la nube.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Card>
    
  )
}
