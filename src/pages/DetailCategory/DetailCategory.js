import { useState, useEffect } from "react";


import CardProduct from "../../Componentes/CardProduct/CardProduct";

import { useParams } from "react-router-dom";
import Header from "../../Componentes/Header/Header"
import Footer from "../../Componentes/Footer/Footer"


const Detail = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  console.log("productos",product);

  useEffect(() => {
    const getProducts = () => {
      fetch(`/products.json`)
        .then((response) => response.json())
        .then((producto) =>
          setProduct(producto.find((el) => el.id === parseInt(id)))
        );
    };
    getProducts();
  }, [id]);

  return (  
    <div>
                     <header>
          <Header />
        </header>
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {product.id ? <CardProduct product={product} /> : null}
    </div>
    <footer>
        <Footer />
        </footer>
    
    </div>

  );
};

export default Detail;
