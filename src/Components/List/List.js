import React, { Component } from 'react'
import { connect } from 'react-redux';

class List extends Component {
  render() {
    return (
      <div>
        <h3>Comments</h3>
        <ul>
          {this.props.comments.map((comment, i) => {
            return <li key={i}>{comment}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(List)