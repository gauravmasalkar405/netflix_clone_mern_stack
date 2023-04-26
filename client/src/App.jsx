import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import LikedMovies from "./Pages/LikedMovies";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/likedMovies" element={<LikedMovies />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
