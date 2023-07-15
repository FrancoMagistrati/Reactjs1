
import {useState} from 'react'

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
    <div>
      <button onClick={disminuirCantidad}>-</button>
      <span>{contador}</span>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
      <button onClick={aumentarCantidad}>+</button>
    </div>
  );
}
