import { useState } from "react";
import "./Shop.css";  
import { collection, addDoc} from "firebase/firestore";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useCartContext } from '../../Context/CartContext/CartContext';
import { db } from "../../Componentes/firebase/firebaseConfig"
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  lastname: "",
  email: "",
};

const StyledTextField = styled(TextField)({
  width: '20%',
  marginBottom: '10px',
  border: "1px solid #ccc"
});

const Shop = () => {
  const [values, setValues] = useState(initialState);
  const [purcharseID , setPurchaseID] = useState(null)
  const { cart, CartEmpty, removeItem, Total, CartAfterShop } = useCartContext();
  const navigate = useNavigate();
  const [formError, setFormError] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Verificar si los campos del formulario están completos
    if (values.name === "" || values.lastname === "" || values.email === "") {
      setFormError(true);
      return;
    }

    const docRef = await addDoc(collection(db, "purcharseCollection"), {
      name: values.name,
      lastname: values.lastname,
      email: values.email,
      cart: cart,
      total: Total()
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
    navigate(`/message/${docRef.id}`);
    CartAfterShop()
  };

  if (cart.length === 0) {
    return (
      <div>
        <h1>Tu carrito está vacío</h1>
        <p>Agrega productos a tu carrito para continuar</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="container">
          {cart.map((product, id) => (
            <div key={id} className="listaItems">
              <div className="imgItem ">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="descriptionItem">
                <span>{product.name}</span>
              </div>
              <div className="priceItem">
                <span>${product.price} </span>
              </div>
              <div className="qty">
                <span>Cantidad: {product.qty}</span>
              </div>
              <div className="eliminar">
                <button onClick={() => removeItem(product.id)}>X</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total:${Total()}</span>
          </div>
          <div className="botones">
            <button className="VaciarButton" onClick={CartEmpty}>
              Vaciar
            </button>
          </div>
        </div>

        <div>
          <h2>Completa tus datos para finalizar la compra</h2>
          {formError && <p>Por favor, completa todos los campos del formulario.</p>}
          <form className="formulario" onSubmit={onSubmit}>
            <StyledTextField
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleOnChange}
              className={values.name === "" && formError ? "error" : ""}
            />
            <StyledTextField
              placeholder="lastname"
              name="lastname"
              value={values.lastname}
              onChange={handleOnChange}
              className={values.lastname === "" && formError ? "error" : ""}
            />
            <StyledTextField
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleOnChange}
              className={values.email === "" && formError ? "error" : ""}
            />
            <button type="submit">Comprar</button>
          </form>
        </div>
      </>
    );
  }
};

export default Shop;
