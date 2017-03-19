import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      polls: []
    };
  }

  componentWillMount() {
    axios.get('/api/v1/polls')
      .then(res => {
        this.setState({polls: res.data})
      })
      .catch(err => {
        throw err
      })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

App.propTypes = {
  polls: React.PropTypes.array
}
