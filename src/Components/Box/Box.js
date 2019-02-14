import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from 'Components/requireAuth'
import * as actions from 'Redux/Actions'

class Box extends Component {
  state = {
    comment: ''
  }

  textareaChange = (e) => {
    this.setState(({ comment: e.target.value }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Call action
    this.props.saveComment(this.state.comment)
    this.setState(({ comment: '' }))
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h3>Add Comment</h3>
        <textarea value={this.state.comment} onChange={this.textareaChange}/>
        <div>
          <button>Submit me</button>
        </div>
      </form>
        <button className="fetch-btn" onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    )
  }
}

export default connect(undefined, actions)(requireAuth(Box))