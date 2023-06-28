import React, { Component } from 'react';
import "./App.css"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail/Detail"

import ListProduct from './Componentes/ListProduct/ListProduct';
import Footer from './Componentes/Footer/Footer';
import Header from "./Componentes/Header/Header"
import Filtro from './Componentes/NavBar/Filtro';

class App extends Component{
  render()  {
    return(
      <>
      <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <Filtro />
        <main>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/category/:categoryId" element={<ListProduct />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        </main>

        <Footer/>

      </div>
      </Router>
      </>
    )
  }
}

export default App