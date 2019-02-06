import React, { Component } from 'react'
import { connect } from 'react-redux';

class List extends Component {
  renderComments = () => {
    return this.props.comments.map((comment, i) => {
      return <li key={i}>{comment}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(List)