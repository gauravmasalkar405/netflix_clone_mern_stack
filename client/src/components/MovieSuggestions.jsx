import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../app/store";
import { useNavigate } from "react-router-dom";

const MovieSuggestions = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // navigate to search query page where we will show movie details and storing movie to redux store
  const handleClick = () => {
    dispatch(
      setSearchQuery({
        searchQuery: movie,
      })
    );
    navigate("/searchquery");
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
