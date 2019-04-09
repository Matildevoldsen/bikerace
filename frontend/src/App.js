import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    document.title = process.env.REACT_APP_NAME + " - Home";
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
