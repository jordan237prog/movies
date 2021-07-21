import React from 'react'
import ReactPaginate from 'react-paginate';

import Movie from '../../Components/Movie'
import {movies$} from '../../data/movies'
import './style.css'


function Home() {

  const [movies, setMovies] = React.useState(null)
  const [offset, setOffset] = React.useState(0)
  const [moviesPerPage, setMoviesPerPage] = React.useState(4)
  const [currentPageNumber, setCurrentPageNumber] = React.useState(0)

   React.useEffect(()=>{ 
     movies$.then(
       (results) => {
        setMovies(results)
      })
  },[]); 

  const pagesVisited = currentPageNumber * moviesPerPage

  const diaplayMovies = movies!==null && movies.slice(pagesVisited, pagesVisited + moviesPerPage)
    .map(movie => {
      return (
        <Movie 
          key={movie.id}
          movieData={movie}
          image="https://source.unsplash.com/user/c_v_r"
          setMovies={setMovies}
          movies={movies}
        />
      );
    });

    const pageCount = movies!==null && Math.ceil(movies.length / moviesPerPage);

    const changePage = ({selected}) => {
      setCurrentPageNumber(selected)
    }


  if (movies === null) {
      return  <div></div>;
    }
    return  (
    <div className='container'>
      <div className='movieContainer'> 
        {diaplayMovies}
      </div>
      <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          breakClassName={"break-me"}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={changePage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
    </div>
  ) 
  }



export default Home
