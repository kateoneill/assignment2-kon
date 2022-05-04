import React from "react";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ListItem, ListItemAvatar, List, ListItemText, Divider } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import Spinner from '../spinner'
import { getOtherMovies } from '../../api/tmdb-api';
import { useQuery } from "react-query";


const CastDetails= ({ cast }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["other", { id: cast.id }],
    getOtherMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const other = data.cast

  return (
    <>
      <Paper sx={{padding: '20px', backgroundColor:'#676e78', color:'white'}}>
        <Typography variant="h2" component="p">
          {cast.name}
        </Typography>
        <List sx={{maxWidth:'300px', backgroundColor:'#9197a1', marginBottom: '20px', marginTop: '20px'}}>
            <ListItem>
              <ListItemAvatar> <CakeIcon/> </ListItemAvatar>
              <ListItemText> {cast.birthday} </ListItemText>
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem>
              <ListItemAvatar> <LocationOnIcon/> </ListItemAvatar>
              <ListItemText> {cast.place_of_birth} </ListItemText>
            </ListItem>
        </List>
        <Typography variant="h5" component="h3" sx={{color:'white'}}>
          Biography
        </Typography>

        <Typography variant="h6" component="p" sx={{color:'white'}}>
          {cast.biography}
        </Typography>


        <Typography variant="h4" component="h3" sx={{color:'white', paddingTop: '20px'}}>
          Other Movie Credits
        </Typography>

        <ImageList item cols={3} sx={{ height: 780 }}>
        {other.map((otherMovie) => (
          <Paper key={otherMovie.name} sx={{ backgroundColor:'#676e78', padding:'15px', textDecoration:'none'}} component={Link} to={`/movies/${otherMovie.id}`}>
            <Typography sx={{color:"white"}} variant="h5" label={otherMovie.original_title} > {otherMovie.original_title} </Typography>                  
            <ImageListItem key={otherMovie.name} >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${otherMovie.poster_path}`}
                  alt={otherMovie.poster_path}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageListItem>
          </Paper>
        ))}
    </ImageList>
      </Paper>    
    </>
  );
};

export default CastDetails ;