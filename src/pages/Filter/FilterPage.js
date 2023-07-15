import { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";
import { collection, query, getDocs, where} from "firebase/firestore";
import { db } from "../../Componentes/firebase/firebaseConfig"
import CardProduct from "../../Componentes/CardProduct/CardProduct";
import "./FilterPage.css"

const Filter = () => {
  const [product, setProduct] = useState([]);


  const { brand } = useParams();

  useEffect(() => {
    const getShoes = async () => {
      const q = query(collection(db, "shoes") , where("brand", "==", brand));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id})
       
      });
      setProduct(docs)
    }
    getShoes()
  }, [brand])

  return (
    <div className="filtro">       
      {product.map((data)=> {
        return  (
          <div className="cardsProduct" key={data.id}>
         <Link to={`/detail/${data.id}`} style={{ width: '100%' }}>
          <CardProduct product={data} />
        </Link>
  

       </div>
        )
         
      })} 
   
    </div>

  );
};

export default Filter;