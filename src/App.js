import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MainRouter from './routes/MainRouter.js';
import './App.css';
import Header from './components/header/Header';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header className="App-header"/>
          <div className="Content" >
            <MainRouter/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
