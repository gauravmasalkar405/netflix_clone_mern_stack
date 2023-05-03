import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { likedMovies } from "../routes/userRoutes";
import Card from "../components/Card";

import axios from "axios";

const MyList = () => {
  const [movies, setMovies] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.netflix.user);

  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isDesktopScreens = useMediaQuery("(min-width:1000px)");

  // to fetch likedmovies
  useEffect(() => {
    if (user.length !== 0) {
      getMovies();
    }
  }, [user]);

  //req to get likedMovies and we will call it in above useEffect after user is set
  const getMovies = async () => {
    const response = await axios.post(likedMovies, {
      email: user[0].email,
    });
    console.log("req made");
    if (response.data.status) {
      setMovies(response.data.user.likedMovies);
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ zIndex: "2", position: "fixed", top: "0" }}>
        <Navbar />
      </Box>
      <Typography
        variant="h1"
        sx={{
          ml: isMobileScreens ? "25px" : isTabletScreens ? "35px" : "50px",
          mt: isMobileScreens ? "20%" : isTabletScreens ? "13%" : "8%",
          mb: "1.5rem",
          fontSize: isMobileScreens
            ? "1.5rem"
            : isTabletScreens
            ? "2.1rem"
            : "2.4rem",
          fontWeight: "600",
          color: "white",
        }}
      >
        My Favourites
      </Typography>
      {movies && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            transition: "0.3s ease-in-out",
            ml: isMobileScreens ? "25px" : isTabletScreens ? "35px" : "50px",
            mr: isMobileScreens ? "25px" : isTabletScreens ? "35px" : "50px",
          }}
        >
          {movies.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </Box>
      )}
    </Box>
  );
};

export default MyList;
