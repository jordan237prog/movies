import React from 'react'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import Movie from '../../Components/Movie'
import Filter from '../../Components/Filter'
import {movies$} from '../../data/movies'
import './style.css'


function Home() {

  const [movies, setMovies] = React.useState(null)
  const [moviesPerPage, setMoviesPerPage] = React.useState(4)
  const [currentPageNumber, setCurrentPageNumber] = React.useState(0)
  const [categories, setCategories] = React.useState(null);
  const [isCategoryActive, setIsCategoryActive] = React.useState(true)

   React.useEffect(()=>{ 
    // récupéreration de tous les films,
    movies$.then(
      (results) => {
      setMovies(results)
    })
    
    //récupéreration de tous les catégories de films, puis les filtrer pour éviter la redondance de catégories
    const getCategories = ()=>{
     const allCotegories = []
      movies!==null && ( 
        _.forEach(movies, movie => {
          allCotegories.push(movie.category)
        })
       )
      return _.sortedUniq(allCotegories)
    }

    setCategories(getCategories());

  },[movies]);


  console.log(categories)

  const pagesVisited = currentPageNumber * moviesPerPage

  // Creation de la Pagination
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

    //nombre de page a afficher
    const pageCount = movies!==null && Math.ceil(movies.length / moviesPerPage);

    //changer de page
    const changePage = ({selected}) => {
      setCurrentPageNumber(selected)
    }


  if (movies === null) {
      return  <div></div>;
    }
    return  (
    <div className='container'>
      <Filter
        isCategoryActive={isCategoryActive}
        setIsCategoryActive={setIsCategoryActive}
        categories={categories}
      />
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
