import React, { Component } from 'react';
import "./App.css"
import Header from "./Componentes/Header/Header"
import Main from "./Componentes/Main/Main"
import Footer from "./Componentes/Footer/Footer"


class App extends Component{
  render()  {
    return(
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
        <Footer />
        </footer>
      </div>

    )
  }
}

export default App