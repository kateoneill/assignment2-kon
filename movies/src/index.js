import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage"; 
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage.js";
import ActorPage from "./pages/actorDetailsPage";
import SiteHeader from './components/siteHeader';
import UpcomingMovies from './pages/upcomingMovies';
import TopMovies from './pages/topMovies';
import CurrentMovies from './pages/currentMovies';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";

import LoginPage from "./pages/loginPage";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />
        <AuthProvider>
          <AuthHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route element={<ProtectedRoutes/>}>
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            </Route>
            <Route path="/upcoming" element={<UpcomingMovies />} />
            <Route path="/top" element={<TopMovies />} />
            <Route path="/current" element={<CurrentMovies />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/cast/:id" element={<ActorPage />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={ <SignUpPage /> } />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));