import React from 'react'

import Movie from '../../Components/Movie'
import {movies$} from '../../data/movies'
import './style.css'

 


function Home() {

  const [movies, setMovies] = React.useState(null)

   React.useEffect(()=>{ 
     movies$.then(
       (results) => setMovies(results)
     )
  },[])

  if (movies === null) {
      return  <div></div>;
    }
    return  (
    <div className='container'>
      <div className='movieContainer'>
        { 
           movies.map((movie)=>{ 
            return <Movie key={movie.id} movieData={movie}/>;
          })
        }
      </div>
    </div>
  ) 
  }



export default Home
