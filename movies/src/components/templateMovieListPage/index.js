import React, { useState, useEffect } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import FilterMoviesCardRating from "../filterMoviesCardRating"
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Pagination from '../pagination';


function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("");
  const genreId = Number(genreFilter);

  const displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return m.vote_average >= ratingFilter
    });

    const handleRateChange = (type, value) => {
      if (type === "name") setNameFilter(value);
      else setRatingFilter(value);
    };

  const handleGenreChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
    <Grid container sx={{ padding: '30px', backgroundColor:'#45494f'}}>
      <Grid item xs={12} sx={{marginBottom: '40px'}}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={3}>
        
        <Grid key="find" item xs={12} sm={6} md={6} lg={4} xl={3}>
          <FilterCard
            onUserInput={handleGenreChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />

          <FilterMoviesCardRating
            onUserInput={handleRateChange}
            titleFilter={nameFilter}
            ratingFilter={ratingFilter}
          />
        </Grid>

        
        <MovieList action={action} movies={displayedMovies}></MovieList>

        {/* <Pagination action={action} movies={displayedMovies} ></Pagination> */}

      </Grid>
    </Grid>
      </> 
  );
}
export default MovieListPageTemplate;
