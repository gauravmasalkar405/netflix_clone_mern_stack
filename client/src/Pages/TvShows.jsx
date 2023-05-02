import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery, Box } from "@mui/material";
import { fetchMovies, getGenres } from "../app/store";
import NotAvailable from "../components/NotAvailable";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SelectredGenre from "../components/SelectredGenre";

const TvShows = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isDesktopScreens = useMediaQuery("(min-width:1000px)");
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  // calling getGenres on first render
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
    console.log(movies);
  }, [genresLoaded]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ zIndex: "2", position: "fixed", top: "0" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          mt: isMobileScreens ? "20%" : "8%",
        }}
      >
        <SelectredGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </Box>
    </Box>
  );
};

export default TvShows;
