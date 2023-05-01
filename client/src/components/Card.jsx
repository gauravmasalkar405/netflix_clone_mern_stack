import React, { useState } from "react";
import { Box, Typography, IconButton, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CheckIcon from "@mui/icons-material/Check";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      sx={{
        maxWidth: "230px",
        width: "230px",
        height: "100%",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* getting movie images */}
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
            height: "max-content",
            width: "20rem",
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
          <Box sx={{ padding: "1rem", gap: "0.5rem" }}>
            <Typography onClick={() => navigate("/player")}>
              {movieData.name}
            </Typography>
            <Box>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <IconButton onClick={() => navigate("/player")}>
                  <PlayCircleOutlineIcon
                    sx={{
                      fontSize: "2rem",
                      cursor: "pointer",
                      transition: "0.3s ease-in-out",
                      color: "white",
                      "&:hover": {
                        color: "#b8b8b8",
                      },
                    }}
                  />
                </IconButton>
                <IconButton>
                  <ThumbUpIcon
                    sx={{
                      fontSize: "2rem",
                      cursor: "pointer",
                      transition: "0.3s ease-in-out",
                      color: "white",
                      "&:hover": {
                        color: "#b8b8b8",
                      },
                    }}
                  />
                </IconButton>
                <IconButton>
                  <ThumbDownIcon
                    sx={{
                      fontSize: "2rem",
                      cursor: "pointer",
                      transition: "0.3s ease-in-out",
                      color: "white",
                      "&:hover": {
                        color: "#b8b8b8",
                      },
                    }}
                  />
                </IconButton>
                <IconButton>
                  {isLiked ? (
                    <CheckIcon
                      sx={{
                        fontSize: "2rem",
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
                        fontSize: "2rem",
                        cursor: "pointer",
                        transition: "0.3s ease-in-out",
                        color: "white",
                        "&:hover": {
                          color: "#b8b8b8",
                        },
                      }}
                    />
                  )}
                </IconButton>
              </Box>
              <Box>
                <KeyboardArrowDownOutlinedIcon />
              </Box>
            </Box>
            <Box>
              <List sx={{ gap: "1rem" }}>
                {movieData.genres.map((genre) => {
                  <ListItem key={genre} sx={{ pr: "0.7rem" }}>
                    {genre}
                  </ListItem>;
                })}
              </List>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Card;
