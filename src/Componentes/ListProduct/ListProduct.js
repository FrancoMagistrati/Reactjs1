import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProduct.css";
import Spinner from "../Spinner/Spinner";

import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getShoes = async () => {
      const q = query(collection(db, "shoes"), where("bestselling", "==", "yes"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
      setIsLoading(false);
    };
    getShoes();
  }, []);

  return (
    <div>
      <h1>Lo más vendido</h1>
      <div className="Cards">
        {isLoading ? (
          <Spinner /> // Render the spinner while loading
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <Link to={`detail/${product.id}`}>
                <CardProduct product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListProduct;
