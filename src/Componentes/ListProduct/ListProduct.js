import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProduct.css"
import { Link } from "react-router-dom";
const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((product) => setProducts(product));
  }, []);

  return (
    <div className="Cards">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`detail/${product.id}`}>
          <CardProduct product={product} />
          </Link>

        </div>
      ))}
    </div>
  );
};
export default ListProduct;