import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

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

      {isDesktopScreens && (
        <>
          <Box
            sx={{
              mt: isMobileScreens ? "20%" : "8%",
              ml: "auto",
              mr: "auto",
              color: "white",
              backgroundColor: "#1f1f1f",
              width: "90%",
              padding: "1rem 2.5rem",
              borderRadius: "5px",
            }}
          >
            <Typography sx={{ fontSize: "2.2rem", mb: "0.5rem" }}>
              {movieInfo.name}
            </Typography>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            <Box sx={{ mb: "1rem", mt: "1rem" }}>
              <img
                style={{
                  height: "390px",
                  width: "278px",
                }}
                src={`https://image.tmdb.org/t/p/w500${movieInfo.image}`}
                alt="movie"
              />
              <video
                src={video}
                autoPlay
                loop
                onClick={() => navigate("/player")}
                style={{
                  height: "390px",
                  width: "calc(100% - 278px)",
                }}
              />
            </Box>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            <Box sx={{ display: "flex", gap: "1rem", mt: "1rem" }}>
              {movieInfo.genres.map((genre) => {
                return (
                  <Typography
                    key={movieInfo.id}
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.281)",
                      padding: "2px 12px",
                      borderRadius: "6rem",
                      pt: "1px",
                    }}
                  >
                    {genre}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </>
      )}

      {isTabletScreens && (
        <>
          <Box
            sx={{
              mt: isMobileScreens ? "20%" : isTabletScreens ? "12%" : "8%",
              ml: "auto",
              mr: "auto",
              color: "white",
              backgroundColor: "#1f1f1f",
              width: "90%",
              padding: isMobileScreens ? "1rem 1rem" : "1rem 2.5rem",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: isMobileScreens ? "1.2rem" : "2.2rem",
                mb: isMobileScreens ? "0rem" : "-0.3rem",
              }}
            >
              {movieInfo.name}
            </Typography>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            <video
              src={video}
              autoPlay
              loop
              onClick={() => navigate("/player")}
              style={{
                height: isMobileScreens ? "200px" : "390px",
                width: "100%",
              }}
            />

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            <Box sx={{ mt: "1rem", display: "flex", gap: "0.7rem" }}>
              <img
                style={{
                  height: isMobileScreens ? "150px" : "280px",
                  width: isMobileScreens ? "120px" : "190px",
                }}
                src={`https://image.tmdb.org/t/p/w500${movieInfo.image}`}
                alt="movie"
              />

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                {movieInfo.genres.map((genre) => {
                  return (
                    <Typography
                      key={movieInfo.id}
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.281)",
                        padding: "2px 12px",
                        borderRadius: "6rem",
                        pt: "1px",
                      }}
                    >
                      {genre}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MovieInfo;
