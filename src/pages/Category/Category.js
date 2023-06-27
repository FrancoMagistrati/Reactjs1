import { useState, useEffect } from "react";

import CardProduct from "../../Componentes/CardProduct/CardProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../Componentes/Header/Header"
import Footer from "../../Componentes/Footer/Footer"
import "./Category.css"

const Category = () => {
  
    const [products, setProducts] = useState([]);
    let {categoryId} = useParams();
    const [buttonText, setButtonText] = useState("Agregar");


    console.log(categoryId)
    let filterBrand = products.filter((product) => {
        return product.brand === categoryId;
      });
      console.log("Filtro",filterBrand)
      useEffect(() => {
        fetch("/products.json")
          .then((response) => response.json())
          .then((product) => setProducts(product));

      }, []);


    

      return (
        
        <div>
          
     <header>
    <Header />
  </header>
  <div className="Cards">
          {filterBrand.map((product) => {
            return (
              <div style={{ margin: 10 }} key={product.id}>
                  <CardProduct product={product} buttonText={buttonText} />
              </div>
            );
          })}
        </div>
        <footer>
        <Footer />
        </footer>
        </div>

      );

}




export default Category