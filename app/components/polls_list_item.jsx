import React, { Component } from 'react'

class PollsListItem extends Component {

  constructor(props){
    super(props)
  }

  renderOptions() {
    return this.props.poll.poll_options.map((option) => {
      return (
        <li key={option._id} className="poll-option">{option.option}</li>
      )
    })
  }

  render() {
    return (
        <li onClick={() => this.props.onPollSelect(this.props.poll)} className="polls-list">
          <div className="poll-stimulus">{this.props.poll.poll_stimulus}</div>
          <ul className="options-list">{this.renderOptions()}</ul>
        </li>
    )
  }
}

PollsListItem.propTypes = {
  poll: React.PropTypes.object,
  onPollSelect: React.PropTypes.func
}

export default PollsListItem
