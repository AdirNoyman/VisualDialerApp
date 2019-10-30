import React, { Component } from 'react';
import NavBar from './NavBar';
import DogList from './DogList';
import './App.css';


class App extends Component {


  render() {

    return (
      <div>
        <NavBar className="nav" />
        <div className="container">
          <DogList />
        </div>
      </div>
    );
  }
}

export default App;
