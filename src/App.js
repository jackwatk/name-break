import React, { Component } from 'react';
import Canvas from './components/canvas'
import watkins from './images/watkins.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas imgURL={watkins}/>
      </div>
    );
  }
}

export default App;
