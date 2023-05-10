import React from "react";
import { Box, Typography } from "@mui/material";

const MovieSuggestions = ({ movie }) => {
  const handleClick = () => {
    console.log(movie);
  };
  return (
    <Box
      onClick={() => handleClick()}
      sx={{
        cursor: "pointer",
        padding: "2px 7px",
        "&:hover": {
          backgroundColor: "rgb(3 10 26 / 63%)",
          borderRadius: "2px",
          border: "1px solid white",
        },
      }}
    >
      <Typography sx={{ color: "white", fontSize: "0.85rem" }}>
        {movie.title}
      </Typography>
    </Box>
  );
};

export default MovieSuggestions;
