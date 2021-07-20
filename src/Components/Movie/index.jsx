import React from 'react'
import './style.css'

function Movie({movieData}) {

  const { 
    id,
    title,
    category,
    likes,
    dislikes
  } = movieData

   return (
    <div className='movieItemContainer'>
      <p>ID: {id}</p>
      <p>title: {title} </p>
      <p> category: {category} </p>
      <p> likes: {likes} </p>
      <p> dislikes: {dislikes} </p>
    </div>
  )
}

export default Movie
