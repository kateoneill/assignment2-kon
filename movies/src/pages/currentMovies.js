import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getCurrentMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const CurrentMovies = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('now_playing', getCurrentMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  // const addToPlaylist = (movieId) => true 

  return (
    <PageTemplate
      title='Now Playing'
      movies={movies}
      action={(movie) => {
        // return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default CurrentMovies;