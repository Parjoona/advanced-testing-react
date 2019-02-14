import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/post'>Post</Link>
    </li>
    <li>
      <Link to="/comments">Comments</Link>
    </li>
    <li>
      {props.auth ? (
        <button>Sign out</button>
      ) : (
        <button>Sign in</button>
      )}
    </li>
  </ul>
)

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header)