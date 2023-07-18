import{ createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext();
export const useCartContext = () => useContext (CartContext);

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);


  const mostrarMensaje = () =>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Agregaste el producto al carrito'

    })
  }
  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const addToCart =(item, qty) =>{
    mostrarMensaje();
    if(isInCart(item.id)){
      setCart (cart.map(product =>{
        return product.id === item.id ?{...product,qty:product.qty + qty} : product
      }));

    }else{
      setCart ([...cart,{...item,qty}]);
    }
  }

  const CartEmpty = () =>{
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se borrara todo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
      }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);

          Swal.fire(
        'Borrado',
        'El carrito fue vaciado',
        'success'
        )
      }
      })

  }

  const CartAfterShop = () =>{
    
        setCart([]);



  }

  const removeItem = (id) =>{
    setCart(cart.filter((product)=>product.id !== id));

  }

  const CartQuantity = () =>{
    if(cart == 0){
      return ""
    }else{
      return cart.reduce((acc, product) => acc += product.qty, 0)
    }
   
  }
  const Total = () => {return cart.reduce((acc, e) => acc += e.price * e.qty, 0)}

  return (
    <CartContext.Provider value={{cart, addToCart, CartEmpty, removeItem, CartQuantity, Total,CartAfterShop }}>
      {children}
    </CartContext.Provider>
  );
};