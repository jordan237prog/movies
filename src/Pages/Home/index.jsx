import React from 'react'

import Movie from '../../Components/Movie'

import './style.css'

function Home() {
  return (
    <div className='container'>
      <div className='movieContainer'>
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    </div>
  )
}

export default Home
