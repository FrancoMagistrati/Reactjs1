import React from "react";
import { Link } from "react-router-dom";
import "./Filtro.css"

const Filtro = () => {
  return(
    <div className="filtroMarca">
      <Link  to="/category/nike">
      <img className="filtroimagen" src="/assets/img/nikelogo.png" alt="nike" />
      </Link>
      <Link  to="/category/adidas">
      <img className="filtroimagen" src="/assets/img/adidaslogo.png" alt="adidas" />
      </Link>
      <Link  to="/category/under">
      <img className="filtroimagen" src="/assets/img/underarmorlogo.png" alt="under" />
      </Link>
      <Link  to="/category/puma">
      <img className="filtroimagen" src="/assets/img/pumalogo.png" alt="puma" />
      </Link>
    </div>
  )
}
export default Filtro