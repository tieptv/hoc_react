import React, { Component } from 'react';
import ButtonComponent from '../src/components/buttonComponent';
import ImageComponent from '../src/components/imageComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <ButtonComponent/>
      <ImageComponent/>
  </div>
    );
  }
}

export default App;
