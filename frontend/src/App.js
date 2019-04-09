import React, { Component } from 'react';
import './Style.css';
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  componentDidMount() {
    document.title = process.env.REACT_APP_NAME + " - Home";
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
