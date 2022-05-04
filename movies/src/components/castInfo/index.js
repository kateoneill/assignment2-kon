import React from "react";
import Typography from "@mui/material/Typography";
import Spinner from '../spinner'
import { getCredits } from '../../api/tmdb-api';
import { useQuery } from "react-query";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { ImageListItemBar } from "@mui/material";


const CastInfo = ({ movie }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["cast", { id: movie.id }],
    getCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const cast = data.cast

  return (

    <Grid container spacing={5} sx={{ padding: "15px", backgroundColor:'#45494f' }}>
      <ImageList item cols={3} sx={{ height: 780 }}>
        {cast.map((castMember) => (
              <Paper key={castMember.name} sx={{ backgroundColor:'#676e78', padding:'15px', textDecoration:'none'}} component={Link} to={`/cast/${castMember.id}`}>
                <Typography sx={{color:"white", textDecoration:'none'}} variant="h5" label={castMember.name} > {castMember.name} </Typography>
                <Chip sx={{ backgroundColor:"#ed6c02bd", color:"white", marginTop: "10px", marginBottom: "10px" }} variant="h6" label={castMember.character}/>
                  <ImageListItem key={castMember.name}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`}
                      alt={castMember.profile_path}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </ImageListItem>
              </Paper>
        ))}
        </ImageList>
      </Grid>

  );
};

export default CastInfo;