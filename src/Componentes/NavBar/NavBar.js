import { useState } from "react";
import "./NavBar.css"
import Logo from "../../assets/img/logo.png"
import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {useCartContext} from '../../Context/CartContext/CartContext'
import Filtro from './Filtro';

const Navbar = () =>{
    const {CartQuantity} = useCartContext()

    const [mostrarFiltro, setMostrarFiltro] = useState(false);

    const toggleFiltro = () => {
      setMostrarFiltro(!mostrarFiltro);
    };

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
    <Link className="li" onClick={toggleFiltro}>
      Categoria
    </Link>
    <Link className="li">
      Contacto
    </Link>
  </ul>
  <div className="filtro-container">
    {mostrarFiltro && <Filtro />}
  </div>
</div>
<Link to="/shop">
      <div className="cart">
        <div className="cart-icon">
        <CardWidget />
        </div>
        <div className="cart-quantity">
        <CartQuantity />
        </div>
      </div>
    </Link>


     
      </nav>
    )
}

export default Navbar;
