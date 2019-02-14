import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from 'Redux/Actions'

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {this.props.auth && 
          <li>
            <Link to='/post'>Post</Link>
          </li>
        }
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          {this.props.auth ? (
            <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
          ) : (
            <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
          )}
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, actions)(Header)