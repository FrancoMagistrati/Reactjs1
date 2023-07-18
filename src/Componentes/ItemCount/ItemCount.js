
import {useState} from 'react'
import "./ItemCount.css"
export const ItemCount = ({ onAdd, initial }) => {
  const [contador, setContador] = useState(initial);

  const aumentarCantidad = () => {
    setContador(contador + 1);
  };

  const disminuirCantidad = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className='buttonCount'>
      <span>{contador}</span>
      <button className='buttonRestar'onClick={disminuirCantidad}>-</button>
      <button className='buttonAgregar'onClick={() => onAdd(contador)}>Agregar al carrito</button>
      <button className='buttonSumar' onClick={aumentarCantidad}>+</button>
    </div>
  );
}
