import React from 'react'

import './styles.css'

function Header() {
  return (
    <div className='headerContainer'>
      <div className="leftContent">
        <p exact to='/' className="movieTitle"> <strong>MOVIE</strong>UNIVERSE</p>
      </div>
      <div className="rightContainer">
      </div>
    </div>
  )
}

export default Header;
