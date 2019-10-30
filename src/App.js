import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';


class App extends Component {


  render() {

    return (
      <div>
        <NavBar className="nav" dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
