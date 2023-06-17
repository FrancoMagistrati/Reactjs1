import React from "react";
import "./NavBar.css"
import Logo from "../../assets/img/logo.png"
import Shop from '@mui/icons-material/ShoppingCart';
import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(

<nav >
<div>
<Link to="/">

<a href="#"><img src={Logo} className="logo"></img></a>
</Link>

</div>
<div className="menu menu-3">
<ul>
<Link className="li" to="/">
Home
</Link>
<Link className="li" >
Contacto
</Link>




</ul>
</div>
<div>
<CardWidget />
</div>

</nav>
    

    )
}

export default Navbar