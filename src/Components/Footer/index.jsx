import React from 'react'

import  './styles.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='leftContent'>
        <p>©  Movie Universe</p>
      </div>
      <div className='rightContent'>
        <div className="item">
          <p>Politique</p>
        </div>
        <div className="item getBorder">
          <p>Conditions</p>
        </div>
        <div className="item getBorder">
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
