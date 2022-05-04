import React from "react";
import Typography from "@mui/material/Typography";
import Spinner from '../spinner'
import { getSimilar } from '../../api/tmdb-api';
import { useQuery } from "react-query";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";


const SimilarMovies = ({ movie }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["similar", { id: movie.id }],
    getSimilar
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const similar = data.results

  return (

    <ImageList item cols={3} sx={{ height: 780 }}>
        {similar.map((similarMovie) => (
          <Paper key={similarMovie.name} sx={{ backgroundColor:'#676e78', padding:'15px', textDecoration:'none'}} component={Link} to={`/movies/${similarMovie.id}`}>
            <Typography sx={{color:"white"}} variant="h5" label={similarMovie.original_title} > {similarMovie.original_title} </Typography>                  
            <ImageListItem key={similarMovie.name} >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${similarMovie.poster_path}`}
                  alt={similarMovie.poster_path}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageListItem>
          </Paper>
        ))}
    </ImageList>

  );
};

export default SimilarMovies;