import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, documentId, getDocs, where } from "firebase/firestore";
import { db } from "../../Componentes/firebase/firebaseConfig"

import { useCartContext } from "../../Context/CartContext/CartContext"
import { ItemCount } from "../../Componentes/ItemCount/ItemCount";
import "./Detail.css"

const Detail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCartContext();

  const add = (cantidad) => {
    addToCart(...product, cantidad);
  };

  useEffect(() => {
    const getShoes = async () => {
      const q = query(collection(db, "shoes"), where(documentId(), "==", id));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setProduct(docs)
    }
    getShoes()
  }, [id])



  return (
    <div>
      {product.map((data) => {
        return (
          <div key={data.id} className="contenedor">
            <div className="a1">
              <img src={data.img} alt={data.name} />
            </div>
            <div className="a2">
              <span className="detalle">{data.name}</span>
              <span className="description">{data.descripcion}</span>
              <span className="detalle2">Precio: ${data.price}</span>
              <div>
              <ItemCount onAdd={add} initial={1} />
              </div>
            </div>

          </div>
        )
      })}
    </div>
  );
};

export default Detail;
