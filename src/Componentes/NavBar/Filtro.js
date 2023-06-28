import React from "react";
import { Link } from "react-router-dom";
import "./Filtro.css"

const Filtro = () => {
  return(
    <div>
      <Link  to="/category/nike">
      <img className="filtroimagen" src="/assets/img/nikelogo.jpg" alt="nike" />
      </Link>
      <Link  to="/category/adidas">
      <img className="filtroimagen" src="/assets/img/adidaslogo.jpg" alt="adidas" />
      </Link>
      <Link  to="/category/under">
      <img className="filtroimagen" src="/assets/img/underlogo.jpg" alt="under" />
      </Link>
      <Link  to="/category/puma">
      <img className="filtroimagen" src="/assets/img/pumalogo.png" alt="puma" />
      </Link>
    </div>
  )
}
export default Filtro