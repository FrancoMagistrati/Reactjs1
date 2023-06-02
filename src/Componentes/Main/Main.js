import React, { Component } from "react";
import Filtro from "./Filtro"
import CardZapa from "./Card"
import Nike from "../img/nike.png"
import Adidas from "../img/adidas.png"
import Puma from "../img/puma.jpg"
import Under from "../img/underarmor.jpg"
import Portada from "../img/portada.jpg"
import "./Main.css"
const Main = () => {
    return(
        <>
        <div className="portada" data-aos="zoom-in-left">
                <img src={Portada}></img>
              
        </div>
        <a href="#" class="ov-btn-slide-left">VER MAS</a>
        <Filtro />
                <h2>Lo más destacado</h2>
        <div className="contenedorZapas">

        <CardZapa className="z1"
        img={Nike}
        nombre="Nike"
        precio="$80.000"
        />

<CardZapa className="z2"
        img={Adidas}
        nombre="Adidas"
        precio="$60.000"
        />

<CardZapa className="z3"
        img={Puma}
        nombre="Puma"
        precio="$50.000"
        />

<CardZapa className="z4"
        img={Under}
        nombre="Under Armor"
        precio="$75.000"
        />
        </div>

        </>
        
    )
}

export default Main