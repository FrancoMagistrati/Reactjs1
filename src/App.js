import React, { Component } from 'react';
import "./App.css"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import Category from "./pages/Category/Category"

class App extends Component{
  render()  {
    return(
      <Router>
      <div className="App">

        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/category/:categoryId" element={<Category />} />

        </Routes>
        </main>

      </div>
      </Router>


    )
  }
}

export default App