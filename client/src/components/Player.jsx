import React from "react";
import { Box, IconButton } from "@mui/material";
import video from "../assets/video.mp4";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* navigate previous page */}

      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          color: "white",
          fontWeight: "800",
          position: "absolute",
          mt: "1rem",
          ml: "1rem",
          zIndex: "1",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* video */}
      <Box sx={{ width: "100%", height: "100%", background: "black" }}>
        <video
          src={video}
          autoPlay
          loop
          controls
          style={{ width: "100%", height: "100%" }}
        ></video>
      </Box>
    </Box>
  );
};

export default Player;
