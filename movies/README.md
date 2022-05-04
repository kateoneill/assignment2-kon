# Assignment 1 - ReactJS app.

Name: Kate O'Neill (20088535)

## Overview.

This is my movies app, including 4 movie lists on the homepage, upcoming, top rated and now playing. With each individual movie displaying basic details such as release date and genres as well as displaying acting credits and similar movie options. With individual cast details also showing their acting credits

### Features.
- Top Rated movie page
- Now playing page
- Basic UI changes (different colour background and menu bar )
- Got rid of more info button in favour of making the image poster click-through
- Credits pulled on to movie detail page
- Separate cast pages with cast information including a Material Ui List component to display birthday and place of birth as well as pulling their other acting credits.
- Similar movies pulled on to movie detail page and displayed using ImageList Material UI component
- Contained the movie posters on the Movie detail page using ImageList
- Pagination on the Movie List pages to only show 10 movies per page
- Changed the image on the filter movies card.
- Added a rating filter that displays movies rated above number chosen
- Pages have basic mobile responsivity 

## Setup requirements.

Non applicable

## API endpoints.

- People Details [ I used the name, biography, birthday and place of birth ] -- seen on /cast/:id
- Other credits for People [ I pulled the title and poster] -- seen on /cast/:id
- Top Rated movies -- seen on /top
- Now Playing movies -- seen on /current
- Similar movies being pulled on to the individual movie details pages -- seen on /movies/:id
- Movie Credits including the name, character name and images -- seen on /movies/:id

## Routing.

- /cast/:id -- displays individual cast information page
- /top -- displays top rated movies
- /current --displays current movies / movies now playing

## Independent learning 

### Pagination 
(src > components > movieList > index.js) -- visible on all movie list pages (homepage, upcoming, now playing, top rated) 
- installed react paginate (https://www.npmjs.com/package/react-paginate)
- followed this youtube tutorial ( https://www.youtube.com/watch?v=kMuRr53RjcE&t=1177s)

### New MUI Components
Read the material UI documentation (https://mui.com/)
- Incorporated Lists and ImageLists



