import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProduct.css"

import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"

const ListProduct = () => {
  const [products, setProducts] = useState([]);


useEffect(() => {
  const getShoes = async () => {
    const q = query(collection(db, "shoes") , where("bestselling", "==", "yes"));
    const docs = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docs.push({...doc.data(), id:doc.id})
     
    });
    setProducts(docs)
  }
  getShoes()
}, [])
  return (
    <div>
      <h1>Lo más vendido</h1>
      <div className="Cards">
      {
      products.map((product) => (
        <div key={product.id}>
    
          <Link to={`detail/${product.id}`}>
            <CardProduct product={product} />
          </Link>

        </div>
      ))
      }

    </div>
    </div>

  );
};
export default ListProduct;