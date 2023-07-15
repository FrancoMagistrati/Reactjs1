import React, { useContext } from "react";
import "./NavBar.css"
import Logo from "../../assets/img/logo.png"

import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(

<nav >
<div>
<Link to="/">

<img src={Logo} className="logo" alt="logo"></img>
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

<Link to="/shop">
    <div>
        <CardWidget />
      

    </div>
</Link>


</nav>
    

    )
}

export default Navbar