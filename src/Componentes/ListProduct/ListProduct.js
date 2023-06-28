import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProduct.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((product) => {
        if(categoryId){
          const filteredProducts = product.filter((product) => product.brand === categoryId)
          console.log(filteredProducts)
          setProducts(filteredProducts)
        }else{
          setProducts(product)
        }
      });
  }, [categoryId]);

  return (
    <div className="Cards">
      {products.length==0
      ?
      <h1>Loading..</h1>
      :
      products.map((product) => (
        <div key={product.id}>
          <Link to={`detail/${product.id}`}>
            <CardProduct product={product} />
          </Link>

        </div>
      ))
      }

    </div>
  );
};
export default ListProduct;