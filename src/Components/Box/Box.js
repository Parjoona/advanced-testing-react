import React, { Component } from 'react'

export default class Box extends Component {
  state = {
    comment: ''
  }

  textareaChange = (e) => {
    this.setState(({ comment: e.target.value }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Call action
    this.setState(({ comment: '' }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea value={this.state.comment} onChange={this.textareaChange}/>
        <div>
          <button>Submit me</button>
        </div>
      </form>
    )
  }
}
