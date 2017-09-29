import React, { Component } from 'react';
import './App.css';
import './style/antd.css'

import ComponentHeader from './js/components/header';
import ComponentBodyIndex from './js/components/indexBody';
import ComponentFooter from './js/components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentHeader/>
        <ComponentBodyIndex userId={123456} />
          <div>
              {this.props.children}
          </div>
        <ComponentFooter/>
      </div>
    );
  }
}

export default App;
