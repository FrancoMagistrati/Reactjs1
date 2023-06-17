import { useState, useEffect } from "react";

import CardProduct from "../../Componentes/CardProduct/CardProduct";

import { useParams } from "react-router-dom";

import "./Detail.css"

const Detail = () =>{
    const [product, setProduct] = useState({})

    let {id} = useParams();
  

    useEffect(() => {
        fetch(`/products.json${id}`)
          .then((response) => response.json())

          .then((product) => setProduct(product));
          console.log("productos", product)
      }, [id]);

      return (
        <div className="Cards">
          { product.id ? <CardProduct product={product} /> : null}
        </div>
      );
}

export default Detail