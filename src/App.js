import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
