import React, { Component } from 'react';
import './App.css';
import QuantityList from '../src/QuantityCoversion/QuantityList';


class  App extends Component {
  
  render(){
  return (
    <div className="App">
      
      <div>
        <h2>Welcome To Quantity-Conversion App</h2>
      </div>
      <br/>
      <div>
        <QuantityList/>
      </div>
    </div>
  );
 }
}

export default App;
