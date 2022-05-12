# Assignment 2 - Web API.

Name: Kate O'Neill (20088535)

## Features.

 + Integrated log in into my movies app
 + Added sign up feature to my movies app
 + Added different styling to my log in and sign up views to have uniformity with my theme
 + Included Web API integration into my reactApp from getCredits and getSimilarMovies (which are parametersed URLs)
 + Included mongoose integration with my movies app
 + In postman made user registration and login possible
 + In postman also, you can see credits, similar movies, upcoming movies, current movies, popular tv shows and watch providers for specific movies

## Setup requirements.

My web app had difficulty running if mongo was also not running in background, the web api would throw errors and time out.

## API Configuration

If not already you are going to need to start a mongo server to get my api to connect to the db

I had to create an .env file with information as shown below

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=generic secret key
REACT_APP_TMDB_KEY=My API key
______________________

Also had to create .babelrc and .eslintr.json

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/populartv | GET | Gets a list of popular tv shows
- api/movies/tmdb/current | GET | Gets a list of current movies
- api/movies/tmdb/upcoming | GET | Get a list of upcoming movies
- api/movies/:movieid | GET | Get a movie
- api/movies/:movieid/credits | GET | Get credits for a movie
- api/movies/:movieid/similar | GET | Get similar movies
- api/users/?action=authenticate | POST | Authenticates that the user is in the database
- api/users/?action=register | POST | Register the user to the database


## Security and Authentication

One can access a number of pages without logging in. The homepage, upcoming and top rated pages are all publicly available. The individual movie pages as well as the favourites pages and now playing movies are all protected routes meaning you will be redirected to the login page. The login page is also accessible along the site header. Password validation is included in sign up to verify that you're entering the intended password as well as validation to ensure the password entered is 5 charachter with a number and capital letter. There is simple user examples in the user Model file and mongoose is used to create and validate users.

Protected routes are :
- /movies/favorites | favourites page
- /movies/:id | individual movie page
- /current | now playing movies page

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.
I began by adding the log in and sign up pages to my React App which integrate seamlessly with the login and register functionality on the Web API. I also made it so that a few of the views that were previously using tmdb links directly in the tmdb-api.js file in the react app were now pulling the data from the Web API. Views such as:-
- movie credits ( visible on /movies/:id)
- similar movies (visible on /movies/:id)
- upcoming movies (visible on /upcoming)
- current movies (visible on /current)

To integrate the web API and the React App was simple. I added the "proxy":"http://localhostt:8080" code to the package.json in the react app which seamlessy linked them together thus allowing me to complete further integration


## Independent learning (if relevant)

N/A 