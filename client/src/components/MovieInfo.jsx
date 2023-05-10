import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";

const MovieInfo = () => {
  const navigate = useNavigate();
  const movieInfo = useSelector((state) => state.netflix.movieInfo);

  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isDesktopScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ zIndex: "2", position: "fixed", top: "0" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: isMobileScreens ? "20%" : isTabletScreens ? "13%" : "8%",
          ml: isMobileScreens ? "25px" : isTabletScreens ? "35px" : "50px",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movieInfo.image}`}
          alt="movie"
          style={{
            borderBottomLeftRadius: "0.3rem",
            borderTopLeftRadius: "0.3rem",
            width: "300px",
            height: "300px",
          }}
        />
        <video
          src={video}
          autoPlay
          loop
          muted
          onClick={() => navigate("/player")}
          style={{
            width: "600px",
            height: "337px",
            objectFit: "cover",
            borderRadius: "0.3rem",
          }}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ color: "white" }}>Name: {movieInfo.name}</Typography>
        <Box sx={{ color: "white" }}>
          <Typography sx={{ color: "white" }}>
            Genres:
            {movieInfo.genres.map((genre) => {
              return <span>{` ${genre},`}</span>;
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieInfo;
