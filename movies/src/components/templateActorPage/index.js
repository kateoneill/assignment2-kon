import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateActorPage = ({ cast, children }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: cast.id }],
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles

  return (
    <>
      <Grid container spacing={5} sx={{ padding: "15px", backgroundColor:'#45494f' }}>
        <Grid item xs={12} md={4}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={2} sx={{ height: 780 }}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;