import React, { Component } from 'react';


import NavBar from './Components/NavBar/NavBar';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <NavBar />
        <Routes />
        </header>
      </div>
    );
  }
}

export default App;
