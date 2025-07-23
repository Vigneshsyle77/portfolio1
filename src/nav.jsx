import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to ='/home'>Bio</Link></li>
            <li><Link to ='/about'>Achievements</Link></li>
            {/* <li><Link to ='/contact'>Experience</Link></li>
        */}</ul>
    </nav>
  )
}

export default Navbar