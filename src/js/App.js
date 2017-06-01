import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <NavBar />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
