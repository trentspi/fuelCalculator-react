import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 100,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const NavBar = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default NavBar;
