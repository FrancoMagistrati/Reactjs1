import React from "react";
import ListProduct from "../../Componentes/ListProduct/ListProduct";
import Filtro from "../../Componentes/NavBar/Filtro"
import "./Home.css"
const Home = () =>{
return(
    <div>
       
        <Filtro />
        <h1>Productos Destacados</h1>
        <ListProduct />
    </div>
)

}

export default Home