import React from 'react' 
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/post'>Post</Link>
    <Link to="/comments">Comments</Link>
  </div>
)

export default Header