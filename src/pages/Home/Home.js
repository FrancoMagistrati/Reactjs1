import React from "react";
import ListProduct from "../../Componentes/ListProduct/ListProduct";
import Filtro from "../../Componentes/NavBar/Filtro"
import "./Home.css"
import Header from "../../Componentes/Header/Header"
import Footer from "../../Componentes/Footer/Footer"
const Home = () =>{
return(
    <div>
               <header>
          <Header />
        </header>
        <Filtro />
        <h1>Productos Destacados</h1>
        <ListProduct />
        <footer>
        <Footer />
        </footer>
    </div>
)

}

export default Home