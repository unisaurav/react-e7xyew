import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Routerclass from './Routerclass'
import './style.css';
import Header from './Header'

class App extends Component {
  


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Routerclass />, document.getElementById('root'));
