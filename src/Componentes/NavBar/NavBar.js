import React from "react";
import "./NavBar.css"
import Logo from "../img/logo.png"
import Shop from '@mui/icons-material/ShoppingCart';


const Navbar = () =>{
    return(

<nav >
<div>
<a href="#"><img src={Logo} className="logo"></img></a>
</div>
<div className="menu menu-3">
<ul>
  <li><a href="#">Menu</a></li>
  <li><a href="#">Categorias</a></li>
  <li><a href="#">Contacto</a></li>

</ul>
</div>
<div>
<a className="carrito" href="#"><Shop color="primary" />2</a>
</div>

</nav>
    

    )
}

export default Navbar