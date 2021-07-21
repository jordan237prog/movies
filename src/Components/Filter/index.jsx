import React from 'react'

import './style.css'
function Filter({categories, isCategoryActive, setIsCategoryActive}) {

  const filter = categories.map(category =>{
    return(
      <div
        onClick={()=>{setIsCategoryActive(!isCategoryActive)}}  
        className={isCategoryActive? "activeFilter" : "categoryItem"}
      >
        <p>{category}</p>
      </div>
    )
  })
  return (
    <div className='filterContainer'>
      {filter}
    </div>
  )
}

export default Filter
