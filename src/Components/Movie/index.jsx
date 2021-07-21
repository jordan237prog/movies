import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import _ from 'lodash';

import './style.css'


function Movie({movieData, image, movies, setMovies, show}) {

  const [reacted, setReacted] = React.useState(null) 
  const [display, setDisplay] = React.useState(null) 
  
  const { 
    id,
    title,
    category,
    likes,
    dislikes
  } = movieData

  React.useEffect(() => {
    setDisplay(show[category])
   
  }, [show, category])

  

  const deleteMovie = (id)=>{
    const arr = _.remove(movies, (movie) => {
      return movie.id === id;
    })
    setMovies(arr)
  } 


  const likeMovie = (id) => {
      const arr =  _.forEach(movies, movie => {
        if(movie.id === id){
          if(reacted === null){
            setReacted(true)
            movie.likes = movie.likes + 1 
            return movies
          }
          if(reacted === false){
            setReacted(true)
            movie.dislikes = movie.dislikes - 1 
            movie.likes = movie.likes + 1 
            return movies
          }
          if(reacted === true){
            setReacted(null)
            movie.likes = movie.likes - 1 
            return movies
          }
        }
      })
      setMovies(arr)
      // console.log(movies)
  }

  const dislikeMovie = (id) => {
      const arr =  _.forEach(movies, movie => {
        if(movie.id === id){
          if(reacted === null){
            setReacted(false)
            movie.dislikes = movie.dislikes + 1 
            return movies
          }
          if(reacted === true){
            setReacted(false)
            movie.dislikes = movie.dislikes + 1 
            movie.likes = movie.likes - 1 
            return movies
          }
          if(reacted === false){
            setReacted(null)
            movie.dislikes = movie.dislikes - 1 
            return movies
          }
        }
      })
      setMovies(arr)
      // console.log(movies)
  }


  return (
    <Card className={display === true ? 'movieCard': "dontshow"}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='actionCard'>
        <div className={reacted=== null ? "reactionCOntainer" : "reactedCOntainer"}>
          <div onClick={() => {likeMovie(id)}} className= { reacted===true? "like": "act"}>
            <ThumbUp/>
            <p className='actionText' >{likes}</p>
          </div>
          <div onClick={ () => {dislikeMovie(id)} } className= { reacted===false? "like": "act"}>
            <ThumbDown/>
            <p className='actionText' >{dislikes}</p>
            </div>
          
        </div>
        <Button onClick={() => {deleteMovie(id)}} variant="outlined" size="small" color="secondary">
          supprimer
        </Button>
      </CardActions>
    </Card>
  )
}

export default Movie
