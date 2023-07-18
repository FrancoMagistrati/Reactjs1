
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


const CardProduct = ({ product, displayProductName = true  }) => {

  
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product.img}
          alt={product.name}
        />
        <CardContent>
        {displayProductName && (
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
          )}
          {displayProductName && (
            <Typography gutterBottom variant="h5" component="div">
              ${product.price}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;