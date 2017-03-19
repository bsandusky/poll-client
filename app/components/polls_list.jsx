import React, { Component } from 'react';
import PollsListItem from './polls_list_item.jsx'

class PollsList extends Component {

  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.polls.map((poll) => {
      return (
        <PollsListItem key={poll._id} poll={poll} />
      )
    })
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}

PollsList.propTypes = {
  polls: React.PropTypes.array
}

export default PollsList