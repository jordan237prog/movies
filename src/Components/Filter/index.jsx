import React from 'react'

import './style.css'
function Filter({category, isCategoryActive, setIsCategoryActive}) {

  const [isActive, setIsActive] = React.useState(true)

   const activate = (isCategoryActive, category) =>{
      // console.log(category, isCategoryActive[category])
      isCategoryActive[category] = !( isCategoryActive[category])
      // console.log(isCategoryActive[category])
      setIsCategoryActive(isCategoryActive)
      setIsActive(isCategoryActive[category])
    }

  return (
      <div key={category}
        onClick={()=>{activate(isCategoryActive, category)}}  
        className={isActive===true? "activeFilter" : "categoryItem"}
      > 
        <p>{category}</p>
      </div>
  )
}

export default Filter
