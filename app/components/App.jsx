import React, { Component } from 'react';
import axios from 'axios';
import PollsList from './polls_list.jsx'

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
      <div>
        <PollsList polls={this.state.polls} />
      </div>
    );
  }
}

App.propTypes = {
  polls: React.PropTypes.array
}
