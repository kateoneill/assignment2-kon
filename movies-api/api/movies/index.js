import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import uniqid from 'uniqid';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingMovies, getCredits, getCurrentMovies, getOtherMovies } from '../tmdb-api';

const router = express.Router(); 
router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

// Get movie reviews
router.get('/:id/reviews', (req, res) => {
  const id = parseInt(req.params.id);
  // find reviews in list
  if (movieReviews.id == id) {
      res.status(200).json(movieReviews);
  } else {
      res.status(404).json({
          message: 'The resource you requested could not be found.',
          status_code: 404
      });
  }
});

router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  }));

  router.get('/tmdb/current', asyncHandler( async(req, res) => {
    const currentMovies = await getCurrentMovies();
    res.status(200).json(currentMovies);
  }));

  router.get('/:id/credits', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const actor = await getCredits(id);
    if (actor) {
        res.status(200).json(actor);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/similar', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getOtherMovies(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

export default router;