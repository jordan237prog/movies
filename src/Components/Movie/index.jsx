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


function Movie({movieData, image, movies, setMovies}) {

  // const classes = useStyles();

  const { 
    id,
    title,
    category,
    likes,
    dislikes
  } = movieData

     const deleteMovie = (id)=>{
      const arr = _.remove(movies, (movie) => {
        return movie.id !== id;
      })

      setMovies(arr)
  } 

   return (

    <Card className='movieCard'>
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
        <div className="reactionCOntainer">
          <div onClick={() => { alert('Like') }} className="act">
            <ThumbUp/>
            <p className='actionText' >{likes}</p>
          </div>
          <div onClick={() => { alert('Dislike') }} className="act">
            <ThumbDown/>
            <p className='actionText' >{dislikes}</p>
            </div>
          
          
        </div>
        <Button onClick={() => {deleteMovie(id)}} variant="outlined" size="small" color="secondary">
          delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Movie
