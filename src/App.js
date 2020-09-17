import React from 'react';
import './App.css';
import NavBar from "./components/navBar";
import QuantityPicker from './components/quantityPicker';

import Todo from "./components/todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';


function App() {

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="App container-fluid">
        <h1>Hello React!</h1>

        <QuantityPicker></QuantityPicker>
      </div>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
