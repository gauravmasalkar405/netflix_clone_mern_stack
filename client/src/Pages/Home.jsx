import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, useMediaQuery } from "@mui/material";
import hero from "../assets/home.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import homeTitle from "../assets/homeTitle.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../app/store";
import Slider from "../components/Slider";

const Home = () => {
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
      dispatch(fetchMovies({ genres, type: "all" }));
    }
    console.log(movies);
  }, [genresLoaded]);

  return (
    <Box sx={{ position: "relative", background: "black", color: "white" }}>
      {/* navbar */}

      <Box sx={{ position: "absolute", zIndex: "2" }}>
        <Navbar />
      </Box>

      {/* home title stranger things*/}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            top: isTabletScreens ? "52.5%" : "33%",
            left: isMobileScreens
              ? "1rem"
              : isTabletScreens
              ? "3.5rem"
              : "5rem",
          }}
        >
          {/* title */}

          <Box>
            <img
              src={homeTitle}
              alt="title"
              style={{
                width: isMobileScreens && "19rem",
              }}
            />
          </Box>

          {/* icons */}
          <Box
            sx={{ display: "flex", gap: "2rem", mt: "2rem", color: "black" }}
          >
            <Box
              onClick={() => navigate("/player")}
              sx={{
                height: "2.4rem",
                p: "0rem 0.8rem",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgb(218, 218, 218)",
                transition: "0.2s ease-in-out",
                gap: "0.5rem",
                "&:hover": {
                  background: "rgba(243, 243, 243, 0.541)",
                  cursor: "pointer",
                },
              }}
            >
              <PlayArrowIcon
                sx={{
                  fontSize: isMobileScreens ? "1.4rem" : "2rem",
                }}
              />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: "700" }}>
                PLAY
              </Typography>
            </Box>
            <Box
              sx={{
                height: "2.4rem",
                width: "auto",
                p: "0rem 0.8rem",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgb(218, 218, 218)",
                transition: "0.2s ease-in-out",
                gap: "0.5rem",
                "&:hover": {
                  background: "rgba(243, 243, 243, 0.541)",
                  cursor: "pointer",
                },
              }}
            >
              <InfoOutlinedIcon
                sx={{
                  fontSize: isMobileScreens ? "1.4rem" : "2rem",
                }}
              />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: "700" }}>
                MORE INFO
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: `url(${hero})`,
            height: "100vh",
            backgroundSize: "cover",
            filter: "brightness(60%)",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>

      {/* slider */}
      <Box sx={{ overflow: "hidden", zIndex: "100" }}>
        <Slider movies={movies} />
      </Box>
    </Box>
  );
};

export default Home;
