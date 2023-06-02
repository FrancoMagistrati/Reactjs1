import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Main.css"

const CardZapa = ({img, nombre, precio}) => {
  return (
    <Card className="cards" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt="zapatilla"
        />
        <CardContent className="contenidoCard">
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='boton'>
        <Button  size="large" className='nombreBoton' >
         <Typography variant="h6">
          Compra
          </Typography> 
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardZapa 