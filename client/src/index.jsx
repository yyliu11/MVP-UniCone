import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }


  render () {
    return (<div>
      <h1>Welcome!</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));