import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "rgb(2 ,11, 36)",
        height: "100vh",
      }}
    >
      <Navbar />
    </Box>
  );
};

export default Home;
