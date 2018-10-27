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
// What I learned from this project with using redux. If you use connect on the main App for redux while using HashRouter, it will cause HashRouter to not operate properly since the app is encompassed by Redux twice is my theory.
// Therefore, you need to use redux only in children of the main app.