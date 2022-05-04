import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/film.jpeg';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { alignProperty } from "@mui/material/styles/cssUtils";

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterMoviesCardRating(props) {
    const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All"){
      genres.unshift({ id: "0", name: "All" });
    }
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };

    const handleRateChange = (e, props) => {
      handleChange(e, "vote_average", e.target.value);
    };

    
  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "#ed6c02bd"
      }} 
      variant="outlined">
      <CardContent>
        <TextField 
            sx={{...formControl}}
            id="filled-number"
            label="Movie Rating"
            type="number"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            variant="filled"
            value={props.ratingFilter}
            onChange={handleRateChange}
    />

      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
    </Card>
  );
}