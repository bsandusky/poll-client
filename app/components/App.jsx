import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.jsx'
import PollsList from './polls_list.jsx'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      polls: [],
      selectedPoll: null
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
        <Header />
        <PollsList
          polls={this.state.polls}
          onPollSelect={ selectedPoll => this.setState({ selectedPoll })}
          />
      </div>
    );
  }
}

App.propTypes = {
  polls: React.PropTypes.array,
  selectedPoll: React.PropTypes.object
}
