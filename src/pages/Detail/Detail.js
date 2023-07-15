import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { collection, query, documentId, getDocs, where} from "firebase/firestore";
import { db } from "../../Componentes/firebase/firebaseConfig"
import CardProduct from "../../Componentes/CardProduct/CardProduct";
import { useCart } from "../../Context/CartContext/CartContext"
import { ItemCount } from "../../Componentes/ItemCount/ItemCount";



const Detail = () => {
  const [product, setProduct] = useState([]);
  console.log(product)
  const { id } = useParams();

const { addToCart } = useCart()

const add = (cantidad) => {
  addToCart(product, cantidad);
};




  useEffect(() => {
    const getShoes = async () => {
      const q = query(collection(db, "shoes") , where(documentId(), "==", id));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id})
       
      });
      setProduct(docs)
    }
    getShoes()
  }, [id])

  return (
    <div>       
      {product.map((data)=> {
        return  (
          <div key={data.id}>
          <CardProduct product={data} />
          <ItemCount onAdd={add} initial={1} />

          
         
       </div>
        )
         
      })} 
   
    </div>

  );
};

export default Detail;