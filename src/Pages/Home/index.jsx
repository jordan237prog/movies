import React from 'react'
import ReactPaginate from 'react-paginate';

import Movie from '../../Components/Movie'
import {movies$} from '../../data/movies'
import './style.css'


function Home() {

  const [movies, setMovies] = React.useState(null)
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
          previousLabel={"précédent"}
          nextLabel={"suivantes"}
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
       <div className="numberOfItems" >
          <p >Movies to display per page </p>
          <strong className={moviesPerPage===4? 'activeNumber' : 'disabledNumber' } onClick={ () => {setMoviesPerPage(4)} } >4</strong> 
          <strong className={moviesPerPage===8? 'activeNumber' : 'disabledNumber' } onClick={ () => {setMoviesPerPage(8)} } >8</strong>
          <strong className={moviesPerPage===12? 'activeNumber' : 'disabledNumber' } onClick={ () => {setMoviesPerPage(12)} } >12</strong>
       </div>
    </div>
  ) 
  }



export default Home
