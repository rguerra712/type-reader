import React, { Component } from 'react';
import logo from './logo.svg';
import { ConfigConsumer } from '../components/ConfigProvider';
import './App.css';
import { TextToRead } from '../components/TextToRead';

class App extends Component {
  render() {
    return (
      <ConfigConsumer>
        { config => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Type your text below to talk</h1>
            </header>
            <TextToRead />
          </div>
        )}
      </ConfigConsumer>
    );
  }
}

export default App;
