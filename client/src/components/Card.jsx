import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addRemove } from "../routes/userRoutes";
import { setMovieInfo } from "../app/store";

const Card = ({ index, movieData, changesLiked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.netflix.user);
  const likedMoviesAndShows = useSelector(
    (state) => state.netflix.likedMoviesAndShows
  );

  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");

  // adding to liked movies
  const addToLikedMovies = async () => {
    try {
      if (user.length !== 0) {
        const response = await axios.post(addRemove, {
          email: user[0].email,
          data: movieData,
        });

        if (response.data.status) {
          setIsLiked(!isLiked);
        }
      }
    } catch (error) {
      console.log(error);
    }

    changesLiked();
  };

  //when movieinfo button is clicked movie data will be stored in store
  const movieInfoButton = () => {
    navigate("/movieinfo");
    dispatch(
      setMovieInfo({
        movieInfo: movieData,
      })
    );
  };

  useEffect(() => {
    if (likedMoviesAndShows) {
      likedMoviesAndShows.forEach((ele) => {
        if (ele.id === movieData.id) {
          setIsLiked(true);
        }
      });
    }
  }, [likedMoviesAndShows]);

  return (
    <Box
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      sx={{
        maxWidth: isMobileScreens
          ? "175px"
          : isTabletScreens
          ? "2100PX"
          : "230px",
        width: isMobileScreens ? "175px" : isTabletScreens ? "210PX" : "230px",
        height: "100%",
        cursor: "pointer",
        position: "relative",
        mb: "1rem",
      }}
    >
      {/* getting movie image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
        style={{
          borderRadius: "0.2rem",
          width: "100%",
          height: "100%",
          zIndex: "10",
        }}
      />
      {isHovered && (
        <Box
          sx={{
            zIndex: "99",
            height: isMobileScreens
              ? "auto"
              : isTabletScreens
              ? "18rem"
              : "max-content",
            width: isMobileScreens
              ? "12rem"
              : isTabletScreens
              ? "16rem"
              : "20rem",
            position: "absolute",
            top: "-18vh",
            left: "0",
            borderRadius: "0.3rem",
            boxShadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px",
            backgroundColor: "#181818",
            transition: "0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "140px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "0.3rem",
                top: "0",
                zIndex: "4",
                position: "absolute",
              }}
            />
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "0.3rem",
                top: "0",
                zIndex: "5",
                position: "absolute",
              }}
            />
          </Box>

          {/* info container */}
          <Box
            sx={{
              padding: "1rem",
              gap: "0.5rem",
            }}
          >
            <Typography
              onClick={() => navigate("/player")}
              sx={{ color: "white" }}
            >
              {movieData.name}
            </Typography>
            <Box>
              <Box
                sx={{
                  mt: "0.6rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <PlayCircleOutlineIcon
                  onClick={() => navigate("/player")}
                  sx={{
                    fontSize: isMobileScreens
                      ? "1.2rem"
                      : isTabletScreens
                      ? "1.6rem"
                      : "2rem",
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    color: "white",
                    "&:hover": {
                      color: "#b8b8b8",
                    },
                  }}
                />

                <FavoriteIcon
                  onClick={() => addToLikedMovies()}
                  sx={{
                    fontSize: isMobileScreens
                      ? "1.2rem"
                      : isTabletScreens
                      ? "1.6rem"
                      : "2rem",
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    color: isLiked ? "#E50914" : "white",
                    "&:hover": {
                      color: isLiked ? "#cc2b33" : "#b8b8b8",
                    },
                  }}
                />

                {isLiked ? (
                  <CheckIcon
                    sx={{
                      fontSize: isMobileScreens ? "1.2rem" : "2rem",
                      cursor: "pointer",
                      transition: "0.3s ease-in-out",
                      color: "white",
                      "&:hover": {
                        color: "#b8b8b8",
                      },
                    }}
                  />
                ) : (
                  <AddCircleOutlineOutlinedIcon
                    sx={{
                      fontSize: isMobileScreens
                        ? "1.2rem"
                        : isTabletScreens
                        ? "1.6rem"
                        : "2rem",
                      cursor: "pointer",
                      transition: "0.3s ease-in-out",
                      color: "white",
                      "&:hover": {
                        color: "#b8b8b8",
                      },
                    }}
                  />
                )}

                <InfoOutlinedIcon
                  onClick={() => movieInfoButton()}
                  sx={{
                    fontSize: isMobileScreens
                      ? "1.2rem"
                      : isTabletScreens
                      ? "1.6rem"
                      : "2rem",
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    color: "white",
                    "&:hover": {
                      color: "#b8b8b8",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Card;
