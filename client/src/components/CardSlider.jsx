import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Card from "./Card";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CardSlider = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSliderLeft = () => {
    setSliderPosition(sliderPosition - 200);
  };

  const handleSliderRight = () => {
    setSliderPosition(sliderPosition + 200);
  };

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ ml: "50px", fontSize: "2.1rem", fontWeight: "600" }}
      >
        {title}
      </Typography>
      <Box
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        sx={{
          display: "flex",
          gap: "1rem",
          position: "relative",
          padding: "2rem 0",
        }}
      >
        <Box>
          {showControls && (
            <IconButton
              onClick={handleSliderLeft}
              sx={{
                position: "absolute",
                left: "0",
                zIndex: "99",
                height: "100%",
                top: "0",
                bottom: "0",
                width: "50px",
                transition: "0.3s ease-in-out",
              }}
            >
              <KeyboardArrowLeftIcon
                sx={{ fontSize: "2rem", color: "white" }}
              />
            </IconButton>
          )}
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              gap: "1rem",
              transform: `translateX(${sliderPosition}px)`,
              transition: "0.3s ease-in-out",
              ml: "50px",
            }}
          >
            {data.map((movie, index) => {
              return <Card movieData={movie} index={index} key={movie.id} />;
            })}
          </Box>

          {showControls && (
            <IconButton
              onClick={handleSliderRight}
              sx={{
                position: "absolute",
                right: "0",
                zIndex: "99",
                height: "100%",
                top: "0",
                bottom: "0",
                width: "50px",
                transition: "0.3s ease-in-out",
              }}
            >
              <KeyboardArrowRightIcon
                sx={{ fontSize: "2rem", color: "white" }}
              />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CardSlider;
