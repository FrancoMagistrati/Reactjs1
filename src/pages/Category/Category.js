import { useState, useEffect } from "react";

import CardProduct from "../../Componentes/CardProduct/CardProduct";

import { useParams } from "react-router-dom";

import "./Category.css"

const Category = () => {
    const [products, setProducts] = useState([]);
    let {categoryId} = useParams();
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
        <div className="Cards">
          {filterBrand.map((product) => {
            return (
              <div style={{ margin: 10 }} key={product.id}>
                <CardProduct product={product} />
              </div>
            );
          })}
        </div>
      );

}
export default Category