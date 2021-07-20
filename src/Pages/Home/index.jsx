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
             var image = "https://source.unsplash.com/user/c_v_r"
            return <Movie key={movie.id} movieData={movie} image={image}/>;
          })
        }
      </div>
    </div>
  ) 
  }



export default Home
