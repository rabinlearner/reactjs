import React, { Component } from 'react';

import './App.css';
import './Style/style.css';
import Routess from './route';
import { MyProvider } from './context';

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Routess />
        </div>
      </MyProvider>

    )
  }
}
export default App;