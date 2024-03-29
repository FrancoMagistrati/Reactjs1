import React, { Component } from 'react';
import "./App.css"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail/Detail"

import ListProduct from './Componentes/ListProduct/ListProduct';
import Footer from './Componentes/Footer/Footer';
import Header from "./Componentes/Header/Header"
import MessagePage from './pages/MessagePage/MessagePage';
import FilterPage from "./pages/Filter/FilterPage"
import Shop from "./pages/Shop/Shop"
import { CartProvider } from './Context/CartContext/CartContext';


class App extends Component{
  render()  {
    return(
      <>
      <Router>
        <CartProvider>
      <div className="App">
        <header>
          <Header />
        </header>
      
        <main>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/category/:brand" element={<FilterPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/message/:id' element={<MessagePage />} />

        </Routes>
        </main>

        <Footer/>

      </div>
      </CartProvider>
   
      </Router>
      </>
    )
  }
}

export default App