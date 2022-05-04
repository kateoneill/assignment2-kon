import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../contexts/moviesContext";

export default function MovieCard({ movie, action }) { //note the change in this line
  const { favorites, addToFavorites, addToWatchlist} = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    addToWatchlist(movie);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#666c75' }}>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        
        title={
          <Typography variant="h5" component="p" sx={{color: 'white'}}>
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        component={Link}
        to={`/movies/${movie.id}`}
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
          
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" sx={{color: 'white'}}>
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" sx={{color: 'white'}}>
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
      </CardActions>
    </Card>
  );
}