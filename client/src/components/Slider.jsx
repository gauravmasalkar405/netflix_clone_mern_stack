import React from "react";
import CardSlider from "./CardSlider";
import { Box } from "@mui/material";

const Slider = ({ movies }) => {
  // this will select movies only in that range
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Box sx={{ mt: "25px" }}>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Blockbusters" data={getMoviesFromRange(20, 30)} />
      <CardSlider
        title="Popular On Netflix"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="You may like it" data={getMoviesFromRange(50, 60)} />
    </Box>
  );
};

export default Slider;
