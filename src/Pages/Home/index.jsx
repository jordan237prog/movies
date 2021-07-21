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
  const [isCategoryActive, setIsCategoryActive] = React.useState(null)
  const [filteredMovies, setFilteredMovies] = React.useState(null)

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
         _.uniqBy(movies,  (movie) => {
          allCotegories.push(movie.category)
        })
       )
       //redre les categorie unique
      return allCotegories.filter((x, i) => allCotegories.indexOf(x) === i)
    }

    setCategories(getCategories());

  },[movies]);

  React.useEffect(()=>{
     const isActive = () => {
      const obj = {}
      categories !==null && _.forEach(categories, category => {
        obj[category] = true 
      })
      return obj
    }

    setIsCategoryActive(isActive())
  },[categories])

    React.useEffect(()=>{

      const filterMovies = () => {
      const obj = []
      movies !==null && _.forEach(movies, movie => {
        if(isCategoryActive[movie.category] === true ){
          obj.push(movie)
        } 
      })
      console.log(obj)
      return obj
    }
    setFilteredMovies(filterMovies())
  },[isCategoryActive, movies])

  const pagesVisited = currentPageNumber * moviesPerPage

  // Creation de la Pagination
  const diaplayMovies = movies!==null && filteredMovies.slice(pagesVisited, pagesVisited + moviesPerPage)
    .map(movie => {
      return (
        <Movie 
          key={movie.id}
          movieData={movie}
          image="https://source.unsplash.com/user/c_v_r"
          setMovies={setMovies}
          movies={movies}
          show={isCategoryActive}
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

    <div className='filterContainer'>
      {categories!== null && categories.map( category =>{
       return ( 
       <Filter
          isCategoryActive={isCategoryActive}
          setIsCategoryActive={setIsCategoryActive}
          category={category}
          key={category}
        />)
      })}
    </div>

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
