import { useState } from "react";
import "./Shop.css"
import { collection, addDoc } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import { useCart } from "../../Context/CartContext/CartContext"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const initialState = {
    name: "",
    lastname: "",
    email: "",
}


const Shop = () => {

const { cart } = useCart();
console.log("carrito",cart)
const [values, setValues] = useState(initialState);

const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value })
}



const onSubmit = (e) => {
    e.preventDefault(); 
    console.log(values)
    setValues(initialState)
}



    return(
      
        <div >
            
                 
      {cart.caarito.map((product, id) => (
        <div key={id}>
         <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>


          <Typography variant="body2" color="text.secondary">
             Cantidad: {product.qty}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
        </div>
      ))}
            <form className="formulario" onSubmit={onSubmit}>
            <TextField placeholder="Name" name="name" value={values.name} onChange={handleOnChange}/> 
            <TextField placeholder="lastname" name="lastname" value={values.lastname} onChange={handleOnChange}/>   
            <TextField placeholder="Email" name="email" value={values.email} onChange={handleOnChange}/>   
            <button>Enviar</button>  
            
            </form>
            
        </div>
    )
}

export default Shop